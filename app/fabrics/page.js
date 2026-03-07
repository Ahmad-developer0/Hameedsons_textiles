'use client';

import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  FiZoomIn,
  FiX,
  FiPhone,
  FiMail,
  FiMapPin,
  FiPhone as FiPhoneCall,
  FiHome,
  FiInfo,
  FiAward,
  FiStar,
  FiPackage
} from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export default function Fabrics() {
  const [selectedImage, setSelectedImage] = useState(null);

  // All fabric images from public folder
  const fabricImages = [
    '/Fabrics/1.jpg', '/Fabrics/2.jpg', '/Fabrics/3.jpg', '/Fabrics/4.jpg',
    '/Fabrics/5.jpg', '/Fabrics/6.jpg', '/Fabrics/7.jpg', '/Fabrics/8.jpg',
    '/Fabrics/9.jpg', '/Fabrics/10.jpg', '/Fabrics/11.jpg', '/Fabrics/12.jpg',
    '/Fabrics/13.jpg', '/Fabrics/14.jpg', '/Fabrics/15.jpg', '/Fabrics/16.jpg',
    '/Fabrics/17.jpg', '/Fabrics/18.jpg', '/Fabrics/19.jpg', '/Fabrics/20.jpg',
    '/Fabrics/21.jpg', '/Fabrics/22.jpg', '/Fabrics/23.jpg', '/Fabrics/24.jpg',
    '/Fabrics/25.jpg', '/Fabrics/26.jpg', '/Fabrics/27.jpg', '/Fabrics/28.jpg'
  ];

  const openImageModal = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
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
              <h1 className="page-title-dark">Fabrics Collection</h1>
              <nav className="breadcrumb-nav-dark">
                <a href="/" className="breadcrumb-link-dark">Home</a>
                <span className="breadcrumb-separator-dark">/</span>
                <a href="#" className="breadcrumb-link-dark">Products</a>
                <span className="breadcrumb-separator-dark">/</span>
                <span className="breadcrumb-current-dark">Fabrics</span>
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
              <h2 className="section-title">Premium Fabrics Collection</h2>
              <p className="section-subtitle">
                Discover our wide range of high-quality fabrics including 100% cotton, poly-cotton blends, 
                printed and dyed fabrics. Our fabrics feature various weaves like plain, sateen, and duck, 
                manufactured using modern looms including Power, Auto, Sulzer, and Air jet looms to meet 
                diverse textile applications and international quality standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {fabricImages.map((imageSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-container">
                  <img
                    src={imageSrc}
                    alt={`Fabric ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                  />
                  <div className="gallery-overlay">
                    <button
                      className="gallery-zoom-btn"
                      onClick={() => openImageModal(imageSrc)}
                      aria-label={`Zoom fabric ${index + 1}`}
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
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="image-modal-close" onClick={closeImageModal} aria-label="Close">
              <FiX />
            </button>
            <img src={selectedImage} alt="Fabric Detail" className="modal-image" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
