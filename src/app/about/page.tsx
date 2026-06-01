"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/About.module.css';

// Timeline events
const historyTimeline = [
  {
    year: '1995',
    title: 'Humble Beginnings',
    description: 'Puratan Printers began as a small letterpress shop in Ballabgarh, focusing on business cards and wedding invitations.'
  },
  {
    year: '2010',
    title: 'Expansion',
    description: 'We expanded our services and integrated modern digital printing technology while maintaining our commitment to traditional techniques.'
  },
  {
    year: '2018',
    title: 'Eco-Friendly Initiative',
    description: 'We launched our eco-friendly printing program, offering sustainable paper options and environmentally responsible practices.'
  },
  {
    year: '2023',
    title: 'Online Platform',
    description: 'Our new digital platform brings the art of fine printing to the online world, making our services more accessible than ever.'
  }
];

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Our Story</h1>
          <p>Blending traditional craftsmanship with modern innovation since 1995</p>
        </div>
      </section>

      <section className={styles.missionSection}>
        <div className={styles.container}>
          <div className={styles.missionContent}>
            <h2>Our Mission</h2>
            <p className={styles.missionStatement}>
              "To preserve the art of fine printing while embracing innovation, delivering exceptional quality that honors tradition and meets modern needs."
            </p>
            <div className={styles.valuesGrid}>
              <div className={styles.valueCard}>
                <h3>Craftsmanship</h3>
                <p>We believe in the value of skilled hands and meticulous attention to detail in every project.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Quality</h3>
                <p>We never compromise on materials or processes, ensuring the highest standard in every print.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Innovation</h3>
                <p>We continuously explore new techniques and technologies to enhance our traditional methods.</p>
              </div>
              <div className={styles.valueCard}>
                <h3>Sustainability</h3>
                <p>We are committed to environmentally responsible practices throughout our production process.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.historySection}>
        <div className={styles.container}>
          <h2>Our History</h2>
          <div className={styles.timeline}>
            {historyTimeline.map((event, index) => (
              <div key={index} className={styles.timelineEvent}>
                <div className={styles.timelineYear}>{event.year}</div>
                <div className={styles.timelineContent}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.craftSection}>
        <div className={styles.container}>
          <div className={styles.craftContent}>
            <div className={styles.craftText}>
              <h2>The Art of Printing</h2>
              <p>At Puratan Printers, we believe that printing is more than just putting ink on paper—it's an art form that combines technical precision with creative vision.</p>
              <p>Our master printers have decades of experience in traditional techniques like letterpress, offset, and screen printing, which they combine with modern digital methods to achieve the perfect result for each project.</p>
              <Link href="/products" className={styles.craftLink}>
                Explore Our Products
              </Link>
            </div>
            <div className={styles.craftImage}>
              <Image
                src="https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Traditional printing press"
                width={500}
                height={400}
                className={styles.craftPhoto}
              />
            </div>
          </div>
        </div>
      </section>


<section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Experience the Puratan Difference</h2>
            <p>Ready to bring your printing project to life with the perfect blend of tradition and innovation?</p>
            <div className={styles.ctaButtons}>
              <Link href="/products" className={styles.primaryButton}>
                Explore Our Products
              </Link>
              <Link href="/contact" className={styles.secondaryButton}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
