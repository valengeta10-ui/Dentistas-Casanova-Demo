import { motion } from "motion/react";
import { Award, Users, Cpu, ShieldCheck } from "lucide-react";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

export default function TrustSection() {
  const cards = [
    {
      title: "40 años de experiencia",
      description: "Casi cuatro décadas dedicadas al servicio odontológico exhaustivo con compromiso y profesionalismo.",
      icon: Award,
      color: "border-accent/30 text-accent bg-accent/5",
      id: "trust-card-experience"
    },
    {
      title: "Atención personalizada",
      description: "Trato cercano y humano para cada paciente, con dedicación y compromiso genuino.",
      icon: Users,
      color: "border-primary/30 text-primary bg-primary/5",
      id: "trust-card-personal"
    },
    {
      title: "Tecnología digital",
      description: "Equipamiento moderno para diagnósticos precisos y tratamientos efectivos.",
      icon: Cpu,
      color: "border-secondary/30 text-secondary bg-secondary/5",
      id: "trust-card-tech"
    },
    {
      title: "Pacientes satisfechos",
      description: "Generaciones de familias confían en nosotros, respaldados por 5.0 estrellas.",
      icon: ShieldCheck,
      color: "border-emerald-500/30 text-emerald-600 bg-emerald-500/5",
      id: "trust-card-happy"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerNormal
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 32 },
    visible: { opacity: 1, y: 0, transition: { duration: durationNormal, ease: easeOutQuint } }
  };

  return (
    <section id="confianza-inmediata" className="py-16 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle separator subtitle */}
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, ease: easeOutQuint }}
        >
          <p className="text-xs uppercase font-semibold tracking-widest text-primary/80">
            Nuestros pilares fundamentales
          </p>
          <div className="h-0.5 w-12 bg-accent mx-auto mt-2 rounded" />
        </motion.div>

        {/* Responsive Grid with Framer Motion Stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: viewportAmountNormal }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cards.map((card) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={card.title}
                id={card.id}
                variants={itemVariants}
                whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)", backgroundColor: "rgb(248, 250, 252)" }}
                className="bg-surface-bg border border-slate-100 p-6 rounded-2xl flex flex-col items-start gap-4 shadow-sm"
              >
                {/* Icon wrapper */}
                <div className={`p-3 rounded-xl border ${card.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                
                {/* Copy */}
                <div>
                  <motion.h3 
                    className="text-lg font-serif font-bold text-slate-800 mb-2"
                    whileHover={{ color: "rgb(15, 76, 129)", backgroundColor: "rgb(219, 234, 254)", padding: "4px 8px", borderRadius: "4px" }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p 
                    className="text-sm text-slate-600 leading-relaxed font-light"
                    whileHover={{ color: "rgb(51, 65, 85)" }}
                    transition={{ duration: 0.2 }}
                  >
                    {card.description}
                  </motion.p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
