import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import { FAQS } from "../data";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div 
          className="text-center mb-12 space-y-3"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, ease: easeOutQuint }}
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Resolvemos tus dudas al instante
          </h2>
          <div className="h-0.5 w-12 bg-accent mx-auto rounded" />
          <p className="text-slate-600 font-light text-slate-500 text-sm">
            ¿Tienes alguna consulta sobre presupuestos, ortodoncia o emergencias? Aquí te explicamos transparentemente todo el proceso.
          </p>
        </motion.div>

        {/* Accordions mapping */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div
                key={faq.id}
                id={`faq-item-${faq.id}`}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: viewportAmountNormal }}
                transition={{ duration: durationNormal, delay: index * staggerNormal, ease: easeOutQuint }}
                className={`border border-slate-100/80 rounded-2xl overflow-hidden ${
                  isOpen ? "bg-slate-50 border-slate-200 shadow-sm" : "bg-white"
                }`}
              >
                {/* Trigger Row */}
                <motion.button
                  id={`faq-trigger-btn-${faq.id}`}
                  onClick={() => toggleFAQ(faq.id)}
                  type="button"
                  whileHover={{ backgroundColor: isOpen ? "rgb(248, 250, 252)" : "rgb(248, 250, 252)" }}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-serif text-base font-bold text-slate-800 focus:outline-none cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 ${isOpen ? "text-primary" : "text-slate-400"} shrink-0`} />
                    {faq.question}
                  </span>
                  
                  {/* Icon Toggle indicators */}
                  <motion.div 
                    className={`p-1.5 rounded-full ${isOpen ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </motion.div>
                </motion.button>

                {/* Collapsible Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: easeOutQuint }}
                      className="border-t border-slate-200/55 overflow-hidden"
                    >
                      <div className="p-6 text-sm text-slate-600 leading-relaxed font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
