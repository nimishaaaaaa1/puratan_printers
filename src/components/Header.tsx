"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [productImageIndex, setProductImageIndex] = useState(0);

  // Array of product promo images to cycle through
  const productPromoImages = [
    {
      src: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Special Offer",
      title: "Special Offer",
      description: "20% off all business cards this month",
      tag: "Limited Time",
      ctaText: "Shop Now",
      ctaLink: "/special-offers",
      ctaStyle: styles.primaryCta
    },
    {
      src: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Premium Collection",
      title: "Premium Collection",
      description: "Explore our luxury paper options",
      tag: "New Arrival",
      ctaText: "Discover",
      ctaLink: "/products/premium",
      ctaStyle: styles.primaryCta
    },
    {
      src: "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      alt: "Corporate Packages",
      title: "Corporate Packages",
      description: "Complete branding solutions for businesses",
      tag: "Popular",
      ctaText: "View Packages",
      ctaLink: "/products/corporate",
      ctaStyle: styles.primaryCta
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleProductsClick = () => {
    // Cycle to the next image when Products is clicked
    setProductImageIndex((prevIndex) => 
      prevIndex === productPromoImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get the current product promo image data
  const currentProductPromo = productPromoImages[productImageIndex];

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoWrapper}>
              <Image 
                src="/images/puratan-logo.png" 
                alt="Puratan Printers Logo" 
                width={200} 
                height={53}
                className={styles.logoImage}
                priority
              />
            </div>
          </Link>
        </div>

        <nav className={styles.mainNav}>
          <ul>
            <li 
              className={activeDropdown === 'products' ? styles.active : ''}
              onMouseEnter={() => handleDropdownEnter('products')}
              onMouseLeave={handleDropdownLeave}
              onClick={handleProductsClick}
            >
              <Link href="/products">Products</Link>
              <div className={`${styles.megaMenu} ${activeDropdown === 'products' ? styles.active : ''}`}>
                <div className={styles.megaMenuContainer}>
                  <div className={styles.megaMenuColumn}>
                    <h3>Business Cards</h3>
                    <ul>
                      <li><Link href="/products/business-cards/standard">Standard</Link></li>
                      <li><Link href="/products/business-cards/premium">Premium</Link></li>
                      <li><Link href="/products/business-cards/luxury">Luxury</Link></li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <h3>Stationery</h3>
                    <ul>
                      <li><Link href="/products/stationery/letterheads">Letterheads</Link></li>
                      <li><Link href="/products/stationery/envelopes">Envelopes</Link></li>
                      <li><Link href="/products/stationery/notecards">Notecards</Link></li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <h3>Marketing</h3>
                    <ul>
                      <li><Link href="/products/marketing/flyers">Flyers</Link></li>
                      <li><Link href="/products/marketing/brochures">Brochures</Link></li>
                      <li><Link href="/products/marketing/posters">Posters</Link></li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <div className={styles.megaMenuPromo}>
                      <div className={styles.promoTag}>{currentProductPromo.tag}</div>
                      <Image 
                        src={currentProductPromo.src}
                        alt={currentProductPromo.alt}
                        width={300} 
                        height={160}
                        className={styles.megaMenuImage}
                      />
                      <h3>{currentProductPromo.title}</h3>
                      <p>{currentProductPromo.description}</p>
                      <Link href={currentProductPromo.ctaLink} className={`${styles.megaMenuLink} ${currentProductPromo.ctaStyle}`}>
                        {currentProductPromo.ctaText}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li 
              className={activeDropdown === 'customization' ? styles.active : ''}
              onMouseEnter={() => handleDropdownEnter('customization')}
              onMouseLeave={handleDropdownLeave}
            >
              <Link href="/customization">Customization</Link>
              <div className={`${styles.megaMenu} ${activeDropdown === 'customization' ? styles.active : ''}`}>
                <div className={styles.megaMenuContainer}>
                  <div className={styles.megaMenuColumn}>
                    <h3>Design Services</h3>
                    <ul>
                      <li><Link href="/customization/design-services/logo">Logo Design</Link></li>
                      <li><Link href="/customization/design-services/branding">Branding</Link></li>
                      <li><Link href="/customization/design-services/custom">Custom Design</Link></li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <h3>Paper Options</h3>
                    <ul>
                      <li><Link href="/customization/paper/premium">Premium Papers</Link></li>
                      <li><Link href="/customization/paper/recycled">Recycled Options</Link></li>
                      <li><Link href="/customization/paper/specialty">Specialty Finishes</Link></li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <h3>Printing Techniques</h3>
                    <ul>
                      <li><Link href="/customization/techniques/letterpress">Letterpress</Link></li>
                      <li><Link href="/customization/techniques/foil">Foil Stamping</Link></li>
                      <li><Link href="/customization/techniques/emboss">Embossing</Link></li>
                    </ul>
                  </div>
                  <div className={styles.megaMenuColumn}>
                    <div className={styles.megaMenuPromo}>
                      <div className={styles.promoTag}>Expert Service</div>
                      <Image 
                        src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                        alt="Custom Design Service" 
                        width={300} 
                        height={160}
                        className={styles.megaMenuImage}
                      />
                      <h3>Custom Design Service</h3>
                      <p>Work with our expert designers</p>
                      <Link href="/design-services" className={`${styles.megaMenuLink} ${styles.secondaryCta}`}>
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/help">Help</Link></li>
          </ul>
        </nav>

        <nav className={styles.secondaryNav}>
          <Link href="/account" className={styles.iconLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.iconText}>Account</span>
          </Link>
          <Link href="/cart" className={styles.iconLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.iconText}>Cart</span>
          </Link>
          <button className={styles.searchButton}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className={styles.iconText}>Search</span>
          </button>
        </nav>

        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${isMenuOpen ? styles.active : ''}`}></span>
        </button>
      </div>
      
      <div className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ''}`}>
        <ul>
          <li className={styles.mobileMenuCategory}>
            <span>Products</span>
            <ul>
              <li><Link href="/products/business-cards" onClick={() => setIsMenuOpen(false)}>Business Cards</Link></li>
              <li><Link href="/products/stationery" onClick={() => setIsMenuOpen(false)}>Stationery</Link></li>
              <li><Link href="/products/marketing" onClick={() => setIsMenuOpen(false)}>Marketing Materials</Link></li>
            </ul>
          </li>
          <li className={styles.mobileMenuCategory}>
            <span>Customization</span>
            <ul>
              <li><Link href="/customization/design-services" onClick={() => setIsMenuOpen(false)}>Design Services</Link></li>
              <li><Link href="/customization/paper" onClick={() => setIsMenuOpen(false)}>Paper Options</Link></li>
              <li><Link href="/customization/techniques" onClick={() => setIsMenuOpen(false)}>Printing Techniques</Link></li>
            </ul>
          </li>
          <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
          <li><Link href="/help" onClick={() => setIsMenuOpen(false)}>Help</Link></li>
          <li><Link href="/account" onClick={() => setIsMenuOpen(false)}>Account</Link></li>
          <li><Link href="/cart" onClick={() => setIsMenuOpen(false)}>Cart</Link></li>
          <li><Link href="/search" onClick={() => setIsMenuOpen(false)}>Search</Link></li>
        </ul>
      </div>
    </header>
  );
}