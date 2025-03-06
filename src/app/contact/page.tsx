"use client";

import React, { useState } from 'react';
import styles from '../../styles/Contact.module.css';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        submitted: false,
        error: true,
        message: 'Please fill in all required fields.'
      });
      return;
    }
    
    // Simulate form submission
    // In a real application, you would send this data to your backend
    setTimeout(() => {
      setFormStatus({
        submitted: true,
        error: false,
        message: 'Thank you for your message. We will get back to you shortly.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1000);
  };

  return (
    <div className={styles.contactPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Reach out with any questions about our services.</p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <h2>Get in Touch</h2>
              <p>Have questions about our printing services or need a custom quote? Our team is here to help.</p>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h3>Visit Us</h3>
                  <p>C-526, Chawla Colony,<br />Ballabgarh, Faridabad,<br />Haryana, India</p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h3>Email Us</h3>
                  <p><a href="mailto:dpkchanda@gmail.com">dpkchanda@gmail.com</a></p>
                </div>
              </div>
              
              <div className={styles.infoItem}>
                <div className={styles.infoIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill="currentColor"/>
                  </svg>
                </div>
                <div className={styles.infoContent}>
                  <h3>Call Us</h3>
                  <p><a href="tel:+919711476514">+91 9711476514</a></p>
                </div>
              </div>
              
              <div className={styles.businessHours}>
                <h3>Business Hours</h3>
                <ul>
                  <li><span>Monday - Saturday:</span> 9:00 AM - 6:00 PM</li>
                  <li><span>Sunday:</span> Closed</li>
                </ul>
              </div>
            </div>
            
            <div className={styles.contactForm}>
              <h2>Send Us a Message</h2>
              
              {formStatus.submitted ? (
                <div className={styles.successMessage}>
                  <p>{formStatus.message}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {formStatus.error && (
                    <div className={styles.errorMessage}>
                      <p>{formStatus.message}</p>
                    </div>
                  )}
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="email">Email Address *</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="subject">Subject</label>
                    <select 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>
                      <option value="quote">Request a Quote</option>
                      <option value="info">Product Information</option>
                      <option value="support">Customer Support</option>
                      <option value="feedback">Feedback</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button type="submit" className={styles.submitButton}>
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      <section className={styles.mapSection}>
        <div className={styles.mapContainer}>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3512.8896066330313!2d77.31996!3d28.3401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc0e0000001%3A0x0!2sC-526%2C%20Chawla%20Colony%2C%20Ballabgarh%2C%20Faridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1647870255896!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="Puratan Printers Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
} 