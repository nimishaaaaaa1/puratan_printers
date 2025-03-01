"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/ProductShowcase.module.css';

const categories = [
  { id: 'all', name: 'All Products' },
  { id: 'business-cards', name: 'Business Cards' },
  { id: 'postcards', name: 'Postcards' },
  { id: 'stationery', name: 'Stationery' },
  { id: 'marketing', name: 'Marketing Materials' }
];

const products = [
  {
    id: 1,
    name: 'Original Business Cards',
    description: 'Thicker than your average card, Original Business Cards set a new standard for "standard" business cards.',
    price: 'From $19.99',
    image: 'https://images.unsplash.com/photo-1589041127168-9b1915fd1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'business-cards'
  },
  {
    id: 2,
    name: 'Premium Business Cards',
    description: 'Professional quality cards with special finishes like Spot Gloss, Gold Foil and Silver Foil.',
    price: 'From $29.99',
    image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'business-cards'
  },
  {
    id: 3,
    name: 'Original Postcards',
    description: 'Great quality AND great value. Whether in gloss or matte, our entry-level Postcard paper packs a punch.',
    price: 'From $14.99',
    image: 'https://images.unsplash.com/photo-1530989109-7aa8e4318cc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'postcards'
  },
  {
    id: 4,
    name: 'Premium Postcards',
    description: 'Make an impact by adding Gold or Silver Foil to your Postcards for a professional finish.',
    price: 'From $24.99',
    image: 'https://images.unsplash.com/photo-1622645636770-11fbf0611463?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'postcards'
  },
  {
    id: 5,
    name: 'Bill Books',
    description: 'Professional invoice and receipt books with carbon copies, perfect for businesses of all sizes.',
    price: 'From $24.99',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'stationery'
  },
  {
    id: 6,
    name: 'Custom Notebooks',
    description: 'A professional Notebook with a bookcloth spine for added durability and style.',
    price: 'From $16.99',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'stationery'
  },
  {
    id: 7,
    name: 'Brochures & Flyers',
    description: 'Create eye-catching brochures and flyers with your brand logo, images and colors.',
    price: 'From $22.99',
    image: 'https://images.unsplash.com/photo-1561069934-eee225952461?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'marketing'
  },
  {
    id: 8,
    name: 'Stickers & Labels',
    description: 'Feature your photography or business logo and use for marketing, packaging, or just for fun.',
    price: 'From $9.99',
    image: 'https://images.unsplash.com/photo-1589384267710-7a170981ca78?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'marketing'
  },
  {
    id: 9,
    name: 'Professional Notecards',
    description: 'Premium notecards with a professional feel, perfect for thank you notes and business messages.',
    price: 'From $17.99',
    image: 'https://images.unsplash.com/photo-1618886614638-8e97f0b36283?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    category: 'stationery'
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
          <p>These are tried and true favorites that will have you set to get down to business.</p>
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
                <div className={styles.productPrice}>{product.price}</div>
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