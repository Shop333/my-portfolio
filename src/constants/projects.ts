export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link: string;
  github: string;
  featured: boolean;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "PS Store Jembrana",
    description: "Katalog digital premium untuk komunitas PlayStation di Jembrana. Dilengkapi fitur manajemen stok real-time, integrasi database, dan desain High-Performance UI.",
    tech: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Lucide React", "Typescript"],
    link: "https://ps5-aj83.vercel.app/",
    github: "https://github.com/Shop333",
    featured: true,
    image: "/projects/ps-store.webp" 
  },
  {
    id: 2,
    title: "Cafe & Wedding Venue",
    description: "Sistem manajemen pemesanan tempat pernikahan yang terintegrasi dengan MySQL. Menangani alur data yang kompleks, migrasi database di cloud, dan optimasi performa backend.",
    tech: ["PHP", "Laravel", "MySQL", "Railway", "Tailwind CSS"],
    link: "https://cafe-wedding-venue-production.up.railway.app/",
    github: "https://github.com/Shop333",
    featured: true,
    image: "/projects/wedding-venue.webp"
  },
  {
    id: 3,
    title: "Landing Page BarberShop",
    description: "Landing page modern dan responsif yang dibangun dengan optimasi tinggi untuk tampilan mobile. Fokus pada UI/UX yang bersih dan performa loading yang cepat.",
    tech: ["React", "Vite", "Tailwind CSS", "TypeScript", "Fronend"],
    link: "https://new-acode-repo-mtqr.vercel.app/",
    github: "https://github.com/Shop333/new-acode-repo",
    featured: true,
    image: "/projects/acode-landing.webp" // Siapkan screenshot landing pagenya ya!
  },
];
