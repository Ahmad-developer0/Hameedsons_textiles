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

export default function Towels() {
  const [selectedImage, setSelectedImage] = useState(null);

  // All towel images from public folder
  const towelImages = [
    '/Towels/1.jpg', '/Towels/2.jpg', '/Towels/3.jpg', '/Towels/4.jpeg',
    '/Towels/5.jpeg', '/Towels/6.jpg', '/Towels/7.jpg', '/Towels/8.jpg',
    '/Towels/9.jpg', '/Towels/13.jpg', '/Towels/14.jpg', '/Towels/15.jpg',
    '/Towels/16.jpg', '/Towels/17.jpg', '/Towels/18.jpg', '/Towels/19.jpg',
    '/Towels/20.jpg', '/Towels/21.jpg', '/Towels/22.jpg', '/Towels/23.jpg',
    '/Towels/24.jpg', '/Towels/25.jpg', '/Towels/26.jpg', '/Towels/27.jpg',
    '/Towels/28.jpg', '/Towels/29.jpg', '/Towels/30.jpg', '/Towels/31.jpg',
    '/Towels/32.jpg', '/Towels/33.jpg', '/Towels/38.jpg', '/Towels/40.jpg',
    '/Towels/41.jpg', '/Towels/43.jpg', '/Towels/44.jpg', '/Towels/45.jpg'
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
              <h1 className="page-title-dark">Towels Collection</h1>
              <nav className="breadcrumb-nav-dark">
                <a href="/" className="breadcrumb-link-dark">Home</a>
                <span className="breadcrumb-separator-dark">/</span>
                <a href="#" className="breadcrumb-link-dark">Products</a>
                <span className="breadcrumb-separator-dark">/</span>
                <span className="breadcrumb-current-dark">Towels</span>
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
              <h2 className="section-title">Premium Towels Collection</h2>
              <p className="section-subtitle">
                Explore our comprehensive range of premium towels including bath towels, hand towels,
                face towels, and kitchen towels. Made from high-quality cotton with excellent
                absorbency, durability, and comfort. Available in various sizes, colors, and
                designs to meet global market demands.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {towelImages.map((imageSrc, index) => (
              <div key={index} className="gallery-item">
                <div className="gallery-image-container">
                  <img
                    src={imageSrc}
                    alt={`Towel ${index + 1}`}
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
            <img src={selectedImage} alt="Towel Detail" className="modal-image" />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
