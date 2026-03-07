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
import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  const handleSocialClick = (platform) => {
    // You can replace these with actual social media URLs
    const urls = {
      facebook: 'https://www.facebook.com/share/15zQocERsf/?mibextid=wwXIfr',
      instagram: 'https://www.instagram.com/hameed_sons?igsh=MTB4b2R1ejJzcXBmag=='
    };
    
    if (urls[platform]) {
      window.open(urls[platform], '_blank');
    }
  };

  const handleContactClick = (type, value) => {
    switch (type) {
      case 'phone':
        window.open(`tel:${value}`, '_self');
        break;
      case 'email':
        window.open(`mailto:${value}`, '_self');
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* Footer */}
      <footer className="footer-modern">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="mb-4 text-center">
                <div
                  className="mb-3 mx-auto"
                  style={{
                    width: '60px',
                    height: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Fa177e98e79af4423bbf83ffc81a9cb51%2F2d531c4e1e1b4fa5a628f9aeda07ba07?format=webp&width=800"
                    alt="Hameed Sons"
                    width="60"
                    height="60"
                    style={{objectFit: 'contain'}}
                  />
                </div>
                <h5 style={{color: 'white', marginTop: '10px'}}>Hameed Sons</h5>
              </div>
              <p className="mb-4" style={{color: 'var(--bg-gray-100)'}}>
                Manufacturers and Exporters of Top Quality Fabrics. Based in Faisalabad, Pakistan 
                serving global markets since 1992.
              </p>
              <div className="social-icons">
                <button
                  onClick={() => handleSocialClick('facebook')}
                  className="social-icon"
                  aria-label="Facebook"
                >
                  <FaFacebookF />
                </button>
                <button
                  onClick={() => handleSocialClick('instagram')}
                  className="social-icon"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </button>
              </div>
            </div>
            <div className="col-lg-2">
              <h5 className="footer-title">Company</h5>
              <ul className="footer-links">
                <li>
                  <button onClick={() => handleNavigation('/')} className="footer-link-btn">
                    <FiHome /> Home
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/about')} className="footer-link-btn">
                    <FiInfo /> About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/contact')} className="footer-link-btn">
                    <FiPhoneCall /> Contact
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-2">
              <h5 className="footer-title">Products</h5>
              <ul className="footer-links">
                <li>
                  <button onClick={() => handleNavigation('/bed-linen')} className="footer-link-btn">
                    <FiPackage /> Bed Linen
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/towels')} className="footer-link-btn">
                    <FiPackage /> Towels
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/fabrics')} className="footer-link-btn">
                    <FiPackage /> Fabrics
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/kitchen-items')} className="footer-link-btn">
                    <FiPackage /> Kitchen Items
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/pillow-cases')} className="footer-link-btn">
                    <FiPackage /> Pillow Cases
                  </button>
                </li>
                <li>
                  <button onClick={() => handleNavigation('/hospital-linen')} className="footer-link-btn">
                    <FiPackage /> Hospital Linen
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-lg-4">
              <h5 className="footer-title">Contact Details</h5>
              <div className="contact-details">
                <p className="mb-3 d-flex align-items-start gap-2">
                  <FiMapPin style={{marginTop: '4px', color: 'var(--primary-orange)'}} />
                  1672-73 Al Madina Commercial Market, Rahim Center, Factory Area, Faisalabad.
                </p>
                <div className="mb-2 d-flex align-items-start gap-2">
                  <FiPhone style={{color: 'var(--primary-orange)', marginTop: '4px'}} />
                  <div>
                    <div className="fw-bold" style={{color: 'var(--bg-gray-100)', fontSize: '14px'}}>Khalid Hameed (CEO)</div>
                    <button
                      onClick={() => handleContactClick('phone', '+923217616723')}
                      className="contact-detail-btn"
                      style={{padding: '0', fontSize: '14px'}}
                    >
                      +92-321-7616723
                    </button>
                  </div>
                </div>
                <div className="mb-2 d-flex align-items-start gap-2">
                  <FiPhone style={{color: 'var(--primary-orange)', marginTop: '4px'}} />
                  <div>
                    <div className="fw-bold" style={{color: 'var(--bg-gray-100)', fontSize: '14px'}}>Ahmed Ali Khalid (Manager)</div>
                    <button
                      onClick={() => handleContactClick('phone', '+923040427427')}
                      className="contact-detail-btn"
                      style={{padding: '0', fontSize: '14px'}}
                    >
                      +92-304-0427427
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => handleContactClick('email', 'Info@hameedsonstextiles.com')}
                  className="contact-detail-btn d-flex align-items-center gap-2"
                >
                  <FiMail style={{color: 'var(--primary-orange)'}} />
                  Info@hameedsonstextiles.com
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="copyright-section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p className="mb-0">© 2025 Hameed Sons. All Rights Reserved</p>
            </div>
            <div className="col-md-6 text-end">
              <p className="mb-0">Manufacturers and Exporters of Top Quality Fabrics</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-link-btn {
          background: none;
          border: none;
          color: var(--bg-gray-100);
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 5px 0;
          transition: color 0.3s ease;
          cursor: pointer;
          width: 100%;
          text-align: left;
          font-size: 14px;
        }

        .footer-link-btn:hover {
          color: var(--primary-orange);
        }

        .contact-detail-btn {
          background: none;
          border: none;
          color: var(--bg-gray-100);
          text-decoration: none;
          padding: 0;
          transition: color 0.3s ease;
          cursor: pointer;
          text-align: left;
          font-size: 14px;
        }

        .contact-detail-btn:hover {
          color: var(--primary-orange);
        }

        .social-icon {
          background: none;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          color: var(--bg-gray-100);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: var(--primary-orange);
          color: white;
          transform: translateY(-2px);
        }
      `}</style>
    </>
  );
}
