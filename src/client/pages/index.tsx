import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <span className={styles.highlight}>Puratan Printers</span>
        </h1>
        
        <p className={styles.description}>
          Bridging traditional printing craftsmanship with modern technology
        </p>
        
        <div className={styles.grid}>
          <Link href="/auth/login">
            <a className={styles.card}>
              <h2>Login &rarr;</h2>
              <p>Access your account to manage orders and files.</p>
            </a>
          </Link>
          
          <Link href="/auth/register">
            <a className={styles.card}>
              <h2>Register &rarr;</h2>
              <p>Create a new account to start using our services.</p>
            </a>
          </Link>
          
          <Link href="/products">
            <a className={styles.card}>
              <h2>Products &rarr;</h2>
              <p>Explore our range of high-quality printing services.</p>
            </a>
          </Link>
          
          <Link href="/about">
            <a className={styles.card}>
              <h2>About Us &rarr;</h2>
              <p>Learn about our heritage and printing expertise.</p>
            </a>
          </Link>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>Puratan Printers &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
} 