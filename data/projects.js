const projects = [
  {
    "id": "codecore",
    "categories": ["App"],
    "name": "CodeCore",
    "short": "A QR and Barcode App",
    "description": "A barcode and QR code scanning app for organizing, saving, and accessing codes effortlessly.",
    "techStack": [
      "React Native",
      "Expo"
    ],
    "logoURL": "/images/codecore/logo.svg",
    "squareLogoURL": "/images/codecore/logo.svg",
    "showURL": '/images/codecore/overview.webp',
    "websiteLink": "https://codecore.bysaether.com",
    "appStore": {
      "apple": "https://apps.apple.com/app/codecore/id6739577598",
      "google": ""
    },
    "details": {
      "overview": "CodeCore is designed to simplify the way you interact with barcodes and QR codes. With CodeCore, users can scan codes, assign them names, pin important ones, and organize them into lists.",
      "features": [
        "Scan barcodes and QR codes instantly.",
        "Save and organize codes into customizable lists.",
        "Pin your most-used codes for quick access.",
        "Open codes directly in supported websites, alternatively with device browser."
      ],
      "goals": "CodeCore was created with users in mind. It's a user-friendly, efficient, and visually appealing tool. And unlike other scanning apps, we don't push ads in your face."
    },
    "screenshots": [
      '/images/codecore/screenshots/home.webp',
      '/images/codecore/screenshots/mycodes.webp',
      '/images/codecore/screenshots/scanner.webp',
      '/images/codecore/screenshots/history.webp',
      '/images/codecore/screenshots/settings.webp',
    ]
  },
  {
    "id": "codegrab",
    "categories": ["Extension"],
    "name": "CodeGrab",
    "short": "Smart QR & Barcode Extension",
    "description": "Right-click to generate a QR or barcode from any number on a website, with domain-specific memory and offline capability.",
    "techStack": [
      "Chrome Extension",
      "Shadow DOM"
    ],
    "logoURL": "/images/codegrab/logo.svg",
    "squareLogoURL": "/images/codegrab/logo.svg",
    "showURL": "/images/codegrab/screenshots/screenshot1.webp",
    "websiteLink": "https://github.com/williamsaether/CodeGrab",
    "appStore": {
      "apple": "",
      "google": "",
      "chrome": "https://chromewebstore.google.com/detail/codegrab/doijgnjlnohblbcidlgnmkpjnfppcalp"
    },
    "details": {
      "overview": "CodeGrab is a lightweight browser extension that lets you instantly convert numbers or strings from any webpage into scannable barcodes or QR codes. Built with productivity in mind, it offers smart domain-based memory so you don’t have to keep selecting the same values over and over again.",
      "features": [
        "Right-click any number or string on a webpage to generate a QR code or barcode.",
        "Auto-memory: Remembers selectors for known websites to auto-generate codes.",
        "Minimized overlay UI that runs in a fully isolated Shadow DOM.",
        "Manual input mode for generating custom codes.",
        "Copy or download the generated codes as PNG.",
        "Fully client-side: No data is collected or sent anywhere.",
        "Powered by open-source libraries: finder, QRCode, JsBarcode."
      ],
      "goals": "The goal with CodeGrab was to create a fast, minimal, and private tool that lives in your browser. It’s ideal for logistics, verification, testing, or just quickly generating scannable codes without leaving the page."
    },
    "screenshots": [
      "/images/codegrab/screenshots/screenshot1.webp",
      "/images/codegrab/screenshots/screenshot2.webp",
    ]
  },
  {
    "id": "bysaether",
    "categories": ["Website","Design"],
    "name": "BySaether",
    "short": "Portfolio Website and Design",
    "description": "BySaether.com is a portfolio website for showcasing various projects to the public.",
    "techStack": [
      "Next.js",
      "React",
      "Vercel",
      "Adobe Illustrator",
    ],
    "logoURL": "/images/bysaether.svg",
    "squareLogoURL": "/images/bysaether-short.svg",
    "showURL": "/images/frontpage.webp",
    "websiteLink": "https://bysaether.com",
    "details": {
      "overview": "The BySaether website serves as the digital portfolio for BySaether, highlighting the company's projects, achievements, and brand identity. The design reflects a clean and professional style, showcasing both functionality and aesthetics.",
      "features": [
        "Static site generated with Next.js for performance and SEO.",
        "Custom design showcasing BySaether's branding.",
        "Dynamic projects page with filtering options.",
        "Contact form integrated with Mailgun"
      ],
      "design": {
        "primaryColors": ["#bfe2ff","#3da1ff","#fff"]
      }
    },
  },
  {
    "id": "portfolio",
    "categories": ["Design","Website"],
    "name": "William Sæther",
    "short": "Personal Portfolio Website",
    "description": "A personal portfolio website showcasing education, experience, and projects in a clean, interactive format.",
    "techStack": [
      "Next.js",
      "React",
      "Framer Motion",
      "Tailwind CSS",
      "Vercel"
    ],
    "logoURL": "/images/portfolio/bysaether.svg",
    "squareLogoURL": "/images/bysaether-short.svg",
    "showURL": "/images/portfolio/screenshots/frontpage.webp",
    "websiteLink": "https://william.bysaether.com",
    "details": {
      "overview": "William’s personal portfolio website is designed to highlight his background, experience, and projects in a structured and interactive way. It’s built as a modern, lightweight, and responsive static site with smooth animations and clean typography.",
      "features": [
        "Timeline-based sections for education and work experience.",
        "Dynamic project showcases with links to live demos and GitHub repositories.",
        "Framer Motion animations for smooth interactions.",
        "Fully responsive design optimized for both desktop and mobile.",
        "Hosted on Vercel for fast global performance."
      ],
      "goals": "The goal with william.bysaether.com is to provide a professional yet personal platform to showcase William’s work, attract opportunities, and build a cohesive digital identity alongside BySaether."
    },
    "screenshots": [
      "/images/portfolio/screenshots/frontpage.webp",
      "/images/portfolio/screenshots/projects.webp",
      "/images/portfolio/screenshots/experience.webp",
      "/images/portfolio/screenshots/education.webp"
    ]
  },
  {
    "id": "recigrab",
    "categories": ["App"],
    "name": "ReciGrab",
    "short": "Recipe Extraction & Cooking App",
    "description": "An app that turns social media recipes into clean, structured cooking instructions optimized for meal prep and daily cooking.",
    "techStack": [
      "React Native",
      "Expo",
      "SQLite",
      "OpenAI API"
    ],
    "logoURL": "/images/recigrab/logo.svg",
    "squareLogoURL": "/images/recigrab/logo.svg",
    "showURL": "/images/recigrab/overview.webp",
    "websiteLink": "https://recigrab.bysaether.com",
    "appStore": {
      "apple": "https://apps.apple.com/app/recigrab/id6756504828",
      "google": ""
    },
    "details": {
      "overview": "ReciGrab is built for people who save recipes from Instagram, but want a clean and practical cooking experience. The app extracts ingredients and instructions using AI, then presents them in a structured, distraction-free format designed for real-world cooking and meal prep.",
      "features": [
        "Import recipes directly from social media and other web links.",
        "AI-powered extraction of ingredients and step-by-step instructions.",
        "Adjustable serving sizes with dynamic ingredient scaling.",
        "Categorization by meal type",
        "Dedicated cooking mode.",
        "Offline-first design using local storage."
      ],
      "goals": "The goal of ReciGrab is to remove friction between discovering recipes and actually cooking them. Instead of scrolling through videos or captions in the kitchen, or not knowing where to save social media recipes, users get a clean, reliable recipe format that supports everyday use."
    },
    "screenshots": [
      "/images/recigrab/screenshots/home.webp",
      "/images/recigrab/screenshots/recipes.webp",
      "/images/recigrab/screenshots/recipe.webp",
      "/images/recigrab/screenshots/recipe-scroll.webp",
      "/images/recigrab/screenshots/cooking-mode.webp",
      "/images/recigrab/screenshots/search.webp",
      "/images/recigrab/screenshots/settings.webp",
    ]
  }
]

export default projects;