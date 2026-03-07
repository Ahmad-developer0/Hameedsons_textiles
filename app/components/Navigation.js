'use client';

import { 
  FiPhone, 
  FiMail, 
  FiMapPin, 
  FiMenu, 
  FiX,
  FiChevronDown,
  FiArrowRight,
  FiUsers,
  FiSettings,
  FiTruck,
  FiStar,
  FiAward,
  FiHome,
  FiInfo,
  FiPackage,
  FiTool,
  FiCalendar,
  FiPhone as FiPhoneCall
} from 'react-icons/fi';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn,
  FaTwitter 
} from 'react-icons/fa';
import { useState } from 'react';

export default function Navigation({ currentPage = 'home' }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (page) => currentPage === page ? 'active' : '';

  return (
    <>
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="d-flex flex-column flex-md-row align-items-center gap-4">
                <a href="tel:041-2638103" className="contact-info">
                  <FiPhone />
                  041-2638103
                </a>
                <a href="mailto:Info@hameedsonstextiles.com" className="contact-info">
                  <FiMail />
                  Info@hameedsonstextiles.com
                </a>
                <div className="contact-info">
                  <FiMapPin />
                  Faisalabad, Pakistan
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="social-icons justify-content-center justify-content-lg-end">
                <a href="https://www.facebook.com/share/15zQocERsf/?mibextid=wwXIfr" className="social-icon">
                  <FaFacebookF />
                </a>
                <a href="https://www.instagram.com/hameed_sons?igsh=MTB4b2R1ejJzcXBmag==" className="social-icon">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Navigation */}
      <nav className="navbar-modern">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between w-100">
            <a href="/" className="navbar-brand-modern">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fa177e98e79af4423bbf83ffc81a9cb51%2F2d531c4e1e1b4fa5a628f9aeda07ba07?format=webp&width=800"
                alt="Hameed Sons"
                width="60"
                height="60"
              />
              <span>Hameed Sons</span>
            </a>

            {/* Desktop Menu */}
            <ul className="navbar-nav-modern d-none d-lg-flex">
              <li className="nav-item-modern">
                <a href="/" className={`nav-link-modern ${isActive('home')}`}>
                  Home
                </a>
              </li>
              <li className="nav-item-modern">
                <a href="/about" className={`nav-link-modern ${isActive('about')}`}>
                  About Us
                </a>
              </li>
              <li className="nav-item-modern dropdown">
                <a href="#" className={`nav-link-modern ${isActive('products')}`}>
                  Our Products
                  <FiChevronDown />
                </a>
                <div className="dropdown-menu-modern products-dropdown">
                  <div className="dropdown-content">
                    <div className="products-grid">
                      <a href="/bed-linen" className="product-dropdown-item">
                        <img src="/Bed%20Linen/1.jpg" alt="Bed Linen" className="product-thumb" />
                        <span>Bed Linen</span>
                      </a>
                      <a href="/towels" className="product-dropdown-item">
                        <img src="/Towels/1.jpg" alt="Towels" className="product-thumb" />
                        <span>Towels</span>
                      </a>
                      <a href="/fabrics" className="product-dropdown-item">
                        <img src="/Fabrics/1.jpg" alt="Fabrics" className="product-thumb" />
                        <span>Fabrics</span>
                      </a>
                      <a href="/kitchen-items" className="product-dropdown-item">
                        <img src="/Kitchen%20Items/1.jpg" alt="Kitchen Items" className="product-thumb" />
                        <span>Kitchen Items</span>
                      </a>
                      <a href="/pillow-cases" className="product-dropdown-item">
                        <img src="/Pillow%20Cases/1.jpg" alt="Pillow Cases" className="product-thumb" />
                        <span>Pillow Cases</span>
                      </a>
                      <a href="/hospital-linen" className="product-dropdown-item">
                        <img src="/Hospital%20Linen/2.jpg" alt="Hospital Linen" className="product-thumb" />
                        <span>Hospital Linen</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item-modern">
                <a href="/contact" className={`nav-link-modern ${isActive('contact')}`}>
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Mobile Menu Toggle */}
            <button 
              className="navbar-toggler-modern d-lg-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mobile-menu d-lg-none">
              <div className="mobile-menu-overlay" onClick={toggleMobileMenu}></div>
              <div className="mobile-menu-content">
                <div className="mobile-menu-header">
                  <span className="mobile-menu-title">Menu</span>
                  <button className="mobile-menu-close" onClick={toggleMobileMenu}>
                    <FiX />
                  </button>
                </div>
                <ul className="mobile-nav-list">
                  <li className="mobile-nav-item">
                    <a href="/" className={`mobile-nav-link ${isActive('home')}`} onClick={toggleMobileMenu}>
                      <FiHome />
                      <span>Home</span>
                    </a>
                  </li>
                  <li className="mobile-nav-item">
                    <a href="/about" className={`mobile-nav-link ${isActive('about')}`} onClick={toggleMobileMenu}>
                      <FiInfo />
                      <span>About Us</span>
                    </a>
                  </li>
                  <li className="mobile-nav-item">
                    <div className="mobile-nav-section">
                      <div className="mobile-nav-header">
                        <FiPackage />
                        <span>Our Products</span>
                      </div>
                      <ul className="mobile-nav-submenu">
                        <li><a href="/bed-linen" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Bed Linen</a></li>
                        <li><a href="/towels" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Towels</a></li>
                        <li><a href="/fabrics" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Fabrics</a></li>
                        <li><a href="/kitchen-items" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Kitchen Items</a></li>
                        <li><a href="/pillow-cases" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Pillow Cases</a></li>
                        <li><a href="/hospital-linen" className="mobile-nav-sublink" onClick={toggleMobileMenu}>Hospital Linen</a></li>
                      </ul>
                    </div>
                  </li>
                  <li className="mobile-nav-item">
                    <a href="/contact" className={`mobile-nav-link ${isActive('contact')}`} onClick={toggleMobileMenu}>
                      <FiPhoneCall />
                      <span>Contact Us</span>
                    </a>
                  </li>
                </ul>
                <div className="mobile-menu-footer">
                  <div className="mobile-contact-info">
                    <a href="tel:+923217616723" className="mobile-contact-item">
                      <FiPhone />
                      <span>+92-321-7616723</span>
                    </a>
                    <a href="mailto:Info@hameedsonstextiles.com" className="mobile-contact-item">
                      <FiMail />
                      <span>Info@hameedsonstextiles.com</span>
                    </a>
                  </div>
                  <div className="mobile-social-icons">
                    <a href="#" className="mobile-social-icon">
                      <FaFacebookF />
                    </a>
                    <a href="#" className="mobile-social-icon">
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}
