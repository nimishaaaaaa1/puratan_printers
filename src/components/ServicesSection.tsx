import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/ServicesSection.module.css';

const services = [
  {
    id: 1,
    title: 'Letterpress',
    description: 'Tactile quality for business cards & invitations',
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80',
    link: '/services/letterpress'
  },
  {
    id: 2,
    title: 'Screen Printing',
    description: 'Vibrant colors for posters & art prints',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&auto=format&fit=crop&w=2027&q=80',
    link: '/services/screen-printing'
  },
  {
    id: 3,
    title: 'Digital Printing',
    description: 'Fast turnaround for short-run projects',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/services/digital-printing'
  },
  {
    id: 4,
    title: 'Offset Printing',
    description: 'Premium quality for large volume runs',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    link: '/services/offset-printing'
  },
  {
    id: 5,
    title: 'Binding & Finishing',
    description: 'Professional finishing touches',
    image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
    link: '/services/binding'
  },
  {
    id: 6,
    title: 'Design Services',
    description: 'Expert design that stands out',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    link: '/services/design'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className="section-title">Services</h2>
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