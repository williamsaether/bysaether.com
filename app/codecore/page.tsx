'use client'

import Image from "next/image";
import styles from './codecore.module.css'
import {IoBrowsers, IoImage, IoList, IoQrCode, IoScan, IoSend} from "react-icons/io5";
import {FaHistory} from "react-icons/fa";
import projects from "@/data/projects";
import {useState} from "react";

const pages = [
	{
		index: 0,
		id: "scanner",
		page: "Scanner",
		title: "Scan your codes.",
		screenshotUrl: '/images/codecore/screenshots/scanner-b.webp',
		features: [
			{
				title: "Scan from Gallery",
				description: "With this feature you can scan a code directly from an image in your gallery!",
				icon: IoImage
			},
			{
				title: "Enter Manual Codes",
				description: "You can enter barcodes/QR-codes manually with either the barcode or QR-code icon.",
				icon: IoQrCode
			},
			{
				title: "Open Code in Website",
				description: "The code you scan can be opened in an embedded browser, or via the local browser on your device. You can also specify custom websites for this!",
				icon: IoBrowsers
			},
		]
	},
	{
		index: 1,
		id: "mycodes",
		page: "My Codes",
		title: "Explore all your codes.",
		screenshotUrl: '/images/codecore/screenshots/mycodes-b.webp',
		features: [
			{
				title: "Create barcodes and QR-codes",
				description: "Manually create your own codes by hitting the plus button top left.",
				icon: IoQrCode
			},
			{
				title: "Organize in Lists",
				description: "When creating your codes, you can put them in lists, for easier management.",
				icon: IoList
			},
			{
				title: "Batch Scan",
				description: "You can easily scan a batch of barcodes and QR-codes into a preferred list.",
				icon: IoScan
			},
			{
				title: "Export Codes",
				description: "You can export codes from the list view, as well as in the 'History' page.",
				icon: IoSend
			},
		]
	},
	{
		index: 2,
		id: "history",
		page: "History",
		title: "Find your recent codes.",
		screenshotUrl: '/images/codecore/screenshots/history-b.webp',
		features: [
			{
				title: "Look at your scanned codes",
				description: "The app will keep track of your recently scanned codes.",
				icon: FaHistory
			},
			{
				title: "Export Codes",
				description: "You can easily export codes, similarly to what can in the 'My Codes' page.",
				icon: IoSend
			},
		]
	},
]

export default function CodeCore() {
	const [currentPage, setCurrentPage] = useState<number>(0);

	return (
		<div>
			<section className={styles.front}>
				<Image
					src={'/images/codecore/frontpage.webp'}
					alt={''}
					width={1500}
					height={2000}
					quality={100}
					priority
				/>
				<div className={styles.appDescription}>
					<div className={styles.logoContainer}>
						<Image
							src={'/images/codecore/logo.svg'}
							alt={'CodeCore logo'}
							width={200}
							height={200}
						/>
						<span>CodeCore</span>
					</div>
					<h1>the perfect app for everything code related</h1>
					<p>
						Scan, save, and organize barcodes & QR codes effortlessly. Your personal code manager, always at your
						fingertips!
						Perfect for shopping, event tickets, loyalty cards, and more.
					</p>
					<a href={projects.find(p => p.id === 'codecore')!.appStore!.apple}>
            <Image
              src={'/images/appstore/apple-darkmode.svg'}
              alt={`Apple App Store Link`}
              width={150}
              height={50}
              style={{objectFit: "contain", marginTop: "1em"}}
            />
          </a>
					<span id="intersector"/>
				</div>
			</section>
			<section className={styles.section}>
				<div className={styles.switchView}>
					<div className={styles.switchContainer}>
						{pages.map(page => (
							<button
								key={page.id}
								className={`${styles.switchButton} ${pages[currentPage].id === page.id ? styles.active : ''}`}
								onClick={() => {
									setCurrentPage(pages.findIndex(p => p.id === page.id))
								}}>
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
									<feature.icon/>
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

							let positionClass = "";
							if (index === currentPage) positionClass = styles.middle;
							else if (index === prevIndex) positionClass = styles.left;
							else if (index === nextIndex) positionClass = styles.right;

							return (
								<Image
									src={page.screenshotUrl}
									alt={'Screenshot of app'}
									width={492}
									height={1000}
									quality={100}
									key={page.id}
									className={positionClass}
								/>
							)
						})}
					</div>
				</div>
			</section>
		</div>
	)
}