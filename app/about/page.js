'use client';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter
} from 'react-icons/fa';
import {
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
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AboutHameedSons() {
  return (
    <div>
      <Navigation currentPage="about" />

      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">About Us</h1>
              <nav className="breadcrumb-nav">
                <a href="/" className="breadcrumb-link">Home</a>
                <span className="breadcrumb-separator">/</span>
                <span className="breadcrumb-current">About Us</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Content */}
      <section className="about-content">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-header text-center">
                <h2 className="about-title fw-bold">About Hameed Sons</h2>
              </div>
              
              <div className="about-text">
                <p>
                  Based in Faisalabad, the Textile Capital of Pakistan, Hameed Sons has established itself as a trusted name in the industry. With a network of in-house stitching, packing, and finishing units, we ensure meticulous control over every stage of production. Our team of highly skilled professionals and technical experts work in tandem to deliver exceptional quality Home Textiles and Made-up Fabrics.
                </p>
                
                <p>
                  At Hameed Sons, we're committed to innovation and excellence. We continuously invest in the latest technological advancements and expand our capabilities to meet the evolving needs of our customers. Our dynamic management team, comprising well-qualified and experienced professionals, drives our success. With a deep understanding of the textile export business, they steer our company towards achieving the highest standards of quality and customer satisfaction.
                </p>
                
                <p>
                  Since our inception in 1992, we've grown from a local fabric trading business to a renowned exporter of Home Textile products and Garments. Our annual turnover exceeds USD 1 million, and we've built a team of over 40 skilled workers who share our passion for quality. We've earned a reputation for delivering high-quality products with quick production and fast delivery, making us a preferred partner for retailers and brands across the United States and Europe.
                </p>
                
                <p>
                  Our commitment to global quality standards has enabled us to carve a niche for ourselves in the competitive world market. With an unchallenged variety of products that's already popular in several Far Eastern and European nations, we take utmost care to maintain quality standards across all stages of production. At Hameed Sons, we're dedicated to exceeding customer expectations and building long-term relationships based on trust, quality, and reliability.
                </p>
              </div>

              <div className="mission-vision mt-5">
                <div className="row">
                  <div className="col-12 mb-5">
                    <div className="vision-section">
                      <h3 className="section-heading text-center fw-bold mb-4">Vision Statement</h3>
                      <p className="vision-text">
                        To be a global leader in the Home Textiles and Made-up Fabrics industry, renowned for our commitment to quality, innovation, and customer satisfaction. We aim to build lasting relationships with our customers, partners, and stakeholders, while contributing to the growth and development of the textile industry in Pakistan.
                      </p>
                    </div>
                  </div>
                  
                  <div className="col-12">
                    <div className="mission-section">
                      <h3 className="section-heading text-center fw-bold mb-4">Mission Statement</h3>
                      <p className="mission-text mb-3">
                        At Hameed Sons, our mission is to deliver exceptional quality Home Textiles and Made-up Fabrics that meet the evolving needs of our customers. We strive to achieve this through:
                      </p>
                      <ul className="mission-list">
                        <li>Continuous innovation and investment in the latest technologies</li>
                        <li>A customer-centric approach that prioritizes satisfaction and loyalty</li>
                        <li>A commitment to global quality standards and best practices</li>
                        <li>Building a skilled and motivated team that shares our values and passion for excellence</li>
                        <li>Fostering long-term relationships with our partners and stakeholders</li>
                        <li>Contributing to the growth and development of the textile industry in Pakistan, while adhering to social and environmental responsibilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
