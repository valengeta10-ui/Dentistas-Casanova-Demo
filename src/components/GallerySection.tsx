import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Eye } from "lucide-react";
import { GALLERY } from "../data";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>("todas");

  const categories = [
    { label: "Todas las fotos", value: "todas" },
    { label: "Instalaciones", value: "instalaciones" },
    { label: "Consultorios", value: "consultorio" },
    { label: "Material/Equipo", value: "equipo" },
    { label: "Tecnología", value: "tecnologia" }
  ];

  const filteredItems = activeTab === "todas"
    ? GALLERY
    : GALLERY.filter(item => item.category === activeTab);

  return (
    <section id="galeria" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-12 space-y-4"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, ease: easeOutQuint }}
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            Nuestros Espacios
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Transparencia e Higiene Garantizada
          </h2>
          <div className="h-0.5 w-14 bg-accent mx-auto rounded" />
          <p className="text-slate-600 font-light leading-relaxed text-sm">
            Explora las instalaciones de Dentistas Casanova. Nos regimos bajo los más estrictos estándares internacionales de desinfección electrónica y orden para brindarte la tranquilidad absoluta que tú y tu familia merecen.
          </p>
        </motion.div>

        {/* Tab buttons */}
        <motion.div 
          className="flex flex-wrap items-center justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
        >
          {categories.map((cat, index) => (
            <motion.button
              key={cat.value}
              id={`gallery-filter-btn-${cat.value}`}
              onClick={() => setActiveTab(cat.value)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full text-xs font-semibold cursor-pointer transition-all duration-200 ${
                activeTab === cat.value
                  ? "bg-primary text-white shadow-md shadow-primary/20"
                  : "bg-slate-50 text-slate-600 border border-slate-200"
              }`}
            >
              {cat.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Elegant Masonry with Tailwind Columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${item.id}-${activeTab}`}
                id={`gallery-item-${item.id}`}
                onClick={() => setSelectedImage(item.image)}
                initial={{ opacity: 0, y: 32 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -32 }}
                transition={{ duration: durationNormal, delay: index * 0.05, ease: easeOutQuint }}
                className="break-inside-avoid relative overflow-hidden rounded-2xl border border-slate-100/60 shadow-sm bg-slate-100 cursor-pointer"
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover select-none brightness-[0.98]"
                  referrerPolicy="no-referrer"
                  whileHover={{ scale: 1.03, brightness: 1 }}
                  transition={{ duration: 0.3, ease: easeOutQuint }}
                />
                
                {/* Overlay on hover */}
                <motion.div 
                  className="absolute inset-0 bg-slate-900/40 flex flex-col justify-end p-5"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3, ease: easeOutQuint }}
                >
                  <div className="flex items-center justify-between text-white">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-widest text-accent">
                        {item.category}
                      </span>
                      <h4 className="text-sm font-serif font-bold mt-0.5">{item.title}</h4>
                    </div>
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-full">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox Trigger Pop-up Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              id="gallery-lightbox"
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-zoom-out"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: easeOutQuint }}
            >
              <motion.button
                id="close-lightbox-btn"
                onClick={() => setSelectedImage(null)}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white cursor-pointer"
                aria-label="Cerrar imagen"
              >
                <X className="w-6 h-6" />
              </motion.button>
              
              <motion.img
                src={selectedImage}
                alt="Instalaciones de primer nivel"
                className="max-w-full max-h-[85vh] rounded-xl object-contain shadow-2xl select-none"
                referrerPolicy="no-referrer"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ duration: 0.3, ease: easeOutQuint }}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
