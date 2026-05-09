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

Ikuti langkah-langkah ini secara berurutan untuk membangun proyek dari nol di lingkungan lokal (**Termux**, **AndroidIDE**, atau **VS Code**).

### 1. Instalasi Node.js (Runtime Engine)
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
Masuk ke folder proyek dan instal semua library animasi, UI, dan grafik:
```bash
cd my-portfolio

# Install library utama (GSAP, Lenis, Lucide, Recharts)
npm install gsap @gsap/react lenis lucide-react recharts react-github-calendar clsx tailwind-merge @radix-ui/react-dialog

```
### 4. Konfigurasi Environment (API Keys)
Buat file environment agar fitur statistik GitHub berjalan:
```bash
# Buat file baru
touch .env.local

# Masukkan token GitHub anda (Ganti 'your_token_here' dengan token asli)
echo "NEXT_PUBLIC_GITHUB_TOKEN=your_token_here" > .env.local

```
### 5. Menjalankan Server Lokal
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
├── app/                # App Router (Halaman Utama & Layout)
├── src/
│   ├── components/     # UI modular (Sections & UI Primitives)
│   ├── constants/      # Data statis (Projects & Achievements)
│   ├── hooks/          # Custom logic React hooks
│   └── lib/            # Konfigurasi utilitas (GSAP, Utils)
├── public/             # Asset statis (Gambar & Ikon)
├── package.json        # Daftar library & script
└── tailwind.config.js  # Konfigurasi Tailwind CSS

```
**Maintained by Ahlul Firdaus** 📍 Jembrana, Bali, Indonesia.
```