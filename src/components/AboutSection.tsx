import React from 'react';
import Image from 'next/image';
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className="section-title">Our Story</h2>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.featureIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <div className={styles.featureText}>
                  <h3>Quality Craftsmanship</h3>
                  <p>Decades of expertise in traditional printing</p>
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
                  <p>On-time delivery for all projects</p>
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
                  <p>A loyal client base since 1975</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className={styles.imageGrid}>
            <div className={styles.mainImage}>
              <Image 
                src="https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80" 
                alt="Traditional printing press" 
                width={500}
                height={600}
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.smallImagesContainer}>
              <div className={styles.smallImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1622645636770-11fbf0611463?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                  alt="Printing detail" 
                  width={240}
                  height={240}
                  className={styles.aboutImageSmall}
                />
              </div>
              <div className={styles.smallImage}>
                <Image 
                  src="https://images.unsplash.com/photo-1611079829529-fe31a9547fa7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80" 
                  alt="Printing workshop" 
                  width={240}
                  height={240}
                  className={styles.aboutImageSmall}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 