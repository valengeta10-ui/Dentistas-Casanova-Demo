import { motion } from "motion/react";
import { GraduationCap, Award, ShieldCheck, FileText } from "lucide-react";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

interface Professional {
  name: string;
  title: string;
  university: string;
  license: string;
  specialty: string;
}

const professionals: Professional[] = [
  {
    name: "Dra. Fernanda Díaz Casanova",
    title: "Cirujana Dentista",
    university: "Universidad Autónoma de Nuevo León",
    license: "CED. PROF. 13347012",
    specialty: "Maestría en Ortodoncia"
  },
  {
    name: "Dra. [Nombre del Profesional]",
    title: "Cirujano Dentista",
    university: "[Nombre de la Universidad]",
    license: "CED. PROF. [Número de Cédula]",
    specialty: "[Especialidad]"
  }
];

export default function ProfessionalLicensesSection() {
  return (
    <section id="cedulas" className="py-20 bg-surface-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, ease: easeOutQuint }}
        >
          <motion.span 
            className="text-xs uppercase font-extrabold tracking-widest text-accent bg-accent/10 px-4 py-1.5 rounded-full inline-block mb-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
          >
            Credenciales Profesionales
          </motion.span>
          
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-extrabold text-slate-900 tracking-tight mb-4"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
          >
            Cédulas Profesionales y Títulos Universitarios
          </motion.h2>
          
          <motion.div 
            className="h-1 w-20 bg-accent mx-auto rounded"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal * 3, ease: easeOutQuint }}
          />
          
          <motion.p 
            className="text-slate-600 font-light leading-relaxed text-sm sm:text-base max-w-2xl mx-auto mt-6"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal * 4, ease: easeOutQuint }}
          >
            Nuestro equipo de profesionales cuenta con las credenciales académicas y licencias necesarias para brindarte atención dental de la más alta calidad.
          </motion.p>
        </motion.div>

        {/* Professional Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {professionals.map((professional, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: viewportAmountNormal }}
              transition={{ duration: durationNormal, delay: staggerNormal * (5 + index), ease: easeOutQuint }}
              className="bg-white border border-slate-100 rounded-2xl shadow-lg overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-gradient-to-r from-primary to-primary/90 p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center shrink-0 border-2 border-white/30">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-xl font-bold mb-1">{professional.name}</h3>
                    <p className="text-sm text-white/90 font-medium">{professional.title}</p>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 space-y-4">
                {/* University */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 border border-blue-100">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Título Universitario</p>
                    <p className="text-sm text-slate-800 font-medium">{professional.university}</p>
                  </div>
                </div>

                {/* License */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 border border-amber-100">
                    <FileText className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Cédula Profesional</p>
                    <p className="text-sm text-slate-800 font-medium">{professional.license}</p>
                  </div>
                </div>

                {/* Specialty */}
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100">
                    <ShieldCheck className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Especialidad</p>
                    <p className="text-sm text-slate-800 font-medium">{professional.specialty}</p>
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
                <p className="text-xs text-slate-500 text-center">
                  Profesional certificado y registrado ante las autoridades sanitarias
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal * 7, ease: easeOutQuint }}
          className="mt-12 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <ShieldCheck className="w-6 h-6 text-accent" />
            <h4 className="font-serif text-xl font-bold text-white">Compromiso con la Excelencia</h4>
          </div>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto">
            Todos nuestros profesionales mantienen sus credenciales actualizadas y cumplen con los requisitos de la práctica odontológica en México.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
