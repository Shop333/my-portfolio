# 🚀 Portfolio OS (Next.js 16)

Sistem operasi portofolio virtual dengan desain High-End UI/UX yang dibangun menggunakan teknologi web paling mutakhir untuk performa maksimal.

---

## 🛠️ Framework & Core Stack

### 🚀 Core Framework
![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)

* **Next.js 16 (App Router)**: Framework utama untuk *Server Side Rendering* (SSR) dan manajemen rute secara efisien menggunakan engine Turbopack.
* **React 19**: Versi terbaru untuk membangun komponen UI yang reaktif dengan performa optimal.
* **TypeScript**: Memberikan keamanan tipe data (*Type-Safety*) pada seluruh alur logika aplikasi.
* **Tailwind CSS v4**: Engine styling generasi terbaru yang lebih cepat, ringan, dan modern.

---

## ⌨️ Panduan Instalasi & Setup (Terminal)

![Termux](https://img.shields.io/badge/Termux-ef7102?style=for-the-badge&logo=termux&logoColor=white)
![VSCode](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Linux](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![Acode](https://img.shields.io/badge/Acode_Editor-1e1e1e?style=for-the-badge&logo=visual-studio-code&logoColor=3178C6)

Ikuti langkah-langkah ini secara berurutan untuk membangun proyek dari nol di lingkungan lokal (**Termux**, **Acode**, atau **VS Code**,**linux**).

### 1. Instalasi Node.js (Runtime Engine)

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Jalankan perintah ini untuk menginstal mesin utama:
```bash
# Untuk pengguna Termux (Android)
pkg update && pkg upgrade
pkg install nodejs-lts

# Untuk pengguna Linux (Ubuntu/Debian)
sudo apt update
sudo apt install nodejs npm

# Cek apakah sudah terinstall dengan benar:
node -v
npm -v

```
### 2. Instalasi & Setup Next.js (Project Base)

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)

Gunakan perintah ini untuk membuat struktur proyek Next.js:
```bash
npx create-next-app@latest my-portfolio

```
**PENTING! Pilih opsi berikut di terminal saat muncul pertanyaan:**
```bash
✔ Would you like to use TypeScript? … Yes
✔ Would you like to use ESLint? … Yes
✔ Would you like to use Tailwind CSS? … Yes
✔ Would you like to use `src/` directory? … Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to use Turbopack for `next dev`? ... Yes
✔ Would you like to customize the default import alias (@/*)? … No

```
### 3. Instalasi Library Pendukung (Full Dependencies)

![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Lenis](https://img.shields.io/badge/Lenis-black?style=for-the-badge)
![Lucide](https://img.shields.io/badge/Lucide_Icons-FF7E33?style=for-the-badge&logo=lucide)
![Recharts](https://img.shields.io/badge/Recharts-22b5bf?style=for-the-badge)


Masuk ke folder proyek dan instal semua library animasi, UI, dan grafik:
```bash
cd my-portfolio

# Install library utama (GSAP, Lenis, Lucide, Recharts)
npm install gsap @gsap/react lenis lucide-react recharts react-github-calendar clsx tailwind-merge @radix-ui/react-dialog

```
### 4. Konfigurasi Environment (API Keys)

![GitHub](https://img.shields.io/badge/GitHub_API-181717?style=for-the-badge&logo=github&logoColor=white)
![RestAPI](https://img.shields.io/badge/Rest_API-005571?style=for-the-badge&logo=google-cloud&logoColor=white)


Buat file environment agar fitur statistik GitHub berjalan:
```bash
# Buat file baru
touch .env.local

# Masukkan token GitHub anda (Ganti 'your_token_here' dengan token asli)
echo "NEXT_PUBLIC_GITHUB_TOKEN=your_token_here" > .env.local

```
### 5. Menjalankan Server Lokal

![LocalServer](https://img.shields.io/badge/Local_Server-000000?style=for-the-badge&logo=vercel&logoColor=white)


Nyalakan proyek untuk melihat hasil kodenya:
```bash
# Jalankan mode development
npm run dev

```
Buka browser dan akses:
```bash
http://localhost:3000
```
## 📂 Struktur Proyek (Project Structure)
```text

📂 public/              # Global assets & public icons
📂 src/                 # Main source code directory
├── 📂 app/             # Next.js App Router (Pages & Layouts)
├── 📂 components/      # Reusable UI Components (Atomic Design)
├── 📂 constants/       # Static data & configuration files
├── 📂 hooks/           # Custom React hooks logic
└── 📂 lib/             # Third-party configurations (GSAP, Utils)
📜 .gitignore           # Git ignore settings
📜 eslint.config.mjs    # Linting rules configuration
📜 next-env.d.ts        # Next.js TypeScript declarations
📜 next.config.ts       # Next.js framework settings
📜 package-lock.json    # Dependency lock file
📜 package.json         # Project metadata & scripts
📜 postcss.config.mjs   # CSS processing configuration
📜 README.md            # Project documentation
📜 tsconfig.json        # TypeScript compiler settings


```
---

## 📈 My Coding Activity

![Ahlul's GitHub Stats](https://github-readme-stats.vercel.app/api?username=Shop333&show_icons=true&theme=transparent&hide_border=true&title_color=38B2AC&icon_color=38B2AC&text_color=ffffff)

![GitHub Trophies](https://github-profile-trophy.vercel.app/?username=Shop333&theme=flat&no-bg=true&no-frame=true&column=7)

---

<div align="center">

### ⚡ Let's Connect & Build Something Great!

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/firdaus-ahlul)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://instagram.com/ahlul_fird)

**Developed with ❤️ by [Ahlul Firdaus](https://github.com/Shop333)**
📍 *Jembrana, Bali, Indonesia*

![Footer Animation](https://capsule-render.vercel.app/api?type=waving&color=38B2AC&height=120&section=footer)

</div>

```