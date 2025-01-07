'use client'

import common from "@/app/common.module.css";
import styles from './contact.module.css'
import Image from "next/image";
import Form from "next/form";
import Link from "next/link";
import {useRef} from "react";

export default function Support() {
  const formSection = useRef(null);

  const scrollToForm = () => {
    // @ts-ignore
    formSection.current?.scrollIntoView({behavior: "smooth"})
  }

  return (
    <div className={styles.page}>
      <header>
        <span id="intersector"/>
        <h1>Get in Touch</h1>
        <p>Have any questions? We'd love to hear from you.</p>
      </header>
      <main className={styles.main}>
        <section className={styles.boxSection}>
          <div className={styles.boxWrapper}>
            <div className={styles.box}>
              <Image
                src={'/images/icons/discord.svg'}
                alt={'Discord'}
                width={200}
                height={200}
                priority
              />
              <div className={styles.boxDesc}>
                <div>
                  <h2>Join our Discord</h2>
                  <p>We're basically always active, come have a chat!</p>
                </div>
                <div className={common.ctas}>
                  <a href={'https://discord.gg/GxcPtwvX4P'} target={'_blank'} className={common.primary}>Join</a>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src={'/images/icons/github.svg'}
                alt={'GitHub'}
                width={200}
                height={200}
                priority
              />
              <div className={styles.boxDesc}>
                <div>
                  <h2>Collaborate on GitHub</h2>
                  <p>Most of our repos are private for now, but will soon be more open sourced projects!</p>
                </div>
                <div className={common.ctas}>
                  <a href={'https://github.com/BySaether'} target={'_blank'} className={common.primary}>Open</a>
                </div>
              </div>
            </div>
            <div className={styles.box}>
              <Image
                src={'/images/icons/email.svg'}
                alt={'Email'}
                width={200}
                height={200}
                priority
              />
              <div className={styles.boxDesc}>
                <div>
                  <h2>Ask a Question</h2>
                  <p>Fill out our form, and we will get back to you!</p>
                </div>
                <div className={common.ctas}>
                  <button className={common.primary} onClick={scrollToForm}>Get Started</button>
                </div>
              </div>
            </div>
          </div>
          <span className={styles.formScroll} ref={formSection}/>
        </section>
        <section className={styles.formSection}>
          <header>
            <h2>Contact Form</h2>
          </header>
          <div className={styles.formWrapper}>
            <div className={styles.formDesc}>
              <p>
                Fill in the form, and we will reach out to you within 24 hours.
              </p>
              <p className={styles.smallText}>
                You can also contact us by the email below!
              </p>
              <div className={styles.contactInfo}>
                <div>
                  <p>Email</p>
                  <a href={'mailto:bysaether@gmail.com'}>bysaether@gmail.com</a>
                </div>
              </div>
            </div>
            <Form id={"contact"} form={"contact"} className={styles.form}
                  action={''} aria-label={"Contact Form"}
            >
              <div>
                <div className={styles.horizLabels}>
                  <label htmlFor={"contact-name"}>Name</label>
                  {/*<label htmlFor={"contact-name"}>*Mandatory</label>*/}
                </div>
                <input className={styles.formInput}
                       name={"name"} id={"contact-name"}
                       maxLength={255} type={"text"}
                       required
                />
              </div>
              <div>
                <div className={styles.horizLabels}>
                  <label htmlFor={"contact-email"}>Email</label>
                  {/*<label htmlFor={"contact-email"}>*Mandatory</label>*/}
                </div>
                <input className={styles.formInput}
                       name={"email"} id={"contact-email"}
                       maxLength={255} type={"email"}
                       required
                />
              </div>
              <div>
                <div className={styles.horizLabels}>
                  <label htmlFor={"contact-message"}>Message</label>
                  {/*<label htmlFor={"contact-message"}>*Mandatory</label>*/}
                </div>
                <textarea className={styles.formInput}
                          name={"message"} id={"contact-message"}
                          maxLength={255} required
                />
              </div>
              <div className={common.ctas}>
                <button className={common.primary} type="submit"><p>Send</p></button>
                <p>We usually reply within 24 hours.</p>
              </div>
            </Form>
          </div>
        </section>
      </main>
    </div>
  )
}