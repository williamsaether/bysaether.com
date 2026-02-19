import styles from "@/app/legal.module.css"
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
      <title>Privacy Policy - CodeCore</title>
      <header className={styles.header}>
        <span id={"intersector"}/>
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Updated January 2025</p>
        <p>
          Welcome to CodeCore. We are committed to protecting your privacy and ensuring transparency about how we handle your data.
          This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
        </p>
      </header>
      <main className={styles.main}>
        <h3>1. Information We Collect</h3>
        <p>We do not collect data directly. However, our app may use third-party services that collect information for analytics, advertising, and error reporting.</p>
        <h4>Data You Provide</h4>
        <p>All data you generate is stored locally on your device.</p>
        <h4>Automatically Collected Information</h4>
        <p>When you use CodeCore, third-party services may automatically collect:</p>
        <ul>
          <li><strong>Device Information:</strong> Device model, operating system, unique identifies.</li>
          <li><strong>Usage Data:</strong> How you interact with the app.</li>
          <li><strong>Advertising Data (if applicable):</strong> Your advertising ID for personalized ads.</li>
        </ul>
        <h4>Third-Party Services We Use</h4>
        <h5><strong>Google AdMob</strong> (for ads)</h5>
        <ul>
          <li>AdMob may collect and use your device information to personalize ads.</li>
          <li>You can manage your ad preferences in the app's "Manage My Data" section.</li>
          <li>More about Google's ad data usage: <a href={'https://safety.google/privacy/ads-and-data/'} target="_blank" rel="noopener noreferrer">Google Ad Polices</a></li>
        </ul>
        <h5><strong>Expo</strong></h5>
        <ul>
          <li>Used for app analytics and crash reporting.</li>
        </ul>
        <h5><strong>Embedded WebView</strong> (Opening QR/Barcode Links)</h5>
        <ul>
          <li>When you open a scanned QR code or barcode using the built-in WebView, the website you visit may collect data according to its own privacy policy.</li>
          <li>We <strong>do not control</strong> how these websites handle your data. Please review their privacy policies before entering personal information.</li>
        </ul>
        <h3>2. How We Use Your Information</h3>
        <p>We use the data collected by third-party services to:</p>
        <ul>
          <li>Display advertisements (if applicable).</li>
          <li>Improve app performance and fix issues.</li>
          <li>Understand app usage patterns.</li>
        </ul>
        <h3>3. Your Privacy Choices</h3>
        <p>You have control over how your data is used:</p>
        <h4>Ad Preferences (GDPR & CCPA)</h4>
        <ul>
          <li>If applicable to your region, you will be asked for <strong>consent before personalized ads</strong> are shown.</li>
          <li>You can update your consent in <strong>Settings → Manage My Data</strong> at any time.</li>
          <li>If you opt out, only non-personalized ads will be displayed.</li>
        </ul>
        <h4>App Tracking (iOS Users)</h4>
        <ul>
          <li>Apple requires us to ask for permission before tracking across apps.</li>
          <li>You can allow or deny tracking in your device's settings under <strong>Privacy → Tracking</strong></li>
        </ul>
        <h4>Data Deletion</h4>
        <p>You can reset your preferences or request data deletion in <strong>Settings → Manage My Data.</strong></p>
        <p>If you wish to delete any data collected by third-party services, follow these links:</p>
        <ul>
          <li>Google Ad Preferences: <a href={'https://adssettings.google.com/'} target="_blank" rel="noopener noreferrer">Google Ad Settings</a></li>
        </ul>
        <h3>4. How We Store Your Data</h3>
        <p>We do not store any data on our servers. However, third-party services we use apply industry-standard security measures to protect your information.</p>
        <h3>5. Sharing of Information</h3>
        <p>We do not share, sell, or distribute your personal information with third parties unless required by law.</p>
        <h3>6. Children's Privacy</h3>
        <p>
          CodeCore provides the users <strong>unrestricted web access</strong> via an embedded WebView, which is not protected by parental controls, nor controlled
          or moderated by us. Additionally, the app displays advertisements through Google AdMob, and the ads may contain content suitable for adults.
        </p>
        <h3>7. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>Preferred contact: {supportEmail}</p>
        <p>Legal contact: {legalEmail}</p>
      </main>
    </div>
  )
}
