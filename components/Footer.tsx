'use client'

import Image from 'next/image'
import Link from "next/link";
import styles from "./Footer.module.css";
import {supportEmail} from "@/constants/Constants";

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.part}>
          <Image
            src="/images/bysaether-short.svg"
            alt="BySaether Logo"
            width={100}
            height={100}
            style={{objectFit: "contain", transform: 'translate(3px,4px)'}}
            loading="lazy"
          />
          <p>BySaether makes genius solutions for everyday life. Learn more about us here</p>
        </div>
        <div className={styles.part}>
          <h4>OWNER</h4>
          <p></p>
          <p className={styles.email}>{supportEmail}</p>
        </div>
        <div className={styles.part}>
          <h4>LINKS</h4>
          <nav>
            <Link href={''}>HOME</Link>
            <Link href={''}>ABOUT</Link>
            <Link href={''}>PROJECTS</Link>
            <Link href={''}>FEEDBACK</Link>
          </nav>
        </div>
        <div className={styles.part}>
          <h4>CONTACT</h4>
        </div>
      </div>
      <span/>
      <p>William Sæther &copy; 2025 - All Rights Reserved</p>
    </footer>
  )
}