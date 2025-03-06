"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Services.module.css';

// Services data
const services = [
  {
    id: 'digital-printing',
    title: 'Digital Printing',
    description: 'High-quality digital printing for short to medium runs with quick turnaround times.',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Fast turnaround times',
      'Variable data printing',
      'Consistent color quality',
      'Cost-effective for small runs',
      'Wide range of paper options'
    ],
    applications: [
      'Business cards',
      'Brochures',
      'Flyers',
      'Postcards',
      'Booklets'
    ]
  },
  {
    id: 'offset-printing',
    title: 'Offset Printing',
    description: 'Traditional offset lithography for premium quality and cost-effective large print runs.',
    image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Exceptional print quality',
      'Pantone color matching',
      'Cost-effective for large runs',
      'Wide range of paper options',
      'Special inks available'
    ],
    applications: [
      'Catalogs',
      'Magazines',
      'Books',
      'Packaging',
      'Marketing materials'
    ]
  },
  {
    id: 'large-format',
    title: 'Large Format Printing',
    description: 'Eye-catching large format prints for displays, signage, and promotional materials.',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'High-resolution printing',
      'Indoor and outdoor options',
      'Durable materials',
      'Custom sizes available',
      'Quick turnaround'
    ],
    applications: [
      'Posters',
      'Banners',
      'Signage',
      'Trade show displays',
      'Window graphics'
    ]
  },
  {
    id: 'specialty-printing',
    title: 'Specialty Printing',
    description: 'Premium specialty printing techniques to add dimension, texture, and luxury to your prints.',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Letterpress printing',
      'Foil stamping',
      'Embossing and debossing',
      'Spot UV coating',
      'Die-cutting'
    ],
    applications: [
      'Luxury business cards',
      'Wedding invitations',
      'Premium packaging',
      'Certificates',
      'Special event materials'
    ]
  },
  {
    id: 'packaging',
    title: 'Packaging & Labels',
    description: 'Custom packaging and label solutions that protect your products and enhance your brand.',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Custom box designs',
      'Product labels',
      'Eco-friendly options',
      'Prototype development',
      'Various finishing options'
    ],
    applications: [
      'Product packaging',
      'Food labels',
      'Retail boxes',
      'Gift packaging',
      'Promotional packaging'
    ]
  },
  {
    id: 'design-services',
    title: 'Design Services',
    description: 'Professional design services to help you create impactful print materials that achieve your goals.',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    features: [
      'Logo and brand identity',
      'Print layout design',
      'Packaging design',
      'Illustration services',
      'File preparation'
    ],
    applications: [
      'Brand identity',
      'Marketing materials',
      'Packaging design',
      'Publication design',
      'Signage design'
    ]
  }
];

// Process steps
const processSteps = [
  {
    number: '01',
    title: 'Consultation',
    description: 'We begin with a detailed consultation to understand your project requirements, goals, and timeline.'
  },
  {
    number: '02',
    title: 'Design & Proofing',
    description: 'Our design team creates or prepares your files, and provides proofs for your approval before printing.'
  },
  {
    number: '03',
    title: 'Production',
    description: 'Once approved, your project moves to production where our expert printers bring it to life with precision.'
  },
  {
    number: '04',
    title: 'Quality Control',
    description: 'Every project undergoes rigorous quality checks to ensure it meets our high standards before delivery.'
  },
  {
    number: '05',
    title: 'Delivery',
    description: 'Your finished project is carefully packaged and delivered to your specified location on time.'
  }
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const toggleService = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  return (
    <div className={styles.servicesPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Our Services</h1>
          <p>Discover our comprehensive range of printing services designed to bring your vision to life with exceptional quality and craftsmanship.</p>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2>Craftsmanship Meets Technology</h2>
            <p>At Puratan Printers, we blend traditional printing expertise with modern technology to deliver exceptional quality for every project. Our comprehensive range of services ensures that we can meet all your printing needs under one roof.</p>
            <p>From digital and offset printing to specialty techniques and custom packaging, our team of experts is dedicated to bringing your vision to life with precision and care.</p>
          </div>
        </div>
      </section>

      <section className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.servicesGrid}>
            {services.map(service => (
              <div 
                key={service.id} 
                className={`${styles.serviceCard} ${activeService === service.id ? styles.active : ''}`}
                onClick={() => toggleService(service.id)}
              >
                <div className={styles.serviceImageContainer}>
                  <Image 
                    src={service.image} 
                    alt={service.title}
                    width={400}
                    height={300}
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceInfo}>
                  <h3>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  
                  <div className={styles.serviceDetails}>
                    <div className={styles.serviceFeatures}>
                      <h4>Features</h4>
                      <ul>
                        {service.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className={styles.serviceApplications}>
                      <h4>Applications</h4>
                      <ul>
                        {service.applications.map((application, index) => (
                          <li key={index}>{application}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <Link href={`/services/${service.id}`} className={styles.serviceLink}>
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2>Our Process</h2>
          <p className={styles.processIntro}>We follow a structured process to ensure your project is completed to the highest standards, on time and within budget.</p>
          
          <div className={styles.processSteps}>
            {processSteps.map(step => (
              <div key={step.number} className={styles.processStep}>
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.qualitySection}>
        <div className={styles.container}>
          <div className={styles.qualityContent}>
            <div className={styles.qualityText}>
              <h2>Our Commitment to Quality</h2>
              <p>Quality is at the heart of everything we do at Puratan Printers. We use only the finest materials and state-of-the-art equipment to ensure exceptional results for every project.</p>
              <p>Our team of experienced craftsmen takes pride in their work, paying meticulous attention to detail from file preparation to final delivery.</p>
              <ul className={styles.qualityList}>
                <li>Premium materials from trusted suppliers</li>
                <li>Rigorous quality control at every stage</li>
                <li>Color calibration for consistent results</li>
                <li>Regular equipment maintenance and upgrades</li>
                <li>Continuous training for our team</li>
              </ul>
            </div>
            <div className={styles.qualityImage}>
              <Image 
                src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Quality printing process"
                width={500}
                height={400}
                className={styles.qualityPhoto}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Project?</h2>
            <p>Contact us today at <a href="tel:+919711476514" style={{color: 'white', textDecoration: 'underline'}}>+91 9711476514</a> or <a href="mailto:dpkchanda@gmail.com" style={{color: 'white', textDecoration: 'underline'}}>dpkchanda@gmail.com</a> to discuss your printing needs and discover how our services can help bring your vision to life.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Get a Quote
              </Link>
              <Link href="/portfolio" className={styles.secondaryButton}>
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 