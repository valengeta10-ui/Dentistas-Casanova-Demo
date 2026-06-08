import { ServiceItem, ReviewItem, FAQItem, GalleryItem } from "./types";
import heroImg from "./assets/images/movidagrafica-dentist-4373290.jpg";
import demoImg from "./assets/images/demo.jpg";
import techImg from "./assets/images/youllneverknow-x-ray-961977.jpg";

export const IMAGE_PATHS = {
  hero: heroImg,
  team: demoImg,
  tech: techImg
};

export const SERVICES: ServiceItem[] = [
  {
    id: "odontologia-integral",
    title: "Odontología General",
    description: "Cuidado dental preventivo y correctivo completo para adultos y niños.",
    icon: "ShieldAlert",
    image: demoImg
  },
  {
    id: "endodoncia",
    title: "Endodoncia",
    description: "Tratamientos de conductos para salvar tus dientes naturales.",
    icon: "Activity",
    image: demoImg
  },
  {
    id: "cirugia-oral",
    title: "Cirugía",
    description: "Extracciones y cirugías orales bajo estrictas normas de bioseguridad.",
    icon: "HeartPulse",
    image: demoImg
  },
  {
    id: "periodoncia",
    title: "Periodoncia",
    description: "Tratamiento de enfermedades de encías y tejido de soporte.",
    icon: "Layers",
    image: demoImg
  },
  {
    id: "protesis-dental",
    title: "Prótesis",
    description: "Restauración de piezas ausentes mediante dentaduras totales o parciales.",
    icon: "Grid",
    image: demoImg
  },
  {
    id: "coronas-puentes",
    title: "Coronas",
    description: "Restauraciones en porcelana o zirconio que lucen como dientes naturales.",
    icon: "Gem",
    image: demoImg
  },
  {
    id: "blanqueamiento",
    title: "Blanqueamiento",
    description: "Tratamiento estético para aclarar el tono de tus dientes de forma segura.",
    icon: "Sparkles",
    image: demoImg
  },
  {
    id: "radiografia",
    title: "Radiografía por Computadora",
    description: "Diagnósticos precisos con tecnología digital de mínima radiación.",
    icon: "Monitor",
    image: demoImg
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: "1",
    name: "Paciente",
    date: "Hace 5 meses",
    rating: 5,
    text: "He ido para una limpieza y me atendieron 10/10, muy buen lugar y muy buen trato. Mis dentistas de confianza.",
    treatment: "Limpieza",
    avatar: demoImg
  },
  {
    id: "2",
    name: "Carlos García Contreras",
    date: "Hace 10 meses",
    rating: 5,
    text: "Excelente consultorio dental. Manejan una calidad excepcional, no solo calidad profesional sino trato cercano. Y la atención es muy personalizada. En cuanto a ortodoncia, la Dra Fernanda Diaz es la mejor de Monterrey.",
    treatment: "Ortodoncia",
    avatar: demoImg
  },
  {
    id: "3",
    name: "Gerardo Antonio González Hernández",
    date: "Hace 5 años",
    rating: 5,
    text: "Tengo mucho tiempo atendiéndome con las doctoras y siempre he tenido excelente atención. Muy capacitadas, con horarios muy flexibles y precios accesibles. 100% recomendables.",
    treatment: "General",
    avatar: demoImg
  },
  {
    id: "4",
    name: "Elvia Perez",
    date: "Hace 2 años",
    rating: 5,
    text: "Súper recomendables me encantó como me atendieron y su forma de trabajar. Muchas gracias por ayudarme a extraer mi muela.",
    treatment: "Extracción",
    avatar: demoImg
  },
  {
    id: "5",
    name: "Rossy Perez",
    date: "Hace 10 meses",
    rating: 5,
    text: "Excelente Servicio.",
    treatment: "General",
    avatar: demoImg
  }
];

export const FAQS: FAQItem[] = [
  {
    id: "faq-1",
    question: "¿Cómo puedo solicitar una cita?",
    answer: "Puedes enviar una solicitud de cita haciendo clic en el botón de 'Agenda tu cita', llamando al teléfono +52 81 8337 9438, o enviando un mensaje por WhatsApp. Un coordinador te contactará para confirmar disponibilidad y horario definitivo."
  },
  {
    id: "faq-2",
    question: "¿Atienden urgencias dentales?",
    answer: "Sí, brindamos atención prioritaria para urgencias dentales. Por favor, llámanos de inmediato."
  },
  {
    id: "faq-3",
    question: "¿Ofrecen tratamientos de ortodoncia?",
    answer: "Sí, contamos con tratamientos de ortodoncia guiados por especialistas como la Dra. Fernanda Díaz."
  },
  {
    id: "faq-4",
    question: "¿Tienen opciones accesibles de tratamiento?",
    answer: "Sí, ofrecemos diferentes planes de tratamiento con presupuestos claros y honestos."
  },
  {
    id: "faq-5",
    question: "¿Dónde están ubicados?",
    answer: "Nos encontramos en Calle Villa Rica 2401, Colonia Las Villas, C.P. 67175, Guadalupe, Nuevo León, México (Plus Code MQ76+3Q)."
  }
];

export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    category: "instalaciones",
    title: "Recepción de la Clínica",
    image: demoImg
  },
  {
    id: "gal-2",
    category: "consultorio",
    title: "Consultorio Dental Principal",
    image: demoImg
  },
  {
    id: "gal-3",
    category: "tecnologia",
    title: "Pantallas de Radiografía Dental Digital",
    image: demoImg
  },
  {
    id: "gal-4",
    category: "equipo",
    title: "Materiales y Procesos de Esterilización",
    image: demoImg
  },
  {
    id: "gal-5",
    category: "instalaciones",
    title: "Fachada de Dentistas Casanova",
    image: demoImg
  },
  {
    id: "gal-6",
    category: "consultorio",
    title: "Atención Dental Real y Cálida",
    image: demoImg
  }
];
