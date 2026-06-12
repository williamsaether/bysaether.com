'use client'

import ProductLandingPage, {type ProductView} from "@/components/ProductLandingPage";
import {FaHistory} from "react-icons/fa";
import {IoBrowsers, IoImage, IoList, IoQrCode, IoScan, IoSend} from "react-icons/io5";

const views: ProductView[] = [
  {
    id: "scanner",
    label: "Scanner",
    title: "Scan your codes.",
    screenshotUrl: "/images/codecore/screenshots/scanner-b.webp",
    features: [
      {
        title: "Scan from Gallery",
        description: "With this feature you can scan a code directly from an image in your gallery!",
        icon: IoImage,
      },
      {
        title: "Enter Manual Codes",
        description: "You can enter barcodes/QR-codes manually with either the barcode or QR-code icon.",
        icon: IoQrCode,
      },
      {
        title: "Open Code in Website",
        description: "The code you scan can be opened in an embedded browser, or via the local browser on your device. You can also specify custom websites for this!",
        icon: IoBrowsers,
      },
    ],
  },
  {
    id: "mycodes",
    label: "My Codes",
    title: "Explore all your codes.",
    screenshotUrl: "/images/codecore/screenshots/mycodes-b.webp",
    features: [
      {
        title: "Create barcodes and QR-codes",
        description: "Manually create your own codes by hitting the plus button top left.",
        icon: IoQrCode,
      },
      {
        title: "Organize in Lists",
        description: "When creating your codes, you can put them in lists, for easier management.",
        icon: IoList,
      },
      {
        title: "Batch Scan",
        description: "You can easily scan a batch of barcodes and QR-codes into a preferred list.",
        icon: IoScan,
      },
      {
        title: "Export Codes",
        description: "You can export codes from the list view, as well as in the 'History' page.",
        icon: IoSend,
      },
    ],
  },
  {
    id: "history",
    label: "History",
    title: "Find your recent codes.",
    screenshotUrl: "/images/codecore/screenshots/history-b.webp",
    features: [
      {
        title: "Look at your scanned codes",
        description: "The app will keep track of your recently scanned codes.",
        icon: FaHistory,
      },
      {
        title: "Export Codes",
        description: "You can easily export codes, similarly to what can in the 'My Codes' page.",
        icon: IoSend,
      },
    ],
  },
];

export default function CodeCore() {
  return (
    <ProductLandingPage
      projectId="codecore"
      name="CodeCore"
      headline="the perfect app for everything code related"
      description="Scan, save, and organize barcodes & QR codes effortlessly. Your personal code manager, always at your fingertips! Perfect for shopping, event tickets, loyalty cards, and more."
      heroImage="/images/codecore/frontpage.webp"
      logo="/images/codecore/logo.svg"
      logoVariant="codecore"
      views={views}
      legalLinks={[
        {href: "/codecore/privacy-policy", label: "Privacy Policy"},
        {href: "/codecore/manage-data", label: "Manage Data"},
      ]}
    />
  );
}
