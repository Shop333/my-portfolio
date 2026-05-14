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
    id: 1, // Sesuaikan urutannya
    title: "Web Portfolio OS",
    description: "Sistem operasi portofolio virtual dengan desain High-End UI/UX. Menampilkan integrasi real-time API GitHub, visualisasi data statistik bahasa pemrograman, dan optimasi SEO Meta Tags.",
    tech: ["Next.js 16", "Tailwind CSS", "TypeScript", "Recharts", "Framer Motion", "Vercel"],
    link: "https://my-portfolio-khaki-beta-3t8b3jy9v8.vercel.app/", // Pakai link baru kamu nanti
    github: "https://github.com/Shop333/my-portfolioo",
    featured: true,
    image: "/projects/portofolioo.webp" // Sementara pakai OG Image kamu sebagai preview
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
    {
    id: 4,
    title: "PS Store Jembrana",
    description: "Katalog digital premium untuk komunitas PlayStation di Jembrana. Dilengkapi fitur manajemen stok real-time, integrasi database, dan desain High-Performance UI.",
    tech: ["Next.js", "MongoDB Atlas", "Tailwind CSS", "Lucide React", "Typescript"],
    link: "https://ps5-aj83.vercel.app/",
    github: "https://github.com/Shop333",
    featured: true,
    image: "/projects/ps-store.webp" 
  },
  {
  id: 5,
  title: "BananaKu - Bisnis Pisang Premium",
  description: "Landing page bisnis pisang premium full-stack dengan dark luxury aesthetic. Menampilkan produk dinamis dari API, sistem order real-time, galeri foto, dan pricing plans yang terkoneksi langsung ke database Supabase.",
  tech: ["Next.js 16", "NestJS", "Supabase", "TypeScript", "Tailwind CSS v4", "Vercel"],
  techIcons: {
    "Next.js 16": "SiNextdotjs",
    "NestJS": "SiNestjs",
    "Supabase": "SiSupabase",
    "TypeScript": "SiTypescript",
    "Tailwind CSS v4": "SiTailwindcss",
    "Vercel": "SiVercel",
  },
  link: "https://bananaku-frontend.vercel.app/",
  github: "https://github.com/Shop333/bananaku-frontend",
  featured: true,
  image: "/projects/bananaku.webp"
},

];
