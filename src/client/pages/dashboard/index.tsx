import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import styles from '../../../styles/Dashboard.module.css';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (!token) {
          router.push('/auth/login');
          return;
        }
        
        const response = await fetch('/api/users/profile', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        
        if (!response.ok) {
          if (response.status === 401) {
            localStorage.removeItem('token');
            router.push('/auth/login');
            return;
          }
          throw new Error('Failed to fetch user profile');
        }
        
        const data = await response.json();
        setUser(data.data.user);
      } catch (err: any) {
        setError(err.message || 'An unexpected error occurred');
      } finally {
        setLoading(false);
      }
    };
    
    fetchUserProfile();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  if (loading) {
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
          <Link href="/dashboard">
            <span className={styles.navLink}>Dashboard</span>
          </Link>
          <Link href="/dashboard/orders">
            <span className={styles.navLink}>Orders</span>
          </Link>
          <Link href="/dashboard/files">
            <span className={styles.navLink}>Files</span>
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </nav>
      </header>
      
      <main className={styles.main}>
        {error && <div className={styles.error}>{error}</div>}
        
        {user && (
          <div className={styles.welcome}>
            <h2>Welcome, {user.name}!</h2>
            <p>Manage your printing projects and orders from this dashboard.</p>
          </div>
        )}
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Quick Actions</h3>
            <div className={styles.actions}>
              <Link href="/dashboard/orders/new">
                <span className={styles.actionButton}>New Order</span>
              </Link>
              <Link href="/dashboard/files/upload">
                <span className={styles.actionButton}>Upload File</span>
              </Link>
              <Link href="/dashboard/support">
                <span className={styles.actionButton}>Get Support</span>
              </Link>
            </div>
          </div>
          
          <div className={styles.card}>
            <h3>Recent Orders</h3>
            <p className={styles.emptyState}>No recent orders found.</p>
            <Link href="/dashboard/orders">
              <span className={styles.viewAllLink}>View All Orders</span>
            </Link>
          </div>
          
          <div className={styles.card}>
            <h3>Recent Files</h3>
            <p className={styles.emptyState}>No recent files found.</p>
            <Link href="/dashboard/files">
              <span className={styles.viewAllLink}>View All Files</span>
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