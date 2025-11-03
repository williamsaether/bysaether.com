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
        <section className={styles.frontSection}>
          <div className={styles.front}>
            {/*<Image
              src="/images/banner.svg"
              alt="Background banner"
              className={styles.background}
              width={3000}
              height={1344}
              priority
            />*/}
            <p className={styles.title}>Hi, we’re BySaether.</p>
            <p className={styles.intro}>We build thoughtful, user-focused digital products.</p>
            <div className={common.ctas}>
              <Link href={'/projects'} className={`${common.primary}`}>Explore Our Work</Link>
            </div>
          </div>
        </section>
        <div className={common.noti}>
          <span style={{background: "#00c7ff"}}>DEV</span>
          Website under Revamp
        </div>
        <div className={common.noti}>
          <span style={{background: "#ff6200"}}>TIPS</span>
          <div>Check out my <a href={"https://github.com/williamsaether"} target="_blank">GitHub!</a></div>
        </div>
        <div className={common.noti}>
          <span style={{background: "#c100ff"}}>NEW</span>
          <div><a href={"https://william.bysaether.com"} target="_blank">william.bysaether.com</a> is LIVE!</div>
        </div>
        <span id="intersector" className={styles.intersector}/>
        <section className={styles.section}>
          <header>
            <h2>Projects</h2>
            <div className={common.ctas}>
              <a className={common.primary} href={'/projects'}>All Projects</a>
            </div>
          </header>
          <div className={styles.projectGrid}>
            {[projects[0], projects[3]].map(project => (
              <Link href={`/projects/${project.id}`} key={project.id}>
                <div className={styles.card}>
                  <Image
                    src={project.showURL}
                    alt={project.name}
                    width={500}
                    height={500}
                    quality={100}
                  />
                  <div className={styles.cardText}>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
