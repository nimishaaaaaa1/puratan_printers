import dynamic from 'next/dynamic';
import React from 'react';
import styles from '../styles/Home.module.css';

// Use dynamic imports with proper error handling
const Hero = dynamic(() => import('../components/Hero'), {
  loading: () => <div>Loading Hero...</div>,
  ssr: true,
});

const ProductShowcase = dynamic(() => import('../components/ProductShowcase'), {
  loading: () => <div>Loading Products...</div>,
  ssr: true,
});

const FeaturesSection = dynamic(() => import('../components/FeaturesSection'), {
  loading: () => <div>Loading Features...</div>,
  ssr: true,
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <ProductShowcase />
      <FeaturesSection />
    </main>
  );
} 