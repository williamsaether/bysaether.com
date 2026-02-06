import styles from "@/app/legal.module.css"
import {supportEmail} from "@/constants/Constants";

export default function ManageData() {
	return (
		<div className={styles.page}>
			<title>Manage Data - CodeCore</title>
			<header className={styles.header}>
				<span id={"intersector"}/>
				<h1>Manage Your Ad Consent</h1>
				<p className={styles.date}>Updated April 2025</p>
				<p>CodeCore allows users to manage their ad consent settings at any time from within the app.</p>
			</header>
			<main className={styles.main}>
				<p>To change or revoke your ad consent:</p>
				<ol>
					<li><strong>Open the CodeCore app.</strong></li>
					<li><strong>Go to Settings → Manage my data.</strong></li>
					<li><strong>Tap the "Manage My Data" button to reopen the consent dialog.</strong></li>
				</ol>
				<p>This allows you to update your preferences in accordance with GDPR.</p>
				<p><a href={'/privacy-policy'} rel="noopener noreferrer">Privacy Policy</a></p>
			</main>
		</div>
	)
}