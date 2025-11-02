'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const reviewsTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = reviewsTrackRef.current;
    if (!track) return;

    // Duplicate reviews for infinite scroll
    const reviews = Array.from(track.children);
    reviews.forEach(review => {
      const clone = review.cloneNode(true);
      track.appendChild(clone);
    });
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="container navbar-content">
          <a href="/" className="logo">LUXE NAILS</a>
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search for products, colors, collections..."
            />
          </div>
          <div className="nav-icons">
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <svg className="nav-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
        </div>
      </nav>

      {/* Categories Carousel */}
      <section className="categories-section">
        <div className="container">
          <div className="carousel-container">
            <div className="carousel-track">
              <div className="category-card">
                <div className="category-icon">💅</div>
                <div className="category-name">Nail Polish</div>
              </div>
              <div className="category-card">
                <div className="category-icon">✨</div>
                <div className="category-name">Gel Polish</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🌸</div>
                <div className="category-name">Nail Care</div>
              </div>
              <div className="category-card">
                <div className="category-icon">💎</div>
                <div className="category-name">Nail Art</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🎨</div>
                <div className="category-name">Tools & Kits</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🌺</div>
                <div className="category-name">Treatments</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🦋</div>
                <div className="category-name">Extensions</div>
              </div>
              <div className="category-card">
                <div className="category-icon">🌙</div>
                <div className="category-name">Collections</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="media-grid-section">
        <div className="container">
          <h2 className="section-title">Discover Your Style</h2>
          <div className="media-grid">
            <div className="media-item">
              <div className="media-image" style={{background: 'linear-gradient(135deg, #ffd4e5 0%, #ffe5f4 100%)'}}></div>
              <div className="media-overlay">
                <div className="media-title">Spring Collection</div>
                <div className="media-subtitle">Soft pastels for the season</div>
              </div>
            </div>
            <div className="media-item tall">
              <div className="media-image" style={{background: 'linear-gradient(135deg, #e5d4ff 0%, #f0e5ff 100%)'}}></div>
              <div className="media-overlay">
                <div className="media-title">Luxury Gel Line</div>
                <div className="media-subtitle">Long-lasting premium finish</div>
              </div>
            </div>
            <div className="media-item">
              <div className="media-image" style={{background: 'linear-gradient(135deg, #d4f4ff 0%, #e5f9ff 100%)'}}></div>
              <div className="media-overlay">
                <div className="media-title">Nail Care Essentials</div>
                <div className="media-subtitle">Professional treatment at home</div>
              </div>
            </div>
            <div className="media-item">
              <div className="media-image" style={{background: 'linear-gradient(135deg, #fff4d4 0%, #fff9e5 100%)'}}></div>
              <div className="media-overlay">
                <div className="media-title">Limited Edition</div>
                <div className="media-subtitle">Exclusive shades</div>
              </div>
            </div>
            <div className="media-item">
              <div className="media-image" style={{background: 'linear-gradient(135deg, #ffe5d4 0%, #fff0e5 100%)'}}></div>
              <div className="media-overlay">
                <div className="media-title">Art Supplies</div>
                <div className="media-subtitle">Create stunning designs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Carousel */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-carousel">
            <div className="products-track">
              <div className="product-card">
                <div className="product-image" style={{background: 'linear-gradient(135deg, #ffd4e5 0%, #ffe5f4 100%)'}}></div>
                <div className="product-info">
                  <div className="product-name">Rose Quartz Polish</div>
                  <div className="product-description">Delicate pink with shimmer</div>
                  <div className="product-price">$24.00</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image" style={{background: 'linear-gradient(135deg, #e5d4ff 0%, #f0e5ff 100%)'}}></div>
                <div className="product-info">
                  <div className="product-name">Lavender Dream Gel</div>
                  <div className="product-description">Long-lasting gel formula</div>
                  <div className="product-price">$32.00</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image" style={{background: 'linear-gradient(135deg, #d4f4ff 0%, #e5f9ff 100%)'}}></div>
                <div className="product-info">
                  <div className="product-name">Ocean Breeze</div>
                  <div className="product-description">Soft aqua blue tone</div>
                  <div className="product-price">$24.00</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image" style={{background: 'linear-gradient(135deg, #fff4d4 0%, #fff9e5 100%)'}}></div>
                <div className="product-info">
                  <div className="product-name">Champagne Glow</div>
                  <div className="product-description">Elegant golden beige</div>
                  <div className="product-price">$28.00</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image" style={{background: 'linear-gradient(135deg, #ffe5d4 0%, #fff0e5 100%)'}}></div>
                <div className="product-info">
                  <div className="product-name">Peach Blossom</div>
                  <div className="product-description">Warm peachy nude</div>
                  <div className="product-price">$24.00</div>
                </div>
              </div>
              <div className="product-card">
                <div className="product-image" style={{background: 'linear-gradient(135deg, #ffe5ff 0%, #fff0ff 100%)'}}></div>
                <div className="product-info">
                  <div className="product-name">Blush Essence</div>
                  <div className="product-description">Natural pink hue</div>
                  <div className="product-price">$24.00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="trust-section">
        <div className="container">
          <div className="trust-badges">
            <div className="trust-badge">
              <div className="badge-icon">🚚</div>
              <div className="badge-title">Free Shipping</div>
              <div className="badge-description">On orders over $50</div>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">🌿</div>
              <div className="badge-title">Natural Ingredients</div>
              <div className="badge-description">Vegan & cruelty-free</div>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">💝</div>
              <div className="badge-title">30-Day Returns</div>
              <div className="badge-description">Satisfaction guaranteed</div>
            </div>
            <div className="trust-badge">
              <div className="badge-icon">🔒</div>
              <div className="badge-title">Secure Payment</div>
              <div className="badge-description">SSL encrypted checkout</div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="reviews-section">
        <div className="container">
          <h2 className="section-title">What Our Customers Say</h2>
          <div className="reviews-carousel">
            <div className="reviews-track" ref={reviewsTrackRef}>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <div className="review-text">
                  "The quality is exceptional! The polish lasts for weeks without chipping. I'm in love with the Rose Quartz shade."
                </div>
                <div className="review-author">
                  <div className="author-avatar"></div>
                  <div>
                    <div className="author-name">Sarah Mitchell</div>
                    <div className="author-verified">Verified Purchase</div>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <div className="review-text">
                  "Best nail care products I've ever used. The gel formula is amazing and the colors are so sophisticated."
                </div>
                <div className="review-author">
                  <div className="author-avatar"></div>
                  <div>
                    <div className="author-name">Emma Chen</div>
                    <div className="author-verified">Verified Purchase</div>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <div className="review-text">
                  "Love the pastel collection! Perfect for spring. The shipping was fast and packaging was beautiful."
                </div>
                <div className="review-author">
                  <div className="author-avatar"></div>
                  <div>
                    <div className="author-name">Jessica Taylor</div>
                    <div className="author-verified">Verified Purchase</div>
                  </div>
                </div>
              </div>
              <div className="review-card">
                <div className="review-stars">★★★★★</div>
                <div className="review-text">
                  "Professional salon quality at home. The nail care essentials transformed my nails completely!"
                </div>
                <div className="review-author">
                  <div className="author-avatar"></div>
                  <div>
                    <div className="author-name">Olivia Martinez</div>
                    <div className="author-verified">Verified Purchase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">Nail Care Journal</h2>
          <div className="blog-grid">
            <div className="blog-card">
              <div className="blog-image" style={{background: 'linear-gradient(135deg, #ffd4e5 0%, #ffe5f4 100%)'}}></div>
              <div className="blog-content">
                <div className="blog-date">March 15, 2025</div>
                <div className="blog-title">Spring Nail Trends You'll Love</div>
                <div className="blog-excerpt">
                  Discover the hottest nail trends for spring 2025. From soft pastels to bold designs, we've got you covered with inspiration and tips.
                </div>
                <a href="#" className="blog-link">READ MORE →</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image" style={{background: 'linear-gradient(135deg, #e5d4ff 0%, #f0e5ff 100%)'}}></div>
              <div className="blog-content">
                <div className="blog-date">March 12, 2025</div>
                <div className="blog-title">How to Make Your Manicure Last</div>
                <div className="blog-excerpt">
                  Professional tips for extending the life of your manicure. Learn the secrets to chip-free nails that last for weeks.
                </div>
                <a href="#" className="blog-link">READ MORE →</a>
              </div>
            </div>
            <div className="blog-card">
              <div className="blog-image" style={{background: 'linear-gradient(135deg, #d4f4ff 0%, #e5f9ff 100%)'}}></div>
              <div className="blog-content">
                <div className="blog-date">March 8, 2025</div>
                <div className="blog-title">The Benefits of Gel Polish</div>
                <div className="blog-excerpt">
                  Everything you need to know about gel polish. From application to removal, discover why gel is the preferred choice.
                </div>
                <a href="#" className="blog-link">READ MORE →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>LUXE NAILS</h3>
              <p>Elevating nail care with premium, luxurious products crafted for the modern woman.</p>
              <div className="social-icons">
                <div className="social-icon">f</div>
                <div className="social-icon">t</div>
                <div className="social-icon">i</div>
                <div className="social-icon">p</div>
              </div>
            </div>
            <div className="footer-section">
              <h3>Shop</h3>
              <a href="#">Nail Polish</a>
              <a href="#">Gel Polish</a>
              <a href="#">Nail Care</a>
              <a href="#">Collections</a>
              <a href="#">Sale</a>
            </div>
            <div className="footer-section">
              <h3>Company</h3>
              <a href="#">About Us</a>
              <a href="#">Sustainability</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
            <div className="footer-section">
              <h3>Contact</h3>
              <p>Email: hello@luxenails.com</p>
              <p>Phone: +1 (555) 123-4567</p>
              <p>Hours: Mon-Fri 9AM-6PM EST</p>
              <p>123 Beauty Lane, New York, NY 10001</p>
            </div>
          </div>
          <div className="footer-bottom">
            © 2025 Luxe Nails. All rights reserved. | Privacy Policy | Terms of Service
          </div>
        </div>
      </footer>
    </div>
  );
}
