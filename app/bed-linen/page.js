'use client';

import {
  FiZoomIn,
  FiX,
  FiHome,
  FiInfo,
  FiAward,
  FiStar,
  FiPhoneCall,
  FiPackage,
  FiPhone,
  FiMail,
  FiMapPin
} from 'react-icons/fi';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa';
import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function BedLinen() {
  const [selectedImage, setSelectedImage] = useState(null);

  // All bed linen images from public folder
  const bedLinenImages = [
    '/Bed%20Linen/1.jpg', '/Bed%20Linen/2.jpg', '/Bed%20Linen/3.jpg', '/Bed%20Linen/4.jpg',
    '/Bed%20Linen/5.jpg', '/Bed%20Linen/6.jpg', '/Bed%20Linen/7.jpg', '/Bed%20Linen/8.jpg',
    '/Bed%20Linen/9.jpg', '/Bed%20Linen/10.jpg', '/Bed%20Linen/11.jpg', '/Bed%20Linen/12.jpg',
    '/Bed%20Linen/13.jpeg', '/Bed%20Linen/14.jpeg', '/Bed%20Linen/15.jpg', '/Bed%20Linen/16.jpg',
    '/Bed%20Linen/17.jpg', '/Bed%20Linen/18.jpg', '/Bed%20Linen/19.jpg', '/Bed%20Linen/20.jpg',
    '/Bed%20Linen/21.jpg', '/Bed%20Linen/22.jpg', '/Bed%20Linen/23.jpg', '/Bed%20Linen/24.jpg',
    '/Bed%20Linen/25.jpg', '/Bed%20Linen/26.jpg', '/Bed%20Linen/27.webp', '/Bed%20Linen/28.jpg',
    '/Bed%20Linen/29.jpeg', '/Bed%20Linen/30.jpg', '/Bed%20Linen/31.jpg', '/Bed%20Linen/32.jpg',
    '/Bed%20Linen/33.jpg', '/Bed%20Linen/34.jpg'
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
              <h1 className="page-title-dark">Bed Linen Collection</h1>
              <nav className="breadcrumb-nav-dark">
                <a href="/" className="breadcrumb-link-dark">Home</a>
                <span className="breadcrumb-separator-dark">/</span>
                <a href="#" className="breadcrumb-link-dark">Products</a>
                <span className="breadcrumb-separator-dark">/</span>
                <span className="breadcrumb-current-dark">Bed Linen</span>
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
              <h2 className="section-title">Premium Bed Linen Collection</h2>
              <p className="section-subtitle">
                Discover our extensive range of premium bed linen including bedsheets, duvet covers, 
                pillow cases, and complete bedding sets. All products are manufactured using high-quality 
                cotton and poly-cotton materials with various designs, patterns, and colors to meet 
                international standards and customer requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {bedLinenImages.map((imageSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-container">
                  <img 
                    src={imageSrc} 
                    alt={`Bed Linen ${index + 1}`}
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
            <img src={selectedImage} alt="Bed Linen Detail" className="modal-image" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
