"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/FeaturesSection.module.css';

export default function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Craftsmanship Meets Innovation</h2>
          <p>We blend traditional printing expertise with modern technology to create exceptional products.</p>
        </div>
        
        <div className={styles.featureRow}>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>Premium Paper & Materials</h3>
            <p className={styles.featureDescription}>
              Our products feature high-quality papers and finishes for professional results.
              Each material is carefully selected to ensure your printed materials make a lasting impression through both
              visual appeal and tactile experience.
            </p>
            <Link href="/materials" className={styles.featureLink}>
              Explore our materials
            </Link>
          </div>
          <div className={styles.featureImageContainer}>
            <Image 
              src="https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Premium paper materials" 
              fill
              className={styles.featureImage}
            />
          </div>
        </div>
        
        <div className={styles.elegantProductShowcase}>
          <div className={styles.elegantProductHeading}>
            <h3>Print Services</h3>
            <Link href="/products" className={styles.viewAllLink}>View all</Link>
          </div>
          
          <div className={styles.elegantProductGrid}>
            <Link href="/products/visiting-cards" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <path d="M65 35H35C33.3431 35 32 36.3431 32 38V62C32 63.6569 33.3431 65 35 65H65C66.6569 65 68 63.6569 68 62V38C68 36.3431 66.6569 35 65 35Z" stroke="white" strokeWidth="2"/>
                  <path d="M40 45H60M40 50H55M40 55H50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Visiting Cards</h4>
            </Link>
            
            <Link href="/products/bill-books" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <path d="M35 30H65C66.6569 30 68 31.3431 68 33V67C68 68.6569 66.6569 70 65 70H35C33.3431 70 32 68.6569 32 67V33C32 31.3431 33.3431 30 35 30Z" stroke="white" strokeWidth="2"/>
                  <path d="M40 40H60M40 45H60M40 50H60M40 55H60M40 60H50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Bill Books</h4>
            </Link>
            
            <Link href="/products/brochures" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <path d="M30 35L50 25L70 35L50 45L30 35Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 45L50 55L70 45" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 55L50 65L70 55" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h4>Brochures</h4>
            </Link>
            
            <Link href="/products/magazines" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <path d="M35 30H65C66.6569 30 68 31.3431 68 33V67C68 68.6569 66.6569 70 65 70H35C33.3431 70 32 68.6569 32 67V33C32 31.3431 33.3431 30 35 30Z" stroke="white" strokeWidth="2"/>
                  <path d="M40 40H60M40 45H60M40 50H60M40 55H60M40 60H50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M32 40H68" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Magazines</h4>
            </Link>
          </div>
          
          <div className={styles.elegantProductGrid}>
            <Link href="/products/annual-reports" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <path d="M35 30H65C66.6569 30 68 31.3431 68 33V67C68 68.6569 66.6569 70 65 70H35C33.3431 70 32 68.6569 32 67V33C32 31.3431 33.3431 30 35 30Z" stroke="white" strokeWidth="2"/>
                  <path d="M45 40H55M45 50H55M45 60H55" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="40" y="38" width="20" height="4" rx="1" stroke="white" strokeWidth="2"/>
                  <rect x="40" y="48" width="20" height="4" rx="1" stroke="white" strokeWidth="2"/>
                  <rect x="40" y="58" width="20" height="4" rx="1" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Annual Reports</h4>
            </Link>
            
            <Link href="/products/catalogues" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <rect x="30" y="30" width="40" height="40" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M35 45H65M35 55H65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M45 30V70" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Catalogues</h4>
            </Link>
            
            <Link href="/products/newsletters" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <rect x="30" y="30" width="40" height="40" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M35 40H65M35 45H65M35 50H65M35 55H65M35 60H50" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h4>Newsletters</h4>
            </Link>
            
            <Link href="/products/posters" className={styles.elegantProductItem}>
              <div className={styles.elegantProductIcon}>
                <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="45" fill="var(--primary-color)"/>
                  <rect x="30" y="25" width="40" height="50" rx="2" stroke="white" strokeWidth="2"/>
                  <path d="M35 35H65M35 65H65" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="40" y="40" width="20" height="20" rx="1" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
              <h4>Posters</h4>
            </Link>
          </div>
        </div>
        
        <div className={`${styles.featureRow} ${styles.reverse}`}>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>Professional Design Services</h3>
            <p className={styles.featureDescription}>
              Our expert designers use industry-leading software to bring your vision to life. Whether you need 
              custom business cards, stationery, or marketing materials, we offer personalized service to 
              ensure your printed products stand out with professionalism and style.
            </p>
            <Link href="/design-services" className={styles.featureLink}>
              Learn about our design services
            </Link>
          </div>
          <div className={styles.featureImageContainer}>
            <Image 
              src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Professional design services" 
              fill
              className={styles.featureImage}
            />
          </div>
        </div>
        
        <div className={styles.featureRow}>
          <div className={styles.featureContent}>
            <h3 className={styles.featureTitle}>Traditional Printing Techniques</h3>
            <p className={styles.featureDescription}>
              From letterpress to offset printing, we specialize in both traditional and modern printing techniques.
              Our skilled craftsmen combine time-honored methods with state-of-the-art technology
              to deliver exceptional quality for every project.
            </p>
            <Link href="/printing-techniques" className={styles.featureLink}>
              Discover our printing techniques
            </Link>
          </div>
          <div className={styles.featureImageContainer}>
            <Image 
              src="https://images.unsplash.com/photo-1598618253208-d75408cee680?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Traditional printing techniques" 
              fill
              className={styles.featureImage}
            />
          </div>
        </div>
        
        <div className={styles.trustBadges}>
          <div className={styles.trustBadge}>
            <div className={styles.trustBadgeIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 12l2 2 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className={styles.trustBadgeTitle}>Premium Quality</h4>
            <p className={styles.trustBadgeDescription}>Exceptional materials and craftsmanship in every product</p>
          </div>
          
          <div className={styles.trustBadge}>
            <div className={styles.trustBadgeIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7l10 5 10-5-10-5z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className={styles.trustBadgeTitle}>Expert Design</h4>
            <p className={styles.trustBadgeDescription}>Professional templates and custom design services</p>
          </div>
          
          <div className={styles.trustBadge}>
            <div className={styles.trustBadgeIcon}>
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h4 className={styles.trustBadgeTitle}>Fast Delivery</h4>
            <p className={styles.trustBadgeDescription}>Quick turnaround times with reliable shipping</p>
          </div>
        </div>
      </div>
    </section>
  );
} 