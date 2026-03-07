'use client';

import {
  FiArrowRight,
  FiInfo,
  FiChevronLeft,
  FiChevronRight,
  FiUsers,
  FiPhone,
  FiMail,
  FiMapPin,
  FiHome,
  FiAward,
  FiStar,
  FiPhoneCall,
  FiPackage,
  FiCalendar
} from 'react-icons/fi';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa';
import {
  HiOutlineDesktopComputer,
  HiOutlineClipboardCheck
} from 'react-icons/hi';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  // Slider images for hero section
  const sliderImages = [
    {
      src: "/Bed%20Linen/1.jpg",
      alt: "Premium Bedsheets Manufacturing"
    },
    {
      src: "/Towels/1.jpg",
      alt: "Quality Towels Production"
    },
    {
      src: "/Fabrics/1.jpg",
      alt: "Quality Fabrics"
    },
    {
      src: "/Kitchen%20Items/1.jpg",
      alt: "Kitchen Textile Items"
    }
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  };

  return (
    <div>
      <Navigation currentPage="home" />

      {/* Hero Section with Slider */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="hero-content fade-in">
                <h1 className="hero-title">
                  Premium Textile Manufacturing
                  <br />
                  <span style={{color: 'var(--primary-blue)'}}>Since 1992</span>
                </h1>
                <p className="hero-subtitle">
                  Hameed Sons is a trusted manufacturer and exporter of top quality fabrics based in the 
                  Textile Capital of Pakistan, Faisalabad. With USD 1 million annual turnover and 40+ skilled workers.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3">
                  <button
                    onClick={() => handleNavigation('/bed-linen')}
                    className="btn-primary-modern"
                  >
                    <FiArrowRight />
                    View Our Products
                  </button>
                  <button
                    onClick={() => handleNavigation('/about')}
                    className="btn-secondary-modern"
                  >
                    <FiInfo />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-slider">
                <div className="slider-container">
                  <div className="slider-wrapper">
                    {sliderImages.map((image, index) => (
                      <div 
                        key={index}
                        className={`slider-slide ${index === currentSlide ? 'active' : ''}`}
                      >
                        <img 
                          src={image.src} 
                          alt={image.alt}
                          className="slider-image"
                        />
                      </div>
                    ))}
                  </div>
                  
                  {/* Slider Controls */}
                  <button 
                    className="slider-btn slider-btn-prev"
                    onClick={prevSlide}
                  >
                    <FiChevronLeft />
                  </button>
                  <button 
                    className="slider-btn slider-btn-next"
                    onClick={nextSlide}
                  >
                    <FiChevronRight />
                  </button>
                  
                  {/* Slider Indicators */}
                  <div className="slider-indicators">
                    {sliderImages.map((_, index) => (
                      <button
                        key={index}
                        className={`slider-indicator ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-5" style={{marginTop: '5rem'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="section-title">About Hameed Sons</h2>
              <div className="section-subtitle mb-4">
                <p className="mb-4">
                  Based in the Textile Capital of Pakistan, Faisalabad, Hameed Sons has a network of 
                  Stitching, packing and finishing units under own setup. Established in 1992 as a 
                  local fabric trading business house, we soon became a reliable and quality exporter in Pakistan.
                </p>
                
                <p className="mb-4">
                  Hameed Sons has an annual turnover of about USD 1 million with a skilled working staff 
                  of above 40 workers. We have a team of highly professional management and technical 
                  staff with standardized working system incorporating the latest technological innovations.
                </p>
                
                <p className="mb-4">
                  Following the standards set by the company in local market, within a short span of time 
                  Hameed Sons became one of the most reliable exporters of Home Textile products & Garments. 
                  We have transformed from a supplier of local market to a supplier of Home Textile Products 
                  to retailers and brands across United States and Europe.
                </p>
              </div>
              <button
                onClick={() => handleNavigation('/about')}
                className="btn-primary-modern"
                style={{marginBottom: '3rem'}}
              >
                <FiArrowRight />
                Learn More About Us
              </button>
            </div>
            <div className="col-lg-4">
              <div className="text-center">
                <img
                  src="/Fabrics/20.jpg"
                  className="img-fluid rounded-3 shadow-lg"
                  alt="Manufacturing Excellence"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Working Process Section */}
      <section className="py-5" style={{background: 'var(--bg-gray-50)', marginTop: '5rem'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-center">Our Manufacturing Process</h2>
            <p className="section-subtitle mt-4 mx-auto" style={{maxWidth: '600px'}}>
              Quality, quick production and fast delivery - the success behind our reliable 
              manufacturing process that ensures customer satisfaction
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="card-modern text-center">
                <div className="card-icon">
                  <FiUsers />
                </div>
                <h4 className="fw-bold mb-3" style={{color: 'var(--text-primary)'}}>Quality Standards</h4>
                <p className="section-subtitle">
                  Utmost care is taken to maintain Quality standards across all stages of production. 
                  Our commitment to Global standards of Quality has seen us grow over the last two decades.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-modern text-center">
                <div className="card-icon">
                  <HiOutlineDesktopComputer />
                </div>
                <h4 className="fw-bold mb-3" style={{color: 'var(--text-primary)'}}>Modern Equipment</h4>
                <p className="section-subtitle">
                  We have introduced modernized equipments and expect more technological advancements 
                  to ensure superiority and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card-modern text-center">
                <div className="card-icon">
                  <HiOutlineClipboardCheck />
                </div>
                <h4 className="fw-bold mb-3" style={{color: 'var(--text-primary)'}}>Fast Delivery</h4>
                <p className="section-subtitle">
                  Hameed Sons is capable of producing multi orders, fast and good quality products 
                  according to requirements of the buyer with quick delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-5" style={{marginTop: '5rem'}}>
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-title text-center">Our Products</h2>
            <p className="section-subtitle mt-4 mx-auto" style={{maxWidth: '600px'}}>
              We manufacture and export Home Textiles, Garments, and specialized textile products 
              with customization according to customer requirements.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-lg-4">
              <button
                onClick={() => handleNavigation('/bed-linen')}
                className="product-card-modern clickable-card"
              >
                <img
                  src="/Bed%20Linen/15.jpg"
                  className="product-image-modern"
                  alt="Bedsheets & Home Textiles"
                />
                <div className="product-content">
                  <h5 className="product-title">Bedsheets & Home Textiles</h5>
                  <p className="section-subtitle mt-2">Printed, non-printed, dyed bedsheets, pillow cases, and blanket covers</p>
                </div>
              </button>
            </div>
            <div className="col-lg-4">
              <button
                onClick={() => handleNavigation('/towels')}
                className="product-card-modern clickable-card"
              >
                <img
                  src="/Towels/15.jpg"
                  className="product-image-modern"
                  alt="Towels & Kitchen Items"
                />
                <div className="product-content">
                  <h5 className="product-title">Towels & Kitchen Items</h5>
                  <p className="section-subtitle mt-2">Premium towels and complete range of kitchen textile items</p>
                </div>
              </button>
            </div>
            <div className="col-lg-4">
              <button
                onClick={() => handleNavigation('/fabrics')}
                className="product-card-modern clickable-card"
              >
                <img
                  src="/Fabrics/15.jpg"
                  className="product-image-modern"
                  alt="Fabrics & Materials"
                />
                <div className="product-content">
                  <h5 className="product-title">Fabrics & Materials</h5>
                  <p className="section-subtitle mt-2">High-quality cotton and poly-cotton fabrics for various applications</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Export Markets Section */}
      <section className="py-5" style={{background: 'var(--primary-blue)', marginTop: '5rem'}}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h2 className="mb-4" style={{color: 'white', fontFamily: 'Poppins', fontWeight: '700'}}>
                Global Export Markets
              </h2>
              <h3 style={{color: 'white', fontWeight: '600', lineHeight: '1.6'}}>
                Serving retailers and brands across
                <br />
                <span style={{color: 'var(--primary-orange)'}}>United States & Europe</span>
                <br />
                Far East and European nations
              </h3>
              <div className="mt-4">
                <button
                  onClick={() => handleNavigation('/contact')}
                  className="btn-secondary-modern"
                  style={{background: 'white', color: 'var(--primary-blue)', marginBottom: '3rem'}}
                >
                  <FiCalendar />
                  Export Inquiry
                </button>
              </div>
            </div>
            <div className="col-lg-6">
              <img
                src="/Bed%20Linen/25.jpg"
                className="img-fluid rounded-3 shadow-lg"
                alt="Premium Export Quality Bedsheets for Global Markets"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-5" style={{marginTop: '5rem'}}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="mb-3">
                <span className="badge" style={{background: 'var(--bg-gray-100)', color: 'var(--text-secondary)', padding: '8px 16px', borderRadius: 'var(--radius-lg)'}}>
                  Leadership Message
                </span>
              </div>
              <h2 className="section-title mb-4">CEO's Message</h2>
              <div className="section-subtitle">
                <p className="mb-4">
                  "Hameed Sons main motive is to endow its customers with premium products and paramount
                  services through persistent efforts so they can achieve an absolute contentment. Our
                  customers have a firm belief in our quality and commitments."
                </p>
                <p className="mb-4">
                  "We pride ourselves in providing our customers responsive, competent and excellent
                  services in textile sector. Our customers are the most important part of our business
                  so we work tirelessly in order to completely satisfy our customers."
                </p>
                <p className="fw-bold" style={{color: 'var(--primary-blue)'}}>
                  "Quality is remembered long after the price is forgotten"
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .clickable-card {
          background: none;
          border: none;
          padding: 0;
          width: 100%;
          text-align: left;
          cursor: pointer;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .clickable-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }

      `}</style>
    </div>
  );
}
