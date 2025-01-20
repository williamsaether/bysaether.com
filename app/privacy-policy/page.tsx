import styles from "@/app/legal.module.css"
import {supportEmail} from "@/constants/Constants";
import Head from "next/head";

export default function PrivacyPolicy() {
  return (
    <div className={styles.page}>
      <title>Privacy Policy - BySaether</title>
      <header className={styles.header}>
        <span id={"intersector"}/>
        <h1>Privacy Policy</h1>
        <p className={styles.date}>Updated January 2025</p>
        <p>At BySaether, we respect your privacy and are committed to protecting the personal information you provide us. This Privacy Policy outlines how we collect, use, and safeguard your data.</p>
      </header>
      <main className={styles.main}>
        <h3>Information We Collect</h3>
        <p>We may collect the following information when you contact us via our contact form:</p>
        <ul>
          <li>Your name</li>
          <li>Your email address</li>
          <li>Your message or inquiry</li>
        </ul>
        <h3>How We Use Your Information</h3>
        <p>We use the information you provide solely to respond to your inquiries and improve out services.</p>
        <h3>How We Store Your Data</h3>
        <p>Your data is securely stored and will only be accessible to authorized personnel. We do not retain your personal information longer than necessary.</p>
        <h3>Sharing of Information</h3>
        <p>We do not share, sell, or distribute your personal information with third parties unless required by law.</p>
        <h3>Your Rights</h3>
        <p>You have the right to request access to, correction of, or deletion of your personal data. Please contact us at {supportEmail} if you wish to exercise these rights.</p>
        <h3>Contact Us</h3>
        <p>If you have any questions about this Privacy Policy, please contact us at:</p>
        <p>Email: {supportEmail}</p>
      </main>
    </div>
  )
}