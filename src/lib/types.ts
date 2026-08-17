export interface Project {
  id: string;
  title: string;
  location: string;
  area: number;
  rooms: number;
  year: number;
  duration: string;
  category: "ferdi-ev" | "villa" | "renovasiya";
  description: string;
  heroImage: string;
  gallery: string[];
  beforeImage: string;
  afterImage: string;
}

export interface Service {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  icon: string;
}

export interface Testimonial {
  name: string;
  projectTitle: string;
  text: string;
  image: string;
  projectImage: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  projectType: string;
  message: string;
  date: string;
  read: boolean;
}

export interface GiftCard {
  title: string;
  description: string;
  icon: string;
}
