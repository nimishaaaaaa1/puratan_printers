"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';

// Blog categories
const blogCategories = [
  {
    id: 'all',
    name: 'All Posts'
  },
  {
    id: 'printing-tips',
    name: 'Printing Tips'
  },
  {
    id: 'design-guides',
    name: 'Design Guides'
  },
  {
    id: 'industry-news',
    name: 'Industry News'
  },
  {
    id: 'case-studies',
    name: 'Case Studies'
  }
];

// Blog posts
const blogPosts = [
  {
    id: 'choosing-right-paper',
    title: 'How to Choose the Right Paper for Your Print Project',
    category: 'printing-tips',
    date: 'March 15, 2024',
    author: 'Deepak Chanda',
    image: 'https://images.unsplash.com/photo-1517697471339-4aa32003c11a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Selecting the right paper is crucial for the success of your print project. Learn about different paper types, weights, and finishes to make the best choice.',
    readTime: '5 min read'
  },
  {
    id: 'color-management',
    title: 'Understanding Color Management for Print Design',
    category: 'design-guides',
    date: 'March 10, 2024',
    author: 'Priya Patel',
    image: 'https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Color management is essential for ensuring your designs look the same in print as they do on screen. Learn about color profiles, gamuts, and calibration.',
    readTime: '7 min read'
  },
  {
    id: 'sustainable-printing',
    title: 'Sustainable Printing Practices for Eco-Conscious Businesses',
    category: 'industry-news',
    date: 'March 5, 2024',
    author: 'Ananya Kapoor',
    image: 'https://images.unsplash.com/photo-1585803114088-cd027272106a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Discover how the printing industry is embracing sustainability with eco-friendly materials, processes, and waste reduction strategies.',
    readTime: '6 min read'
  },
  {
    id: 'luxury-brand-case-study',
    title: 'Case Study: Elevating a Luxury Brand with Premium Print Materials',
    category: 'case-studies',
    date: 'February 28, 2024',
    author: 'Arjun Mehta',
    image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'How we helped a luxury jewelry brand enhance their customer experience with custom packaging and premium print collateral.',
    readTime: '8 min read'
  },
  {
    id: 'file-preparation',
    title: 'Essential Guide to Preparing Print-Ready Files',
    category: 'printing-tips',
    date: 'February 20, 2024',
    author: 'Deepak Chanda',
    image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Learn how to prepare your design files for printing to avoid common issues and ensure the best possible results for your project.',
    readTime: '6 min read'
  },
  {
    id: 'typography-print',
    title: 'Typography Best Practices for Print Design',
    category: 'design-guides',
    date: 'February 15, 2024',
    author: 'Priya Patel',
    image: 'https://images.unsplash.com/photo-1515600051222-a3c338ff16f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Effective typography can make or break your print design. Discover essential tips for choosing and using fonts in your print projects.',
    readTime: '5 min read'
  },
  {
    id: 'digital-printing-trends',
    title: '2024 Digital Printing Trends to Watch',
    category: 'industry-news',
    date: 'February 10, 2024',
    author: 'Ananya Kapoor',
    image: 'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'Explore the latest innovations and trends in digital printing technology that are shaping the future of the industry.',
    readTime: '7 min read'
  },
  {
    id: 'restaurant-rebrand-case-study',
    title: 'Case Study: Restaurant Rebrand with Custom Print Materials',
    category: 'case-studies',
    date: 'February 5, 2024',
    author: 'Arjun Mehta',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    excerpt: 'How we helped a popular restaurant refresh their brand identity with custom menus, signage, and promotional materials.',
    readTime: '8 min read'
  }
];

// Featured resources
const featuredResources = [
  {
    id: 'print-file-checklist',
    title: 'Print-Ready File Checklist',
    description: 'A comprehensive checklist to ensure your files are properly prepared for printing.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="currentColor"/>
      </svg>
    ),
    link: '/resources/print-ready-file-checklist'
  },
  {
    id: 'color-guide',
    title: 'Color Management Guide',
    description: 'Learn how to ensure color accuracy from screen to print.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12C21 7.03 16.97 3 12 3ZM19 12C19 16.97 15.84 19 12 19C8.16 19 5 16.97 5 12C5 7.03 8.16 5 12 5C15.84 5 19 7.03 19 12Z" fill="currentColor"/>
        <path d="M12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7Z" fill="currentColor"/>
      </svg>
    ),
    link: '/resources/color-management-guide'
  },
  {
    id: 'paper-guide',
    title: 'Paper Selection Guide',
    description: 'A detailed guide to different paper types, weights, and finishes.',
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2ZM18 20H6V4H13V9H18V20Z" fill="currentColor"/>
      </svg>
    ),
    link: '/resources/paper-selection-guide'
  }
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={styles.blogPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Blog & Resources</h1>
          <p>Explore our collection of articles, guides, and resources to help you get the most out of your print projects.</p>
        </div>
      </section>

      <section className={styles.searchSection}>
        <div className={styles.container}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search articles..." 
              className={styles.searchInput}
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button className={styles.searchButton}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className={styles.categorySection}>
        <div className={styles.container}>
          <div className={styles.categoryFilter}>
            <ul>
              {blogCategories.map(category => (
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
        </div>
      </section>

      <section className={styles.blogSection}>
        <div className={styles.container}>
          {filteredPosts.length > 0 ? (
            <div className={styles.blogGrid}>
              {filteredPosts.map(post => (
                <div key={post.id} className={styles.blogCard}>
                  <div className={styles.blogImageContainer}>
                    <Image 
                      src={post.image} 
                      alt={post.title}
                      width={400}
                      height={250}
                      className={styles.blogImage}
                    />
                    <div className={styles.blogCategory}>{blogCategories.find(cat => cat.id === post.category)?.name}</div>
                  </div>
                  <div className={styles.blogInfo}>
                    <div className={styles.blogMeta}>
                      <span className={styles.blogDate}>{post.date}</span>
                      <span className={styles.blogReadTime}>{post.readTime}</span>
                    </div>
                    <h3 className={styles.blogTitle}>{post.title}</h3>
                    <p className={styles.blogExcerpt}>{post.excerpt}</p>
                    <div className={styles.blogFooter}>
                      <div className={styles.blogAuthor}>By {post.author}</div>
                      <Link href={`/blog/${post.id}`} className={styles.blogLink}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className={styles.noResults}>
              <h3>No articles found</h3>
              <p>Try adjusting your search or filter criteria.</p>
            </div>
          )}
        </div>
      </section>

      <section className={styles.resourcesSection}>
        <div className={styles.container}>
          <h2>Featured Resources</h2>
          <p className={styles.resourcesIntro}>Download our free resources to help you create successful print projects.</p>
          
          <div className={styles.resourcesGrid}>
            {featuredResources.map(resource => (
              <div key={resource.id} className={styles.resourceCard}>
                <div className={styles.resourceIcon}>
                  {resource.icon}
                </div>
                <div className={styles.resourceInfo}>
                  <h3>{resource.title}</h3>
                  <p>{resource.description}</p>
                  <Link href={resource.link} className={styles.resourceLink}>
                    Download
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.newsletterSection}>
        <div className={styles.container}>
          <div className={styles.newsletterContent}>
            <h2>Subscribe to Our Newsletter</h2>
            <p>Stay updated with the latest printing tips, industry news, and special offers. Contact us at <a href="mailto:dpkchanda@gmail.com" style={{color: 'white', textDecoration: 'underline'}}>dpkchanda@gmail.com</a> or call <a href="tel:+919711476514" style={{color: 'white', textDecoration: 'underline'}}>+91 9711476514</a> for more information.</p>
            <form className={styles.newsletterForm}>
              <input 
                type="email" 
                placeholder="Your email address" 
                className={styles.newsletterInput}
                required
              />
              <button type="submit" className={styles.newsletterButton}>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 