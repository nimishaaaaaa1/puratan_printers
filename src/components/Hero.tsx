import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Craftsmanship Meets <br />
            <span className={styles.highlight}>Modern Technology</span>
          </h1>
          <p className={styles.subtitle}>
            Puratan Printers combines traditional printing techniques with cutting-edge digital solutions to create exceptional print materials that stand out.
          </p>
          <div className={styles.buttons}>
            <Link href="/auth/register" className={styles.primaryButton}>
              Start Your Project
            </Link>
            <Link href="#services" className={styles.secondaryButton}>
              Explore Services
            </Link>
          </div>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>45+</span>
              <span className={styles.statLabel}>Years Experience</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>1000+</span>
              <span className={styles.statLabel}>Happy Clients</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>5000+</span>
              <span className={styles.statLabel}>Projects Completed</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/hero-image.jpg" 
            alt="Traditional printing press" 
            width={600}
            height={700}
            className={styles.heroImage}
            priority
          />
          <div className={styles.imageBg}></div>
        </div>
      </div>
      <div className={styles.scrollDown}>
        <a href="#about">
          <span className={styles.scrollText}>Scroll Down</span>
          <span className={styles.scrollIcon}></span>
        </a>
      </div>
    </section>
  );
} 