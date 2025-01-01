import common from "@/app/common.module.css";
import styles from './support.module.css'
import Form from "next/form";

export default function Support() {
  return (
    <div className={styles.page}>
      <header>
        <span id="intersector"/>
        <h1>Get in touch</h1>
        <div className={styles.headerDesc}>
          <p>Fill in the contact form below, and we will reach out to you within 24 hours!</p>
          <div className={styles.contactInfo}>
            <div>
              <p>Email</p>
              <a href={'mailto:bysaether@gmail.com'}>bysaether@gmail.com</a>
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <Form id={"contact"} form={"contact"} className={styles.form}
              action={''} aria-label={"Contact Form"}
        >
          <div>
            <div className={styles.horizLabels}>
              <label htmlFor={"contact-name"}>Name</label>
              <label htmlFor={"contact-name"}>*Mandatory</label>
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
              <label htmlFor={"contact-email"}>*Mandatory</label>
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
              <label htmlFor={"contact-message"}>*Mandatory</label>
            </div>
            <textarea className={styles.formInput}
                      name={"message"} id={"contact-message"}
                      maxLength={255} required
            />
          </div>
          <div className={common.ctas}>
            <button className={common.primary} type="submit">Send</button>
            <span/>
            <p>We usually reply within 24 hours.</p>
          </div>
        </Form>
      </main>
    </div>
  )
}