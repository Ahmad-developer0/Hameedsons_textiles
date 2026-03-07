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

export default function HospitalLinen() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Hospital linen images from public folder
  const hospitalLinenImages = [
    '/Hospital%20Linen/2.jpg',
    '/Hospital%20Linen/5.jpg',
    '/Hospital%20Linen/10.jpg',
    '/Hospital%20Linen/12.jpg',
    '/Hospital%20Linen/13.jpg',
    '/Hospital%20Linen/14.jpg',
    '/Hospital%20Linen/16.jpg',
    '/Hospital%20Linen/17.jpg',
    '/Hospital%20Linen/18.jpg',
    '/Hospital%20Linen/19.jpg',
    '/Hospital%20Linen/21.jpg',
    '/Hospital%20Linen/22.jpg',
    '/Hospital%20Linen/23.jpg'
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
              <h1 className="page-title-dark">Hospital Linen Collection</h1>
              <nav className="breadcrumb-nav-dark">
                <a href="/" className="breadcrumb-link-dark">Home</a>
                <span className="breadcrumb-separator-dark">/</span>
                <a href="#" className="breadcrumb-link-dark">Products</a>
                <span className="breadcrumb-separator-dark">/</span>
                <span className="breadcrumb-current-dark">Hospital Linen</span>
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
              <h2 className="section-title">Premium Hospital Linen Collection</h2>
              <p className="section-subtitle">
                Explore our comprehensive range of premium hospital and medical linen including 
                bed sheets, pillow covers, blankets, and surgical drapes. All products are 
                manufactured using high-quality, hygienic materials that meet international 
                healthcare standards with antimicrobial properties and easy-care features.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {hospitalLinenImages.map((imageSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-container">
                  <img
                    src={imageSrc}
                    alt={`Hospital Linen ${index + 1}`}
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
            <img src={selectedImage} alt="Hospital Linen Detail" className="modal-image" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
