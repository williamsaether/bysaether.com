import styles from "@/app/legal.module.css";
import { supportEmail } from "@/constants/Constants";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <title>Privacy Policy - ReciGrab</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Updated January 2025</p>
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
          the app's SQLite database on your device.
        </p>
        <h4>AI Conversion Requests</h4>
        <p>
          When you ask ReciGrab to convert a caption or title into a structured recipe, the submitted text is sent to
          api.bysaether.com/parse over HTTPS to generate the recipe. We do not store these submissions on our servers.
        </p>
        <h4>Automatically Collected for Ads</h4>
        <p>
          Google AdMob may collect device and ad information (such as advertising ID, IP/country, app version, and OS)
          to deliver and measure ads.
        </p>

        <h3>2. Third-Party Services</h3>
        <h4><strong>Google AdMob</strong> (ads)</h4>
        <ul>
          <li>Used for personalized or non-personalized advertising.</li>
          <li>AdMob may collect device identifiers, region/IP, app version, and performance data for ad delivery.</li>
          <li>On iOS, App Tracking Transparency (ATT) permission is requested when needed.</li>
          <li>Manage your ad consent in <strong>Settings → Ad consent</strong> inside the app.</li>
          <li>
            Learn more about how Google uses ad data:{" "}
            <a href="https://safety.google/privacy/ads-and-data/" target="_blank" rel="noopener noreferrer">
              Google Ads Data Use
            </a>
          </li>
        </ul>
        <h4><strong>Expo / React Native services</strong> (if enabled)</h4>
        <ul>
          <li>May be used for analytics or crash reporting depending on your build configuration.</li>
        </ul>
        <h4><strong>Embedded WebViews</strong> (opening recipe source links)</h4>
        <ul>
          <li>WebViews load external sites you choose; those sites collect data under their own policies.</li>
          <li>We do not control or monitor content on those sites. Review their privacy terms before sharing data.</li>
        </ul>

        <h3>3. How We Use Your Information</h3>
        <ul>
          <li>Convert your submitted captions/titles into structured recipes via api.bysaether.com/parse.</li>
          <li>Display and measure ads (personalized if consented, otherwise non-personalized).</li>
          <li>Improve stability and performance if analytics/crash reporting is enabled in your build.</li>
        </ul>

        <h3>4. How We Store Your Data</h3>
        <p>
          Recipes and preferences are stored locally in the on-device SQLite database. AI requests are sent over HTTPS to
          api.bysaether.com/parse for processing, and responses are saved only on your device. We do not run our own
          cloud database for ReciGrab.
        </p>

        <h3>5. Your Choices and Controls</h3>
        <ul>
          <li>Manage ad consent and tracking in the app, and on iOS in system tracking settings.</li>
          <li>Opting out of personalized ads will switch to non-personalized ads.</li>
          <li>Remove AI submissions and recipes by clearing data via in-app data controls or by uninstalling the app.</li>
          <li>WebView browsing follows the policies of the sites you open.</li>
        </ul>

        <h3>6. Children's Privacy</h3>
        <p>
          ReciGrab is intended for users 13+ and is not directed to children.
        </p>

        <h3>7. Changes to This Policy</h3>
        <p>
          We may update this policy to reflect app changes or legal requirements. Updates will be posted in the app, and
          continued use after changes means you accept the revised policy.
        </p>

        <h3>8. Contact Us</h3>
        <p>If you have questions about this Privacy Policy, contact us at:</p>
        <p>Email: {supportEmail}</p>
      </main>
    </div>
  );
}
