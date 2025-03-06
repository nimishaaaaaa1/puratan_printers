"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Cart.module.css';

// Sample cart items for demonstration
const initialCartItems = [
  {
    id: 1,
    name: 'Premium Business Cards',
    description: '600gsm Cotton Paper, Letterpress, 100 Cards',
    price: 1499,
    quantity: 2,
    image: 'https://images.unsplash.com/photo-1589041127168-9b1915fd1d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 2,
    name: 'Custom Letterheads',
    description: '120gsm Premium Paper, Full Color, 250 Sheets',
    price: 1299,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 3,
    name: 'Corporate Diary',
    description: 'Hardbound, Customized with Logo, A5 Size',
    price: 699,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 4,
    name: 'Custom Bill Books',
    description: 'Carbonless, 3-ply, 100 Sets with Numbering',
    price: 1299,
    quantity: 1,
    image: 'https://images.unsplash.com/photo-1586486855514-8c633cc6fd29?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState<any[]>([]);
  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);
  const [discount, setDiscount] = useState(0);

  // Load cart items on component mount
  useEffect(() => {
    // In a real application, you would fetch cart items from a state management solution or API
    setCartItems(initialCartItems);
  }, []);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    // Simple coupon logic for demonstration
    if (couponCode.toUpperCase() === 'WELCOME10') {
      setCouponApplied(true);
      setDiscount(10);
    } else {
      alert('Invalid coupon code');
    }
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 100 ? 0 : 15;
  const total = subtotal + shipping - (subtotal * discount / 100);

  return (
    <div className={styles.cartPage}>
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <h1>Your Cart</h1>
          <p>Review and manage your selected items before checkout.</p>
        </div>
      </section>

      <section className={styles.cartSection}>
        <div className={styles.container}>
          {cartItems.length > 0 ? (
            <div className={styles.cartGrid}>
              <div className={styles.cartItems}>
                <div className={styles.cartHeader}>
                  <div className={styles.productCol}>Product</div>
                  <div className={styles.priceCol}>Price</div>
                  <div className={styles.quantityCol}>Quantity</div>
                  <div className={styles.totalCol}>Total</div>
                  <div className={styles.actionCol}></div>
                </div>
                
                {cartItems.map(item => (
                  <div key={item.id} className={styles.cartItem}>
                    <div className={styles.productCol}>
                      <div className={styles.productInfo}>
                        <div className={styles.productImage}>
                          <Image 
                            src={item.image} 
                            alt={item.name}
                            width={80}
                            height={80}
                            className={styles.itemImage}
                          />
                        </div>
                        <div className={styles.productDetails}>
                          <h3>{item.name}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className={styles.priceCol}>
                      ₹{item.price.toLocaleString('en-IN')}
                    </div>
                    
                    <div className={styles.quantityCol}>
                      <div className={styles.quantityControl}>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          -
                        </button>
                        <span className={styles.quantityValue}>{item.quantity}</span>
                        <button 
                          className={styles.quantityButton}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    
                    <div className={styles.totalCol}>
                      ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                    </div>
                    
                    <div className={styles.actionCol}>
                      <button 
                        className={styles.removeButton}
                        onClick={() => removeItem(item.id)}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="currentColor"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className={styles.cartSummary}>
                <h2>Order Summary</h2>
                
                <div className={styles.summaryRow}>
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>
                
                <div className={styles.summaryRow}>
                  <span>Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `₹${shipping.toLocaleString('en-IN')}`}</span>
                </div>
                
                {couponApplied && (
                  <div className={styles.summaryRow}>
                    <span>Discount ({discount}%)</span>
                    <span>-₹{(subtotal * discount / 100).toLocaleString('en-IN')}</span>
                  </div>
                )}
                
                <div className={styles.couponSection}>
                  <input 
                    type="text" 
                    placeholder="Coupon Code" 
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className={styles.couponInput}
                  />
                  <button 
                    className={styles.couponButton}
                    onClick={applyCoupon}
                  >
                    Apply
                  </button>
                </div>
                
                <div className={styles.totalRow}>
                  <span>Total</span>
                  <span>₹{total.toLocaleString('en-IN')}</span>
                </div>
                
                <div className={styles.checkoutActions}>
                  <button className={styles.checkoutButton}>
                    Proceed to Checkout
                  </button>
                  <Link href="/products" className={styles.continueShoppingLink}>
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.emptyCart}>
              <div className={styles.emptyCartIcon}>
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <Link href="/products" className={styles.shopNowButton}>
                Shop Now
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className={styles.featuredSection}>
        <div className={styles.container}>
          <h2>You Might Also Like</h2>
          <div className={styles.featuredGrid}>
            <div className={styles.featuredItem}>
              <div className={styles.featuredImageContainer}>
                <Image 
                  src="https://images.unsplash.com/photo-1579965342575-16428a7c8881?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Luxury Envelopes"
                  width={300}
                  height={200}
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredInfo}>
                <h3>Luxury Envelopes</h3>
                <p>Premium quality envelopes for business correspondence</p>
                <span className={styles.featuredPrice}>₹799</span>
                <button className={styles.addToCartButton}>
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className={styles.featuredItem}>
              <div className={styles.featuredImageContainer}>
                <Image 
                  src="https://images.unsplash.com/photo-1606312619070-d48b4c652a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Elegant Notecards"
                  width={300}
                  height={200}
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredInfo}>
                <h3>Elegant Notecards</h3>
                <p>Elegant notecards for personal messages</p>
                <span className={styles.featuredPrice}>₹599</span>
                <button className={styles.addToCartButton}>
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className={styles.featuredItem}>
              <div className={styles.featuredImageContainer}>
                <Image 
                  src="https://images.unsplash.com/photo-1584473457493-17c4c24290e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Custom Planners"
                  width={300}
                  height={200}
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredInfo}>
                <h3>Custom Planners</h3>
                <p>Personalized planners with your branding</p>
                <span className={styles.featuredPrice}>₹699</span>
                <button className={styles.addToCartButton}>
                  Add to Cart
                </button>
              </div>
            </div>
            
            <div className={styles.featuredItem}>
              <div className={styles.featuredImageContainer}>
                <Image 
                  src="https://images.unsplash.com/photo-1586075010923-2dd4570fb338?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Presentation Folders"
                  width={300}
                  height={200}
                  className={styles.featuredImage}
                />
              </div>
              <div className={styles.featuredInfo}>
                <h3>Presentation Folders</h3>
                <p>Professional folders for your documents</p>
                <span className={styles.featuredPrice}>₹1,499</span>
                <button className={styles.addToCartButton}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.container}>
          <div className={styles.supportGrid}>
            <div className={styles.supportItem}>
              <div className={styles.supportIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Fast Delivery</h3>
              <p>Quick turnaround times on all orders</p>
            </div>
            
            <div className={styles.supportItem}>
              <div className={styles.supportIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <h3>Quality Guarantee</h3>
              <p>Satisfaction guaranteed on all products</p>
            </div>
            
            <div className={styles.supportItem}>
              <div className={styles.supportIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>24/7 Support</h3>
              <p>Contact us anytime for assistance</p>
            </div>
            
            <div className={styles.supportItem}>
              <div className={styles.supportIcon}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Secure Checkout</h3>
              <p>Safe and secure payment processing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 