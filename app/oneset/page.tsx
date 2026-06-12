'use client'

import ProductLandingPage, {type ProductView} from "@/components/ProductLandingPage";
import {
  IoCalendar,
  IoCheckmarkCircle,
  IoPhonePortrait,
  IoRepeat,
  IoStatsChart,
} from "react-icons/io5";

const views: ProductView[] = [
  {
    id: "home",
    label: "Daily Flow",
    title: "Build a streak with one quick daily set.",
    screenshotUrl: "/images/oneset/screenshots/home-b.webp",
    features: [
      {
        title: "One clear action",
        description: "Open the app, see what is due, and mark it done in seconds.",
        icon: IoCheckmarkCircle,
      },
      {
        title: "Streak-first design",
        description: "Stay focused on consistency without turning tracking into a chore.",
        icon: IoStatsChart,
      },
    ],
  },
  {
    id: "setup",
    label: "Setup",
    title: "Create a routine that fits your day.",
    screenshotUrl: "/images/oneset/screenshots/setup-b.webp",
    features: [
      {
        title: "Track anything",
        description: "Use Pushups, Pullups, Situps, Squats, or your own custom activity.",
        icon: IoRepeat,
      },
      {
        title: "Flexible schedules",
        description: "Choose daily, every other day, or custom days for each activity.",
        icon: IoCalendar,
      },
    ],
  },
  {
    id: "history",
    label: "Progress",
    title: "See your consistency over time.",
    screenshotUrl: "/images/oneset/screenshots/history-all-b.webp",
    features: [
      {
        title: "Calendar history",
        description: "Review completed days, missed days, and streak progress at a glance.",
        icon: IoCalendar,
      },
      {
        title: "Current and best streaks",
        description: "Track your active streak and longest streak across your activities.",
        icon: IoStatsChart,
      },
    ],
  },
  {
    id: "widgets",
    label: "Widgets",
    title: "Keep your next set visible.",
    screenshotUrl: "/images/oneset/screenshots/homescreen-due-b.webp",
    features: [
      {
        title: "Home Screen widgets",
        description: "See what is due without opening the app.",
        icon: IoPhonePortrait,
      },
      {
        title: "Quick return",
        description: "Tap the widget to jump back into your daily flow.",
        icon: IoCheckmarkCircle,
      },
    ],
  },
];

export default function OneSet() {
  return (
    <ProductLandingPage
      projectId="oneset"
      name="OneSet"
      headline="Build consistency in minutes."
      description="OneSet helps you build workout streaks with one quick set at a time. Track simple activities, set reminders, and keep your progress visible with widgets."
      heroImage="/images/oneset/device-preview.webp"
      logo="/images/oneset/logo-1024.png"
      logoVariant="oneset"
      views={views}
      legalLinks={[
        {href: "/oneset/privacy-policy", label: "Privacy Policy"},
        {href: "/oneset/terms-of-service", label: "Terms of Service"},
      ]}
    />
  );
}
