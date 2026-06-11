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
      <title>Terms of Service - OneSet</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Terms of Service</h1>
        <p className={styles.date}>Updated June 2026</p>
        <p>
          These Terms govern your use of OneSet. By using the app or starting a subscription, you agree to these Terms.
        </p>
      </header>
      <main className={styles.main}>
        <h3>1. Who the Contract Is With</h3>
        <p>These Terms are between you and {businessName}, Org.nr: {orgNumber}.</p>
        <p>Business address: {businessAddress}</p>
        <p>Contact: {supportEmail}</p>

        <h3>2. What OneSet Is</h3>
        <p>
          OneSet is a fitness and habit support app that helps users organize and track training routines, workouts,
          sets, and related progress. Subscription features unlock the paid functionality described in the app before
          purchase.
        </p>

        <h3>3. Eligibility and Use Rules</h3>
        <p>
          You must be at least 13 years old to use OneSet. You agree to use OneSet lawfully and not to abuse, disrupt,
          reverse engineer, copy, resell, or interfere with the app, subscription system, or related services except
          where such restrictions are not permitted by law.
        </p>

        <h3>4. Subscriptions</h3>
        <p>
          OneSet subscriptions are sold through Apple App Store in-app purchase. The subscription period, price,
          included features, and any trial or promotional offer are shown in the app and Apple purchase sheet before
          you confirm payment.
        </p>
        <p>
          Subscriptions renew automatically unless canceled at least 24 hours before the end of the current billing
          period. Payment is charged to your Apple account at confirmation of purchase and for renewals according to
          Apple&apos;s subscription terms.
        </p>
        <p>
          You can manage, cancel, or restore subscriptions through your Apple account settings. Access to paid features
          continues until the end of the paid period unless Apple&apos;s terms or applicable law provide otherwise.
        </p>

        <h3>5. Trials and Promotional Offers</h3>
        <p>
          If OneSet offers a free trial, introductory price, or promotion, the specific terms are shown before purchase.
          Unless canceled before the trial or promotional period ends, the subscription converts to a paid auto-renewing
          subscription at the shown price.
        </p>

        <h3>6. Refunds</h3>
        <p>
          Apple handles App Store billing and refund requests. To request a refund, use Apple&apos;s refund process or
          your Apple account purchase history. We cannot guarantee that Apple will approve a refund.
        </p>

        <h3>7. License and Intellectual Property</h3>
        <p>
          OneSet software, design, branding, and related content are owned by {businessName} or its licensors. We grant
          you a limited, personal, non-transferable, non-exclusive license to use OneSet for its intended purpose under
          these Terms and Apple&apos;s usage rules.
        </p>

        <h3>8. Health and Fitness Disclaimer</h3>
        <p>
          OneSet is for habit, workout, and fitness support only. It is not medical advice, diagnosis, treatment, or a
          substitute for professional health guidance. You are responsible for exercising safely and consulting a
          qualified professional before starting or changing a fitness program if needed.
        </p>

        <h3>9. Availability and Changes</h3>
        <p>
          We may update, modify, suspend, or discontinue features where reasonably necessary. We do not guarantee that
          OneSet will be uninterrupted, error-free, or available on every device or operating system version.
        </p>

        <h3>10. Termination</h3>
        <p>
          We may suspend or terminate access if you materially breach these Terms, abuse the app or subscription system,
          infringe rights, or create legal, security, or operational risk. You may stop using OneSet at any time and
          cancel subscriptions through Apple.
        </p>

        <h3>11. Disclaimers</h3>
        <p>
          To the extent permitted by law, OneSet is provided on an &quot;as is&quot; and &quot;as available&quot; basis
          without warranties of any kind, including implied warranties of merchantability, fitness for a particular
          purpose, non-infringement, and uninterrupted availability.
        </p>

        <h3>12. Limitation of Liability</h3>
        <p>
          To the maximum extent permitted by law, {businessName} is not liable for indirect, incidental, special,
          consequential, or punitive damages, or for loss of data, profits, business, or fitness outcomes arising from
          your use of OneSet.
        </p>

        <h3>13. Consumer Rights</h3>
        <p>
          Nothing in these Terms limits mandatory consumer rights that cannot be waived under the laws of your country
          of residence, including rights available to EU/EEA and UK consumers.
        </p>

        <h3>14. Governing Law and Venue</h3>
        <p>
          These Terms are governed by Norwegian law, except where mandatory consumer protection laws in your country of
          residence require otherwise. Courts in Norway will have venue unless mandatory local law gives you the right
          to bring claims elsewhere.
        </p>

        <h3>15. Changes to These Terms</h3>
        <p>
          We may update these Terms when OneSet, subscription features, providers, or legal requirements change. Material
          changes will be communicated through the app, the website, or another appropriate channel.
        </p>

        <h3>16. Contact</h3>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>Contact: {supportEmail}</p>
        <p>
          <a href={"/oneset/privacy-policy"} rel="noopener noreferrer">
            Privacy Policy
          </a>
        </p>
      </main>
    </div>
  );
}
