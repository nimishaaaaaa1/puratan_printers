import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from '../../styles/Dashboard.module.css';

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
      } catch (err) {
        setError(err.message);
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

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Puratan Printers</h1>
        <nav className={styles.nav}>
          <Link href="/dashboard">
            <a className={styles.navLink}>Dashboard</a>
          </Link>
          <Link href="/dashboard/orders">
            <a className={styles.navLink}>Orders</a>
          </Link>
          <Link href="/dashboard/files">
            <a className={styles.navLink}>Files</a>
          </Link>
          <button onClick={handleLogout} className={styles.logoutButton}>
            Logout
          </button>
        </nav>
      </header>
      
      <main className={styles.main}>
        <div className={styles.welcome}>
          <h2>Welcome, {user?.name}!</h2>
          <p>Manage your printing projects and orders from this dashboard.</p>
        </div>
        
        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Quick Actions</h3>
            <div className={styles.actions}>
              <Link href="/dashboard/orders/new">
                <a className={styles.actionButton}>New Order</a>
              </Link>
              <Link href="/dashboard/files/upload">
                <a className={styles.actionButton}>Upload File</a>
              </Link>
              <Link href="/dashboard/support">
                <a className={styles.actionButton}>Get Support</a>
              </Link>
            </div>
          </div>
          
          <div className={styles.card}>
            <h3>Recent Orders</h3>
            <p className={styles.emptyState}>No recent orders found.</p>
            <Link href="/dashboard/orders">
              <a className={styles.viewAllLink}>View All Orders</a>
            </Link>
          </div>
          
          <div className={styles.card}>
            <h3>Recent Files</h3>
            <p className={styles.emptyState}>No recent files found.</p>
            <Link href="/dashboard/files">
              <a className={styles.viewAllLink}>View All Files</a>
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