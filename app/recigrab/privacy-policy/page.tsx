import styles from "@/app/legal.module.css";
import { supportEmail } from "@/constants/Constants";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <title>Privacy Policy - ReciGrab</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Updated February 2026</p>
        <p>
          Welcome to ReciGrab. We respect your privacy and want to be clear about what data stays on your device, what
          is sent for processing, and how your choices shape advertising and tracking.
        </p>
      </header>
      <main className={styles.main}>
        <h3>1. Information We Collect</h3>
        <h4>Data You Provide</h4>
        <p>
          Recipes you paste or import (including URLs and captions) and any manual edits you make are stored locally in
          the app&apos;s SQLite database on your device.
        </p>
        <h4>AI Conversion Requests</h4>
        <p>
          When you ask ReciGrab to convert the content into a structured recipe, the submitted text is sent over
          HTTPS to api.bysaether.com/parse and processed by the OpenAI API to return the recipe. We do not
          store these submissions on our servers.
        </p>
        <h4>Automatically Collected for Ads</h4>
        <p>
          Google AdMob may collect device and ad information (such as advertising ID, IP/country, app version, and OS)
          to deliver and measure ads.
        </p>
        <h4>Analytics and Crash Reporting</h4>
        <p>
          Expo Insights collects app performance, crash diagnostics, device details, and app version information to help
          us monitor and improve stability.
        </p>

        <h3>2. Third-Party Services</h3>
        <h4><strong>Google AdMob</strong> (ads)</h4>
        <ul>
          <li>Used for personalized or non-personalized advertising.</li>
          <li>May collect device identifiers, region/IP, app version, and performance data for ad delivery.</li>
          <li>On iOS, App Tracking Transparency (ATT) permission is requested when needed.</li>
          <li>Manage your ad consent in <strong>Settings → Ad consent</strong> inside the app.</li>
          <li>
            Learn more about how Google uses ad data:{" "}
            <a href="https://safety.google/privacy/ads-and-data/" target="_blank" rel="noopener noreferrer">
              Google Ads Data Use
            </a>
          </li>
        </ul>
        <h4><strong>Expo Insights</strong></h4>
        <ul>
          <li>Collects analytics and crash diagnostics (including device/app version info) to improve app stability.</li>
        </ul>
        <h4><strong>OpenAI API (gpt-4o-mini via api.bysaether.com/parse)</strong></h4>
        <ul>
          <li>Receives the text you submit for recipe parsing and returns structured recipes.</li>
          <li>No additional personal data is sent beyond the text you provide for parsing.</li>
        </ul>
        <h4><strong>Embedded WebViews</strong> (opening recipe source links)</h4>
        <ul>
          <li>WebViews load external sites you choose; those sites collect data under their own policies.</li>
          <li>We do not control or monitor content on those sites. Review their privacy terms before sharing data.</li>
        </ul>

        <h3>3. How We Use Your Information</h3>
        <ul>
          <li>Convert your submitted captions/titles into structured recipes via api.bysaether.com/parse and OpenAI.</li>
          <li>Display and measure ads (personalized if consented, otherwise non-personalized).</li>
          <li>Monitor performance and resolve crashes through Expo Insights.</li>
        </ul>

        <h3>4. How We Store Your Data</h3>
        <p>
          Recipes and preferences are stored locally in the on-device SQLite database. AI requests are sent over HTTPS to
          api.bysaether.com/parse for processing by OpenAI, and responses are saved only on your device. We do not run
          our own cloud database for ReciGrab.
        </p>

        <h3>5. Your Choices and Controls</h3>
        <ul>
          <li>Manage ad consent and tracking in <strong>Settings → Ad consent</strong> and, on iOS, in system tracking settings.</li>
          <li>Opting out of personalized ads switches to non-personalized ads.</li>
          <li>Clear local recipes and AI submissions in the app&apos;s Handle data controls or by uninstalling the app.</li>
          <li>WebView browsing follows the policies of the sites you open.</li>
        </ul>

        <h3>6. Children&apos;s Privacy</h3>
        <p>
          ReciGrab is intended for users 13+ and is not directed to children. The app includes unrestricted web access
          through WebViews and ads that may contain content for adults.
        </p>

        <h3>7. Changes to This Policy</h3>
        <p>
          We may update this policy to reflect app changes or legal requirements. Updates will be posted in the app, and
          continued use after changes means you accept the revised policy.
        </p>

        <h3>8. Contact Us</h3>
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p>Email: {supportEmail}</p>
        <p>
          <a href={"/recigrab/manage-data"} rel="noopener noreferrer">
            Manage Data / Deletion Instructions
          </a>
        </p>
      </main>
    </div>
  );
}
