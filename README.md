# 🚀 Ahlul Firdaus | Portfolio OS (Next.js 16)

Sistem operasi portofolio virtual dengan desain High-End UI/UX yang dibangun menggunakan teknologi web paling mutakhir untuk performa maksimal.

---

## 🛠️ Tech Stack & Architecture

Proyek ini menggunakan kombinasi teknologi **Bleeding Edge** untuk menjamin kecepatan, skalabilitas, dan pengalaman pengguna yang luar biasa.

### Core Framework & Logic
* **Next.js 16.2.4**: Menggunakan **App Router** dan engine **Turbopack** untuk proses build kilat.
* **React 19**: Memanfaatkan fitur terbaru React untuk rendering yang lebih efisien.
* **TypeScript**: Pengetikan statis untuk menjaga integritas kode dan meminimalisir bug.

### Styling & Interactive UI
* **Tailwind CSS v4**: Generasi terbaru utilitas CSS dengan arsitektur yang lebih ringan.
* **GSAP (@gsap/react)**: Standar industri untuk animasi elemen yang halus dan presisi.
* **Lenis Scroll**: Engine untuk fitur *smooth scrolling* yang mewah.
* **Lucide React**: Ikon vektor minimalis dengan dukungan *tree-shaking*.

### Data Visualization
* **Recharts**: Menampilkan grafik statistik bahasa pemrograman dari GitHub secara dinamis.
* **React GitHub Calendar**: Integrasi grafik kontribusi (green dots) langsung dari profil GitHub.

---

## 📂 Project Structure

Struktur folder diatur secara modular untuk memudahkan pengembangan:

```text
├── app/                # Next.js App Router (Halaman Utama & Layout)
│   ├── layout.tsx      # Root layout & Konfigurasi Font
│   └── page.tsx        # Komposisi utama OS Dashboard
├── src/
│   ├── components/     # Komponen UI modular
│   │   ├── ui/         # Komponen dasar (Button, Dialog, Card)
│   │   └── sections/   # Bagian besar web (Dashboard, Projects, Awards)
│   ├── constants/      # Data statis (Daftar Proyek & Sertifikat)
│   ├── hooks/          # Custom React hooks untuk logika UI
│   └── lib/            # Konfigurasi utilitas (GSAP, Utils, DB)
├── public/             # Asset statis (Gambar, Ikon, WebP certificates)
├── package.json        # Manifest dependensi dan script proyek
└── tailwind.config.js  # Konfigurasi styling Tailwind
￼Enter
