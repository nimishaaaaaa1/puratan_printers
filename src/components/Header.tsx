"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import Search from './Search';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [productImageIndex, setProductImageIndex] = useState(0);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Array of product promo images to cycle through
  const productPromoImages = [
    {
      src: "/images/products/colorful-flyers.jpg",
      alt: "Leaflets",
      title: "Leaflets",
      description: "Sharp, clean leaflets for local promotions",
      tag: "Popular",
      ctaText: "View",
      ctaLink: "/products?category=leaflets",
      ctaStyle: styles.primaryCta
    },
    {
      src: "/images/products/custom-bill-books.jpg",
      alt: "Billbooks",
      title: "Billbooks",
      description: "Reliable billbooks for daily business use",
      tag: "Essential",
      ctaText: "View",
      ctaLink: "/products?category=billbooks",
      ctaStyle: styles.primaryCta
    },
    {
      src: "/images/products/notebooks.jpg",
      alt: "Notebooks",
      title: "Notebooks",
      description: "Printed notebooks for schools and offices",
      tag: "Popular",
      ctaText: "View",
      ctaLink: "/products?category=notebooks",
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

  // Close dropdown when search is opened
  useEffect(() => {
    if (isSearchOpen) {
      setActiveDropdown(null);
    }
  }, [isSearchOpen]);

  const handleDropdownEnter = (menu: string) => {
    if (!isSearchOpen) {
      setActiveDropdown(menu);
    }
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

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen) {
      // Close mobile menu if open
      setIsMenuOpen(false);
    }
  };

  // Get the current product promo image data
  const currentProductPromo = productPromoImages[productImageIndex];

  return (
    <>
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
                      <h3>Business Printing</h3>
                      <ul>
                        <li><Link href="/products?category=visiting-cards">Visiting Cards</Link></li>
                        <li><Link href="/products?category=letterheads">Letterheads</Link></li>
                        <li><Link href="/products?category=envelopes">Envelopes</Link></li>
                        <li><Link href="/products?category=billbooks">Bill Books</Link></li>
                        <li><Link href="/products?category=fee-receipts">Fee Receipts</Link></li>
                      </ul>
                    </div>
                    <div className={styles.megaMenuColumn}>
                      <h3>Promotion</h3>
                      <ul>
                        <li><Link href="/products?category=leaflets">Leaflets</Link></li>
                        <li><Link href="/products?category=posters">Posters</Link></li>
                        <li><Link href="/products?category=stickers">Stickers</Link></li>
                        <li><Link href="/products?category=labels">Labels</Link></li>
                      </ul>
                    </div>
                    <div className={styles.megaMenuColumn}>
                      <h3>School & Office</h3>
                      <ul>
                        <li><Link href="/products?category=diaries">Diaries</Link></li>
                        <li><Link href="/products?category=notebooks">Notebooks</Link></li>
                        <li><Link href="/products?category=report-cards">Report Cards</Link></li>
                        <li><Link href="/products?category=certificates">Certificates</Link></li>
                        <li><Link href="/products?category=admission-forms">Admission Forms</Link></li>
                      </ul>
                    </div>
                    <div className={styles.megaMenuColumn}>
                      <h3>All Products</h3>
                      <ul>
                        <li><Link href="/products?category=visiting-cards">Visiting Cards</Link></li>
                        <li><Link href="/products?category=billbooks">Bill Books</Link></li>
                        <li><Link href="/products?category=stickers">Stickers</Link></li>
                        <li><Link href="/products?category=labels">Labels</Link></li>
                        <li><Link href="/products">View All Products</Link></li>
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
            <button className={styles.searchButton} onClick={toggleSearch}>
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
                <li><Link href="/products?category=visiting-cards" onClick={() => setIsMenuOpen(false)}>Visiting Cards</Link></li>
                <li><Link href="/products?category=letterheads" onClick={() => setIsMenuOpen(false)}>Letterheads</Link></li>
                <li><Link href="/products?category=envelopes" onClick={() => setIsMenuOpen(false)}>Envelopes</Link></li>
                <li><Link href="/products?category=billbooks" onClick={() => setIsMenuOpen(false)}>Bill Books</Link></li>
                <li><Link href="/products?category=fee-receipts" onClick={() => setIsMenuOpen(false)}>Fee Receipts</Link></li>
                <li><Link href="/products?category=leaflets" onClick={() => setIsMenuOpen(false)}>Leaflets</Link></li>
                <li><Link href="/products?category=posters" onClick={() => setIsMenuOpen(false)}>Posters</Link></li>
                <li><Link href="/products?category=stickers" onClick={() => setIsMenuOpen(false)}>Stickers</Link></li>
                <li><Link href="/products?category=labels" onClick={() => setIsMenuOpen(false)}>Labels</Link></li>
                <li><Link href="/products?category=diaries" onClick={() => setIsMenuOpen(false)}>Diaries</Link></li>
                <li><Link href="/products?category=notebooks" onClick={() => setIsMenuOpen(false)}>Notebooks</Link></li>
                <li><Link href="/products?category=report-cards" onClick={() => setIsMenuOpen(false)}>Report Cards</Link></li>
                <li><Link href="/products?category=certificates" onClick={() => setIsMenuOpen(false)}>Certificates</Link></li>
                <li><Link href="/products?category=admission-forms" onClick={() => setIsMenuOpen(false)}>Admission Forms</Link></li>
              </ul>
            </li>
            <li><Link href="/about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="/help" onClick={() => setIsMenuOpen(false)}>Help</Link></li>
            <li><Link href="/account" onClick={() => setIsMenuOpen(false)}>Account</Link></li>
            <li><button onClick={() => { setIsMenuOpen(false); toggleSearch(); }} className={styles.mobileSearchButton}>Search</button></li>
          </ul>
        </div>
      </header>

      {/* Search Component */}
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
