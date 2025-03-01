"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>Puratan Printers</span>
          </Link>
        </div>

        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={styles.hamburger}></span>
        </button>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.active : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <Link href="/" className={styles.navLink}>Home</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#about" className={styles.navLink}>About</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#services" className={styles.navLink}>Services</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/auth/login" className={styles.loginButton}>Login</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 