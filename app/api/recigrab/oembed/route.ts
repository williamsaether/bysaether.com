import { NextRequest, NextResponse } from "next/server";

type SupportedDomain = "instagram" | "facebook" | "threads";

const GRAPH_BASE_URL = "https://graph.facebook.com";
const DEFAULT_GRAPH_VERSION = process.env.META_GRAPH_VERSION || "v23.0";

const DOMAIN_MAP: Record<SupportedDomain, string> = {
  instagram: "instagram.com",
  facebook: "facebook.com",
  threads: "threads.net",
};

const ENDPOINTS_BY_DOMAIN: Record<SupportedDomain, string[]> = {
  instagram: ["instagram_oembed"],
  facebook: ["oembed_post", "oembed_video", "oembed_page"],
  threads: ["threads_oembed"],
};

function getAccessToken(): string {
  const explicitToken = process.env.META_OEMBED_ACCESS_TOKEN;
  if (explicitToken && explicitToken.trim().length > 0) return explicitToken.trim();

  const appId = process.env.META_APP_ID;
  const appSecret = process.env.META_APP_SECRET;
  if (appId && appSecret) return `${appId}|${appSecret}`;

  return "";
}

function detectSupportedDomain(value: string): SupportedDomain | null {
  const hostname = value.toLowerCase();

  const keys = Object.keys(DOMAIN_MAP) as SupportedDomain[];
  for (const key of keys) {
    const baseDomain = DOMAIN_MAP[key];
    if (hostname === baseDomain || hostname.endsWith(`.${baseDomain}`)) return key;
  }

  return null;
}

function normalizeMetaError(payload: unknown): string {
  if (!payload || typeof payload !== "object" || !("error" in payload)) {
    return "Meta oEmbed request failed.";
  }

  const metaError = payload.error as { message?: string };
  return metaError?.message || "Meta oEmbed request failed.";
}

function isMetaOEmbedReadApprovalError(payload: unknown): boolean {
  if (!payload || typeof payload !== "object" || !("error" in payload)) return false;
  const metaError = payload.error as { code?: number; message?: string };
  if (metaError?.code === 10) return true;
  if (!metaError?.message) return false;
  return metaError.message.toLowerCase().includes("meta oembed read");
}

export async function GET(req: NextRequest) {
  const rawUrl = req.nextUrl.searchParams.get("url");
  if (!rawUrl) {
    return NextResponse.json(
      { success: false, error: "Missing required `url` query parameter." },
      { status: 400 }
    );
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(rawUrl);
  } catch {
    return NextResponse.json({ success: false, error: "Invalid URL format." }, { status: 400 });
  }

  if (!["http:", "https:"].includes(parsedUrl.protocol)) {
    return NextResponse.json({ success: false, error: "Only HTTP(S) URLs are supported." }, { status: 400 });
  }

  const domain = detectSupportedDomain(parsedUrl.hostname);
  if (!domain) {
    return NextResponse.json(
      { success: false, error: "Only instagram.com, facebook.com, and threads.net URLs are allowed." },
      { status: 400 }
    );
  }

  const accessToken = getAccessToken();
  if (!accessToken) {
    return NextResponse.json(
      {
        success: false,
        error: "Missing Meta credentials. Set META_OEMBED_ACCESS_TOKEN or META_APP_ID + META_APP_SECRET.",
      },
      { status: 500 }
    );
  }

  const endpoints = ENDPOINTS_BY_DOMAIN[domain];
  const errors: string[] = [];
  let approvalBlocked = false;

  for (const endpoint of endpoints) {
    const metaUrl = new URL(`${GRAPH_BASE_URL}/${DEFAULT_GRAPH_VERSION}/${endpoint}`);
    metaUrl.searchParams.set("url", parsedUrl.toString());
    metaUrl.searchParams.set("access_token", accessToken);
    metaUrl.searchParams.set("omitscript", "false");
    metaUrl.searchParams.set("maxwidth", "550");

    try {
      const response = await fetch(metaUrl, {
        method: "GET",
        headers: { Accept: "application/json" },
        cache: "no-store",
      });

      const payload: unknown = await response.json().catch(() => null);

      if (response.ok && payload && typeof payload === "object" && "html" in payload) {
        const oembed = payload as Record<string, unknown>;

        return NextResponse.json({
          success: true,
          data: {
            endpoint,
            providerName: String(oembed.provider_name || ""),
            authorName: String(oembed.author_name || ""),
            title: String(oembed.title || ""),
            type: String(oembed.type || ""),
            width: typeof oembed.width === "number" ? oembed.width : null,
            height: typeof oembed.height === "number" ? oembed.height : null,
            html: String(oembed.html || ""),
            url: parsedUrl.toString(),
          },
        });
      }

      errors.push(normalizeMetaError(payload));
      if (isMetaOEmbedReadApprovalError(payload)) approvalBlocked = true;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Unknown error";
      errors.push(message);
    }
  }

  if (approvalBlocked) {
    return NextResponse.json(
      {
        success: false,
        error:
          "Meta app is not approved for Meta oEmbed Read yet. Submit/complete App Review for this feature, then retry.",
        details: errors,
      },
      { status: 403 }
    );
  }

  return NextResponse.json(
    {
      success: false,
      error: "Meta oEmbed lookup failed.",
      details: errors.length > 0 ? errors : ["No oEmbed endpoint accepted this URL."],
    },
    { status: 502 }
  );
}
