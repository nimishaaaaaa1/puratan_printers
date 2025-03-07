"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Products.module.css';
import { Metadata } from 'next';

// Product categories and items
const productCategories = [
  {
    id: 'business-cards',
    name: 'Business Cards',
    description: 'Make a lasting impression with our premium business cards.',
    items: [
      {
        id: 'standard',
        name: 'Standard Business Cards',
        description: 'Professional quality at an affordable price',
        price: 'From ₹999',
        image: '/images/products/standard-business-cards.jpg'
      },
      {
        id: 'premium',
        name: 'Premium Business Cards',
        description: 'Thick stock with elegant finishes',
        price: 'From ₹1,499',
        image: '/images/products/premium-business-cards.jpg'
      },
      {
        id: 'luxury',
        name: 'Luxury Business Cards',
        description: 'Exceptional materials with custom finishes',
        price: 'From ₹2,499',
        image: '/images/products/luxury-business-cards.jpg'
      },
      {
        id: 'folded',
        name: 'Folded Business Cards',
        description: 'Unique folded design for maximum impact',
        price: 'From ₹1,799',
        image: '/images/products/folded-business-cards.jpg'
      }
    ]
  },
  {
    id: 'stationery',
    name: 'Stationery',
    description: 'Complete your brand identity with matching stationery.',
    items: [
      {
        id: 'letterheads',
        name: 'Letterheads',
        description: 'Professional letterheads for your correspondence',
        price: 'From ₹1,299',
        image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'envelopes',
        name: 'Envelopes',
        description: 'Custom printed envelopes in various sizes',
        price: 'From ₹799',
        image: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'notecards',
        name: 'Notecards',
        description: 'Elegant notecards for personal messages',
        price: 'From ₹599',
        image: '/images/products/colorful-notecards.jpg'
      },
      {
        id: 'folders',
        name: 'Presentation Folders',
        description: 'Professional folders for your documents',
        price: 'From ₹1,499',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing Materials',
    description: 'Promote your business with high-quality marketing materials.',
    items: [
      {
        id: 'flyers',
        name: 'Flyers',
        description: 'Vibrant flyers to promote your events',
        price: 'From ₹599',
        image: '/images/products/colorful-flyers.jpg',
      },
      {
        id: 'brochures',
        name: 'Brochures',
        description: 'Informative brochures to showcase your services',
        price: 'From ₹1,099',
        image: '/images/products/brochures.jpg',
      },
      {
        id: 'posters',
        name: 'Posters',
        description: 'Eye-catching posters in various sizes',
        price: 'From ₹899',
        image: '/images/products/posters.jpg',
      },
      {
        id: 'standees',
        name: 'Standees',
        description: 'Freestanding promotional displays',
        price: 'From ₹1,999',
        image: '/images/products/standees.jpg',
      }
    ]
  },
  {
    id: 'billbooks',
    name: 'Bill Books',
    description: 'Professional bill books and invoice pads for your business.',
    items: [
      {
        id: 'standard-billbooks',
        name: 'Standard Bill Books',
        description: 'Basic bill books for small businesses',
        price: 'From ₹499',
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'carbonless-billbooks',
        name: 'Carbonless Bill Books',
        description: 'Multi-copy carbonless bill books',
        price: 'From ₹799',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'custom-billbooks',
        name: 'Custom Bill Books',
        description: 'Fully customized bill books with your branding',
        price: 'From ₹1,299',
        image: '/images/products/custom-bill-books.jpg'
      },
      {
        id: 'receipt-books',
        name: 'Receipt Books',
        description: 'Professional receipt books with numbering',
        price: 'From ₹599',
        image: 'https://images.unsplash.com/photo-1556742031-c6961e8560b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'diaries-planners',
    name: 'Diaries & Planners',
    description: 'Stay organized with our premium diaries and planners.',
    items: [
      {
        id: 'diaries',
        name: 'Corporate Diaries',
        description: 'Professional diaries with custom branding',
        price: 'From ₹699',
        image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'planners',
        name: 'Planners',
        description: 'Daily, weekly, and monthly planners',
        price: 'From ₹599',
        image: 'https://images.unsplash.com/photo-1584473457493-17c4c24290e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'calendars',
        name: 'Calendars',
        description: 'Wall and desk calendars with custom designs',
        price: 'From ₹399',
        image: 'https://images.unsplash.com/photo-1576334682266-3b8910fd4139?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'notebooks',
        name: 'Custom Notebooks',
        description: 'Personalized notebooks with your branding',
        price: 'From ₹499',
        image: 'https://images.unsplash.com/photo-1531346878377-a5be20888e57?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'labels-stickers',
    name: 'Labels & Stickers',
    description: 'Custom labels and stickers for all your packaging needs.',
    items: [
      {
        id: 'packaging-labels',
        name: 'Packaging Labels',
        description: 'Professional labels for product packaging',
        price: 'From ₹499',
        image: 'https://images.unsplash.com/photo-1585559604830-91a5a6e28178?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'stickers',
        name: 'Custom Stickers',
        description: 'Die-cut stickers in various shapes and sizes',
        price: 'From ₹399',
        image: 'https://images.unsplash.com/photo-1535891169584-75bcaf12e964?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'large-format-stickers',
        name: 'Large Format Stickers',
        description: 'Large stickers for walls, windows, and vehicles',
        price: 'From ₹1,499',
        image: 'https://images.unsplash.com/photo-1626118788936-3e8c5b2a3f6f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'barcode-labels',
        name: 'Barcode Labels',
        description: 'Professional barcode labels for inventory',
        price: 'From ₹349',
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'promotional-items',
    name: 'Promotional Items',
    description: 'Effective promotional materials for your marketing campaigns.',
    items: [
      {
        id: 'booklets',
        name: 'Booklets',
        description: 'Multi-page booklets for catalogs and guides',
        price: 'From ₹1,299',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'tent-cards',
        name: 'Tent Cards',
        description: 'Table tent cards for promotions and events',
        price: 'From ₹499',
        image: 'https://images.unsplash.com/photo-1591492654773-6756035a0e64?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'danglers',
        name: 'Danglers',
        description: 'Hanging promotional displays',
        price: 'From ₹699',
        image: 'https://images.unsplash.com/photo-1618886487325-f665032b6352?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'standees',
        name: 'Standees',
        description: 'Freestanding promotional displays',
        price: 'From ₹1,999',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'specialty-items',
    name: 'Specialty Items',
    description: 'Unique printed items for special occasions and purposes.',
    items: [
      {
        id: 'cards',
        name: 'Greeting Cards',
        description: 'Custom greeting cards for all occasions',
        price: 'From ₹599',
        image: 'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'bookmarks',
        name: 'Bookmarks',
        description: 'Elegant bookmarks with custom designs',
        price: 'From ₹299',
        image: 'https://images.unsplash.com/photo-1544982503-9f984c14501a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'menu-cards',
        name: 'Menu Cards',
        description: 'Professional menu cards for restaurants',
        price: 'From ₹899',
        image: 'https://images.unsplash.com/photo-1541533848490-bc8115cd6522?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'wedding-invitations',
        name: 'Wedding Invitations',
        description: 'Elegant wedding invitations and RSVP cards',
        price: 'From ₹1,499',
        image: 'https://images.unsplash.com/photo-1550107528-2d1df71f5d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      }
    ]
  },
  {
    id: 'packaging',
    name: 'Packaging Solutions',
    description: 'Custom packaging solutions for your products.',
    items: [
      {
        id: 'boxes',
        name: 'Custom Boxes',
        description: 'Branded boxes for your products',
        price: 'From ₹1,999',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'bags',
        name: 'Paper Bags',
        description: 'Custom printed paper bags with handles',
        price: 'From ₹1,299',
        image: 'https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'tissue-paper',
        name: 'Tissue Paper',
        description: 'Custom printed tissue paper for packaging',
        price: 'From ₹599',
        image: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
      },
      {
        id: 'gift-wrapping',
        name: 'Gift Wrapping Paper',
        description: 'Custom designed gift wrapping paper',
        price: 'From ₹799',
        image: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
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
                    <p className={styles.productPrice}>{product.price}</p>
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

      <section className={styles.customizationSection}>
        <div className={styles.container}>
          <div className={styles.customizationContent}>
            <h2>Need Custom Printing?</h2>
            <p>We offer custom printing services tailored to your specific requirements. Contact our team to discuss your project.</p>
            <Link href="/customization" className={styles.customizationLink}>
              Explore Customization Options
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 