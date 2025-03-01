import React from 'react';
import Image from 'next/image';
import styles from '../styles/AboutSection.module.css';

export default function AboutSection() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.title}>About Puratan Printers</h2>
        
        <div className={styles.content}>
          <div className={styles.imageContainer}>
            <Image 
              src="/images/printing-press.jpg" 
              alt="Traditional printing press" 
              width={500}
              height={350}
              className={styles.image}
            />
          </div>
          
          <div className={styles.text}>
            <p>
              Founded in 1975, Puratan Printers has been a pioneer in preserving traditional printing techniques while embracing modern technology. Our master craftsmen have decades of experience in letterpress, screen printing, and other traditional methods.
            </p>
            <p>
              We believe in the tactile quality and unique character that traditional printing brings to each piece. At the same time, we leverage digital technology to enhance efficiency, expand creative possibilities, and make our services accessible to a wider audience.
            </p>
            <p>
              Whether you're looking for wedding invitations with that perfect tactile feel, limited edition art prints, or custom business stationery that stands out, our team is dedicated to bringing your vision to life with meticulous attention to detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 