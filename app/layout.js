import "./globals.css";
import BootstrapClient from './components/BootstrapClient';
import WhatsAppButton from './components/WhatsAppButton';

export const metadata = {
  title: "Hameed Sons - Premium Textile Manufacturers & Exporters",
  description: "Hameed Sons - Manufacturers and Exporters of Top Quality Fabrics. Based in Faisalabad, Pakistan since 1992. Serving global markets with USD 1 million annual turnover.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="uviMNe0RljYN6uXV_cHbWD38yl5XAq84kM-Vmcbvzhw" />
      <body>
        {children}
        <WhatsAppButton />
        <BootstrapClient />
      </body>
    </html>
  );
}
