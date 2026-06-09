import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Phone, Calendar, Star, Mail } from "lucide-react";
import { easeSnappy, durationFast } from "../utils/animationConstants";

interface NavbarProps {
  onOpenBooking: () => void;
}

export default function Navbar({ onOpenBooking }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Nosotros", href: "#nosotros" },
    { label: "Cédulas", href: "#cedulas" },
    { label: "Servicios", href: "#servicios" },
    { label: "Reseñas", href: "#resenas" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "FAQ", href: "#faq" },
    { label: "Contacto", href: "#contacto" }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-slate-900 shadow-md py-3"
            : "bg-transparent text-white py-5"
        }`}
      >
        {/* Top Bar - Contact Info */}
        <div className={`border-b transition-all duration-300 ${
          isScrolled ? "border-slate-100" : "border-white/10"
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="hidden md:flex items-center justify-between py-2 text-xs">
              <div className="flex items-center gap-6">
                <a href="mailto:info@dentistascasanova.com" className={`flex items-center gap-1.5 transition-colors ${
                  isScrolled ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}>
                  <Mail className="w-3 h-3" />
                  info@dentistascasanova.com
                </a>
                <a href="tel:+528183379438" className={`flex items-center gap-1.5 transition-colors ${
                  isScrolled ? "text-slate-600 hover:text-primary" : "text-white/80 hover:text-white"
                }`}>
                  <Phone className="w-3 h-3" />
                  +52 81 8337 9438
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo/Clinic Name */}
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#inicio");
              }}
              className="flex flex-col select-none"
            >
              <div className="flex flex-col">
                <span className="font-serif text-2xl font-bold tracking-tight">
                  Dentistas Casanova
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav" className="hidden lg:flex items-center gap-7">
              {menuItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  whileHover={{ scale: 1.05 }}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled ? "text-slate-700 hover:text-primary" : "text-white/95 hover:text-white"
                  }`}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Call Hotline CTA */}
              <motion.a
                id="header-call-cta"
                href="tel:+528183379438"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border transition-all duration-200 ${
                  isScrolled
                    ? "border-primary text-primary hover:bg-primary/5"
                    : "border-white/30 text-white hover:bg-white/10"
                }`}
              >
                <Phone className="w-3.5 h-3.5 text-secondary" />
                Llamar ahora
              </motion.a>

              {/* Booking CTA */}
              <motion.button
                id="header-booking-cta"
                onClick={onOpenBooking}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-5 py-2.5 rounded-lg text-xs font-semibold shadow-md shadow-primary/10 cursor-pointer"
              >
                Agenda tu cita
              </motion.button>
            </div>

            {/* Mobile Menu Trigger Button */}
            <div className="lg:hidden flex items-center gap-2">
              <a
                id="mobile-phone-shortcut"
                href="tel:+528183379438"
                className={`p-2 rounded-full border transition-colors ${
                  isScrolled
                    ? "border-slate-200 text-slate-700 hover:bg-slate-50"
                    : "border-white/20 text-white hover:bg-white/10"
                }`}
                aria-label="Llamar a recepción"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                id="hamburger-btn"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  isScrolled ? "text-slate-800 hover:bg-slate-50" : "text-white hover:bg-white/10"
                }`}
                aria-label="Abrir menú"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay and Content */}
      <div
        id="mobile-drawer-root"
        className={`fixed inset-0 z-50 lg:hidden pointer-events-none transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0"
        }`}
      >
        {/* Backdrop overlay */}
        <div
          id="mobile-drawer-backdrop"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm"
        />

        {/* Drawer container */}
        <div className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between transition-transform duration-300 transform translate-x-0">
          <div>
            <div className="flex items-center justify-between mb-8">
              <span className="font-serif text-xl font-bold text-primary tracking-tight">
                Dentistas Casanova
              </span>
              <button
                id="mobile-close-btn"
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-1 rounded-full hover:bg-slate-100 text-slate-600 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav id="mobile-nav" className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className="text-base font-medium text-slate-800 hover:text-primary border-b border-slate-50 pb-2.5 transition-colors cursor-pointer"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-3 mt-8">
            <a
              id="mobile-drawer-call-btn"
              href="tel:+528183379438"
              className="flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary/5 py-3 rounded-xl font-semibold text-sm transition-colors"
            >
              <Phone className="w-4 h-4 text-emerald-600" />
              Llamar al consultorio
            </a>

            <button
              id="mobile-drawer-book-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="bg-primary hover:bg-primary/95 text-white py-3 rounded-xl font-semibold text-sm shadow-md shadow-primary/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-secondary animate-pulse" />
              Agendar cita gratis
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
