'use client'

import Image from "next/image";
import common from "./common.module.css"
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.front}>
          <Image
            src="/images/banner.svg"
            alt="Background banner"
            className={styles.background}
            width={3000}
            height={1344}
            priority
          />
          <h1>Simple Solutions, Big Impact</h1>
          <p>Turning everyday problems into digital possibilities.</p>
        </div>
        <span id="intersector"/>
        <section className={styles.section}>
          <header>
            <h2>Projects</h2>
            <div className={common.ctas}>
              <a className={common.primary} href={''}>All Projects</a>
            </div>
          </header>
          <div className={styles.gridHalf}>
            <div className={styles.cardWrapper}>
              <a href={''}>
                <div className={styles.card}>
                  <Image
                    src="/images/codecore/logo.png"
                    alt="CodeCore Logo"
                    width={500}
                    height={500}
                    loading={"lazy"}
                    placeholder={"empty"}
                  />
                  <div className={styles.cardText}>
                    <h3>CodeCore</h3>
                    <p>The Hub for all QR-/Barcode related</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
