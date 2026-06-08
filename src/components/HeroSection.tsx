import React from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react";
import { Star, Shield, MapPin, Award, Phone, Calendar } from "lucide-react";
import { IMAGE_PATHS } from "../data";
import { easeSnappy, easeOutQuint, durationSlow, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

interface HeroSectionProps {
  onOpenBooking: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.2]);
  
  // Mouse tracking for liquid effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [10, -10]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-10, 10]), { stiffness: 300, damping: 30 });
  
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Image with parallax and elegant rich contrast overlay */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, scale, rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.img
          src={IMAGE_PATHS.hero}
          alt="Clínica Dentistas Casanova"
          className="w-full h-full object-cover object-center select-none"
          style={{ opacity }}
          referrerPolicy="no-referrer"
          animate={{
            x: useTransform(mouseX, [-500, 500], [-30, 30]),
            y: useTransform(mouseY, [-500, 500], [-30, 30])
          }}
          transition={{ type: "spring", stiffness: 200, damping: 25 }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent md:bg-gradient-to-b" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
      </motion.div>

      {/* Floating Sparkles or ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Headline & copy block */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationSlow, ease: easeOutQuint }}
          >
            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationSlow, delay: staggerNormal, ease: easeOutQuint }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight font-extrabold text-white"
            >
              Excelencia Dental con <br className="hidden sm:inline" />
              <span className="text-secondary relative inline-block">
                Atención Personalizada
              </span>
            </motion.h1>

            {/* Decorative lines with subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationSlow, delay: staggerNormal * 2, ease: easeOutQuint }}
              className="flex items-center gap-4"
            >
              <div className="h-px w-12 bg-accent/50" />
              <p className="text-sm font-light text-slate-300 tracking-widest uppercase">
                Bienvenido
              </p>
              <div className="h-px w-12 bg-accent/50" />
            </motion.div>

            {/* Subheadline (editorial with focus keywords) */}
            <motion.p
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationSlow, delay: staggerNormal * 3, ease: easeOutQuint }}
              className="text-md sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-light"
            >
              Atención dental global con experiencia, trato cercano y tratamientos especializados para toda la familia.
            </motion.p>

            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationSlow, delay: staggerNormal * 4, ease: easeOutQuint }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <motion.button
                id="hero-book-btn"
                onClick={onOpenBooking}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-xl shadow-primary/30 flex items-center gap-2 text-base cursor-pointer"
              >
                <Calendar className="w-5 h-5 text-secondary" />
                Agenda tu cita hoy
              </motion.button>

              <motion.a
                id="hero-call-btn"
                href="tel:+528183379438"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold backdrop-blur-sm border border-white/20 shadow-lg flex items-center gap-2 text-base"
              >
                <Phone className="w-5 h-5 text-secondary animate-bounce" />
                Llamar ahora
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Floating cards / badges right block */}
          <motion.div 
            className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationSlow, ease: easeOutQuint }}
          >
            {/* Visual focus element - geometric grid or premium bento */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              
              {/* Card 1: Rating */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: viewportAmountNormal }}
                transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
                whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)", backgroundColor: "rgba(30, 41, 59, 0.95)" }}
                className="bg-slate-900/85 border border-white/10 p-5 rounded-2xl flex flex-col gap-2 pointer-events-auto shadow-xl"
              >
                <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center border border-accent/20">
                  <Star className="w-5 h-5 text-accent fill-accent" />
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-serif font-bold text-white">5.0 Estrellas</p>
                  <p className="text-xs text-slate-400">Calificación perfecta basada en experiencias reales de pacientes</p>
                </div>
              </motion.div>

              {/* Card 2: Holistic Care */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: viewportAmountNormal }}
                transition={{ duration: durationNormal, delay: staggerNormal * 2.5, ease: easeOutQuint }}
                whileHover={{ scale: 1.02, borderColor: "rgba(61, 165, 217, 0.4)", backgroundColor: "rgba(30, 41, 59, 0.95)" }}
                className="bg-slate-900/85 border border-white/10 p-5 rounded-2xl flex flex-col gap-2 pointer-events-auto shadow-xl"
              >
                <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center border border-secondary/20">
                  <Shield className="w-5 h-5 text-secondary" />
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-serif font-bold text-white">Atención Holística</p>
                  <p className="text-xs text-slate-400">Soluciones completas para la salud y estética de toda tu familia</p>
                </div>
              </motion.div>

              {/* Card 3: Location */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: viewportAmountNormal }}
                transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeOutQuint }}
                whileHover={{ scale: 1.02, borderColor: "rgba(61, 165, 217, 0.4)", backgroundColor: "rgba(30, 41, 59, 0.95)" }}
                className="bg-slate-900/85 border border-white/10 p-5 rounded-2xl flex flex-col gap-2 pointer-events-auto shadow-xl"
              >
                <div className="w-10 h-10 bg-secondary/15 rounded-xl flex items-center justify-center border border-secondary/20">
                  <MapPin className="w-5 h-5 text-secondary animate-bounce" />
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-serif font-bold text-white">Ubicación</p>
                  <p className="text-xs text-slate-400">Colonia Las Villas con fácil acceso</p>
                </div>
              </motion.div>

              {/* Card 4: Experience */}
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: viewportAmountNormal }}
                transition={{ duration: durationNormal, delay: staggerNormal * 3.5, ease: easeOutQuint }}
                whileHover={{ scale: 1.02, borderColor: "rgba(212, 175, 55, 0.4)", backgroundColor: "rgba(30, 41, 59, 0.95)" }}
                className="bg-slate-900/85 border border-white/10 p-5 rounded-2xl flex flex-col gap-2 pointer-events-auto shadow-xl"
              >
                <div className="w-10 h-10 bg-accent/15 rounded-xl flex items-center justify-center border border-accent/20">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div className="mt-2">
                  <p className="text-2xl font-serif font-bold text-white">40 Años</p>
                  <p className="text-xs text-slate-400">Experiencia consolidada en la atención odontológica completa</p>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
