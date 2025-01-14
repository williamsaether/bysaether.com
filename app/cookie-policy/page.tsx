import styles from "@/app/legal.module.css"
import {supportEmail} from "@/constants/Constants";

export default function CookiePolicy() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <span id={"intersector"}/>
        <h1>Cookie Policy</h1>
        <p className={styles.date}>Updated January 2025</p>
        <p>BySaether uses cookies to ensure the proper functioning and security of our website.</p>
      </header>
      <main className={styles.main}>
        <h3>What Are Cookies?</h3>
        <p>Cookies are small text files placed on your device to improve your experience while using the website.</p>
        <h3>Types of Cookies We Use</h3>
        <ul>
          <li><strong>Essential Cookies:</strong> These cookies are required for the website to function properly and are provided by our hosting platform.</li>
        </ul>
        <h3>How We Use Cookies</h3>
        <p>We do not use cookies for tracking or analytics purposes. Cookies set by our website are essential and only used for performance and security.</p>
        <h3>Managing Cookies</h3>
        <p>You can configure your browser settings to block or delete cookies. However, this may affect the website's functionality.</p>
        <h3>Contact Us</h3>
        <p>If you have questions about our cookie usage, contact us at:</p>
        <p>Email: {supportEmail}</p>
      </main>
    </div>
  )
}