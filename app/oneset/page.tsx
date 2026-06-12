'use client'

import Image from "next/image";
import styles from './oneset.module.css'
import {
  IoCalendar,
  IoCheckmarkCircle,
  IoPhonePortrait,
  IoRepeat,
  IoStatsChart
} from "react-icons/io5";
import projects from "@/data/projects";
import { useState } from "react";
import ProductLegalLinks from "@/components/ProductLegalLinks";

const pages = [
  {
    index: 0,
    id: "home",
    page: "Daily Flow",
    title: "Build a streak with one quick daily set.",
    screenshotUrl: "/images/oneset/screenshots/home-b.webp",
    features: [
      {
        title: "One clear action",
        description: "Open the app, see what is due, and mark it done in seconds.",
        icon: IoCheckmarkCircle
      },
      {
        title: "Streak-first design",
        description: "Stay focused on consistency without turning tracking into a chore.",
        icon: IoStatsChart
      },
    ]
  },
  {
    index: 1,
    id: "setup",
    page: "Setup",
    title: "Create a routine that fits your day.",
    screenshotUrl: "/images/oneset/screenshots/setup-b.webp",
    features: [
      {
        title: "Track anything",
        description: "Use Pushups, Pullups, Situps, Squats, or your own custom activity.",
        icon: IoRepeat
      },
      {
        title: "Flexible schedules",
        description: "Choose daily, every other day, or custom days for each activity.",
        icon: IoCalendar
      },
    ]
  },
  {
    index: 2,
    id: "history",
    page: "Progress",
    title: "See your consistency over time.",
    screenshotUrl: "/images/oneset/screenshots/history-all-b.webp",
    features: [
      {
        title: "Calendar history",
        description: "Review completed days, missed days, and streak progress at a glance.",
        icon: IoCalendar
      },
      {
        title: "Current and best streaks",
        description: "Track your active streak and longest streak across your activities.",
        icon: IoStatsChart
      },
    ]
  },
  {
    index: 3,
    id: "widgets",
    page: "Widgets",
    title: "Keep your next set visible.",
    screenshotUrl: "/images/oneset/screenshots/homescreen-due-b.webp",
    features: [
      {
        title: "Home Screen widgets",
        description: "See what is due without opening the app.",
        icon: IoPhonePortrait
      },
      {
        title: "Quick return",
        description: "Tap the widget to jump back into your daily flow.",
        icon: IoCheckmarkCircle
      },
    ]
  },
]

export default function OneSet() {
  const [currentPage, setCurrentPage] = useState<number>(0);

  return (
    <div>
      <title>OneSet - BySaether</title>

      {/* Front / Hero */}
      <section className={styles.front}>
        <Image
          src={'/images/oneset/device-preview.webp'}
          alt={''}
          width={1500}
          height={2000}
          quality={100}
          priority
        />

        <div className={styles.appDescription}>
          <div className={styles.logoContainer}>
            <Image
              src={'/images/oneset/logo-1024.png'}
              alt={'OneSet logo'}
              width={200}
              height={200}
            />
            <span>OneSet</span>
          </div>

          <h1>Build consistency in minutes.</h1>

          <p>
            OneSet helps you build workout streaks with one quick set at a time.
            Track simple activities, set reminders, and keep your progress visible with widgets.
          </p>

          <a href={projects.find(p => p.id === 'oneset')!.appStore!.apple}>
            <Image
              src={'/images/appstore/apple-darkmode.svg'}
              alt={`Apple App Store Link`}
              width={150}
              height={50}
              style={{ objectFit: "contain", marginTop: "1em" }}
            />
          </a>

          <span id="intersector" />
        </div>
      </section>

      {/* Feature switcher */}
      <section className={styles.section}>
        <div className={styles.switchView}>
          <div className={styles.switchContainer}>
            {pages.map(page => (
              <button
                key={page.id}
                className={`${styles.switchButton} ${pages[currentPage].id === page.id ? styles.active : ''}`}
                onClick={() => setCurrentPage(pages.findIndex(p => p.id === page.id))}
              >
                <div>
                  <h3>{page.page}</h3>
                </div>
              </button>
            ))}
          </div>

          <div key={pages[currentPage].id} className={styles.switchViewDesc}>
            <p>{pages[currentPage].page}</p>
            <h2>{pages[currentPage].title}</h2>

            {pages[currentPage].features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <span>
                  <feature.icon />
                  {feature.title}
                </span>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.switchViewImages}>
            {pages.map((page, index) => {
              const prevIndex = (currentPage - 1 + pages.length) % pages.length;
              const nextIndex = (currentPage + 1) % pages.length;

              let positionClass = styles.hidden;
              if (index === currentPage) positionClass = styles.middle;
              else if (index === prevIndex) positionClass = styles.left;
              else if (index === nextIndex) positionClass = styles.right;

              return (
                <Image
                  key={page.id}
                  src={page.screenshotUrl}
                  alt={'Screenshot of OneSet app'}
                  width={492}
                  height={1000}
                  quality={100}
                  className={positionClass}
                />
              )
            })}
          </div>
        </div>
      </section>

      <ProductLegalLinks
        links={[
          {href: "/oneset/privacy-policy", label: "Privacy Policy"},
          {href: "/oneset/terms-of-service", label: "Terms of Service"},
        ]}
      />
    </div>
  )
}
