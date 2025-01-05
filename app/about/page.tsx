import Image from "next/image";
import styles from './about.module.css'
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.page}>
      <header>
        <span id={"intersector"}/>
        <h1>The Team</h1>
      </header>
      <main className={styles.main}>
        <div className={styles.cardWrapper}>
          <div className={styles.card}>
            <div className={styles.leftSide}>
              <h2 className={styles.name}>William Sæther</h2>
              <p className={styles.roles}>Founder & Developer</p>
              <div className={styles.skills}>
                {["JavaScript","TypeScript","React","React Native","Next.js","Python","SQL","Filming","Video Editing","Graphic Design"].map((skill, index) => (
                  <span key={index}>{skill}</span>
                ))}
              </div>
              <p className={styles.text}>
                Hi, I&#39;m William, a <strong>Data Engineering</strong> student from Norway, and the founder of <i>BySaether</i>. I love developing
                creative and user-friendly software solutions, combining technical skills with a good eye for design.
              </p>
              <p className={styles.text}>
                Outside of software development, I have a passion for content creation, whether that is filming drone footage or editing videos for clients.
                When I&#39;m not coding, or behind the camera you&#39;ll find me exploring Norway&#39;s stunning landscapes or relaxing with a good video game.
              </p>
            </div>
            <div className={styles.rightSide}>
              <Image
                src={'/images/team/william/side-portrait-FR_1x1.webp'}
                alt={"William"}
                width={1500}
                height={1500}
                quality={100}
                style={{objectFit: "contain"}}
              />
            </div>
          </div>
        </div>
        <p className={styles.collaborate}>Do you want to collaborate? <Link href={'/contact'}>Get in touch!</Link></p>
      </main>
    </div>
  )
}