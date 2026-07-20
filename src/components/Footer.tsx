import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <Link href="/" className={styles.logo}>rozaq<span>.</span></Link>
          <div className={styles.nav}>
            <Link href="/work">Work</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2026 Muhammad Rozaq Ma'ruf</span>
          <span>Designed & built from scratch</span>
        </div>
      </div>
    </footer>
  );
}
