'use client';

import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);

  const handleWhatsAppClick = () => {
    const phoneNumber = "03040427427"
    const message = "Hello! I'm interested in your textile products and would like to know more.";
    const whatsappUrl = `https://wa.me/+92${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <div 
        className="whatsapp-floating-button"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FaWhatsapp />
        {isHovered && (
          <div className="whatsapp-tooltip">
            Contact us on WhatsApp
          </div>
        )}
      </div>

      <style jsx>{`
        .whatsapp-floating-button {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          transition: all 0.3s ease;
          z-index: 1000;
          color: white;
          font-size: 28px;
          animation: pulse 2s infinite;
        }

        .whatsapp-floating-button:hover {
          transform: scale(1.1);
          box-shadow: 0 12px 35px rgba(37, 211, 102, 0.4);
        }

        .whatsapp-tooltip {
          position: absolute;
          right: 70px;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 14px;
          white-space: nowrap;
          opacity: 0;
          animation: fadeIn 0.3s ease forwards;
        }

        .whatsapp-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: rgba(0, 0, 0, 0.8);
        }

        @keyframes pulse {
          0% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          }
          50% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3), 0 0 0 15px rgba(37, 211, 102, 0.1);
          }
          100% {
            box-shadow: 0 8px 25px rgba(37, 211, 102, 0.3);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(10px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }

        @media (max-width: 768px) {
          .whatsapp-floating-button {
            bottom: 20px;
            right: 20px;
            width: 55px;
            height: 55px;
            font-size: 24px;
          }

          .whatsapp-tooltip {
            right: 65px;
            font-size: 12px;
            padding: 6px 10px;
          }
        }

        @media (max-width: 480px) {
          .whatsapp-floating-button {
            bottom: 15px;
            right: 15px;
            width: 50px;
            height: 50px;
            font-size: 22px;
          }

          .whatsapp-tooltip {
            right: 60px;
            font-size: 11px;
            padding: 5px 8px;
          }
        }
      `}</style>
    </>
  );
}
