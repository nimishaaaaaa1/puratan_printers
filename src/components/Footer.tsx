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
            <div className={styles.contactInfo}>
              <p><strong>Address:</strong></p>
              <p>C-526, Chawla Colony,</p>
              <p>Ballabgarh, Faridabad,</p>
              <p>Haryana, India</p>
            </div>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Services</h3>
            <ul className={styles.linkList}>
              <li><Link href="/services/letterpress">Letterpress</Link></li>
              <li><Link href="/services/screen-printing">Screen Printing</Link></li>
              <li><Link href="/services/digital-printing">Digital Printing</Link></li>
              <li><Link href="/services/design">Design Services</Link></li>
            </ul>
          </div>
          
          <div className={styles.column}>
            <h3 className={styles.columnTitle}>Contact Us</h3>
            <div className={styles.contactInfo}>
              <p><strong>Proprietor:</strong> Deepak Chanda</p>
              <p><strong>Phone:</strong> <a href="tel:+919711476514">+91 9711476514</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@puratanprinters.com">dpkchanda@gmail.com</a></p>
              <p><strong>Hours:</strong> Mon-Sat: 9:00 AM - 6:00 PM</p>
            </div>
            <ul className={styles.socialLinks}>
              <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className={styles.copyright}>
          <p>Puratan Printers &copy; {currentYear} | All Rights Reserved | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link></p>
        </div>
      </div>
    </footer>
  );
} 