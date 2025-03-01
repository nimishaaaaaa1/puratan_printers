import React from 'react';
import styles from '../styles/ContactSection.module.css';

export default function ContactSection() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contact Us</h2>
        
        <div className={styles.content}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <h3>Address</h3>
              <p>123 Print Street, Craft District</p>
              <p>Bangalore, Karnataka 560001</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Contact</h3>
              <p>Email: info@puratanprinters.com</p>
              <p>Phone: +91 98765 43210</p>
            </div>
            
            <div className={styles.infoItem}>
              <h3>Hours</h3>
              <p>Monday - Friday: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          
          <form className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 