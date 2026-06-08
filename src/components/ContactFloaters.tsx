import { Phone, MessageSquare } from "lucide-react";

export default function ContactFloaters() {
  const whatsAppMessage = "Hola Dentistas Casanova, me gustaría solicitar información para agendar una cita de valoración por favor.";
  const whatsAppLink = `https://wa.me/528183379438?text=${encodeURIComponent(whatsAppMessage)}`;

  return (
    <div id="floaters-container" className="fixed bottom-6 right-6 z-40 flex flex-col gap-3 lg:hidden">
      
      {/* WhatsApp Floater Button */}
      <a
        id="floating-whatsapp-btn"
        href={whatsAppLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 border border-emerald-400/20"
        aria-label="Contactar por WhatsApp"
      >
        <MessageSquare className="w-6 h-6 fill-white text-emerald-500" />
      </a>

      {/* Direct phone Call Floater Button */}
      <a
        id="floating-phone-btn"
        href="tel:+528183379438"
        className="flex items-center justify-center p-4 bg-primary hover:bg-primary/95 text-white rounded-full shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200 border border-primary/20"
        aria-label="Llamar por teléfono"
      >
        <Phone className="w-6 h-6 fill-white text-primary" />
      </a>

    </div>
  );
}
