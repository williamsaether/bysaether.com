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
      <title>Privacy Policy - CodeGrab</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Updated June 2025</p>
        <p>
          Welcome to CodeGrab. We are committed to protecting your privacy and ensuring transparency about how we handle your data.
          This Privacy Policy explains what information we collect, how we use it, and your rights regarding your data.
        </p>
      </header>
      <main className={styles.main}>
        <h3>1. Information We Collect</h3>
        <p>We do not collect or transmit any user data. All actions performed by the extension occur entirely within
          your browser and are never sent to any server.</p>

        <h4>Data You Provide</h4>
        <p>When you save selectors or generate codes, this data is stored locally in your browser via Chrome storage. We
          do not have access to it.</p>

        <h4>Automatically Collected Information</h4>
        <p>CodeGrab does not collect any information automatically. There is no analytics, no tracking, and no usage
          data sent externally.</p>

        <h3>2. How We Use Your Information</h3>
        <p>Since no data is collected, there is no data to use, share, or analyze. All functionality is local and
          private.</p>

        <h3>3. Your Privacy Choices</h3>
        <p>All data remains within your browser. If you wish to reset stored selectors or preferences, you may clear
          extension data from Chrome's settings at any time.</p>

        <h3>4. How We Store Your Data</h3>
        <p>Data is stored locally in your browser's extension storage. We do not transmit or store anything on remote
          servers.</p>

        <h3>5. Sharing of Information</h3>
        <p>We do not share, sell, or distribute your personal information to anyone. CodeGrab is a fully client-side
          tool with no backend communication.</p>

        <h3>6. Third-party Libraries</h3>
        <p>We use the following open-source libraries, all included locally in the extension:</p>
        <ul>
          <li><a href="https://github.com/antonmedv/finder" target="_blank">medv/finder</a></li>
          <li><a href="https://github.com/lindell/JsBarcode" target="_blank">JsBarcode</a></li>
          <li><a href="https://github.com/davidshimjs/qrcodejs" target="_blank">QRCode.js</a></li>
        </ul>

        <h3>7. Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>Preferred contact: {supportEmail}</p>
        <p>Legal contact: {legalEmail}</p>
      </main>
    </div>
  );
}
