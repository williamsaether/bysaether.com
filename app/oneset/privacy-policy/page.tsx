import styles from "@/app/legal.module.css";
import {
  businessAddress,
  businessName,
  orgNumber,
  supportEmail
} from "@/constants/Constants";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <title>Privacy Policy - OneSet</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Updated June 2026</p>
        <p>
          This Privacy Policy explains what data OneSet collects, how it is collected, why it is used, and the choices
          and rights available to you.
        </p>
      </header>
      <main className={styles.main}>
        <h3>1. Who We Are</h3>
        <p>OneSet is provided by {businessName}, Org.nr: {orgNumber}.</p>
        <p>Business address: {businessAddress}</p>
        <p>Privacy contact: {supportEmail}</p>
        <p>
          We have not appointed a dedicated Data Protection Officer. Privacy requests should be sent to the privacy
          contact above.
        </p>

        <h3>2. What Data We Collect</h3>
        <p>OneSet does not require a user account. Depending on how you use the app, we may collect or receive:</p>
        <ul>
          <li>App Store purchase identifiers and subscription status.</li>
          <li>RevenueCat customer, entitlement, transaction, and receipt identifiers.</li>
          <li>App usage data, such as feature interactions, subscription screen events, and reliability signals.</li>
          <li>Diagnostics and crash data, such as device model, operating system version, app version, logs, and error reports.</li>
          <li>Support emails and any information you choose to include when contacting us.</li>
          <li>Website analytics data for visits to OneSet pages on bysaether.com, if analytics are enabled.</li>
        </ul>

        <h3>3. How We Collect Data</h3>
        <ul>
          <li>Directly from the OneSet app when you use app features or send diagnostics.</li>
          <li>From Apple when you purchase, renew, cancel, refund, or manage an App Store subscription.</li>
          <li>From RevenueCat when subscription entitlements are checked, synced, restored, or updated.</li>
          <li>From support emails when you contact us for help.</li>
          <li>From website analytics or cookies on bysaether.com, if used for the relevant page.</li>
        </ul>

        <h3>4. Why We Process Data</h3>
        <p>We use data only for purposes connected to operating, supporting, and improving OneSet:</p>
        <ul>
          <li>Provide the app and subscription features.</li>
          <li>Validate, restore, and sync subscription entitlements.</li>
          <li>Process support requests and respond to legal or privacy inquiries.</li>
          <li>Prevent abuse, fraud, and misuse of the app or subscription system.</li>
          <li>Improve reliability, diagnose crashes, and understand which features need maintenance.</li>
          <li>Comply with legal, tax, accounting, consumer protection, and platform obligations.</li>
        </ul>

        <h3>5. Legal Basis for EU/EEA and UK Users</h3>
        <ul>
          <li><strong>Contract:</strong> to provide OneSet, subscription access, entitlement syncing, and support.</li>
          <li><strong>Consent:</strong> for optional analytics, marketing, or tracking where consent is required.</li>
          <li><strong>Legitimate interests:</strong> to keep the app reliable, secure, and resistant to abuse.</li>
          <li><strong>Legal obligation:</strong> to comply with applicable accounting, tax, legal, and platform requirements.</li>
        </ul>

        <h3>6. Who We Share Data With</h3>
        <p>
          We do not sell your personal data. We share data only with service providers that help operate OneSet and
          that are expected to provide equivalent protection for user data.
        </p>
        <ul>
          <li><strong>Apple:</strong> App Store billing, subscriptions, refunds, and purchase management.</li>
          <li><strong>RevenueCat:</strong> subscription entitlement management and receipt validation.</li>
          <li><strong>Vercel:</strong> website hosting and traffic analytics for bysaether.com pages.</li>
          <li><strong>Email provider:</strong> receiving, storing, and replying to support messages.</li>
          <li><strong>Analytics and crash reporting providers:</strong> app usage, diagnostics, and stability monitoring if enabled.</li>
          <li><strong>Legal or public authorities:</strong> where required by law or necessary to protect legal rights.</li>
        </ul>

        <h3>7. International Transfers</h3>
        <p>
          Some providers may process data outside Norway, the EEA, or the UK, including in the United States. Where
          required, transfers rely on adequacy decisions, standard contractual clauses, provider data processing terms,
          or another lawful transfer mechanism.
        </p>

        <h3>8. Retention</h3>
        <ul>
          <li>Subscription and purchase records are kept for as long as needed to provide access, handle disputes, and meet legal obligations.</li>
          <li>Diagnostics, crash, and app usage data are kept only as long as reasonably needed for reliability and security analysis.</li>
          <li>Support emails are kept as long as needed to resolve the request and maintain appropriate support history.</li>
          <li>Legal, tax, and accounting records may be kept for the period required by applicable law.</li>
        </ul>

        <h3>9. Your Rights</h3>
        <p>
          Depending on where you live, you may have rights to access, correct, delete, restrict, object to processing
          of, or receive a portable copy of your personal data. You may also withdraw consent where processing is based
          on consent.
        </p>
        <p>
          EU/EEA and UK users may complain to their local supervisory authority. In Norway, the supervisory authority is
          Datatilsynet.
        </p>

        <h3>10. How to Exercise Your Rights</h3>
        <p>
          To exercise privacy rights, contact us at {supportEmail}. Include enough information for us to identify the
          relevant app data, such as your support email address or the App Store subscription context. For App Store
          billing, refunds, and cancellation, Apple may need to handle the request directly through your Apple account.
        </p>

        <h3>11. Children</h3>
        <p>
          OneSet is not directed to children under 13. If you believe a child has provided personal data to us, contact
          us so we can review and delete it where appropriate.
        </p>

        <h3>12. Changes to This Policy</h3>
        <p>
          We may update this policy when OneSet, our providers, or legal requirements change. Material changes will be
          communicated through the app, the website, or another appropriate channel.
        </p>

        <h3>13. Contact</h3>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>Contact: {supportEmail}</p>
        <p>
          <a href={"/oneset/terms-of-service"} rel="noopener noreferrer">
            Terms of Service
          </a>
        </p>
      </main>
    </div>
  );
}
