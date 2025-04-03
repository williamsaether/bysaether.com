'use client'

import Image from 'next/image'
import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import {github, instagram, linkedin} from "@/constants/Constants";

export default function Header() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    setIsOpen(false)

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },{rootMargin: "-100px 0px 0px 0px"})

    const target = document.querySelector('#intersector')
    if (target) observer.observe(target)

    return () => {
      if (target) observer.unobserve(target)
    }
  }, [pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className={`${styles.header}${isScrolled ? ' ' + styles.scrolled : ''}${isOpen ? ' ' + styles.dropdown : ''}`}>
      <div className={styles.navbar}>
        <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></span>
        </button>
        <Link href={'/home'}>
          <Image
            className={styles.logo}
            src="/images/bysaether.svg"
            alt="BySaether Logo"
            loading={"eager"}
            quality={100}
            width={1180}
            height={236}
            blurDataURL={'transparent'}
            style={{objectFit: "contain", transform: 'translate(3px,4px)'}}
            priority
          />
        </Link>
        <nav className={styles.menu}>
          <Link className={`${styles.navLink} ${isOpen ? styles.activeNav : ''}`} href={'/about'}>About</Link>
          <Link className={`${styles.navLink} ${isOpen ? styles.activeNav : ''}`} href={'/projects'}>Projects</Link>
          <Link className={`${styles.navLink} ${isOpen ? styles.activeNav : ''}`} href={'/contact'}>Contact</Link>
        </nav>
        <div className={styles.socials}>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/linkedin-s.svg"
              alt="LinkedIn"
              width={30}
              height={30}
              priority
            />
          </a>
          <a
            href={instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/instagram-s.svg"
              alt="Instagram"
              width={30}
              height={30}
              priority
            />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/images/icons/github-s.svg"
              alt="GitHub"
              width={30}
              height={30}
              priority
            />
          </a>
        </div>
      </div>
    </header>
  )
}