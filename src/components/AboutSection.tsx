import { motion } from "motion/react";
import { Star, ShieldCheck, Heart, Award } from "lucide-react";
import { IMAGE_PATHS } from "../data";
import { easeOutQuint, easeInOutExpo, durationSlow, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-20 bg-surface-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual asymmetric layout with protruding image */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationSlow, ease: easeOutQuint }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white"
            >
              <img
                src={IMAGE_PATHS.team}
                alt="Equipo Dentistas Casanova"
                className="w-full h-auto object-cover select-none"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent p-5 text-white">
                <span className="text-[10px] uppercase font-bold text-accent tracking-wider">
                  Profesionales Comprometidos
                </span>
                <p className="font-serif text-lg font-bold">Equipo Dental</p>
              </div>
            </motion.div>

            {/* Decorative overlapping badge protruding behind the image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 32 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationSlow, delay: staggerNormal, ease: easeInOutExpo }}
              className="absolute -top-6 -right-6 z-20 bg-primary text-white p-6 rounded-2xl shadow-xl max-w-xs border border-primary/20 hidden sm:block"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs uppercase font-extrabold tracking-widest text-accent">
                  Estándar de Oro
                </span>
              </div>
              <p className="text-sm font-serif">
                "Atención dental con experiencia y confianza."
              </p>
            </motion.div>

            {/* Decorative background visual blob */}
            <div className="absolute -top-10 -left-10 w-44 h-44 bg-secondary/15 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Copy & Editorial Content */}
          <motion.div 
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationSlow, ease: easeOutQuint }}
          >
            <motion.span 
              className="text-xs uppercase font-bold text-primary tracking-widest bg-primary/10 px-3 py-1 rounded-full"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
            >
              Nuestra Historia
            </motion.span>

            <motion.h2 
              className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
            >
              Una trayectoria construida sobre la confianza intergeneracional
            </motion.h2>

            <motion.div 
              className="h-0.5 w-16 bg-accent rounded"
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeOutQuint }}
            />

            <motion.div 
              className="text-slate-600 space-y-4 font-light leading-relaxed text-sm sm:text-base"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 4, ease: easeOutQuint }}
            >
              <p>
                En <strong className="text-slate-800 font-semibold">Dentistas Casanova</strong>, entendemos que ir al dentista de toda la vida es un acto de confianza. Iniciamos hace casi 40 años con una clara misión: ofrecer tratamientos odontológicos excepcionales donde la calidez humana y la honestidad médica fuesen siempre la prioridad.
              </p>
              <p>
                A lo largo de las generaciones, hemos visto crecer a nuestros pacientes y hemos atendido con el mismo cariño a abuelos, padres e hijos. Hemos evolucionado integrando equipamiento clínico digital y materiales odontológicos de clase mundial, pero conservando intacto nuestro vínculo de cercanía y calidez.
              </p>
            </motion.div>

            {/* Block highlight quoted */}
            <motion.blockquote 
              className="border-l-4 border-accent bg-amber-500/5 p-4 rounded-r-xl italic text-slate-700 text-sm"
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 5, ease: easeOutQuint }}
            >
              "Generaciones de familias han confiado en Dentistas Casanova para el cuidado de su salud bucal."
            </motion.blockquote>

            {/* Specialist spotlight section */}
            <motion.div 
              className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm space-y-4"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * 6, ease: easeOutQuint }}
            >
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-blue-50 flex items-center justify-center font-bold text-primary shrink-0 border border-primary/10">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-slate-850">
                    Dra. Fernanda Díaz
                  </h4>
                  <p className="text-xs text-slate-505 font-medium uppercase tracking-wider text-secondary">
                    Especialista Destacada en Ortodoncia
                  </p>
                </div>
              </div>
            </motion.div>


          </motion.div>

        </div>
      </div>
    </section>
  );
}
