'use client'

import Image from "next/image";
import styles from './about.module.css'
import Link from "next/link";
import {useRef} from "react";

export default function About() {
  const teamSection = useRef(null);

  const scrollToTeam = () => {
    // @ts-ignore
    teamSection.current?.scrollIntoView({behavior: "smooth"});
  }

  return (
    <div className={styles.page}>
      <header className={styles.about}>
        <span id={"intersector"}/>
        <p>
          BySaether started out as a way for me to publish my creations. As someone passionate about creating software,
          I wanted a name and a place to share my projects with the world. While it&#39;s not a full company yet, I hope
          to grow it into one.
        </p>
        <p className={styles.paragraphBy}>- William Sæther, Founder</p>
        <Image
          className={styles.arrowScroll}
          src={'/images/icons/arrowdown.svg'}
          alt={'Downwards Arrow'}
          height={80}
          width={80}
          onClick={scrollToTeam}
          priority
        />
      </header>
      <span className={styles.teamScroll} ref={teamSection}/>
      <section className={styles.teamSection}>
        <header>
          <h1>The Team</h1>
          <p className={styles.collaborate}>Do you want to collaborate? <Link href={'/contact'}>Get in touch!</Link></p>
        </header>
        <main className={styles.main}>
          <div className={styles.cardWrapper}>
            <div className={styles.card}>
              <div className={styles.leftSide}>
                <h2 className={styles.name}>William Sæther</h2>
                <p className={styles.roles}>Founder & Developer</p>
                <div className={styles.skills}>
                  {["JavaScript", "TypeScript", "React", "React Native", "Next.js", "Python", "SQL", "Filming", "Video Editing", "Graphic Design"].map((skill, index) => (
                    <span key={index}>{skill}</span>
                  ))}
                </div>
                <p className={styles.text}>
                  Hi, I&#39;m William, a <strong>Data Engineering</strong> student from Norway, and the founder
                  of <i>BySaether</i>. I love developing
                  creative and user-friendly software solutions, combining technical skills with a good eye for design.
                </p>
                <p className={styles.text}>
                  Outside of software development, I have a passion for content creation, whether that is filming drone
                  footage or editing videos for clients.
                  When I&#39;m not coding or behind the camera, you&#39;ll find me exploring Norway&#39;s stunning
                  landscapes or relaxing with a good video game.
                </p>
              </div>
              <div className={styles.rightSide}>
                <Image
                  className={styles.memberPhoto}
                  src={'/images/team/william/side-portrait-FR_1x1.webp'}
                  alt={"William"}
                  width={1500}
                  height={1500}
                  quality={100}
                  style={{objectFit: "contain"}}
                />
                <div className={styles.socials}>
                  <a
                    href={'https://www.linkedin.com/in/williamsaether/'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={'/images/icons/linkedin-s.svg'}
                      alt={'LinkedIn'}
                      width={30}
                      height={30}
                    />
                  </a>
                  <a
                    href={'https://github.com/williamsaether'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={'/images/icons/github-s.svg'}
                      alt={'GitHub'}
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}