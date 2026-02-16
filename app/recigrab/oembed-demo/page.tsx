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

  const srcDoc = useMemo(() => {
    if (!oembedData?.html) return "";
    return buildSafeSrcDoc(oembedData.html);
  }, [oembedData]);

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
        return;
      }

      const fallbackError = "Could not load oEmbed data from Meta Graph API.";
      if (!payload.success) {
        setError(payload.error || fallbackError);
        setDetails(payload.details || []);
      } else {
        setError(fallbackError);
      }
    } catch {
      setError("Network error while loading oEmbed data.");
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

        {error ? (
          <section className={styles.errorCard} role="alert">
            <h2>Unable to load oEmbed</h2>
            <p>{error}</p>
            {details.length > 0 ? (
              <ul>
                {details.map((detail, index) => (
                  <li key={`${detail}-${index}`}>{detail}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ) : null}

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
      </main>
    </div>
  );
}
