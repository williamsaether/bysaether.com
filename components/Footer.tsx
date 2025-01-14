'use client'

import Image from 'next/image'
import Link from "next/link";
import styles from "./Footer.module.css";
import {github, instagram, linkedin, supportEmail} from "@/constants/Constants";

export default function Footer() {

  return (
    <footer className={styles.outerFooter}>
      <div className={styles.footer}>
        <div className={styles.leftSide}>
          <div className={styles.part}>
            <h4>Site</h4>
            <nav>
              <Link href={'/'}>Home</Link>
              <Link href={'/about'}>About</Link>
              <Link href={'/projects'}>Projects</Link>
              <Link href={'/contact'}>Contact</Link>
            </nav>
          </div>
          <div className={styles.part}>
            <h4>Legal</h4>
            <nav>
              <Link href={'/privacy-policy'}>Privacy policy</Link>
              <Link href={'/cookie-policy'}>Cookie policy</Link>
            </nav>
          </div>
          <div className={styles.part}>
            <h4>Social</h4>
            <nav className={styles.socials}>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
                <p>LinkedIn</p>
              </a>
              <a href={instagram}>
                <Image
                  src="/images/icons/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                />
                <p>Instagram</p>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/icons/github.svg"
                  alt="GitHub"
                  width={30}
                  height={30}
                />
                <p>GitHub</p>
              </a>
            </nav>
          </div>
          <div className={styles.part}>
            <h4>Contact</h4>
            <a
              href={'mailto:bysaether@gmail.com'}
              target="_blank"
              rel="noopener noreferrer"
            >{supportEmail}</a>
          </div>
        </div>
        <div className={styles.rightSide}>
          <Image
            className={styles.logo}
            src="/images/bysaether-short.svg"
            alt="BySaether Logo"
            width={500}
            height={500}
            style={{objectFit: "contain"}}
          />
        </div>
        <span/>
        <div className={styles.bottomLeft}>
          <p>&copy; 2025 BySaether</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  )
}