import React from 'react';
import Image from 'next/image';
import styles from '../styles/PortfolioSection.module.css';

const portfolioItems = [
  {
    id: 1,
    title: 'Business Cards',
    image: 'https://images.unsplash.com/photo-1572502641520-00885a8b1c68?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80',
    category: 'Letterpress'
  },
  {
    id: 2,
    title: 'Wedding Invitations',
    image: 'https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1169&q=80',
    category: 'Letterpress'
  },
  {
    id: 3,
    title: 'Art Prints',
    image: 'https://images.unsplash.com/photo-1579762593175-20226054cad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1236&q=80',
    category: 'Screen Printing'
  },
  {
    id: 4,
    title: 'Packaging',
    image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Offset'
  },
  {
    id: 5,
    title: 'Brochures',
    image: 'https://images.unsplash.com/photo-1574278687660-28cc561cc76f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Digital'
  },
  {
    id: 6,
    title: 'Custom Notebooks',
    image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
    category: 'Binding'
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className="section-title">Our Work</h2>
        </div>
        
        <div className={styles.grid}>
          {portfolioItems.map(item => (
            <div key={item.id} className={styles.portfolioItem}>
              <div className={styles.imageContainer}>
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={400} 
                  height={300}
                  className={styles.portfolioImage}
                />
                <div className={styles.overlay}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.itemCategory}>{item.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 