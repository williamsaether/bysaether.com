'use client'

import Image from "next/image";
import {useState} from "react";
import type {IconType} from "react-icons";
import projects from "@/data/projects";
import styles from "./ProductLandingPage.module.css";

export type ProductFeature = {
  title: string;
  description: string;
  icon: IconType;
};

export type ProductView = {
  id: string;
  label: string;
  title: string;
  screenshotUrl: string;
  features: ProductFeature[];
};

export type ProductLegalLink = {
  href: string;
  label: string;
};

type ProductStoreLink = {
  href: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ProductLandingPageProps = {
  projectId: string;
  name: string;
  pageTitle?: string;
  headline: string;
  description: string;
  heroImage: string;
  logo: string;
  logoVariant: "oneset" | "recigrab" | "codecore";
  views: ProductView[];
  legalLinks: ProductLegalLink[];
};

export default function ProductLandingPage({
  projectId,
  name,
  pageTitle = `${name} - BySaether`,
  headline,
  description,
  heroImage,
  logo,
  logoVariant,
  views,
  legalLinks,
}: ProductLandingPageProps) {
  const [currentView, setCurrentView] = useState(0);
  const activeView = views[currentView];
  const appStore = projects.find(project => project.id === projectId)?.appStore;
  const storeLinks = [
    appStore?.apple && {
      href: appStore.apple,
      src: "/images/appstore/apple-darkmode.svg",
      alt: `Download ${name} on the Apple App Store`,
      width: 150,
      height: 50,
    },
    appStore?.google && {
      href: appStore.google,
      src: "/images/appstore/google.svg",
      alt: `Get ${name} on Google Play`,
      width: 180,
      height: 53,
    },
    appStore?.chrome && {
      href: appStore.chrome,
      src: "/images/appstore/cws-darkmode.png",
      alt: `Get ${name} on the Chrome Web Store`,
      width: 178,
      height: 50,
    },
  ].filter((storeLink): storeLink is ProductStoreLink => Boolean(storeLink));
  
  if (!activeView) return null;

  return (
    <div>
      <title>{pageTitle}</title>

      <section className={styles.front}>
        <Image
          src={heroImage}
          alt=""
          width={1500}
          height={2000}
          quality={100}
          priority
        />

        <div className={styles.appDescription}>
          <div className={styles.logoContainer}>
            <Image
              src={logo}
              alt={`${name} logo`}
              width={200}
              height={200}
              className={styles[logoVariant]}
            />
            <span>{name}</span>
          </div>

          <h1>{headline}</h1>
          <p>{description}</p>

          {storeLinks.length > 0 && (
            <div className={styles.appStore}>
              {storeLinks.map(storeLink => (
                <a
                  key={storeLink.href}
                  href={storeLink.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={storeLink.src}
                    alt={storeLink.alt}
                    width={storeLink.width}
                    height={storeLink.height}
                    className={styles.appStoreBadge}
                  />
                </a>
              ))}
            </div>
          )}

          <span id="intersector" />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.switchView}>
          <div className={styles.switchContainer}>
            {views.map((view, index) => (
              <button
                key={view.id}
                className={`${styles.switchButton} ${currentView === index ? styles.active : ""}`}
                onClick={() => setCurrentView(index)}
              >
                <div>
                  <h3>{view.label}</h3>
                </div>
              </button>
            ))}
          </div>

          <div key={activeView.id} className={styles.switchViewDesc}>
            <p>{activeView.label}</p>
            <h2>{activeView.title}</h2>

            {activeView.features.map(feature => (
              <div key={feature.title} className={styles.feature}>
                <span>
                  <feature.icon />
                  {feature.title}
                </span>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.switchViewImages}>
            {views.map((view, index) => {
              const previousIndex = (currentView - 1 + views.length) % views.length;
              const nextIndex = (currentView + 1) % views.length;

              let positionClass = styles.hidden;
              if (index === currentView) positionClass = styles.middle;
              else if (index === previousIndex) positionClass = styles.left;
              else if (index === nextIndex) positionClass = styles.right;

              return (
                <Image
                  key={view.id}
                  src={view.screenshotUrl}
                  alt={`${name} ${view.label} screen`}
                  width={492}
                  height={1000}
                  quality={100}
                  className={positionClass}
                />
              );
            })}
          </div>
        </div>
      </section>

      <nav className={styles.legalLinks} aria-label={`${name} legal links`}>
        {legalLinks.map(link => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </div>
  );
}
