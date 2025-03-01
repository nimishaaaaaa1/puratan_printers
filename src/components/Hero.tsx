import React from 'react';
import Link from 'next/link';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          Traditional Craftsmanship <br />
          <span className={styles.highlight}>Modern Technology</span>
        </h1>
        <p className={styles.subtitle}>
          Puratan Printers bridges the gap between traditional printing techniques and modern digital solutions.
        </p>
        <div className={styles.buttons}>
          <Link href="/auth/register" className={styles.primaryButton}>
            Get Started
          </Link>
          <Link href="#services" className={styles.secondaryButton}>
            Our Services
          </Link>
        </div>
      </div>
    </section>
  );
} 