# Portfolio OS (Next.js 16)

Sistem operasi portofolio virtual dengan desain **High-End UI/UX** yang dibangun menggunakan teknologi web paling mutakhir untuk performa maksimal.

---

## 🛠️ Framework & Core Stack

### 🚀 Core Framework
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

* **Next.js 16 (App Router)**: Framework utama untuk *Server Side Rendering* (SSR) dengan engine Turbopack.
* **React 19**: Library UI terbaru untuk manajemen state dan performa rendering optimal.
* **TypeScript**: Keamanan tipe data (*Type-safety*) untuk meminimalisir bug pada logika aplikasi.
* **Tailwind CSS v4**: Styling engine tercepat dan teringan untuk kustomisasi UI yang presisi.

---

## ⌨️ Panduan Instalasi (Full One-Liner Bash)

Cukup salin dan tempel satu baris perintah ini ke terminal kamu (**Termux**, **AndroidIDE**, atau **Linux**). Perintah ini sudah mencakup semua tahap instalasi secara otomatis:

```bash
# 1. Update system & Install Node.js
pkg update && pkg upgrade -y && pkg install nodejs-lts -y && \

# 2. Inisialisasi Proyek Next.js dengan Full Preset (TS, Tailwind, App Router, Turbopack)
npx create-next-app@latest my-portfolio --typescript --eslint --tailwind --src-dir --app --turbopack --no-import-alias && \

# 3. Masuk ke folder & Install semua Library (GSAP, Lenis, Lucide, Recharts, Radix UI)
cd my-portfolio && npm install gsap @gsap/react lenis lucide-react clsx tailwind-merge @radix-ui/react-dialog recharts react-github-calendar && \

# 4. Setup Environment API & Jalankan Server Development
echo "NEXT_PUBLIC_GITHUB_TOKEN=your_token_here" > .env.local && npm run dev
