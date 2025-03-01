"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/logo.png" 
                alt="Puratan Printers Logo" 
                width={40} 
                height={40} 
                className={styles.logoImage}
              />
              <span className={styles.logoText}>Puratan Printers</span>
            </div>
          </Link>
        </div>

        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
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
              <Link href="#portfolio" className={styles.navLink}>Portfolio</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="#contact" className={styles.navLink}>Contact</Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/auth/login" className={styles.loginButton}>
                Login
              </Link>
            </li>
            <li className={styles.navItem}>
              <Link href="/auth/register" className={styles.registerButton}>
                Get Started
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 