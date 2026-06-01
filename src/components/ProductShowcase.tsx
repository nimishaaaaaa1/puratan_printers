"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductShowcase.module.css';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'promotion', name: 'Promotion' },
  { id: 'business', name: 'Business' },
  { id: 'school-office', name: 'School & Office' }
];

const products = [
  {
    id: 1,
    name: 'Leaflets',
    description: 'Clear, readable leaflets for handouts, announcements, and local promotions.',
    image: '/images/products/colorful-flyers.jpg',
    category: 'promotion'
  },
  {
    id: 2,
    name: 'Stickers',
    description: 'Durable printed stickers for labels, packaging, and brand communication.',
    image: '/images/products/custom-stickers.jpg',
    category: 'promotion'
  },
  {
    id: 3,
    name: 'Billbooks',
    description: 'Numbered billbooks and receipt books for shops, offices, and businesses.',
    image: '/images/products/custom-bill-books.jpg',
    category: 'business'
  },
  {
    id: 4,
    name: 'Posters',
    description: 'Bright posters for notices, events, shops, and promotional displays.',
    image: '/images/products/posters.jpg',
    category: 'promotion'
  },
  {
    id: 5,
    name: 'Diaries',
    description: 'Useful printed diaries for offices, schools, and organizations.',
    image: '/images/products/planners.jpg',
    category: 'school-office'
  },
  {
    id: 6,
    name: 'Report Cards',
    description: 'Neatly printed report cards for schools, institutes, and coaching centers.',
    image: '/images/products/letterheads.jpg',
    category: 'school-office'
  },
  {
    id: 7,
    name: 'Notebooks',
    description: 'Notebooks with reliable binding and crisp printing for everyday use.',
    image: '/images/products/notebooks.jpg',
    category: 'school-office'
  }
];

export default function ProductShowcase() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <section className={styles.productShowcase}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2>Popular products</h2>
          <p>Reliable print essentials for schools, offices, shops, and local businesses.</p>
        </div>

        <div className={styles.categoryTabs}>
          {categories.map(category => (
            <button
              key={category.id}
              className={`${styles.categoryTab} ${activeCategory === category.id ? styles.active : ''}`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className={styles.productGrid}>
          {filteredProducts.map(product => (
            <div key={product.id} className={styles.productCard}>
              <div className={styles.productImageContainer}>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className={styles.productImage}
                />
              </div>
              <div className={styles.productInfo}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.productDescription}>{product.description}</p>
                <Link href={`/products/${product.id}`} className={styles.productLink}>
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <Link href="/products" className={styles.viewAllLink}>
          View All Products
        </Link>
      </div>
    </section>
  );
}
