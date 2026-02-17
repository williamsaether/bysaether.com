"use client";

import { FormEvent, useMemo, useState } from "react";
import styles from "./oembed-demo.module.css";

const SAMPLE_URL = "https://www.instagram.com/reel/DUl7wExk_Y5/";

type OEmbedSuccess = {
  success: true;
  data: {
    endpoint: string;
    providerName: string;
    authorName: string;
    title: string;
    type: string;
    width: number | null;
    height: number | null;
    html: string;
    url: string;
  };
};

type OEmbedError = {
  success: false;
  error?: string;
  details?: string[];
};

type OEmbedResponse = OEmbedSuccess | OEmbedError;

const MOCK_PREVIEW = {
  postUrl: "https://www.instagram.com/reel/DUl7wExk_Y5/",
  imageUrl: "/630111750_17937964053151947_1773085047881503301_n.jpg",
  caption:
    `Brown Butter Chocolate Chip Banana Bread 🍌

Comment “Recipe” and I’ll send you the full recipe card for free!!

For all of you asking about the app, search “Osta Recipes” on the app or Google play store ‼️🫶

I have tested over 100 banana bread recipes and after countless adjustments, these officially have claimed the #1 spot 👑

Ingredients
-3 ripe bananas (brown spots = flavor)
-9 tbsp unsalted butter (browns down to ~1/2 cup)
-1 large egg, room temp
-3/4 cup brown sugar
-1/4 cup white sugar
-1 1/2 cups all-purpose flour
-1 tsp baking soda
-1/2 tsp baking powder
-1/2 tsp salt
-1 tsp cinnamon
-1 tsp vanilla extract or paste
-1 to 1 1/2 cups semi-sweet chocolate chips (measure with your heart)

Instructions:
1. Add butter to a saucepan over medium heat. Stir often. It'll melt, foam, sizzle, then turn golden with a nutty smell. Once browned (do not burn), pour into a bowl and place in the freezer for 5 mins. You want it warm, not hot.
2. In a large bowl, mash bananas until mostly smooth. Add 1/2 cup of the browned butter, brown sugar, white sugar, egg, and vanilla. Whisk for 1 to 2 mins until glossy.
3. Add flour, baking soda, baking powder, salt, and cinnamon. You can mix these in a separate bowl first, or be lazy like me and add them straight in. Just mix very thoroughly so everything is evenly distributed.
4. Preheat to 350F / 175C. Once no dry flour remains, fold in about 1 cup of chocolate chips. Save the rest for topping.
5. Line or grease a loaf pan and pour in the batter. Sprinkle remaining chocolate chips on top. Bake for 60 mins, loosely covering with foil halfway through to prevent over-browning.
6. Insert a toothpick into the center. It should come out with a few moist crumbs, not wet batter. If needed, bake an extra 5 to 10 mins.
7. Let cool slightly, then slice. Enjoy 🤠`,
};

function buildSafeSrcDoc(embedHtml: string): string {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body { margin: 0; padding: 16px; background: #ffffff; display: flex; justify-content: center; }
    iframe, blockquote { max-width: 100%; }
  </style>
</head>
<body>${embedHtml}</body>
</html>`;
}

export default function ReciGrabOEmbedDemoPage() {
  const [url, setUrl] = useState<string>(SAMPLE_URL);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [details, setDetails] = useState<string[]>([]);
  const [oembedData, setOembedData] = useState<OEmbedSuccess["data"] | null>(null);
  const [showMockPreview, setShowMockPreview] = useState<boolean>(false);

  const srcDoc = useMemo(() => {
    if (!oembedData?.html) return "";
    return buildSafeSrcDoc(oembedData.html);
  }, [oembedData]);
  const mockTitle = useMemo(() => MOCK_PREVIEW.caption.split("\n")[0], []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setDetails([]);
    setOembedData(null);

    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      setError("Enter a public Instagram, Facebook, or Threads URL.");
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/recigrab/oembed?url=${encodeURIComponent(trimmedUrl)}`, {
        method: "GET",
        cache: "no-store",
      });

      const payload = (await response.json()) as OEmbedResponse;

      if (response.ok && payload.success) {
        setOembedData(payload.data);
        setShowMockPreview(false);
        return;
      }

      const fallbackError = "Could not load oEmbed data from Meta Graph API.";
      if (!payload.success) {
        setError(payload.error || fallbackError);
        setDetails(payload.details || []);
        setShowMockPreview(true);
      } else {
        setError(fallbackError);
        setShowMockPreview(true);
      }
    } catch {
      setError("Network error while loading oEmbed data.");
      setShowMockPreview(true);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className={styles.page}>
      <title>ReciGrab Meta oEmbed Review Demo</title>

      <header className={styles.header}>
        <span id="intersector" />
        <h1>Meta oEmbed Review Demo for ReciGrab</h1>
        <p>
          This page exists for Meta App Review to verify <strong>oEmbed Read</strong>. No user login is required to
          access or test this page.
        </p>
      </header>

      <main className={styles.main}>
        <section className={styles.card}>
          <h2>Test Instructions for Meta Reviewer</h2>
          <ol>
            <li>Open this page directly.</li>
            <li>Keep the sample URL below or paste another public Instagram/Facebook reel (or post) URL.</li>
            <li>Click &quot;Load Meta oEmbed&quot;.</li>
            <li>Confirm the embed preview renders and metadata appears.</li>
          </ol>
          <p>
            <strong>Exact sample URL:</strong> <code>{SAMPLE_URL}</code>
          </p>
          <p>
            <strong>No login required:</strong> This page is public and does not require any account sign-in.
          </p>
        </section>

        <section className={styles.card}>
          <h2>oEmbed Test Input</h2>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="oembed-url">Public Meta URL</label>
            <input
              id="oembed-url"
              type="url"
              value={url}
              onChange={(event) => setUrl(event.target.value)}
              placeholder="https://www.instagram.com/p/..."
              required
            />
            <div className={styles.actions}>
              <button type="submit" disabled={isLoading}>
                {isLoading ? "Loading..." : "Load Meta oEmbed"}
              </button>
                <button
                  type="button"
                  onClick={() => setUrl(SAMPLE_URL)}
                  disabled={isLoading}
                  className={styles.secondary}
                >
                  Use Sample URL
                </button>
            </div>
          </form>
        </section>

        {oembedData ? (
          <section className={styles.card}>
            <h2>oEmbed Response</h2>
            <p>
              <strong>Requested URL:</strong> <code>{oembedData.url}</code>
            </p>
            <p>
              <strong>Provider:</strong> {oembedData.providerName || "N/A"}
            </p>
            <p>
              <strong>Author:</strong> {oembedData.authorName || "N/A"}
            </p>
            <p>
              <strong>Endpoint used:</strong> <code>{oembedData.endpoint}</code>
            </p>
            <div className={styles.embedContainer}>
              <iframe
                title="Meta oEmbed preview"
                srcDoc={srcDoc}
                loading="lazy"
                sandbox="allow-scripts allow-popups allow-popups-to-escape-sandbox"
                referrerPolicy="no-referrer"
              />
            </div>
          </section>
        ) : null}

        {showMockPreview ? (
          <section className={styles.card}>
            <h2>Preview</h2>

            <div className={styles.mockPhone}>
              <div className={styles.mockBody}>
                <a href={MOCK_PREVIEW.postUrl} target="_blank" rel="noopener noreferrer">
                  <img className={styles.mockImage} width={200} height={400} src={MOCK_PREVIEW.imageUrl} alt={mockTitle} />
                </a>
                <h3 className={styles.mockTitle}>{mockTitle}</h3>
                <pre className={styles.mockCaption}>{MOCK_PREVIEW.caption}</pre>
                <p className={styles.mockFailureNote}>
                  Live Meta oEmbed failed: {error}
                  {details.length > 0 ? ` (${details[0]})` : ""}
                </p>
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </div>
  );
}
