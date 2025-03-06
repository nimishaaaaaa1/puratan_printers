"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Search.module.css';

// Sample search results for demonstration
const sampleSearchResults = [
  {
    id: 1,
    name: 'Premium Business Cards',
    category: 'Business Cards',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1589041127168-9b1915fd1d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Custom Letterheads',
    category: 'Stationery',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Corporate Diary',
    category: 'Diaries & Planners',
    price: 699,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Custom Bill Books',
    category: 'Bill Books',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 5,
    name: 'Packaging Labels',
    category: 'Labels & Stickers',
    price: 499,
    image: 'https://images.unsplash.com/photo-1585559604830-91a5a6e28178?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 6,
    name: 'Custom Envelopes',
    category: 'Stationery',
    price: 799,
    image: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 7,
    name: 'Elegant Notecards',
    category: 'Stationery',
    price: 599,
    image: 'https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 8,
    name: 'Presentation Folders',
    category: 'Stationery',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 9,
    name: 'Custom Boxes',
    category: 'Packaging Solutions',
    price: 1999,
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 10,
    name: 'Wedding Invitations',
    category: 'Specialty Items',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1550107528-2d1df71f5d0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

// Sample categories for filtering
const categories = [
  'All Categories',
  'Business Cards',
  'Stationery',
  'Marketing Materials',
  'Bill Books',
  'Diaries & Planners',
  'Labels & Stickers',
  'Promotional Items',
  'Specialty Items'
];

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Search({ isOpen, onClose }: SearchProps) {
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
  }, []);

  // Handle click outside to close search
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  // Handle escape key to close search
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  // Prevent body scrolling when search is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle search
  const handleSearch = () => {
    if (!query.trim()) return;

    setIsLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      // Filter results based on query and selected category
      const filteredResults = sampleSearchResults.filter(item => {
        const matchesQuery = item.name.toLowerCase().includes(query.toLowerCase());
        const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
        return matchesQuery && matchesCategory;
      });

      setResults(filteredResults);
      setIsLoading(false);

      // Save to recent searches
      if (!recentSearches.includes(query)) {
        const updatedSearches = [query, ...recentSearches.slice(0, 4)];
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      }
    }, 500);
  };

  // Handle search on Enter key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // Handle recent search click
  const handleRecentSearchClick = (search: string) => {
    setQuery(search);
    setIsLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const filteredResults = sampleSearchResults.filter(item => {
        const matchesQuery = item.name.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategory === 'All Categories' || item.category === selectedCategory;
        return matchesQuery && matchesCategory;
      });

      setResults(filteredResults);
      setIsLoading(false);
    }, 500);
  };

  // Clear recent searches
  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('recentSearches');
  };

  // Navigate to product page
  const navigateToProduct = (id: number) => {
    onClose();
    router.push(`/products/${id}`);
  };

  if (!isOpen) return null;

  return (
    <div className={styles.searchOverlay}>
      <div className={styles.searchContainer} ref={searchRef}>
        <div className={styles.searchHeader}>
          <h2>Search Products</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className={styles.searchInputContainer}>
          <div className={styles.searchInputWrapper}>
            <svg className={styles.searchIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search for products..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className={styles.searchInput}
              autoFocus
            />
            {query && (
              <button 
                className={styles.clearButton}
                onClick={() => setQuery('')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            )}
          </div>

          <div className={styles.categorySelect}>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category, index) => (
                <option key={index} value={category}>{category}</option>
              ))}
            </select>
          </div>

          <button 
            className={styles.searchButton}
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <div className={styles.searchContent}>
          {isLoading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.spinner}></div>
              <p>Searching...</p>
            </div>
          ) : results.length > 0 ? (
            <div className={styles.resultsContainer}>
              <h3>Search Results</h3>
              <div className={styles.resultsList}>
                {results.map(item => (
                  <div 
                    key={item.id} 
                    className={styles.resultItem}
                    onClick={() => navigateToProduct(item.id)}
                  >
                    <div className={styles.resultImage}>
                      <Image 
                        src={item.image} 
                        alt={item.name}
                        width={60}
                        height={60}
                        className={styles.productImage}
                      />
                    </div>
                    <div className={styles.resultInfo}>
                      <h4>{item.name}</h4>
                      <span className={styles.resultCategory}>{item.category}</span>
                      <span className={styles.resultPrice}>₹{item.price.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : query ? (
            <div className={styles.noResults}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 11H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3>No results found</h3>
              <p>Try a different search term or browse our categories</p>
            </div>
          ) : (
            <div className={styles.initialState}>
              {recentSearches.length > 0 && (
                <div className={styles.recentSearches}>
                  <div className={styles.recentHeader}>
                    <h3>Recent Searches</h3>
                    <button 
                      className={styles.clearRecentButton}
                      onClick={clearRecentSearches}
                    >
                      Clear
                    </button>
                  </div>
                  <div className={styles.recentList}>
                    {recentSearches.map((search, index) => (
                      <div 
                        key={index} 
                        className={styles.recentItem}
                        onClick={() => handleRecentSearchClick(search)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3.05 11C3.27151 8.68261 4.51919 6.56638 6.48114 5.21206C8.44309 3.85773 10.8737 3.39472 13.1983 3.94355C15.5229 4.49238 17.5054 6.00171 18.6553 8.09814C19.8052 10.1946 20.0131 12.6646 19.23 14.93C18.4469 17.1954 16.7372 19.0556 14.5163 19.9822C12.2955 20.9088 9.80287 20.8279 7.64938 19.7596C5.49589 18.6913 3.91198 16.7248 3.28279 14.3885C2.65359 12.0521 3.03965 9.56879 4.35 7.53" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span>{search}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className={styles.popularCategories}>
                <h3>Popular Categories</h3>
                <div className={styles.categoriesList}>
                  {categories.slice(1).map((category, index) => (
                    <Link 
                      key={index} 
                      href={`/products?category=${encodeURIComponent(category)}`}
                      className={styles.categoryItem}
                      onClick={onClose}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 