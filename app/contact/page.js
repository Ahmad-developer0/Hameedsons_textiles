'use client';

import {
  FiArrowRight,
  FiPhone,
  FiMail,
  FiMapPin,
  FiSend,
  FiClock
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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        const msg = data?.errors?.join(', ') || data?.error || 'Failed to send message.';
        alert(msg);
        return;
      }
      alert('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (err) {
      alert('Network error. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <Navigation currentPage="contact" />

      {/* Hero Section */}
      <section className="weaving-hero-section">
        <div className="weaving-hero-bg">
          <img
            src="/Fabrics/20.jpg"
            alt="Contact Us"
            className="weaving-hero-image"
          />
          <div className="weaving-hero-overlay">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8 text-center">
                  <h1 className="weaving-hero-title">Contact Us</h1>
                  <p className="weaving-hero-subtitle">Get In Touch With Hameed Sons Textile</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="container">
          <div className="row g-5">
            {/* Contact Information */}
            <div className="col-lg-6">
              <div className="contact-info-section">
                <h2 className="contact-title">Get In Touch</h2>
                <p className="contact-description">
                  We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                </p>

                <div className="contact-details-list">
                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <FiMapPin />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Address</h4>
                      <p>1672-73 Al Madina Commercial Market<br />Rahim Center, Factory Area,<br />Faisalabad.</p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <FiPhone />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Phone Numbers</h4>
                      <p>
                        <strong>Khalid Hameed (CEO):</strong><br />
                        <a href="tel:+923217616723">+92-321-7616723</a><br /><br />
                        <strong>Ahmed Ali Khalid (Manager):</strong><br />
                        <a href="tel:+923040427427">+92-304-0427427</a>
                      </p>
                    </div>
                  </div>

                  <div className="contact-detail-item">
                    <div className="contact-icon">
                      <FiMail />
                    </div>
                    <div className="contact-detail-content">
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:Info@hameedsonstextiles.com">Info@hameedsonstextiles.com</a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6">
              <div className="contact-form-section">
                <h3 className="form-title">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name *"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="Your Email *"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Your Phone Number"
                          className="form-control"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder="Subject *"
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Your Message *"
                          className="form-control"
                          rows="6"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn-submit" disabled={isSubmitting}>
                        <FiSend />
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx>{`
        .contact-section {
          padding: 80px 0;
          background: #f8f9fa;
        }

        .contact-info-section {
          padding: 40px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          height: 100%;
        }

        .contact-title {
          font-size: 32px;
          color: #333;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .contact-description {
          color: #666;
          font-size: 16px;
          line-height: 1.6;
          margin-bottom: 40px;
        }

        .contact-details-list {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }

        .contact-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          background: #ff6b35;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 20px;
          flex-shrink: 0;
        }

        .contact-detail-content h4 {
          color: #333;
          font-size: 18px;
          margin-bottom: 8px;
          font-weight: 600;
        }

        .contact-detail-content p {
          color: #666;
          margin: 0;
          line-height: 1.6;
        }

        .contact-detail-content a {
          color: #ff6b35;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-detail-content a:hover {
          color: #e55a2b;
        }

        .contact-form-section {
          padding: 40px;
          background: white;
          border-radius: 15px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
          height: 100%;
        }

        .form-title {
          font-size: 28px;
          color: #333;
          margin-bottom: 30px;
          font-weight: 600;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-control {
          width: 100%;
          padding: 15px 20px;
          border: 2px solid #e0e0e0;
          border-radius: 10px;
          font-size: 16px;
          background: #f8f9fa;
          transition: all 0.3s ease;
        }

        .form-control:focus {
          outline: none;
          border-color: #ff6b35;
          background: white;
          box-shadow: 0 0 0 3px rgba(255, 107, 53, 0.1);
        }

        .form-control::placeholder {
          color: #999;
        }

        textarea.form-control {
          resize: vertical;
          min-height: 120px;
        }

        .btn-submit {
          background: #ff6b35;
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }

        .btn-submit:hover {
          background: #e55a2b;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(255, 107, 53, 0.3);
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 40px 0;
          }

          .contact-info-section,
          .contact-form-section {
            padding: 30px 20px;
          }

          .contact-title {
            font-size: 28px;
            text-align: center;
          }

          .form-title {
            font-size: 24px;
            text-align: center;
          }

          .contact-description {
            text-align: center;
          }

          .contact-detail-item {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 15px;
          }

          .contact-icon {
            width: 45px;
            height: 45px;
            font-size: 18px;
          }

          .contact-detail-content {
            text-align: center;
          }

          .contact-detail-content h4 {
            text-align: center;
            margin-bottom: 10px;
          }

          .contact-detail-content p {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
