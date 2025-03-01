"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState("2023");
  
  useEffect(() => {
    // Update the year on the client side only
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Puratan Printers</h3>
            <p className={styles.description}>
              Bridging traditional printing craftsmanship with modern technology since 1975.
            </p>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><Link href="#services">Letterpress</Link></li>
              <li><Link href="#services">Screen Printing</Link></li>
              <li><Link href="#services">Digital Printing</Link></li>
              <li><Link href="#services">Design Services</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Connect</h3>
            <ul className={styles.socialLinks}>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>Puratan Printers &copy; {currentYear} | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
} 