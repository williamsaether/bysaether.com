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
        <p className={styles.date}>Updated February 2026</p>
        <p>
          ReciGrab stores your recipes locally on your device. This page explains how to manage ad consent and remove
          content from the app.
        </p>
      </header>
      <main className={styles.main}>
        <h3>Ad Consent</h3>
        <p>You can update ad consent at any time inside the app:</p>
        <ol>
          <li><strong>Open ReciGrab.</strong></li>
          <li><strong>Go to Settings.</strong></li>
          <li><strong>Tap "Ad consent" to change your preference.</strong></li>
        </ol>
        <p>
          If you opt out of personalized ads, ReciGrab will show non-personalized ads instead.
        </p>

        <h3>Delete Recipes and App Data</h3>
        <p>Recipes are stored only on your device. You can delete them at any time:</p>
        <ul>
          <li>Remove a recipe from your list to delete it locally.</li>
          <li>Use the in-app data controls (Settings → Handle data) to clear local content.</li>
        </ul>
        <p>
          If you uninstall ReciGrab, your device will remove the app and its local data as part of the uninstall
          process. Behavior can vary slightly by device and operating system.
        </p>

        <h3>Data Deletion Requests</h3>
        <p>
          ReciGrab does not store your recipes on our servers. Data is stored locally on your device, so deletion is
          handled by the app or by uninstalling the app.
        </p>

        <h3>Need Help?</h3>
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
