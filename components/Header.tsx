'use client'

import Image from 'next/image'
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
        <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle Menu">
          <div className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></div>
          <div className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></div>
          <div className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></div>
        </button>
        <Image
          src="/images/bysaether.svg"
          alt="BySaether Logo"
          width={280}
          height={60}
          style={{objectFit: "contain"}}
          priority
        />
        <div className={styles.socials}>
          <a
            href={'https://www.linkedin.com/company/bysaether/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/linkedin.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              priority
            />
          </a>
          <a
            href={'https://www.instagram.com/bysaether/'}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/instagram.svg"
              alt="Instagram"
              width={30}
              height={30}
              priority
            />
          </a>
        </div>
      </div>
      <nav className={styles.menu}>
        <Link className={`${styles.navLink} ${isOpen ? styles.activeNav : ''}`} href="/">Home</Link>
        <Link className={`${styles.navLink} ${isOpen ? styles.activeNav : ''}`} href="/">About</Link>
      </nav>

    </header>
  )

}