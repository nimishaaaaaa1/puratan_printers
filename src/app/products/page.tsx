"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Products.module.css';

// Product categories and items
const productCategories = [
  {
    id: 'leaflets',
    name: 'Leaflets',
    description: 'Printed leaflets for promotions, notices, and local campaigns.',
    items: [
      {
        id: 'leaflets',
        name: 'Leaflets',
        description: 'Clear, readable leaflets for handouts and announcements',
        image: '/images/products/colorful-flyers.jpg'
      }
    ]
  },
  {
    id: 'stickers',
    name: 'Stickers',
    description: 'Custom stickers for labels, packaging, and promotions.',
    items: [
      {
        id: 'stickers',
        name: 'Stickers',
        description: 'Durable printed stickers in practical sizes',
        image: '/images/products/custom-stickers.jpg'
      }
    ]
  },
  {
    id: 'billbooks',
    name: 'Billbooks',
    description: 'Billbooks and receipt books for everyday business use.',
    items: [
      {
        id: 'billbooks',
        name: 'Billbooks',
        description: 'Numbered billbooks and receipt books for shops and offices',
        image: '/images/products/custom-bill-books.jpg'
      }
    ]
  },
  {
    id: 'posters',
    name: 'Posters',
    description: 'Posters for notices, events, shops, and promotions.',
    items: [
      {
        id: 'posters',
        name: 'Posters',
        description: 'Bright posters for indoor and outdoor communication',
        image: '/images/products/posters.jpg'
      }
    ]
  },
  {
    id: 'diaries',
    name: 'Diaries',
    description: 'Printed diaries for offices, schools, and organizations.',
    items: [
      {
        id: 'diaries',
        name: 'Diaries',
        description: 'Useful diaries with clean printing and finishing',
        image: '/images/products/planners.jpg'
      }
    ]
  },
  {
    id: 'report-cards',
    name: 'Report Cards',
    description: 'Report cards for schools, institutes, and coaching centers.',
    items: [
      {
        id: 'report-cards',
        name: 'Report Cards',
        description: 'Neatly printed report cards with institution details',
        image: '/images/products/letterheads.jpg'
      }
    ]
  },
  {
    id: 'notebooks',
    name: 'Notebooks',
    description: 'Printed notebooks for schools, offices, and custom use.',
    items: [
      {
        id: 'notebooks',
        name: 'Notebooks',
        description: 'Notebooks with reliable binding and crisp printing',
        image: '/images/products/notebooks.jpg'
      }
    ]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(productCategories[0].id);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const activeProducts = productCategories.find(category => category.id === activeCategory);

  return (
    <div className={styles.productsPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Our Products</h1>
          <p>Discover our wide range of high-quality printing products for your business and personal needs.</p>
        </div>
      </section>

      <div className={styles.container}>
        <nav className={styles.categoryNav}>
          <ul>
            {productCategories.map(category => (
              <li
                key={category.id}
                className={activeCategory === category.id ? styles.active : ''}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </nav>

        {activeProducts && (
          <>
            <div className={styles.categoryHeader}>
              <h2>{activeProducts.name}</h2>
              <p>{activeProducts.description}</p>
            </div>

            <div className={styles.productGrid}>
              {activeProducts.items.map(product => (
                <div key={product.id} className={styles.productCard}>
                  <div className={styles.productImageContainer}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={400}
                      height={300}
                      className={styles.productImage}
                    />
                  </div>
                  <div className={styles.productInfo}>
                    <h3 className={styles.productName}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                    <Link href={`/products/${activeCategory}/${product.id}`} className={styles.productLink}>
                      View Details
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

    </div>
  );
}
