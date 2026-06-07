import Link from "next/link";
import styles from "@/app/legal.module.css";
import {
  businessAddress,
  businessName,
  orgNumber,
  supportEmail
} from "@/constants/Constants";

export default function Legal() {
  return (
    <div className={styles.page}>
      <title>Legal - BySaether</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>Legal</h1>
        <p className={styles.date}>Updated June 2026</p>
        <p>
          Legal information, policies, and data management pages for BySaether and its products.
        </p>
      </header>
      <main className={styles.main}>
        <h3>Company</h3>
        <p>{businessName}</p>
        <p>Org.nr: {orgNumber}</p>
        <p>Address: {businessAddress}</p>
        <p>
          Contact:{" "}
          <a href={`mailto:${supportEmail}`} target="_blank" rel="noopener noreferrer">
            {supportEmail}
          </a>
        </p>

        <h3>BySaether Website</h3>
        <ul className={styles.linkList}>
          <li><Link href={"/privacy-policy"}>Privacy Policy</Link></li>
          <li><Link href={"/cookie-policy"}>Cookie Policy</Link></li>
        </ul>

        <h3>ReciGrab</h3>
        <ul className={styles.linkList}>
          <li><Link href={"/recigrab/privacy-policy"}>Privacy Policy</Link></li>
          <li><Link href={"/recigrab/terms-of-service"}>Terms of Service</Link></li>
          <li><Link href={"/recigrab/manage-data"}>Manage Data</Link></li>
        </ul>

        <h3>CodeCore</h3>
        <ul className={styles.linkList}>
          <li><Link href={"/codecore/privacy-policy"}>Privacy Policy</Link></li>
          <li><Link href={"/codecore/manage-data"}>Manage Data</Link></li>
        </ul>

        <h3>CodeGrab</h3>
        <ul className={styles.linkList}>
          <li><Link href={"/codegrab/privacy-policy"}>Privacy Policy</Link></li>
        </ul>
      </main>
    </div>
  );
}
