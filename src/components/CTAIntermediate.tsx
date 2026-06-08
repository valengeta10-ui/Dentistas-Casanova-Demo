import { motion } from "motion/react";
import { Calendar, Phone } from "lucide-react";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

interface CTAIntermediateProps {
  onOpenBooking: () => void;
}

export default function CTAIntermediate({ onOpenBooking }: CTAIntermediateProps) {
  return (
    <section id="cta-intermedia" className="py-20 bg-primary relative overflow-hidden text-white">
      {/* Visual background decor */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: viewportAmountNormal }}
        transition={{ duration: durationNormal, ease: easeOutQuint }}
      >
        <motion.span 
          className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 border border-accent/20 px-3.5 py-1.5 rounded-full inline-block"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
        >
          CUIDADO PERSONALIZADO
        </motion.span>
        
        <motion.h2 
          className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
        >
          Tu sonrisa merece atención profesional y humana
        </motion.h2>
        
        <motion.p 
          className="text-slate-200 max-w-2xl mx-auto font-light leading-relaxed text-sm sm:text-base"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeOutQuint }}
        >
          Tratamientos honestos con presupuestos transparentes hechos a tu medida. No pospongas tu salud bucal, agenda tu diagnóstico preferente con Dentistas Casanova.
        </motion.p>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4 pt-4"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal * 4, ease: easeOutQuint }}
        >
          <motion.button
            id="cta-intermedia-book-btn"
            onClick={onOpenBooking}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-accent text-slate-900 px-8 py-3.5 rounded-xl font-bold shadow-lg shadow-accent/20 select-none cursor-pointer"
          >
            Agenda tu cita hoy
          </motion.button>
          
          <motion.a
            id="cta-intermedia-call-btn"
            href="tel:+528183379438"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white/10 text-white border border-white/20 backdrop-blur-sm px-8 py-3.5 rounded-xl font-bold flex items-center gap-2"
          >
            <Phone className="w-4 h-4 text-accent animate-bounce" />
            Llamar al consultorio
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
