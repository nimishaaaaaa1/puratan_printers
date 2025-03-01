"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroSplit}>
        <div className={styles.heroSplitLeft}>
          <div className={styles.heroContent}>
            <h1>Premium printing for your business</h1>
            <p>Beautifully crafted print products that make a lasting impression.</p>
            
            <div className={styles.ctaButtons}>
              <Link href="/products" className={styles.ctaPrimary}>
                Shop Products
              </Link>
              <Link href="/samples" className={styles.ctaSecondary}>
                Order Samples
              </Link>
            </div>
            
            <div className={styles.trustIndicators}>
              <span className={styles.badge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Premium Quality
              </span>
              <span className={styles.badge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Fast Delivery
              </span>
              <span className={styles.badge}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                100% Satisfaction
              </span>
            </div>
          </div>
        </div>
        
        <div className={styles.heroSplitRight}>
          <Image 
            src="https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Professional printing press machine" 
            fill
            priority
            className={styles.heroImage}
          />
        </div>
      </div>
    </section>
  );
} 