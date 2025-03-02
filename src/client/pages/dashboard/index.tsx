"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Head from 'next/head';
import { useSession, signOut } from 'next-auth/react';
import styles from '../../../styles/Dashboard.module.css';

export default function Dashboard() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/auth/login');
    },
  });

  const handleLogout = () => {
    signOut({ callbackUrl: '/' });
  };

  if (status === "loading") {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Dashboard - Puratan Printers</title>
        <meta name="description" content="Manage your printing projects" />
      </Head>
      
      <header className={styles.header}>
        <h1>Puratan Printers</h1>
        <nav className={styles.nav}>
          <Link href="/dashboard" className={styles.navLink}>
            Dashboard
          </Link>
          <Link href="/dashboard/orders" className={styles.navLink}>
            Orders
          </Link>
          <Link href="/dashboard/files" className={styles.navLink}>
            Files
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </nav>
      </header>
      
      <main className={styles.main}>
        {session?.user && (
          <div className={styles.welcome}>
            <h2>Welcome, {session.user.name}!</h2>
            <p>Manage your printing projects and orders from this dashboard.</p>
          </div>
        )}
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Quick Actions</h3>
            <div className={styles.actions}>
              <Link href="/dashboard/orders/new" className={styles.actionButton}>
                New Order
              </Link>
              <Link href="/dashboard/files/upload" className={styles.actionButton}>
                Upload File
              </Link>
              <Link href="/dashboard/support" className={styles.actionButton}>
                Get Support
              </Link>
            </div>
          </div>
          
          <div className={styles.card}>
            <h3>Recent Orders</h3>
            <p className={styles.emptyState}>No recent orders found.</p>
            <Link href="/dashboard/orders" className={styles.viewAllLink}>
              View All Orders
            </Link>
          </div>
          
          <div className={styles.card}>
            <h3>Recent Files</h3>
            <p className={styles.emptyState}>No recent files found.</p>
            <Link href="/dashboard/files" className={styles.viewAllLink}>
              View All Files
            </Link>
          </div>
        </div>
      </main>
      
      <footer className={styles.footer}>
        <p>Puratan Printers &copy; {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
} 