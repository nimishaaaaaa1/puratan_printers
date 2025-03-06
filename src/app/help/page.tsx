"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Help.module.css';

// FAQ categories and questions
const faqCategories = [
  {
    id: 'ordering',
    name: 'Ordering & Payment',
    questions: [
      {
        id: 'order-process',
        question: 'How does the ordering process work?',
        answer: 'Our ordering process is simple: browse our products, select your specifications, upload your design files, review your order, and proceed to checkout. You can track your order status through your account dashboard after placing an order.'
      },
      {
        id: 'payment-methods',
        question: 'What payment methods do you accept?',
        answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and bank transfers for larger orders. All payments are processed securely through our encrypted payment gateway.'
      },
      {
        id: 'order-changes',
        question: 'Can I make changes to my order after it has been placed?',
        answer: 'Changes can be made to your order within 2 hours of placing it. After this window, please contact our customer service team as soon as possible, and we will do our best to accommodate your request if production hasn\'t started.'
      },
      {
        id: 'order-cancellation',
        question: 'What is your cancellation policy?',
        answer: 'Orders can be cancelled within 2 hours of placement for a full refund. After this period but before production begins, a 15% processing fee may apply. Once production has started, orders cannot be cancelled.'
      }
    ]
  },
  {
    id: 'design',
    name: 'Design & File Setup',
    questions: [
      {
        id: 'file-formats',
        question: 'What file formats do you accept?',
        answer: 'We accept PDF, AI, PSD, INDD, and EPS files. PDF is our preferred format with all fonts embedded or converted to outlines. Files should be in CMYK color mode with at least 300 DPI resolution and include 3mm bleed on all sides.'
      },
      {
        id: 'design-services',
        question: 'Do you offer design services?',
        answer: 'Yes, our professional design team can create custom designs or help refine your existing artwork. Design services are priced separately based on the complexity and requirements of your project. Visit our Customization page for more details.'
      },
      {
        id: 'templates',
        question: 'Do you provide templates for your products?',
        answer: 'Yes, we offer free templates for all our standard products. These templates include proper dimensions, bleed lines, and safe zones to ensure your design prints correctly. You can download them from each product page.'
      },
      {
        id: 'color-matching',
        question: 'How do you ensure color accuracy?',
        answer: 'We use calibrated equipment and follow industry color standards. For precise color matching, we recommend ordering a physical proof before your full print run. You can also specify Pantone colors for the most accurate results.'
      }
    ]
  },
  {
    id: 'printing',
    name: 'Printing & Production',
    questions: [
      {
        id: 'turnaround-time',
        question: 'What are your standard turnaround times?',
        answer: 'Standard production takes 3-5 business days after proof approval. Rush options are available for 1-2 business day turnaround at an additional cost. Please note that shipping time is calculated separately from production time.'
      },
      {
        id: 'print-quality',
        question: 'What printing methods do you use?',
        answer: 'We offer digital printing for shorter runs and quick turnaround, offset printing for larger quantities and premium quality, and specialty techniques like letterpress, foil stamping, and embossing for luxury finishes.'
      },
      {
        id: 'paper-options',
        question: 'What paper options are available?',
        answer: 'We offer a wide range of papers from standard to premium stocks, including recycled options. Paper weights range from 80gsm to 350gsm, with various finishes such as matte, gloss, uncoated, textured, and specialty finishes.'
      },
      {
        id: 'proofing',
        question: 'Do you provide proofs before printing?',
        answer: 'Yes, we provide digital proofs for all orders at no additional cost. Physical proofs are available for an additional fee and are recommended for color-critical projects or specialty printing techniques.'
      }
    ]
  },
  {
    id: 'shipping',
    name: 'Shipping & Delivery',
    questions: [
      {
        id: 'shipping-methods',
        question: 'What shipping methods do you offer?',
        answer: 'We offer standard shipping (5-7 business days), express shipping (2-3 business days), and overnight delivery for urgent orders. International shipping is available to most countries with delivery times varying by destination.'
      },
      {
        id: 'shipping-costs',
        question: 'How are shipping costs calculated?',
        answer: 'Shipping costs are calculated based on the weight of your order, dimensions of the package, and delivery destination. You can see the exact shipping cost during checkout before completing your purchase.'
      },
      {
        id: 'order-tracking',
        question: 'How can I track my order?',
        answer: 'Once your order ships, you will receive a confirmation email with tracking information. You can also log into your account on our website to view real-time updates on your order status and tracking details.'
      },
      {
        id: 'international-shipping',
        question: 'Do you ship internationally?',
        answer: 'Yes, we ship to most countries worldwide. International orders may be subject to customs duties and taxes, which are the responsibility of the recipient. Delivery times for international orders typically range from 7-14 business days.'
      }
    ]
  }
];

// Guides data
const guides = [
  {
    id: 'file-preparation',
    title: 'File Preparation Guide',
    description: 'Learn how to prepare your files for optimal print quality.',
    link: '/help/guides/file-preparation'
  },
  {
    id: 'color-guide',
    title: 'Color Management Guide',
    description: 'Understanding color profiles and ensuring color accuracy in your prints.',
    link: '/help/guides/color-management'
  },
  {
    id: 'paper-guide',
    title: 'Paper Selection Guide',
    description: 'How to choose the right paper for your printing project.',
    link: '/help/guides/paper-selection'
  },
  {
    id: 'printing-techniques',
    title: 'Printing Techniques Explained',
    description: 'Learn about different printing methods and when to use them.',
    link: '/help/guides/printing-techniques'
  }
];

export default function HelpPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);
  const [openQuestions, setOpenQuestions] = useState<string[]>([]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setOpenQuestions([]);
  };

  const toggleQuestion = (questionId: string) => {
    setOpenQuestions(prev => 
      prev.includes(questionId) 
        ? prev.filter(id => id !== questionId) 
        : [...prev, questionId]
    );
  };

  const activeQuestions = faqCategories.find(cat => cat.id === activeCategory)?.questions || [];

  return (
    <div className={styles.helpPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Help & Support</h1>
          <p>Find answers to common questions and learn how to get the most out of our printing services.</p>
        </div>
      </section>

      <section className={styles.searchSection}>
        <div className={styles.container}>
          <div className={styles.searchBox}>
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className={styles.searchInput}
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

      <section className={styles.faqSection}>
        <div className={styles.container}>
          <h2>Frequently Asked Questions</h2>
          
          <div className={styles.faqContainer}>
            <div className={styles.faqCategories}>
              <ul>
                {faqCategories.map(category => (
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
            
            <div className={styles.faqContent}>
              <h3>{faqCategories.find(cat => cat.id === activeCategory)?.name}</h3>
              
              <div className={styles.accordionList}>
                {activeQuestions.map(item => (
                  <div 
                    key={item.id} 
                    className={`${styles.accordionItem} ${openQuestions.includes(item.id) ? styles.open : ''}`}
                  >
                    <div 
                      className={styles.accordionHeader}
                      onClick={() => toggleQuestion(item.id)}
                    >
                      <h4>{item.question}</h4>
                      <span className={styles.accordionIcon}></span>
                    </div>
                    <div className={styles.accordionContent}>
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.guidesSection}>
        <div className={styles.container}>
          <h2>Helpful Guides</h2>
          <div className={styles.guidesGrid}>
            {guides.map(guide => (
              <div key={guide.id} className={styles.guideCard}>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link href={guide.link} className={styles.guideLink}>
                  Read Guide
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.container}>
          <div className={styles.supportGrid}>
            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Email Support</h3>
              <p>Send us an email and we'll get back to you within 24 hours.</p>
              <a href="mailto:dpkchanda@gmail.com" className={styles.supportLink}>
                dpkchanda@gmail.com
              </a>
            </div>
            
            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 15.5C18.8 15.5 17.5 15.3 16.4 14.9C16.3 14.9 16.2 14.9 16.1 14.9C15.8 14.9 15.6 15 15.4 15.2L13.2 17.4C10.4 15.9 8 13.6 6.6 10.8L8.8 8.6C9.1 8.3 9.2 7.9 9 7.6C8.7 6.5 8.5 5.2 8.5 4C8.5 3.5 8 3 7.5 3H4C3.5 3 3 3.5 3 4C3 13.4 10.6 21 20 21C20.5 21 21 20.5 21 20V16.5C21 16 20.5 15.5 20 15.5ZM19 12H21C21 7 17 3 12 3V5C15.9 5 19 8.1 19 12ZM15 12H17C17 9.2 14.8 7 12 7V9C13.7 9 15 10.3 15 12Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Phone Support</h3>
              <p>Call us directly for immediate assistance with your order.</p>
              <a href="tel:+919711476514" className={styles.supportLink}>
                +91 9711476514
              </a>
            </div>
            
            <div className={styles.supportCard}>
              <div className={styles.supportIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 19H11V17H13V19ZM15.07 11.25L14.17 12.17C13.45 12.9 13 13.5 13 15H11V14.5C11 13.4 11.45 12.4 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.9 13.1 7 12 7C10.9 7 10 7.9 10 9H8C8 6.79 9.79 5 12 5C14.21 5 16 6.79 16 9C16 9.88 15.64 10.68 15.07 11.25Z" fill="currentColor"/>
                </svg>
              </div>
              <h3>Live Chat</h3>
              <p>Chat with our support team in real-time during business hours.</p>
              <button className={styles.supportButton}>
                Start Chat
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactContent}>
            <h2>Still Need Help?</h2>
            <p>If you couldn't find the answer you were looking for, our dedicated support team is here to help.</p>
            <Link href="/contact" className={styles.contactButton}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 