import React from 'react';
import styles from '../styles/ServicesSection.module.css';

const services = [
  {
    id: 1,
    title: 'Letterpress Printing',
    description: 'Experience the tactile quality of letterpress printing for your business cards, invitations, and stationery.',
    icon: '🖨️'
  },
  {
    id: 2,
    title: 'Screen Printing',
    description: 'High-quality screen printing for posters, art prints, and promotional materials with vibrant colors.',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'Digital Printing',
    description: 'Fast and efficient digital printing for short runs and quick turnaround projects with consistent quality.',
    icon: '💻'
  },
  {
    id: 4,
    title: 'Offset Printing',
    description: 'Traditional offset printing for larger runs of brochures, catalogs, and marketing materials.',
    icon: '📚'
  },
  {
    id: 5,
    title: 'Binding & Finishing',
    description: 'Professional binding and finishing services including perfect binding, saddle stitching, and more.',
    icon: '📔'
  },
  {
    id: 6,
    title: 'Design Services',
    description: 'Expert design services to help you create stunning print materials that stand out.',
    icon: '✏️'
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Services</h2>
        
        <div className={styles.grid}>
          {services.map(service => (
            <div key={service.id} className={styles.serviceCard}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 