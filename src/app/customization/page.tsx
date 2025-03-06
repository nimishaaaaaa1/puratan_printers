"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Customization.module.css';

// Customization categories and options
const customizationOptions = [
  {
    id: 'design-services',
    name: 'Design Services',
    description: 'Our expert designers can help bring your vision to life with professional design services.',
    options: [
      {
        id: 'logo',
        name: 'Logo Design',
        description: 'Professional logo design to establish your brand identity.',
        image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Multiple concept options',
          'Unlimited revisions',
          'Vector file formats',
          'Brand guidelines'
        ]
      },
      {
        id: 'branding',
        name: 'Branding',
        description: 'Complete branding packages to establish a cohesive visual identity.',
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Logo design',
          'Color palette',
          'Typography selection',
          'Brand guidelines',
          'Stationery design'
        ]
      },
      {
        id: 'custom',
        name: 'Custom Design',
        description: 'Tailored design solutions for any print project.',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Consultation with designer',
          'Concept development',
          'Multiple revisions',
          'Print-ready files',
          'Digital assets'
        ]
      }
    ]
  },
  {
    id: 'paper',
    name: 'Paper Options',
    description: 'Choose from our wide selection of premium papers to enhance your printed materials.',
    options: [
      {
        id: 'premium',
        name: 'Premium Papers',
        description: 'High-quality papers for a luxurious feel and exceptional print quality.',
        image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Cotton papers',
          'Linen finish',
          'Textured options',
          'Archival quality',
          'Eco-friendly options'
        ]
      },
      {
        id: 'recycled',
        name: 'Recycled Options',
        description: 'Environmentally responsible paper choices without compromising on quality.',
        image: 'https://images.unsplash.com/photo-1585803114088-cd027272106a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          '100% post-consumer waste',
          'Chlorine-free processing',
          'FSC certified',
          'Carbon neutral options',
          'Various textures and finishes'
        ]
      },
      {
        id: 'specialty',
        name: 'Specialty Finishes',
        description: 'Unique paper finishes to make your printed materials stand out.',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Metallic papers',
          'Pearlescent finish',
          'Soft touch coating',
          'Translucent options',
          'Textured surfaces'
        ]
      }
    ]
  },
  {
    id: 'techniques',
    name: 'Printing Techniques',
    description: 'Explore our range of traditional and modern printing techniques to add dimension and character to your prints.',
    options: [
      {
        id: 'letterpress',
        name: 'Letterpress',
        description: 'Traditional relief printing that creates a tactile impression on the paper.',
        image: 'https://images.unsplash.com/photo-1576053139778-7e32f2ae3cfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Deep impression',
          'Handcrafted quality',
          'Premium look and feel',
          'Ideal for business cards and invitations',
          'Multiple color options'
        ]
      },
      {
        id: 'foil',
        name: 'Foil Stamping',
        description: 'Add metallic or pigmented foil to your designs for a luxurious finish.',
        image: 'https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Gold, silver, copper foils',
          'Holographic options',
          'Matte or glossy finish',
          'Combine with other techniques',
          'Custom dies available'
        ]
      },
      {
        id: 'emboss',
        name: 'Embossing',
        description: 'Create raised designs on your paper for a three-dimensional effect.',
        image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
        features: [
          'Blind embossing',
          'Combination with foil',
          'Multi-level options',
          'Custom dies',
          'Works on various paper stocks'
        ]
      }
    ]
  }
];

export default function CustomizationPage() {
  const [activeCategory, setActiveCategory] = useState(customizationOptions[0].id);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const activeOptions = customizationOptions.find(cat => cat.id === activeCategory)?.options || [];
  const activeCategoryData = customizationOptions.find(cat => cat.id === activeCategory);

  return (
    <div className={styles.customizationPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Customization Options</h1>
          <p>Elevate your printed materials with our premium customization services.</p>
        </div>
      </section>

      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introContent}>
            <h2>Craftsmanship Meets Innovation</h2>
            <p>At Puratan Printers, we blend traditional printing techniques with modern technology to create exceptional printed materials. Our customization options allow you to create truly unique pieces that reflect your brand and message.</p>
            <p>Explore our design services, premium paper options, and specialized printing techniques to discover how we can bring your vision to life.</p>
          </div>
        </div>
      </section>

      <section className={styles.categoryNav}>
        <div className={styles.container}>
          <ul>
            {customizationOptions.map(category => (
              <li 
                key={category.id}
                className={activeCategory === category.id ? styles.active : ''}
                onClick={() => handleCategoryChange(category.id)}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.optionsSection}>
        <div className={styles.container}>
          <div className={styles.categoryHeader}>
            <h2>{activeCategoryData?.name}</h2>
            <p>{activeCategoryData?.description}</p>
          </div>

          <div className={styles.optionsGrid}>
            {activeOptions.map(option => (
              <div key={option.id} className={styles.optionCard}>
                <div className={styles.optionImageContainer}>
                  <Image 
                    src={option.image} 
                    alt={option.name}
                    width={400}
                    height={300}
                    className={styles.optionImage}
                  />
                </div>
                <div className={styles.optionInfo}>
                  <h3 className={styles.optionName}>{option.name}</h3>
                  <p className={styles.optionDescription}>{option.description}</p>
                  
                  <div className={styles.optionFeatures}>
                    <h4>Features</h4>
                    <ul>
                      {option.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link href={`/customization/${activeCategory}/${option.id}`} className={styles.optionLink}>
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.processSection}>
        <div className={styles.container}>
          <h2>Our Customization Process</h2>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Consultation</h3>
              <p>We begin with a detailed consultation to understand your vision, requirements, and preferences.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Design & Samples</h3>
              <p>Our designers create concepts and provide samples of paper options and printing techniques.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Refinement</h3>
              <p>We refine the design and specifications based on your feedback until you're completely satisfied.</p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Production</h3>
              <p>Your project is carefully crafted using our premium materials and specialized techniques.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Create Something Exceptional?</h2>
            <p>Contact our team to discuss your custom printing project and discover how our expertise can bring your vision to life.</p>
            <Link href="/contact" className={styles.ctaButton}>
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 