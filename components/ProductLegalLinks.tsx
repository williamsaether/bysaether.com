import Link from "next/link";
import styles from "./ProductLegalLinks.module.css";

type ProductLink = {
  href: string;
  label: string;
};

type ProductLegalLinksProps = {
  links: ProductLink[];
};

export default function ProductLegalLinks({links}: ProductLegalLinksProps) {
  return (
    <nav className={styles.container} aria-label="Legal links">
      {links.map(link => (
        <Link key={link.href} href={link.href}>
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
