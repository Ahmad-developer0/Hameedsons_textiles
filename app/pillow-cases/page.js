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

export default function PillowCases() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Pillow cases images from public folder
  const pillowCasesImages = [
    '/Pillow%20Cases/1.jpg',
    '/Pillow%20Cases/2.webp',
    '/Pillow%20Cases/3.webp',
    '/Pillow%20Cases/4.webp',
    '/Pillow%20Cases/5.webp',
    '/Pillow%20Cases/6.webp',
    '/Pillow%20Cases/7.jpg',
    '/Pillow%20Cases/8.jpg'
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
              <h1 className="page-title-dark">Pillow Cases Collection</h1>
              <nav className="breadcrumb-nav-dark">
                <a href="/" className="breadcrumb-link-dark">Home</a>
                <span className="breadcrumb-separator-dark">/</span>
                <a href="#" className="breadcrumb-link-dark">Products</a>
                <span className="breadcrumb-separator-dark">/</span>
                <span className="breadcrumb-current-dark">Pillow Cases</span>
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
              <h2 className="section-title">Premium Pillow Cases Collection</h2>
              <p className="section-subtitle">
                Discover our extensive range of premium pillow cases in various sizes, colors, 
                and designs. Made from high-quality cotton and poly-cotton materials with 
                excellent durability, comfort, and easy-care properties. Available in standard, 
                queen, and king sizes to complement any bedding set.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {pillowCasesImages.map((imageSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-container">
                  <img
                    src={imageSrc}
                    alt={`Pillow Case ${index + 1}`}
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
            <img src={selectedImage} alt="Pillow Case Detail" className="modal-image" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
