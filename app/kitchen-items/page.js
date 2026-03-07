'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  FiX,
  FiZoomIn,
  FiMapPin,
  FiPhone,
  FiMail,
  FiHome,
  FiInfo,
  FiAward,
  FiStar,
  FiPackage
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function KitchenItems() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Kitchen items images from public folder
  const kitchenItemsImages = [
    '/Kitchen%20Items/1.jpg', '/Kitchen%20Items/2.jpg', '/Kitchen%20Items/3.jpg', 
    '/Kitchen%20Items/4.jpg', '/Kitchen%20Items/5.jpg', '/Kitchen%20Items/6.jpg', 
    '/Kitchen%20Items/7.jpg', '/Kitchen%20Items/8.jpg', '/Kitchen%20Items/9.jpg', 
    '/Kitchen%20Items/10.jpg', '/Kitchen%20Items/11.jpg', '/Kitchen%20Items/12.jpg', 
    '/Kitchen%20Items/13.jpg', '/Kitchen%20Items/14.jpg', '/Kitchen%20Items/15.jpg',
    '/Kitchen%20Items/16.jpg'
  ];

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <div>
      <Navigation currentPage="products" />

      {/* Page Header */}
      <section className="page-header-light">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title-dark">Kitchen Items Collection</h1>
              <nav className="breadcrumb-nav-dark">
                <a href="/" className="breadcrumb-link-dark">Home</a>
                <span className="breadcrumb-separator-dark">/</span>
                <a href="#" className="breadcrumb-link-dark">Products</a>
                <span className="breadcrumb-separator-dark">/</span>
                <span className="breadcrumb-current-dark">Kitchen Items</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* Product Info Section */}
      <section className="product-info-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center">
              <h2 className="section-title">Premium Kitchen Items Collection</h2>
              <p className="section-subtitle">
                Explore our comprehensive range of kitchen textile items including dishcloths, 
                kitchen towels, pot holders, oven mitts, and table linens. Made from high-quality, 
                absorbent materials that are heat-resistant, durable, and machine washable for 
                everyday kitchen use and professional applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {kitchenItemsImages.map((imageSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-container">
                  <img
                    src={imageSrc}
                    alt={`Kitchen Item ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <button
                      className="gallery-zoom-btn"
                      onClick={() => openImageModal(imageSrc)}
                    >
                      <FiZoomIn />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="image-modal" onClick={closeImageModal}>
          <div className="image-modal-content">
            <button className="image-modal-close" onClick={closeImageModal}>
              <FiX />
            </button>
            <img src={selectedImage} alt="Kitchen Item Detail" className="modal-image" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
