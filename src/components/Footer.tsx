import { motion } from "motion/react";
import { Star, Phone, MapPin, Mail, Award, Facebook } from "lucide-react";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer id="footer-seccion" className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core footer columns */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 border-b border-slate-800 pb-12"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, ease: easeOutQuint }}
        >
          
          {/* Logo & Info column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-white">
              Dentistas Casanova
            </span>
            <p className="text-xs text-slate-400 leading-relaxed font-light">
              <strong>Dentistas Casanova</strong>: Casi 40 años cuidando tu sonrisa con cariño y dedicación. Experiencia, confianza y atención personalizada para toda la familia.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <motion.a
                href="https://facebook.com/DentistasCasanova"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, backgroundColor: "rgb(30, 41, 59)" }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-slate-800 text-slate-300 rounded-lg border border-slate-700/60"
                aria-label="Sigue a Dentistas Casanova en Facebook"
              >
                <Facebook className="w-4 h-4" />
              </motion.a>
              <span className="text-xs text-slate-400">@DentistasCasanova</span>
            </div>
          </motion.div>

          {/* Quick links column */}
          <motion.div 
            className="space-y-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
          >
            <h4 className="font-serif text-white text-sm font-bold tracking-wider uppercase">
              Enlaces rápidos
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <motion.a
                  href="#inicio"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#inicio"); }}
                  whileHover={{ x: 4, color: "rgb(250, 204, 21)" }}
                  className="inline-block transition-colors"
                >
                  Inicio
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#nosotros"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#nosotros"); }}
                  whileHover={{ x: 4, color: "rgb(250, 204, 21)" }}
                  className="inline-block transition-colors"
                >
                  Nosotros (Acerca de)
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#servicios"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#servicios"); }}
                  whileHover={{ x: 4, color: "rgb(250, 204, 21)" }}
                  className="inline-block transition-colors"
                >
                  Servicios y Especialidades
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#resenas"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#resenas"); }}
                  whileHover={{ x: 4, color: "rgb(250, 204, 21)" }}
                  className="inline-block transition-colors"
                >
                  Opiniones de Pacientes
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#faq"
                  onClick={(e) => { e.preventDefault(); handleNavClick("#faq"); }}
                  whileHover={{ x: 4, color: "rgb(250, 204, 21)" }}
                  className="inline-block transition-colors"
                >
                  Preguntas Frecuentes
                </motion.a>
              </li>
            </ul>
          </motion.div>

          {/* Contact Coordinates Columns */}
          <motion.div 
            className="space-y-4 text-xs"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeOutQuint }}
          >
            <h4 className="font-serif text-white text-sm font-bold tracking-wider uppercase">
              Ubicación y Teléfono
            </h4>
            <div className="space-y-3">
              <p className="flex items-start gap-2.5 leading-relaxed">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <span>
                  Calle Villa Rica 2401, Colonia Las Villas, C.P. 67175, Guadalupe, N.L.
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-secondary shrink-0" />
                <motion.a 
                  href="tel:+528183379438" 
                  whileHover={{ color: "rgb(255, 255, 255)" }}
                  className="font-semibold transition-colors"
                >
                  +52 81 8337 9438
                </motion.a>
              </p>
              <p className="flex items-center gap-2.5 text-slate-400 font-mono">
                Plus Code: MQ76+3Q Guadalupe
              </p>
            </div>
          </motion.div>

          {/* Opening citation/hours column */}
          <motion.div 
            className="space-y-4 text-xs"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal * 4, ease: easeOutQuint }}
          >
            <h4 className="font-serif text-white text-sm font-bold tracking-wider uppercase">
              Horario Comercial
            </h4>
            <div className="space-y-2 text-slate-400">
              <p className="flex justify-between">
                <span>Lunes – Viernes:</span>
                <span>9 a.m.–8 p.m.</span>
              </p>
              <p className="flex justify-between">
                <span>Sábado:</span>
                <span>10 a.m.–3 p.m.</span>
              </p>
              <p className="flex justify-between">
                <span>Domingo:</span>
                <span>Cerrado</span>
              </p>
              <p className="text-[10px] italic mt-2">
                * Los horarios pueden variar. Favor de confirmar por teléfono.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom copyright & legal link bar */}
        <motion.div 
          className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-light"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal * 5, ease: easeOutQuint }}
        >
          <p>
            © {currentYear} Dentistas Casanova. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link 
              to="/aviso-privacidad" 
              className="transition-colors hover:text-white"
            >
              Aviso de Privacidad
            </Link>
            <span>•</span>
            <Link 
              to="/terminos" 
              className="transition-colors hover:text-white"
            >
              Términos del Servicio
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  );
}
