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
    "showURL": "/images/bysaether.svg",
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
  }
]

export default projects;