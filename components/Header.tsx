'use client'

import Image from 'next/image'
import Link from "next/link";
import {useEffect, useState} from "react";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";

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
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbar}>
        <button className={styles.burger} onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`${styles.line} ${isOpen ? styles.line1 : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.line2 : ''}`}></span>
          <span className={`${styles.line} ${isOpen ? styles.line3 : ''}`}></span>
        </button>
        <Link href={'/'}>
          <Image
            src="/images/bysaether.svg"
            alt="BySaether Logo"
            width={295}
            height={59}
            style={{objectFit: "contain", transform: 'translate(3px,4px)'}}
            priority
          />
        </Link>
        <div className={styles.socials}>
          <a
            href={'https://www.linkedin.com/company/bysaether/'}
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
            href={'https://www.instagram.com/bysaether/'}
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
            href={'https://github.com/BySaether'}
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
      <nav className={styles.menu}>
        <Link className={`${styles.navLink} ${isOpen ? styles.activeNav : ''}`} href={'/'}>Home</Link>
        <Link className={`${styles.navLink} ${isOpen ? styles.activeNav : ''}`} href={'/about'}>About</Link>
      </nav>
    </header>
  )
}