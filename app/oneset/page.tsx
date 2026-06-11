import common from "@/app/common.module.css";
import styles from "@/app/legal.module.css";

export default function OneSet() {
  return (
    <div className={styles.page}>
      <title>OneSet - BySaether</title>
      <header className={styles.header}>
        <span id={"intersector"} />
        <h1>OneSet</h1>
        <p>
          OneSet is a fitness and habit support app from BySaether. These pages provide the legal information for
          using the app and its subscription features.
        </p>
      </header>
      <main className={styles.main}>
        <div className={common.ctas}>
          <a className={common.primary} href={"/oneset/privacy-policy"}>Privacy Policy</a>
          <a className={common.secondary} href={"/oneset/terms-of-service"}>Terms of Service</a>
        </div>
      </main>
    </div>
  );
}
