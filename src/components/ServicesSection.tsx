import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ServicesSection.module.css';

const services = [
  {
    id: 1,
    title: 'Letterpress Printing',
    description: 'Experience the tactile quality of letterpress printing for your business cards, invitations, and stationery.',
    image: '/images/services/letterpress.jpg',
    link: '/services/letterpress'
  },
  {
    id: 2,
    title: 'Screen Printing',
    description: 'High-quality screen printing for posters, art prints, and promotional materials with vibrant colors.',
    image: '/images/services/screen-printing.jpg',
    link: '/services/screen-printing'
  },
  {
    id: 3,
    title: 'Digital Printing',
    description: 'Fast and efficient digital printing for short runs and quick turnaround projects with consistent quality.',
    image: '/images/services/digital-printing.jpg',
    link: '/services/digital-printing'
  },
  {
    id: 4,
    title: 'Offset Printing',
    description: 'Traditional offset printing for larger runs of brochures, catalogs, and marketing materials.',
    image: '/images/services/offset-printing.jpg',
    link: '/services/offset-printing'
  },
  {
    id: 5,
    title: 'Binding & Finishing',
    description: 'Professional binding and finishing services including perfect binding, saddle stitching, and more.',
    image: '/images/services/binding.jpg',
    link: '/services/binding'
  },
  {
    id: 6,
    title: 'Design Services',
    description: 'Expert design services to help you create stunning print materials that stand out.',
    image: '/images/services/design.jpg',
    link: '/services/design'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            We offer a wide range of printing services combining traditional craftsmanship with modern technology.
          </p>
        </div>
        
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.imageContainer}>
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  width={400} 
                  height={300}
                  className={styles.serviceImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.serviceTitle}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
                <Link href={service.link} className={styles.learnMore}>
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 