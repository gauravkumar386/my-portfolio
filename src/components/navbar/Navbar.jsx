/* eslint-disable react/no-unescaped-entities */
import Link from "next/link"
import styles from '@/styles/Navbar.module.scss'

export default function Navbar(){
  return (
    <div className={styles.navContainer}>
      <div className="logo">
        <Link href="/">Gaurav's Portfolio</Link>
      </div>
      <a href="" className={styles.ctaBtn}>
        Resume
      </a>
    </div>
  );
};