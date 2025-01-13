'use client'

import Image from "next/image";
import common from "./common.module.css";
import styles from "./page.module.css";
import projects from "@/data/projects";
import Link from "next/link";

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
          <p className={styles.title}>Hi! Thanks for stopping by.</p>
          <p className={styles.intro}>
            At BySaether, we strive to create user-friendly and innovative software solutions. Our mission is
            to bring ideas to life, one project at a time, while staying committed to quality and creativity.
          </p>
          <div className={common.ctas}>
            <Link href={'/projects'} className={`${common.primary} ${common.primaryDark}`}>Explore Our Work</Link>
          </div>
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
            <Link href={`/projects/${projects[0].id}`}>
              <div className={styles.card}>
                <Image
                  src={projects[0].showURL}
                  alt="CodeCore Logo"
                  width={500}
                  height={500}
                  placeholder={"empty"}
                  quality={100}
                />
                <div className={styles.cardText}>
                  <h3>{projects[0].name}</h3>
                  <p>{projects[0].description}</p>
                </div>
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
