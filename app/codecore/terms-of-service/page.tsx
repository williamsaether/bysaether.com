import styles from "@/app/legal.module.css";
import {
  businessAddress,
  businessName,
  orgNumber,
  supportEmail
} from "@/constants/Constants";

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <title>Terms of Service - CodeCore</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Terms of Service</h1>
        <p className={styles.date}>Updated June 2026</p>
        <p>
          These Terms govern your use of CodeCore. By using the app, you agree to these Terms. If you do not agree,
          do not use CodeCore.
        </p>
      </header>

      <main className={styles.main}>
        <h3>1. Eligibility and Acceptance</h3>
        <p>
          You must be at least 13 years old to use CodeCore. If you use CodeCore for an organization, you confirm you
          are authorized to accept these Terms on its behalf.
        </p>

        <h3>2. App Purpose and Service Scope</h3>
        <p>
          CodeCore is a barcode and QR code utility app. It helps you scan, save, organize, generate, and open codes
          with websites selected or configured by you.
        </p>
        <p>
          CodeCore is provided for personal and productivity use. It does not guarantee that scanned codes, generated
          codes, website results, or third-party pages are accurate, safe, available, or suitable for your purpose.
        </p>

        <h3>3. Codes, Websites, and User Responsibility</h3>
        <p>
          You are responsible for the codes, names, lists, website templates, URLs, and other content you create, scan,
          save, import, or open using CodeCore.
        </p>
        <p>
          If you configure CodeCore to open a scanned value on a third-party website, you are responsible for ensuring
          your use of that website complies with applicable law and the website&apos;s own terms and policies.
        </p>
        <p>
          CodeCore may open websites in an in-app browser or external browser. We do not control third-party websites,
          their content, search results, availability, tracking, security, or policies.
        </p>

        <h3>4. Local Data and Backups</h3>
        <p>
          CodeCore is designed as a local-first app. Codes, lists, history, website templates, and preferences are
          generally stored on your device unless you choose to export, import, share, or open data through another app
          or service.
        </p>
        <p>
          You are responsible for keeping your own backups. Deleting app data, uninstalling the app, resetting your
          device, or importing a backup may permanently change or remove local data.
        </p>

        <h3>5. Code Scanning and Generated Codes</h3>
        <p>
          CodeCore may scan and generate common barcode and QR code formats. Some formats may not be supported by all
          devices, scanners, websites, or third-party systems.
        </p>
        <p>
          You should verify important codes before relying on them, especially for payments, tickets, inventory,
          identity, medical, safety, or business-critical use.
        </p>

        <h3>6. Subscriptions and Billing</h3>
        <p>
          CodeCore may offer a paid subscription called CodeCore Pro. Paid subscriptions are billed through Apple using
          your App Store account. Subscriptions renew automatically unless canceled at least 24 hours before the end of
          the current billing period.
        </p>
        <p>
          You can manage or cancel subscriptions in your Apple account settings. Billing, renewals, trials, and refunds
          are handled by Apple under Apple&apos;s terms and policies.
        </p>

        <h3>7. Advertising</h3>
        <p>
          The free version of CodeCore may show ads. Ads may be provided by third-party advertising services such as
          Google AdMob. Your advertising choices may depend on your device settings, consent choices, region, and
          applicable law.
        </p>
        <p>
          CodeCore Pro removes ads from the app while your subscription is active.
        </p>

        <h3>8. Prohibited Use</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use CodeCore in violation of applicable law or third-party terms.</li>
          <li>Use CodeCore to create, store, open, or share malicious, deceptive, abusive, or unlawful content.</li>
          <li>Attempt to reverse engineer, exploit, disrupt, or abuse the app or related services.</li>
          <li>Use automation, scraping, or repeated requests to overload or abuse third-party websites through CodeCore.</li>
          <li>Misrepresent generated codes as official, verified, or authorized when they are not.</li>
        </ul>

        <h3>9. Third-Party Services and Dependencies</h3>
        <p>
          Some app features depend on third-party services and platforms, including Apple, RevenueCat, Google AdMob,
          Expo, device camera APIs, in-app browser technology, and websites opened or configured by you.
        </p>
        <p>
          Features may be unavailable, limited, changed, or discontinued if third-party services are unavailable,
          restricted, updated, or removed.
        </p>

        <h3>10. Intellectual Property</h3>
        <p>
          CodeCore software, branding, design, and related materials are owned by BySaether and protected by
          intellectual property laws. These Terms do not transfer ownership rights to you.
        </p>

        <h3>11. Availability and Changes</h3>
        <p>
          We may change, suspend, or discontinue features at any time. We may also update these Terms. Continued use
          after updates means you accept the revised Terms.
        </p>

        <h3>12. Disclaimer of Warranties</h3>
        <p>
          CodeCore is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
          kind, express or implied, including fitness for a particular purpose, merchantability, non-infringement,
          accuracy, compatibility, and uninterrupted availability.
        </p>

        <h3>13. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, BySaether is not liable for indirect, incidental, special,
          consequential, or punitive damages, or for loss of data, profits, business, subscriptions, access, scanned
          values, saved codes, or website results arising from your use of CodeCore.
        </p>

        <h3>14. Contact</h3>
        <p>If you have questions about these Terms of Service, contact:</p>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>Contact: {supportEmail}</p>
        <p>
          <a href={"/privacy-policy"} rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </main>
    </div>
  );
}