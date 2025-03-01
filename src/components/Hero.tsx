"use client";

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
            Print <span className={styles.highlight}>Reimagined</span>
          </h1>
          <p className={styles.subtitle}>
            Traditional craftsmanship meets modern technology
          </p>
          <div className={styles.buttons}>
            <Link href="/auth/register" className={styles.primaryButton}>
              Start Project
            </Link>
            <Link href="#services" className={styles.secondaryButton}>
              Our Services
            </Link>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/hero-image.jpg" 
            alt="Vintage letterpress printing" 
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
          <span className={styles.scrollIcon}></span>
        </a>
      </div>
    </section>
  );
} 