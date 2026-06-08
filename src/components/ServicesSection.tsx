import React from "react";
import { motion } from "motion/react";
import { Shield, Activity, HeartPulse, Layers, Grid, Gem, Sparkles, Monitor, ArrowRight } from "lucide-react";
import { SERVICES } from "../data";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

interface ServicesSectionProps {
  onOpenBooking: (serviceId: string) => void;
}

// Map key values to Lucide components
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldAlert: Shield,
  Activity: Activity,
  HeartPulse: HeartPulse,
  Layers: Layers,
  Grid: Grid,
  Gem: Gem,
  Sparkles: Sparkles,
  Monitor: Monitor
};

export default function ServicesSection({ onOpenBooking }: ServicesSectionProps) {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, ease: easeOutQuint }}
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            Tratamientos de Especialidad
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight">
            Servicios clínicos hechos con excelencia
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded" />
          <p className="text-slate-600 font-light leading-relaxed text-sm sm:text-base">
            Ofrecemos un catálogo amplio donde cada procedimiento dental es guiado por profesionales con casi 40 años de experiencia, materiales bio-compatibles certificados y un trato empático sin estrés ni dolor.
          </p>
        </motion.div>

        {/* Responsive Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((srv, index) => {
            const IconComp = iconMap[srv.icon] || Shield;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: viewportAmountNormal }}
                transition={{ duration: durationNormal, delay: index * staggerNormal, ease: easeOutQuint }}
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.15)", backgroundColor: "rgb(248, 250, 252)" }}
                className="group relative flex flex-col justify-between bg-surface-bg border border-slate-100/80 rounded-2xl overflow-hidden shadow-sm"
              >
                {/* Image thumb with Scale Hover */}
                <div className="h-48 overflow-hidden relative">
                  <motion.img
                    src={srv.image}
                    alt={srv.title}
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3, ease: easeOutQuint }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-80" />
                </div>

                {/* Content Block */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <motion.h3 
                      className="text-lg font-serif font-bold text-slate-800 mb-2"
                      whileHover={{ color: "rgb(15, 76, 129)", backgroundColor: "rgb(219, 234, 254)", padding: "4px 8px", borderRadius: "4px" }}
                      transition={{ duration: 0.2 }}
                    >
                      {srv.title}
                    </motion.h3>
                    <motion.p 
                      className="text-xs text-slate-500 leading-relaxed font-light mb-4 line-clamp-3"
                      whileHover={{ color: "rgb(51, 65, 85)" }}
                      transition={{ duration: 0.2 }}
                    >
                      {srv.description}
                    </motion.p>
                  </div>

                  {/* High Converting Trigger */}
                  <motion.button
                    id={`service-book-btn-${srv.id}`}
                    onClick={() => onOpenBooking(srv.id)}
                    whileHover={{ scale: 1.02, backgroundColor: "rgb(15, 76, 129)", color: "white", borderColor: "rgb(15, 76, 129)" }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full mt-2 inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-white text-slate-700 border border-slate-200 text-xs font-semibold cursor-pointer"
                  >
                    <span>Agendar valoración</span>
                    <motion.span
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </motion.span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Banner bottom */}
        <motion.div 
          className="mt-16 text-center bg-surface-bg border border-slate-100 p-6 rounded-2xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal * 8, ease: easeOutQuint }}
        >
          <p className="text-slate-700 text-sm font-light">
            ¿Tienes dolores o necesitas una cotización específica? Recibe un diagnóstico profesional honesto hoy.
          </p>
          <motion.button
            id="more-services-call-btn"
            onClick={() => onOpenBooking("odontologia-integral")}
            whileHover={{ color: "rgb(61, 165, 217)" }}
            className="text-primary font-bold text-sm underline mt-1 tracking-wide focus:outline-none cursor-pointer"
          >
            Chatear ahora con recepcionista médica
          </motion.button>
        </motion.div>

      </div>
    </section>
  );
}
