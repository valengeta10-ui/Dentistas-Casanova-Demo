import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrustSection from "./components/TrustSection";
import AboutSection from "./components/AboutSection";
import ProfessionalLicensesSection from "./components/ProfessionalLicensesSection";
import ServicesSection from "./components/ServicesSection";
import TechSection from "./components/TechSection";
import ReviewsSection from "./components/ReviewsSection";
import GallerySection from "./components/GallerySection";
import CTAIntermediate from "./components/CTAIntermediate";
import LocationSection from "./components/LocationSection";
import FAQSection from "./components/FAQSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ContactFloaters from "./components/ContactFloaters";
import CitaModal from "./components/CitaModal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function AppContent() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState("");

  const handleOpenBooking = (serviceId = "") => {
    setPreselectedService(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setPreselectedService("");
  };

  return (
    <div className="relative min-h-screen bg-white">
      {/* Hidden SEO Keyword Container for local indexing optimization */}
      <div className="sr-only">
        <h1>Dentistas Casanova — Dentista en Guadalupe Nuevo León</h1>
        <p>
          Buscando Dentistas en Guadalupe, Clínica dental en Guadalupe, o un excelente Odontólogo en Guadalupe NL.
          Ofrecemos Endodoncia en Guadalupe, Blanqueamiento dental Guadalupe, Radiografía dental Guadalupe,
          Brackets y ortodoncia en Las Villas Guadalupe. Te damos la bienvenida a Dentistas Casanova.
        </p>
      </div>

      {/* Navigation Header */}
      <Navbar onOpenBooking={() => handleOpenBooking("odontologia-integral")} />

      {/* Hero Section Banner */}
      <HeroSection onOpenBooking={() => handleOpenBooking("odontologia-integral")} />

      {/* Instant Trust Pillars */}
      <TrustSection />

      {/* Asymmetric Editorial About Us Section */}
      <AboutSection />

      {/* Professional Licenses Section */}
      <ProfessionalLicensesSection />

      {/* Services Bento Grid Slider */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* Modern Technology and Diagnostics Section */}
      <TechSection />

      {/* Customer Reviews and Ratings Dashboard */}
      <ReviewsSection />

      {/* Installations and Clinic Masonry Gallery with Lightbox */}
      <GallerySection />

      {/* Intermediate high-converting CTA Banner */}
      <CTAIntermediate onOpenBooking={() => handleOpenBooking("odontologia-integral")} />

      {/* Physical Address, Opening Hours and Maps details */}
      <LocationSection onOpenBooking={() => handleOpenBooking("odontologia-integral")} />

      {/* Frequently Asked Accordion Details */}
      <FAQSection />

      {/* Verification Contact Form */}
      <ContactForm />

      {/* Premium Localized Footer */}
      <Footer />

      {/* Mobile Sticky Shortcut Floating Anchors */}
      <ContactFloaters />

      {/* Global Booking Dialog popup */}
      <CitaModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialService={preselectedService}
      />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContent />} />
        <Route path="/aviso-privacidad" element={<PrivacyPolicy />} />
        <Route path="/terminos" element={<TermsOfService />} />
      </Routes>
    </Router>
  );
}

