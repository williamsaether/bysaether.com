import styles from "@/app/legal.module.css";
import {
  businessAddress,
  businessName,
  legalEmail,
  orgNumber,
  supportEmail
} from "@/constants/Constants";

export default function ManageData() {
  return (
    <div className={styles.page}>
      <title>Manage Data - ReciGrab</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Manage Your Data</h1>
        <p className={styles.date}>Updated March 2026</p>
        <p>
          This page explains how to manage data stored on your device and how to request deletion of limited
          backend data used to operate ReciGrab.
        </p>
      </header>
      <main className={styles.main}>
        <h3>1. Local Data on Your Device</h3>
        <p>ReciGrab stores recipes locally on your device, including imported content, edits, and cached images.</p>
        <p>You can remove local data at any time:</p>
        <ul>
          <li>Delete individual recipes from your recipe list.</li>
          <li>Use in-app controls in <strong>Settings → Handle data</strong> to clear local app data.</li>
          <li>Uninstall ReciGrab to remove local app data from your device.</li>
        </ul>

        <h3>2. Ad Consent</h3>
        <p>You can update ad consent at any time:</p>
        <ol>
          <li><strong>Open ReciGrab.</strong></li>
          <li><strong>Go to Settings.</strong></li>
          <li><strong>Tap "Ad consent" to change your preference.</strong></li>
        </ol>
        <p>If you opt out of personalized ads, non-personalized ads are shown instead.</p>

        <h3>3. Backend Data (Device-Based)</h3>
        <p>
          ReciGrab uses limited backend data to run the service. This may include device_id, usage events, subscription
          status, cached metadata used for link previews and service reliability, and technical diagnostics/analytics
          events through tools such as Sentry.
        </p>
        <p>
          Your full recipe library is not stored as a permanent backend account library. ReciGrab does not require user
          accounts.
        </p>

        <h3>4. Request Backend Data Deletion</h3>
        <p>
          To request deletion of backend data associated with your device, email us at <strong>{supportEmail}</strong>{" "}
          or <strong>{legalEmail}</strong> with the subject <strong>ReciGrab Data Deletion Request</strong>.
        </p>
        <p>
          Include any app/device identifiers you can access in the app to help us locate records. We may request
          limited confirmation details to prevent unauthorized deletion requests.
        </p>

        <h3>5. Need Help?</h3>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>Preferred contact: {supportEmail}</p>
        <p>Legal contact: {legalEmail}</p>
        <p>
          <a href={"/recigrab/privacy-policy"} rel="noopener noreferrer">
            Privacy Policy
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
