import React from 'react';
import Image from 'next/image';
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className="section-title">About Puratan Printers</h2>
            <p className="section-subtitle">
              A legacy of excellence in traditional printing since 1975.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Quality Craftsmanship</h3>
                  <p>Our master craftsmen have decades of experience in traditional printing techniques.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Timely Delivery</h3>
                  <p>We understand the importance of deadlines and ensure on-time delivery for all projects.</p>
                </div>
              </div>
              
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Customer Satisfaction</h3>
                  <p>Our dedication to customer satisfaction has earned us a loyal client base over the years.</p>
                </div>
              </div>
            </div>
            
            <div className={styles.aboutText}>
              <p>
                Founded in 1975, Puratan Printers has been a pioneer in preserving traditional printing techniques while embracing modern technology. Our master craftsmen have decades of experience in letterpress, screen printing, and other traditional methods.
              </p>
              <p>
                We believe in the tactile quality and unique character that traditional printing brings to each piece. At the same time, we leverage digital technology to enhance efficiency, expand creative possibilities, and make our services accessible to a wider audience.
              </p>
            </div>
          </div>
          
          <div className={styles.imageContainer}>
            <div className={styles.mainImage}>
              <Image 
                src="/images/about-main.jpg" 
                alt="Traditional printing press" 
                width={500}
                height={700}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 