import styles from "@/app/legal.module.css";
import {
  businessAddress,
  businessName,
  legalEmail,
  orgNumber,
  supportEmail
} from "@/constants/Constants";

export default function TermsOfService() {
  return (
    <div className={styles.page}>
      <title>Terms of Service - ReciGrab</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Terms of Service</h1>
        <p className={styles.date}>Updated March 2026</p>
        <p>
          These Terms govern your use of ReciGrab. By using the app, you agree to these Terms. If you do not agree,
          do not use ReciGrab.
        </p>
      </header>

      <main className={styles.main}>
        <h3>1. Eligibility and Acceptance</h3>
        <p>
          You must be at least 13 years old to use ReciGrab. If you use ReciGrab for an organization, you confirm you
          are authorized to accept these Terms on its behalf.
        </p>

        <h3>2. App Purpose and Service Scope</h3>
        <p>
          ReciGrab is a local-first app that helps you import recipe content from links, organize recipes, and convert
          source text into structured formats. It is provided for personal, informational use.
        </p>

        <h3>3. User Content and Responsibility</h3>
        <p>
          You are responsible for links, text, and other content you submit. You confirm your use of submitted content
          complies with law and third-party rights.
        </p>
        <p>
          If you import content from Instagram, TikTok, or other platforms, you are responsible for following those
          platforms&apos; terms and policies.
        </p>

        <h3>4. AI-Generated Output</h3>
        <p>
          ReciGrab may use AI to transform source text into ingredients and instructions when you trigger conversion.
          AI output can be incomplete or incorrect. You must review all output before use, including allergens, food
          safety steps, and nutrition details.
        </p>

        <h3>5. Subscriptions and Billing</h3>
        <p>
          Paid subscriptions are billed through Apple using your App Store account. Subscriptions renew automatically
          unless canceled at least 24 hours before the end of the current billing period.
        </p>
        <p>
          You can manage or cancel subscriptions in your Apple account settings. Billing, renewals, and refunds are
          handled by Apple under Apple&apos;s terms and policies.
        </p>

        <h3>6. Prohibited Use</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use ReciGrab in violation of applicable law or third-party terms.</li>
          <li>Attempt to reverse engineer, exploit, or disrupt the app or related services.</li>
          <li>Upload malicious code, spam, or abusive content.</li>
          <li>Use bots, automation, or scraping methods to overload, extract from, or abuse ReciGrab or its backend.</li>
        </ul>

        <h3>7. Third-Party Services and Dependencies</h3>
        <p>
          Some app features depend on backend and third-party services, including our backend,
          OpenAI, RevenueCat, AdMob, Sentry, and platform metadata services. Features may be unavailable if these
          services are unavailable, restricted, or changed.
        </p>
        <p>
          Your use of third-party services and source platforms may be subject to their own terms and privacy policies.
        </p>

        <h3>8. Intellectual Property</h3>
        <p>
          ReciGrab software, branding, and design are owned by BySaether and protected by intellectual property laws.
          These Terms do not transfer ownership rights to you.
        </p>

        <h3>9. Availability and Changes</h3>
        <p>
          We may change, suspend, or discontinue features at any time. We may also update these Terms. Continued use
          after updates means you accept the revised Terms.
        </p>

        <h3>10. Disclaimer of Warranties</h3>
        <p>
          ReciGrab is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
          kind, express or implied, including fitness for a particular purpose, merchantability, non-infringement, and
          uninterrupted availability.
        </p>

        <h3>11. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, BySaether is not liable for indirect, incidental, special,
          consequential, or punitive damages, or for loss of data, profits, or business arising from your use of
          ReciGrab.
        </p>

        <h3>12. Contact</h3>
        <p>If you have questions about these Terms of Service, contact:</p>
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
      </main>
    </div>
  );
}
