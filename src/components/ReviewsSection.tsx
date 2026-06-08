import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { REVIEWS } from "../data";
import { easeInOutExpo, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  };

  return (
    <section id="resenas" className="py-20 bg-slate-50 overflow-hidden border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Rating Summary Left */}
          <motion.div 
            className="lg:col-span-5 space-y-4 text-left"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, ease: easeInOutExpo }}
          >
            <motion.span 
              className="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal, ease: easeInOutExpo }}
            >
              La Voz de la Experiencia
            </motion.span>
            <motion.h2 
              className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeInOutExpo }}
            >
              Lo que nuestros pacientes dicen de nosotros
            </motion.h2>
            <motion.div 
              className="h-0.5 w-14 bg-accent rounded"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeInOutExpo }}
            />
            <motion.p 
              className="text-slate-600 font-light text-sm sm:text-base leading-relaxed"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 4, ease: easeInOutExpo }}
            >
              La confianza se gana con honestidad, calidad técnica y años de consistencia impecable. Conoce por qué somos el centro dental de referencia con mayor reputación.
            </motion.p>

            {/* Rating Stat Widget */}
            <motion.div 
              className="flex items-center gap-4 bg-white border border-slate-100 p-5 rounded-2xl shadow-sm max-w-sm mt-4"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 5, ease: easeInOutExpo }}
            >
              <div className="text-center">
                <span className="text-4xl font-serif font-extrabold text-slate-900 block">5.0</span>
                <span className="text-[10px] text-slate-400 font-mono uppercase">En Google Reviews</span>
              </div>
              <div className="h-10 w-px bg-slate-100" />
              <div className="space-y-1">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 font-medium">100% de opiniones excelentes</p>
                <p className="text-[10px] text-slate-400">Basado en pacientes reales</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Review Carousel Right - Multi-Column layout for big screens & animated single item for mobile */}
          <div className="lg:col-span-7 relative flex flex-col justify-center">
            
            {/* Outer Box */}
            <div className="relative min-h-[340px] flex items-center">
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={REVIEWS[activeIndex].id}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: easeInOutExpo }}
                  className="bg-white border border-slate-100 p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-200/50 relative w-full"
                >
                  {/* Decorative big quote icon */}
                  <Quote className="absolute top-6 right-8 w-16 h-16 text-slate-200/10 pointer-events-none" />

                  {/* Header review */}
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={REVIEWS[activeIndex].avatar}
                      alt={REVIEWS[activeIndex].name}
                      className="w-14 h-14 rounded-full object-cover border-2 border-slate-100 select-none"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <h4 className="font-serif font-bold text-slate-800 text-base">
                        {REVIEWS[activeIndex].name}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        {REVIEWS[activeIndex].date} • Paciente
                      </p>
                    </div>
                  </div>

                  {/* Rating star flow */}
                  <div className="flex gap-0.5 text-accent mb-4">
                    {[...Array(REVIEWS[activeIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>

                  {/* Review text */}
                  <p className="text-slate-600 font-light leading-relaxed text-sm italic mb-6">
                    "{REVIEWS[activeIndex].text}"
                  </p>

                  {/* Treatment tag details */}
                  <div className="inline-flex items-center gap-1.5 bg-secondary/10 border border-secondary/10 px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    <span className="text-[11px] font-semibold text-secondary uppercase tracking-tight">
                      Tratamiento: {REVIEWS[activeIndex].treatment}
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>

            {/* Carousel Controls */}
            <div className="flex items-center justify-between mt-6 px-2">
              <div className="flex gap-1">
                {REVIEWS.map((_, dotIdx) => (
                  <motion.button
                    key={dotIdx}
                    id={`review-dot-btn-${dotIdx}`}
                    onClick={() => setActiveIndex(dotIdx)}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`h-2 rounded-full cursor-pointer ${
                      dotIdx === activeIndex ? "w-6 bg-primary" : "w-2 bg-slate-300"
                    }`}
                    aria-label={`Ver reseña ${dotIdx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-2">
                <motion.button
                  id="prev-review-btn"
                  onClick={prevReview}
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(248, 250, 252)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm cursor-pointer"
                  aria-label="Reseña anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </motion.button>
                <motion.button
                  id="next-review-btn"
                  onClick={nextReview}
                  whileHover={{ scale: 1.1, backgroundColor: "rgb(248, 250, 252)" }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-full bg-white border border-slate-200 text-slate-700 shadow-sm cursor-pointer"
                  aria-label="Siguiente reseña"
                >
                  <ChevronRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
