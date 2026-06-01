"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Products.module.css';

// Product categories and items
const productCategories = [
  {
    id: 'visiting-cards',
    name: 'Visiting Cards',
    description: 'Professional business cards to make a lasting first impression.',
    items: [
      {
        id: 'standard-visiting-cards',
        name: 'Standard Visiting Cards',
        description: 'Crisp, professional cards for everyday business use',
        image: '/images/products/standard-business-cards.jpg'
      },
      {
        id: 'premium-visiting-cards',
        name: 'Premium Visiting Cards',
        description: 'High-quality finish cards with premium paper stock',
        image: '/images/products/premium-business-cards.jpg'
      },
      {
        id: 'luxury-visiting-cards',
        name: 'Luxury Visiting Cards',
        description: 'Luxury cards with special finishes like matte, gloss, or UV',
        image: '/images/products/luxury-business-cards.jpg'
      },
      {
        id: 'folded-visiting-cards',
        name: 'Folded Visiting Cards',
        description: 'Folded format cards with more space for information',
        image: '/images/products/folded-business-cards.jpg'
      }
    ]
  },
  {
    id: 'labels',
    name: 'Labels',
    description: 'Custom printed labels for products, packaging, and branding.',
    items: [
      {
        id: 'barcode-labels',
        name: 'Barcode Labels',
        description: 'Accurate barcode labels for inventory and retail use',
        image: '/images/products/barcode-labels.jpg'
      },
      {
        id: 'packaging-labels',
        name: 'Packaging Labels',
        description: 'Attractive labels for product packaging and branding',
        image: '/images/products/packaging-labels-new.jpg'
      }
    ]
  },
  {
    id: 'certificates',
    name: 'Certificates',
    description: 'Professionally printed certificates for schools, institutes, and organizations.',
    items: [
      {
        id: 'certificates',
        name: 'Certificates',
        description: 'Elegant certificates with custom layouts and institution branding',
        image: '/images/products/certificates.jpg'
      }
    ]
  },
  {
    id: 'billbooks',
    name: 'Bill Books',
    description: 'Billbooks and receipt books for everyday business use.',
    items: [
      {
        id: 'billbooks',
        name: 'Bill Books',
        description: 'Numbered billbooks and receipt books for shops and offices',
        image: '/images/products/bill-books.jpg'
      },
      {
        id: 'custom-billbooks',
        name: 'Custom Bill Books',
        description: 'Customised bill books with your business name and logo',
        image: '/images/products/custom-bill-books.jpg'
      }
    ]
  },
  {
    id: 'fee-receipts',
    name: 'Fee Receipts',
    description: 'Fee receipt books for schools, coaching centres, and institutes.',
    items: [
      {
        id: 'fee-receipts',
        name: 'Fee Receipts',
        description: 'Neatly printed fee receipt books with serial numbering',
        image: '/images/products/fee-receipts.jpg'
      }
    ]
  },
  {
    id: 'stickers',
    name: 'Stickers',
    description: 'Custom stickers for labels, packaging, and promotions.',
    items: [
      {
        id: 'custom-stickers',
        name: 'Custom Stickers',
        description: 'Durable printed stickers in practical sizes',
        image: '/images/products/custom-stickers.jpg'
      },
      {
        id: 'large-format-stickers',
        name: 'Large Format Stickers',
        description: 'Large stickers for shops, vehicles, and display boards',
        image: '/images/products/large-format-stickers.jpg'
      }
    ]
  },
  {
    id: 'admission-forms',
    name: 'Admission Forms',
    description: 'Admission and application forms for schools, colleges, and institutions.',
    items: [
      {
        id: 'admission-forms',
        name: 'Admission Forms',
        description: 'Custom printed admission and application forms with institution branding',
        image: '/images/products/admission-forms.jpg'
      }
    ]
  },
  {
    id: 'letterheads',
    name: 'Letterheads',
    description: 'Branded letterheads for professional business correspondence.',
    items: [
      {
        id: 'letterheads',
        name: 'Letterheads',
        description: 'Clean, professional letterheads with your business logo and details',
        image: '/images/products/letterheads.jpg'
      }
    ]
  },
  {
    id: 'envelopes',
    name: 'Envelopes',
    description: 'Printed envelopes with business branding for professional correspondence.',
    items: [
      {
        id: 'envelopes',
        name: 'Branded Envelopes',
        description: 'Envelopes printed with your business name, logo, and address',
        image: '/images/products/envelopes.jpg'
      }
    ]
  },
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
