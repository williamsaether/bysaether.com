import styles from "@/app/legal.module.css";
import {
  businessAddress,
  businessName,
  legalEmail,
  orgNumber,
  supportEmail
} from "@/constants/Constants";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <title>Privacy Policy - ReciGrab</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Updated March 2026</p>
        <p>
          This policy explains what stays on your device, what is processed through our backend, and what limited data
          is stored to operate ReciGrab.
        </p>
      </header>
      <main className={styles.main}>
        <h3>1. Overview</h3>
        <p>
          ReciGrab is a local-first recipe app. No account is required to use the app. We do not build a personal
          identity profile about you.
        </p>
        <p>
          Recipe links and content come from links you provide (for example Instagram, TikTok, and websites). You are
          responsible for your use of those platforms and their terms.
        </p>

        <h3>2. Data Stored on Your Device</h3>
        <p>
          Recipes, imported links, extracted text, edits, preferences, and cached images are stored locally in the
          app&apos;s SQLite database and local storage on your device.
        </p>

        <h3>3. Backend Processing</h3>
        <p>
          Some features use our backend at <strong>api.bysaether.com</strong>. When you trigger AI conversion,
          relevant text is sent to <strong>/v2/convert</strong>, where it is processed using OpenAI to return a
          structured recipe. The backend may also fetch source metadata (for example thumbnails) needed to display
          imported links.
        </p>

        <h3>4. Backend Data We Store</h3>
        <p>To operate and improve the service, we store limited device-based backend data, including:</p>
        <ul>
          <li><strong>device_id</strong> (device-based identifier not directly tied to your real identity)</li>
          <li>usage events</li>
          <li>subscription status</li>
          <li>cached metadata needed for link previews and service performance</li>
        </ul>

        <h3>5. Third-Party Services</h3>
        <h4><strong>OpenAI</strong></h4>
        <ul>
          <li>Used through our backend for user-triggered AI conversion requests.</li>
          <li>Receives content needed to generate structured recipe output.</li>
        </ul>
        <h4><strong>RevenueCat</strong></h4>
        <ul>
          <li>Used to validate and manage subscription status.</li>
        </ul>
        <h4><strong>Google AdMob</strong></h4>
        <ul>
          <li>Used to serve and measure ads for free users.</li>
          <li>May collect advertising and device data according to Google&apos;s policies.</li>
        </ul>
        <h4><strong>Expo Insights</strong></h4>
        <ul>
          <li>Used for app performance and stability diagnostics.</li>
        </ul>
        <h4><strong>Sentry</strong></h4>
        <ul>
          <li>Used for error monitoring, crash diagnostics, and app analytics.</li>
          <li>May receive technical device and app event data needed to diagnose issues.</li>
        </ul>

        <h3>6. Social Platform Content</h3>
        <p>
          ReciGrab does not claim ownership of content from Instagram, TikTok, or other source platforms. We do not
          permanently store platform content on the backend as your personal recipe library. Imported recipe data is
          saved primarily on your device.
        </p>

        <h3>7. Your Choices and Controls</h3>
        <ul>
          <li>Manage ad consent in <strong>Settings → Ad consent</strong> and in iOS tracking settings when available.</li>
          <li>Opting out of personalized ads switches to non-personalized ads.</li>
          <li>Delete local recipes and cached data in app settings or by uninstalling the app.</li>
          <li>See <a href={"/recigrab/manage-data"} rel="noopener noreferrer">Manage Your Data</a> for deletion steps.</li>
        </ul>

        <h3>8. Children&apos;s Privacy</h3>
        <p>
          ReciGrab is intended for users 13+ and is not directed to children.
        </p>

        <h3>9. Changes to This Policy</h3>
        <p>
          We may update this policy to reflect app changes, provider changes, or legal requirements. Continued use
          after updates means you accept the revised policy.
        </p>

        <h3>10. Contact Us</h3>
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>Preferred contact: {supportEmail}</p>
        <p>Legal contact: {legalEmail}</p>
        <p>
          <a href={"/recigrab/manage-data"} rel="noopener noreferrer">
            Manage Data / Deletion Instructions
          </a>
        </p>
        <p>
          <a href={"/recigrab/terms-of-service"} rel="noopener noreferrer">
            Terms of Service
          </a>
        </p>
      </main>
    </div>
  );
}
