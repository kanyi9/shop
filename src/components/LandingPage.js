import React from 'react';
import { useNavigate } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Electronics',
    image: 'https://images.unsplash.com/photo-1510552776732-01e5799e48de?auto=format&fit=crop&w=400&h=300&q=70',
  },
  {
    id: 2,
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1521334884684-d80222895322?auto=format&fit=crop&w=400&h=300&q=70',
  },
  {
    id: 3,
    name: 'Home & Living',
    image: 'https://images.unsplash.com/photo-1501183638714-65710ee1b0cd?auto=format&fit=crop&w=400&h=300&q=70',
  },
  {
    id: 4,
    name: 'Sports & Outdoors',
    image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&h=300&q=70',
  },
];

const products = [
  {
    id: 1,
    name: 'Galaxy X',
    price: '$799',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&h=300&q=70',
  },
  {
    id: 2,
    name: 'Urban Runners',
    price: '$129',
    image: 'https://images.unsplash.com/photo-1519744792095-2f2205e87b6f?auto=format&fit=crop&w=400&h=300&q=70',
  },
  {
    id: 3,
    name: 'Cozy Comfort Sofa',
    price: '$899',
    image: 'https://images.unsplash.com/photo-1505692794403-129e19092798?auto=format&fit=crop&w=400&h=300&q=70',
  },
  {
    id: 4,
    name: 'Ranger Trail',
    price: '$499',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&h=300&q=70',
  },
];

function LandingPage() {
    const navigate = useNavigate();
  return (
    <>
      <header style={styles.header}>
        <div style={styles.logo} aria-label="ShopEase logo">
          ShopEase
        </div>
        <nav aria-label="Primary navigation" style={styles.nav}>
          <a href="#" tabIndex={0} style={styles.navLink}>
            Home
          </a>
          <a href="#" tabIndex={0} style={styles.navLink}>
            Shop
          </a>
          <a href="#" tabIndex={0} style={styles.navLink}>
            About
          </a>
          <a href="#" tabIndex={0} style={styles.navLink}>
            Contact
          </a>
        </nav>
      </header>

      <main style={styles.main}>
        <section
          className="hero"
          role="banner"
          aria-label="Hero section"
          style={styles.hero}
        >
          <h1 style={styles.heroTitle}>Discover Your Style, Every Day</h1>
          <p style={styles.heroDesc}>
            Shop the latest trends and timeless classics, all in one place.
          </p>
          <button style={styles.btnPrimary} aria-label="Shop now"  onClick={() => navigate('/login')}>
            Shop Now
          </button>
        </section>

        <section className="categories" aria-label="Featured categories" style={styles.categories}>
          {categories.map(category => (
            <div
              key={category.id}
              style={styles.categoryCard}
              tabIndex={0}
              role="button"
              aria-pressed="false"
              aria-label={`Shop ${category.name} category`}
            >
              <img
                src={category.image}
                alt={`${category.name} category`}
                style={styles.categoryImg}
                loading="lazy"
              />
              <h3 style={styles.categoryName}>{category.name}</h3>
            </div>
          ))}
        </section>

        <section className="products-section" aria-label="Popular products" style={styles.productsSection}>
          <h2 style={styles.productsTitle}>Popular Products</h2>
          <div className="products" style={styles.productsGrid}>
            {products.map(product => (
              <div
                key={product.id}
                style={styles.productCard}
                tabIndex={0}
                role="button"
                aria-label={`${product.name} product`}
              >
                <img
                  className="product-img"
                  src={product.image}
                  alt={product.name}
                  style={styles.productImg}
                  loading="lazy"
                />
                <div style={styles.productInfo}>
                  <div style={styles.productName}>{product.name}</div>
                  <div style={styles.productPrice}>{product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>
          Follow us on{' '}
          <a href="#" aria-label="Facebook" style={styles.footerLink}>
            Facebook
          </a>{' '}
          |{' '}
          <a href="#" aria-label="Twitter" style={styles.footerLink}>
            Twitter
          </a>{' '}
          |{' '}
          <a href="#" aria-label="Instagram" style={styles.footerLink}>
            Instagram
          </a>
        </p>
        <p>&copy; 2024 ShopEase. All rights reserved.</p>
      </footer>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: '#ffffff',
    padding: '1rem 1.5rem',
    boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontWeight: 700,
    fontSize: '1.5rem',
    color: '#0066ff',
    letterSpacing: '1px',
    fontFamily: "'Poppins', sans-serif",
  },
  nav: {
    display: 'flex',
  },
  navLink: {
    marginLeft: '1rem',
    fontWeight: 600,
    fontSize: '0.9rem',
    color: '#0066ff',
    textDecoration: 'none',
    fontFamily: "'Poppins', sans-serif",
  },
  main: {
    flex: 1,
    padding: '1.5rem 1rem',
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: '#f9fafb',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  hero: {
    background: 'linear-gradient(135deg, #0066ff, #00ccff)',
    color: 'white',
    borderRadius: '12px',
    padding: '2rem 1.2rem',
    textAlign: 'center',
    marginBottom: '1.5rem',
  },
  heroTitle: {
    fontSize: '1.8rem',
    marginBottom: '0.5rem',
    fontWeight: 700,
  },
  heroDesc: {
    fontSize: '1rem',
    marginBottom: '1rem',
    maxWidth: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  btnPrimary: {
    backgroundColor: '#ff6600',
    color: 'white',
    padding: '0.85rem 1.7rem',
    border: 'none',
    borderRadius: '30px',
    fontWeight: 600,
    fontSize: '1rem',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(255, 102, 0, 0.4)',
    transition: 'background-color 0.3s ease',
  },
  categories: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '15px',
    marginBottom: '1.5rem',
  },
  categoryCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.07)',
    overflow: 'hidden',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.3s ease',
  },
  categoryImg: {
    width: '100%',
    height: '110px',
    objectFit: 'cover',
  },
  categoryName: {
    fontSize: '1rem',
    fontWeight: 600,
    padding: '0.75rem 1rem',
    color: '#333',
  },
  productsSection: {
    marginBottom: '1.5rem',
  },
  productsTitle: {
    fontSize: '1.3rem',
    fontWeight: 700,
    marginBottom: '1rem',
    color: '#222',
  },
  productsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '12px',
  },
  productCard: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 3px 10px rgba(0,0,0,0.1)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  productImg: {
    width: '100%',
    height: '110px',
    objectFit: 'cover',
  },
  productInfo: {
    padding: '0.6rem 0.8rem',
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: '0.95rem',
    fontWeight: 600,
    marginBottom: '0.25rem',
  },
  productPrice: {
    color: '#ff6600',
    fontWeight: 700,
    fontSize: '1rem',
  },
  footer: {
    backgroundColor: '#222',
    color: '#ddd',
    textAlign: 'center',
    padding: '1rem 1rem',
    fontSize: '0.8rem',
    fontFamily: "'Poppins', sans-serif",
  },
  footerLink: {
    color: '#ff6600',
    margin: '0 5px',
    fontWeight: 600,
    textDecoration: 'none',
  },
};

export default LandingPage;

