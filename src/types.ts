export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  date: string;
  rating: number;
  text: string;
  treatment: string;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface GalleryItem {
  id: string;
  category: "instalaciones" | "equipo" | "consultorio" | "tecnologia";
  title: string;
  image: string;
}

export interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}
