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
        <p className={styles.date}>Updated February 2026</p>
        <p>
          These Terms of Service govern your use of ReciGrab. By using the app, you agree to these terms. If you do
          not agree, do not use ReciGrab.
        </p>
      </header>

      <main className={styles.main}>
        <h3>1. Eligibility and Acceptance</h3>
        <p>
          You must be at least 13 years old to use ReciGrab. If you use the app on behalf of an organization, you
          confirm that you have authority to bind that organization to these terms.
        </p>

        <h3>2. App Purpose</h3>
        <p>
          ReciGrab helps you save recipe content, organize recipes, and convert content into structured recipe formats.
          ReciGrab is provided for personal and informational use.
        </p>

        <h3>3. User Content and Responsibility</h3>
        <p>
          You are responsible for the links, text, and other content you add to ReciGrab. You confirm that you have
          rights to use submitted content and that your use does not violate any law or third-party rights.
        </p>
        <p>
          You are responsible for verifying recipe instructions, allergens, food safety steps, and nutrition
          information before use.
        </p>

        <h3>4. AI-Generated Output</h3>
        <p>
          ReciGrab may use AI to transform source text into ingredient lists and cooking steps. AI-generated output may
          contain errors or omissions. You must review and validate all output before relying on it.
        </p>

        <h3>5. Prohibited Use</h3>
        <p>You agree not to:</p>
        <ul>
          <li>Use ReciGrab in violation of applicable law or third-party terms.</li>
          <li>Attempt to reverse engineer, exploit, or disrupt the app or related services.</li>
          <li>Upload malicious code, spam, or abusive content.</li>
          <li>Use automated methods to scrape, overload, or abuse ReciGrab infrastructure.</li>
        </ul>

        <h3>6. Third-Party Services</h3>
        <p>
          ReciGrab may include content or functionality from third-party services (such as social platforms, analytics,
          ads, and AI providers). Your use of those services may be subject to separate third-party terms and policies.
        </p>

        <h3>7. Intellectual Property</h3>
        <p>
          ReciGrab and its original software, branding, and design are owned by BySaether and protected by applicable
          intellectual property laws. These terms do not transfer ownership rights to you.
        </p>

        <h3>8. Availability and Changes</h3>
        <p>
          ReciGrab may change, suspend, or discontinue features at any time. We may update these terms from time to
          time. Continued use after updates means you accept the revised terms.
        </p>

        <h3>9. Disclaimer of Warranties</h3>
        <p>
          ReciGrab is provided on an &quot;as is&quot; and &quot;as available&quot; basis without warranties of any
          kind, express or implied, including fitness for a particular purpose, merchantability, non-infringement, and
          uninterrupted availability.
        </p>

        <h3>10. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, BySaether is not liable for indirect, incidental, special,
          consequential, or punitive damages, or for loss of data, profits, or business arising from your use of
          ReciGrab.
        </p>

        <h3>11. Contact</h3>
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
