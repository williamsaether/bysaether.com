'use client'

import Image from "next/image";
import common from "./common.module.css";
import styles from "./page.module.css";
import projects from "@/data/projects";

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
              <a className={common.primary} href={'/projects'}>All Projects</a>
            </div>
          </header>
          <div className={styles.gridHalf}>
            <div className={styles.cardWrapper}>
              <a href={`/projects/${projects[0].id}`}>
                <div className={styles.card}>
                  <Image
                    src={projects[0].logoURL}
                    alt="CodeCore Logo"
                    width={500}
                    height={500}
                    loading={"lazy"}
                    placeholder={"empty"}
                  />
                  <div className={styles.cardText}>
                    <h3>{projects[0].name}</h3>
                    <p>{projects[0].description}</p>
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
