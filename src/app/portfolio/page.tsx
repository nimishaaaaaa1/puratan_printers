"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Portfolio.module.css';

// Portfolio categories and items
const portfolioCategories = [
  {
    id: 'all',
    name: 'All Projects'
  },
  {
    id: 'business-cards',
    name: 'Business Cards'
  },
  {
    id: 'stationery',
    name: 'Stationery'
  },
  {
    id: 'marketing',
    name: 'Marketing Materials'
  },
  {
    id: 'packaging',
    name: 'Packaging & Labels'
  },
  {
    id: 'branding',
    name: 'Branding Projects'
  }
];

// Portfolio items
const portfolioItems = [
  {
    id: 'artisan-cafe',
    title: 'Artisan Café Branding',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Artisan Café',
    description: 'Complete branding package including logo design, business cards, menus, and packaging for an upscale café.',
    tags: ['Branding', 'Logo Design', 'Packaging']
  },
  {
    id: 'luxury-cards',
    title: 'Luxury Business Cards',
    category: 'business-cards',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Morgan Financial',
    description: 'Premium letterpress business cards with gold foil stamping on 600gsm cotton paper.',
    tags: ['Business Cards', 'Letterpress', 'Foil Stamping']
  },
  {
    id: 'organic-packaging',
    title: 'Organic Food Packaging',
    category: 'packaging',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Nature\'s Harvest',
    description: 'Eco-friendly packaging design and production for an organic food brand using recycled materials.',
    tags: ['Packaging', 'Eco-friendly', 'Design']
  },
  {
    id: 'fashion-lookbook',
    title: 'Fashion Lookbook',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Elegance Apparel',
    description: 'High-end fashion lookbook featuring custom photography and premium printing on matte paper.',
    tags: ['Marketing', 'Lookbook', 'Premium Print']
  },
  {
    id: 'corporate-stationery',
    title: 'Corporate Stationery Suite',
    category: 'stationery',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Vertex Innovations',
    description: 'Complete stationery package including letterheads, envelopes, notepads, and folders for a technology firm.',
    tags: ['Stationery', 'Corporate', 'Brand Identity']
  },
  {
    id: 'event-materials',
    title: 'Annual Gala Materials',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Children\'s Foundation',
    description: 'Event materials including invitations, programs, banners, and thank you cards for an annual charity gala.',
    tags: ['Event Materials', 'Invitations', 'Nonprofit']
  },
  {
    id: 'luxury-packaging',
    title: 'Luxury Gift Box Design',
    category: 'packaging',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Prestige Gifts',
    description: 'Custom designed and manufactured gift boxes with embossing and foil details for a luxury gift company.',
    tags: ['Packaging', 'Luxury', 'Custom Design']
  },
  {
    id: 'restaurant-branding',
    title: 'Fine Dining Restaurant Branding',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    client: 'Sapphire Restaurant',
    description: 'Complete brand identity including logo, menus, business cards, and signage for an upscale restaurant.',
    tags: ['Branding', 'Restaurant', 'Print Design']
  }
];

// Client testimonials
const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    company: 'Artisan Café',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quote: 'The team at Puratan Printers transformed our brand with their exceptional printing quality and attention to detail. Our customers frequently comment on the beautiful packaging and menus.'
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    company: 'Morgan Financial',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quote: 'The letterpress business cards we ordered exceeded our expectations. The quality and craftsmanship reflect our company\'s values perfectly. We\'ve received countless compliments from clients.'
  },
  {
    id: 3,
    name: 'Ananya Patel',
    company: 'Nature\'s Harvest',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    quote: 'Working with Puratan Printers on our eco-friendly packaging was a seamless experience. They understood our commitment to sustainability and delivered beautiful, environmentally responsible packaging.'
  }
];

// Case studies
const caseStudies = [
  {
    id: 'sapphire-restaurant',
    title: 'Sapphire Restaurant Rebrand',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'How we helped an established restaurant refresh their brand identity with premium printed materials.',
    link: '/portfolio/case-studies/sapphire-restaurant'
  },
  {
    id: 'natures-harvest',
    title: 'Sustainable Packaging Solution',
    image: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: 'Creating eco-friendly packaging that aligns with the brand\'s values while maintaining premium quality.',
    link: '/portfolio/case-studies/natures-harvest'
  }
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const filteredItems = activeCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  return (
    <div className={styles.portfolioPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Our Portfolio</h1>
          <p>Explore our collection of premium print projects and discover the craftsmanship that sets us apart.</p>
        </div>
      </section>

      <section className={styles.portfolioSection}>
        <div className={styles.container}>
          <div className={styles.categoryFilter}>
            <ul>
              {portfolioCategories.map(category => (
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

          <div className={styles.portfolioGrid}>
            {filteredItems.map(item => (
              <div key={item.id} className={styles.portfolioItem}>
                <div className={styles.portfolioImageContainer}>
                  <Image 
                    src={item.image} 
                    alt={item.title}
                    width={400}
                    height={300}
                    className={styles.portfolioImage}
                  />
                  <div className={styles.portfolioOverlay}>
                    <div className={styles.portfolioTags}>
                      {item.tags.map((tag, index) => (
                        <span key={index} className={styles.portfolioTag}>{tag}</span>
                      ))}
                    </div>
                    <Link href={`/portfolio/${item.id}`} className={styles.portfolioLink}>
                      View Project
                    </Link>
                  </div>
                </div>
                <div className={styles.portfolioInfo}>
                  <h3>{item.title}</h3>
                  <p className={styles.portfolioClient}>Client: {item.client}</p>
                  <p className={styles.portfolioDescription}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.caseStudiesSection}>
        <div className={styles.container}>
          <h2>Case Studies</h2>
          <p className={styles.sectionIntro}>Dive deeper into our most impactful projects and learn about our process.</p>
          
          <div className={styles.caseStudiesGrid}>
            {caseStudies.map(study => (
              <div key={study.id} className={styles.caseStudyCard}>
                <div className={styles.caseStudyImageContainer}>
                  <Image 
                    src={study.image} 
                    alt={study.title}
                    width={500}
                    height={300}
                    className={styles.caseStudyImage}
                  />
                </div>
                <div className={styles.caseStudyInfo}>
                  <h3>{study.title}</h3>
                  <p>{study.description}</p>
                  <Link href={study.link} className={styles.caseStudyLink}>
                    Read Case Study
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2>Client Testimonials</h2>
          <div className={styles.testimonialsGrid}>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className={styles.testimonialCard}>
                <div className={styles.testimonialContent}>
                  <div className={styles.quoteIcon}>
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10 11L8 17H11L9 22H5L7 17H4L6 11H10ZM18 11L16 17H19L17 22H13L15 17H12L14 11H18Z" fill="currentColor"/>
                    </svg>
                  </div>
                  <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialImageContainer}>
                    <Image 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className={styles.testimonialImage}
                    />
                  </div>
                  <div className={styles.testimonialInfo}>
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Create Your Own Success Story?</h2>
            <p>Let's collaborate on your next print project and bring your vision to life with exceptional quality and craftsmanship. Contact Deepak Chanda at <a href="tel:+919711476514" style={{color: 'white', textDecoration: 'underline'}}>+91 9711476514</a> or <a href="mailto:dpkchanda@gmail.com" style={{color: 'white', textDecoration: 'underline'}}>dpkchanda@gmail.com</a>.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className={styles.primaryButton}>
                Start Your Project
              </Link>
              <Link href="/products" className={styles.secondaryButton}>
                Explore Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 