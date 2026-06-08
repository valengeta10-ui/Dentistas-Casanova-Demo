import { motion } from "motion/react";
import { MapPin, Phone, Compass, Calendar, Check } from "lucide-react";
import { easeOutQuint, durationNormal, staggerNormal, viewportAmountNormal } from "../utils/animationConstants";

interface LocationSectionProps {
  onOpenBooking: () => void;
}

export default function LocationSection({ onOpenBooking }: LocationSectionProps) {
  const address = {
    name: "Dentistas Casanova",
    street: "Calle Villa Rica 2401",
    suburb: "Colonia Las Villas, C.P. 67175",
    city: "Guadalupe, Nuevo León, México",
    phone: "+52 81 8337 9438",
    plusCode: "MQ76+3Q Guadalupe, Nuevo León",
    mapsUrl: "https://maps.google.com/?q=Dentistas+Casanova+C.+Villa+Rica+2401+Las+Villas+Guadalupe+Nuevo+Leon"
  };

  const scheduleHours = [
    { day: "Lunes", hours: "9 a.m.–8 p.m." },
    { day: "Martes", hours: "9 a.m.–8 p.m." },
    { day: "Miércoles", hours: "9 a.m.–8 p.m." },
    { day: "Jueves", hours: "9 a.m.–8 p.m." },
    { day: "Viernes", hours: "9 a.m.–8 p.m." },
    { day: "Sábado", hours: "10 a.m.–3 p.m." },
    { day: "Domingo", hours: "Cerrado" }
  ];

  return (
    <section id="ubicacion" className="py-20 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-14 space-y-3"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: viewportAmountNormal }}
          transition={{ duration: durationNormal, ease: easeOutQuint }}
        >
          <span className="text-xs uppercase font-extrabold tracking-widest text-primary bg-primary/5 px-4 py-1.5 rounded-full inline-block">
            ¿Cómo encontrarnos?
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-extrabold text-slate-900 tracking-tight">
            Ubicación
          </h2>
          <div className="h-0.5 w-12 bg-accent mx-auto rounded" />
          <p className="text-slate-600 font-light text-xs sm:text-sm">
            Fácil acceso por las avenidas principales de la Colonia Las Villas, con excelente seguridad.
          </p>
        </motion.div>

        {/* Layout divided */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Address Card and Schedule Table */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-between gap-6"
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal, ease: easeOutQuint }}
          >
            {/* Address Details Block */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl text-primary mt-1">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-slate-800 text-lg">{address.name}</h3>
                  <p className="text-sm text-slate-600 font-light leading-relaxed mt-1">
                    {address.street} <br />
                    {address.suburb} <br />
                    {address.city}
                  </p>
                  <p className="text-xs text-slate-400 mt-2 font-mono">
                    Plus Code: {address.plusCode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 border-t border-slate-100 pt-5">
                <div className="p-3 bg-secondary/10 rounded-xl text-secondary mt-1">
                  <Phone className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xs text-slate-400 uppercase tracking-widest font-semibold">
                    Contacto Telefónico
                  </h4>
                  <p className="text-base font-bold text-slate-800 mt-1">
                    {address.phone}
                  </p>
                  <p className="text-xs text-slate-500 font-light">
                    Llama para confirmar citas o reportar dolores agudos
                  </p>
                </div>
              </div>

              {/* Action Link to Google Maps */}
              <div className="pt-2">
                <motion.a
                  id="directions-maps-btn"
                  href={address.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-primary text-white py-3 px-4 rounded-xl font-semibold text-center text-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Compass className="w-4 h-4 text-accent animate-spin" />
                  ¿Cómo llegar en Google Maps?
                </motion.a>
              </div>

            </div>

            {/* Schedule hours block */}
            <div id="horarios" className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-serif font-bold text-slate-800 text-base mb-4 flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Nuestros Horarios de Atención
              </h3>
              
              <div className="space-y-2 text-xs">
                {scheduleHours.map((h, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-slate-50 last:border-0">
                    <span className="font-semibold text-slate-700">{h.day}</span>
                    <span className="text-slate-500 font-medium">{h.hours}</span>
                  </div>
                ))}
              </div>

              <p className="text-[10px] text-slate-400 italic mt-4 text-center">
                * Los horarios pueden variar. Favor de confirmar por teléfono.
              </p>
            </div>

          </motion.div>

          {/* Right Column: Google Maps embedded iframe */}
          <motion.div 
            className="lg:col-span-7 rounded-2xl overflow-hidden border border-slate-200 shadow-md h-[400px] lg:h-auto min-h-[350px] relative bg-slate-100"
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: viewportAmountNormal }}
            transition={{ duration: durationNormal, delay: staggerNormal * 2, ease: easeOutQuint }}
          >
            {/* Real embedded Google Map using coordinate values for Las Villas area */}
            <iframe
              title="Mapa Ubicación Dentistas Casanova Las Villas"
              src="https://maps.google.com/maps?q=Dentistas+Casanova,+C.+Villa+Rica+2401,+Las+Villas,+67175+Guadalupe,+N.L.&z=16&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full brightness-[0.98] contrast-[1.02]"
            />
            {/* Small subtle map label */}
            <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-[10px] uppercase font-mono px-3 py-1.5 rounded-md backdrop-blur-sm shadow pointer-events-none">
              Villa Rica 2401, Las Villas
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
