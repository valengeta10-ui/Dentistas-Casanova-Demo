import { motion } from "motion/react";
import { Monitor, ShieldAlert, CheckCircle, ChevronRight, Star } from "lucide-react";
import { IMAGE_PATHS } from "../data";
import { easeOutQuint, durationNormal, durationSlow, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

export default function TechSection() {
  const points = [
    { title: "Horarios Flexibles", text: "Ofrecemos horarios adaptables para facilitar tu atención dental." },
    { title: "Radiografía Digital", text: "Utilizamos radiografía digital para mayor precisión en los diagnósticos." },
    { title: "Esterilización", text: "Mantenemos protocolos de esterilización rigurosos para la seguridad de nuestros pacientes." },
    { title: "Precios Accesibles", text: "Contamos con opciones de tratamiento accesibles para diferentes presupuestos." }
  ];

  return (
    <section id="tecnologia" className="py-20 bg-slate-950 text-white overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Tech contents and points */}
          <motion.div 
            className="lg:col-span-7 space-y-6 text-left"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationSlow, ease: easeOutQuint }}
          >
            <motion.span 
              className="text-xs uppercase font-bold text-secondary tracking-widest bg-secondary/15 px-3.5 py-1.5 rounded-full inline-block"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
            >
              Precisión & Vanguardia Médica
            </motion.span>

            <motion.h2 
              className="text-3xl sm:text-4xl font-serif font-extrabold text-white leading-tight"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
            >
              Tecnología digital de punta para diagnósticos sin errores
            </motion.h2>

            <motion.p 
              className="text-slate-300 font-light leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeOutQuint }}
            >
              Utilizamos tecnología digital para proporcionar diagnósticos precisos y tratamientos de calidad.
            </motion.p>

            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 4, ease: easeOutQuint }}
            >
              {points.map((p, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="mt-1">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-slate-100 text-sm">{p.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 font-light leading-relaxed">{p.text}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Statistics Row with premium layouts */}
            <motion.div 
              className="grid grid-cols-3 gap-4 pt-6 text-center border-t border-white/10"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 5, ease: easeOutQuint }}
            >
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-serif font-extrabold text-accent">40+</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">Años de experiencia</p>
              </div>
              <div className="space-y-1 border-x border-white/10 px-2">
                <p className="text-3xl sm:text-4xl font-serif font-extrabold text-secondary flex items-baseline justify-center gap-0.5">
                  5.0 <Star className="w-4.5 h-4.5 text-accent fill-accent inline" />
                </p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">Calificación</p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl sm:text-4xl font-serif font-extrabold text-emerald-400">100%</p>
                <p className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-widest">Compromiso con el paciente</p>
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column: Visual of x-ray diagnostic */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationSlow, delay: staggerNormal * 2, ease: easeOutQuint }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl relative bg-slate-900"
            >
              <motion.img
                src={IMAGE_PATHS.tech}
                alt="Diagnóstico por computadora digital"
                className="w-full h-auto object-cover opacity-90 select-none"
                referrerPolicy="no-referrer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3, ease: easeOutQuint }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
