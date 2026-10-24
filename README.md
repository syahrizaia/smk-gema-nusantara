# SMK Gema Nusantara — Portal Web Pusat Keunggulan Vokasi

[![Website Status](https://img.shields.io/website?url=https%3A%2F%2Fsmk-gema-nusantara.vercel.app&label=Live%20Demo&style=flat-square&color=06b6d4)](https://smk-gema-nusantara.vercel.app)
[![React Version](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-R3F-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

Portal web resmi **SMK Gema Nusantara (SMK-PK)** yang telah dirancang ulang secara menyeluruh dengan mengadopsi standar desain mutakhir **Apple Liquid Glass**, elemen interaktif **3D Model High-Poly (Three.js)**, serta arsitektur antarmuka modern yang ergonomis, bersih, dan berorientasi pada kemitraan industri dunia kerja (DUDI).

🔗 **Live Website:** [smk-gema-nusantara.vercel.app](https://smk-gema-nusantara.vercel.app)  
📂 **Repositori:** [github.com/syahrizaia/smk-gema-nusantara](https://github.com/syahrizaia/smk-gema-nusantara)

---

## Daftar Isi
- [Keunggulan Utama](#keunggulan-utama)
- [Teknologi yang Digunakan](#teknologi-yang-digunakan)
- [Peta Rute & Halaman (100% Coverage)](#peta-rute--halaman-100-coverage)
- [Struktur Direktori](#struktur-direktori)
- [Panduan Instalasi & Menjalankan Proyek](#panduan-instalasi--menjalankan-proyek)
- [Sistem Desain Liquid Glass](#sistem-desain-liquid-glass)
- [Kontribusi & Lisensi](#kontribusi--lisensi)

---

## Keunggulan Utama

### 1. Sistem Desain Apple Liquid Glass
- **Multi-layer Frosted Depth:** Pemanfaatan `backdrop-filter: blur(32px) saturate(210%)` yang dipadukan dengan *specular rim highlights* (`inset 0 1px 1px 0 rgba(255,255,255,0.65)`).
- **Latar Belakang Ambient Mesh & Partikel Tenang:** Kanvas partikel bintang debu bercahaya (*floating bokeh dust motes*) 60 FPS, pendaran kursor lembut (*mouse lerp tracking*), serta 4 lapisan aurora orbs yang diakselerasi langsung via GPU (`transform: translate3d`).
- **Ergonomi Visual:** Didasarkan pada palet warna gelap Obsidian (`#090d16`) yang sejuk di mata, menjaga keterbacaan teks dan kenyamanan saat membaca lama.
- **Tipografi Modern:** Kombinasi Google Fonts **Plus Jakarta Sans** untuk kenyamanan membaca teks dan **Outfit** untuk judul berkarakter premium.

### 2. Model 3D High-Poly Interaktif Vokasi (Three.js / React Three Fiber)
Terletak pada bagian Hero Banner beranda, model 3D merepresentasikan identitas kejuruan unggulan sekolah:
- **Precision Machined Gear:** Roda gigi transmisi berpresisi tinggi dengan material PBR *brushed titanium* dan *beveling* 3D (mewakili Teknik Kendaraan Ringan Otomotif).
- **Tech Workstation Core:** Tabung optik semi-transparan dengan *circuit bus glow* dan pulsa LED (mewakili Manajemen Perkantoran & Otomasi Digital).
- **Academic Crystal Emblem:** Oktahedron kristal refraktif dengan *dual gimbal rings* dan pencahayaan studio 3-titik yang merespons pergerakan kursor pengguna.

### 3. Cakupan Lengkap 100% Halaman (39 Rute)
Seluruh halaman—termasuk halaman yang sebelumnya berstatus placeholder—kini telah dibangun menjadi modul portal yang kaya data, informatif, dan terstruktur rapi.

### 4. Kebijakan Desain Profesional (Bebas Emoji)
Seluruh ikon menggunakan ikon vektor murni dari pustaka **FontAwesome 6** untuk menjamin kesan profesional, formal, dan mencerminkan kredibilitas institusi pendidikan vokasi terakreditasi A.

---

## Teknologi yang Digunakan

| Kategori | Teknologi | Deskripsi |
|---|---|---|
| **Frontend Core** | React 19, JavaScript (ESNext) | Arsitektur komponen reaktif generasi terbaru |
| **Build Tool** | Vite 7 (Rolldown engine) | Kompilasi ultra-cepat dan Hot Module Replacement (HMR) |
| **Styling** | Tailwind CSS v4, Vanilla CSS | Utilitas styling modern dan token Liquid Glass kustom |
| **3D Rendering** | Three.js, `@react-three/fiber`, `@react-three/drei` | WebGL scene 60 FPS dengan PBR materials & contact shadows |
| **Routing** | React Router v7 | Client-side routing dengan lazy loading & error boundary |
| **Ikonografi** | FontAwesome 6 Pro/Free | Ikon vektor crisp dan scalable |
| **Animasi** | Native `requestAnimationFrame`, `IntersectionObserver`, AOS | Animasi angka & transisi yang hemat daya dan responsif |

---

## Peta Rute & Halaman (100% Coverage)

Proyek ini mencakup 39 rute aktif tanpa satupun tautan rusak (*broken route*):

### Beranda (`/`)
- Floating Capsule Navbar dengan multi-level dropdown & mobile drawer
- Hero Banner dengan kanvas interaktif model 3D & modal video profil
- Animated Counter Statistik Kelulusan & Prestasi
- Spotlight Program Keahlian (TKR Otomotif & Manajemen Perkantoran)
- Bento Grid 16 Aplikasi SIAP (Sistem Informasi Administrasi & Pelayanan)
- Berita Vokasi Terkini & Galeri Foto Kegiatan Lightbox
- Bento Glass Footer dengan legalitas akreditasi dan peta situs

### 1. Tentang Kami (`/tentang-kami`)
- `/tentang-kami` — Profil Lengkap & Sejarah Singkat
- `/tentang-kami/berita-terkini` — Portal Berita & Pengumuman Sekolah
- `/tentang-kami/sejarah` — Linimasa & Tonggak Sejarah Pendirian
- `/tentang-kami/visi-misi` — Visi, Misi & Budaya Sekolah 5S/5R
- `/tentang-kami/sasaran-mutu` — 4 Sasaran Mutu Utama Berstandar ISO
- `/tentang-kami/struktur/kepala-sekolah` — Profil & Sambutan Kepala Sekolah
- `/tentang-kami/struktur/struktur-organisasi` — Bagan Tata Kelola Organisasi Sekolah

### 2. Pembelajaran (`/pembelajaran`)
- `/pembelajaran` — Ikhtisar Kurikulum Berbasis Industri
- `/pembelajaran/kurikulum/jadwal-pembelajaran` — Jadwal & Waktu Belajar Siswa
- `/pembelajaran/kurikulum/struktur-kurikulum` — Rincian Mata Pelajaran Umum & Kejuruan
- `/pembelajaran/fasilitas/fasilitas-laboratorium` — Laboratorium TKR, Komputer & Lab Bahasa
- `/pembelajaran/fasilitas/fasilitas-penunjang` — Masjid, Perpustakaan, Lapangan, dll.
- `/pembelajaran/sumber-daya-manusia/statistik-sdm` — Statistik Tenaga Pendidik & Asesor
- `/pembelajaran/sumber-daya-manusia/profil-sdm` — Profil Dewan Guru & Instruktur
- `/pembelajaran/kegiatan/kegiatan-tahunan` — Kalender Akademik & Agenda Tahunan
- `/pembelajaran/kegiatan/ekstrakurikuler-siswa` — Ekskul Olahraga, Seni & Bela Negara
- `/pembelajaran/kegiatan/organisasi-siswa` — OSIS, MPK & Ekosistem Kesiswaan

### 3. Layanan & Informasi Publik (`/layanan`)
- `/layanan` — Portal Sentra Layanan Digital
- `/layanan/legalisir-di-rumah` — Formulir Verifikasi & Pengiriman Ijazah Online
- `/layanan/surat-rekomendasi` — Permohonan Rekomendasi Magang & Beasiswa
- `/layanan/informasi-publik` — Layanan Keterbukaan Informasi Publik (PPID)
- `/layanan/informasi-publik/permohonan-informasi-publik` — Form Permohonan Dokumen
- `/layanan/informasi-publik/jenis-informasi` — Klasifikasi Informasi Berkala & Serta-Merta
- `/layanan/informasi-publik/survei-kepuasan-pelanggan` — Survei Mutu Pelayanan
- `/layanan/informasi-publik/laporan-laporan` — Indeks Laporan Transparansi
- `/layanan/informasi-publik/laporan-laporan/tata-usaha` — Laporan Kinerja TU
- `/layanan/informasi-publik/laporan-laporan/respon-pelanggan` — Statistik Respon Layanan
- `/layanan/informasi-publik/laporan-laporan/ppid` — Laporan Tahunan PPID

### 4. Prestasi (`/prestasi`)
- `/prestasi` — Rangkuman Prestasi Sekolah & Siswa
- `/prestasi/prestasi-sekolah` — Penghargaan Sekolah Pusat Keunggulan & Akreditasi
- `/prestasi/prestasi-guru` — Master Trainer MMKI, Asesor BNSP & Inovasi Pendidik
- `/prestasi/prestasi-siswa` — Juara Kaizen Contest, Kiken Yochi & LKS Otomotif
- `/prestasi/bintang-belajar` — Hall of Fame Lulusan Terbaik Per Angkatan

### 5. Lulusan & Tracer Study (`/lulusan`)
- `/lulusan` — Dokumentasi Angkatan & Galeri Serapan Kerja
- `/lulusan/keterserapan-lulusan` — Data Statistik Tracer Study & Masa Tunggu Kerja
- `/lulusan/industri-mitra` — Jejaring Kerja Sama PT MMKI, PT Musashi, Astra Group, dll.

### 6. Hubungi Kami & Penanganan Galat
- `/hubungi-kami` — Form Pesan Interaktif, Bento Data Legalitas & Iframe Google Maps
- `*` (`NotFound`) — Portal 404 Futuristik Berstandar Liquid Glass

---

## Struktur Direktori

```text
smk-gema-nusantara/
├── public/                 # Aset statis publik
├── src/
│   ├── components/
│   │   ├── 3d/
│   │   │   └── SmkGemaNusantaraScene.jsx   # Model 3D Roda Gigi & Core Vokasi
│   │   ├── Elements/
│   │   │   ├── ButtonCustom.jsx            # Tombol Liquid Glass
│   │   │   ├── CardCustom.jsx              # Kartu Kaca dengan Specular Sheen
│   │   │   ├── LinkCustom.jsx              # NavLink Dropdown Interaktif
│   │   │   └── SectionTitle.jsx            # Komponen Judul Bagian Berstandar
│   │   ├── Layouts/
│   │   │   ├── AmbientBackground.jsx       # Kanvas Partikel & Mesh Aurora Universal
│   │   │   ├── Banner.jsx                  # Hero Banner dengan Integrasi 3D Canvas
│   │   │   ├── Footer.jsx                  # Bento Glass Footer Komprehensif
│   │   │   ├── Gallery.jsx                 # Galeri Lightbox Foto
│   │   │   ├── LatestNews.jsx              # Feed Berita Vokasi
│   │   │   ├── Navbar.jsx                  # Floating Capsule Navigation Bar
│   │   │   ├── PageLayout.jsx              # Template Induk Halaman Sub-rute
│   │   │   ├── ProgramKeahlian.jsx         # Spotlight TKR & Manajemen Perkantoran
│   │   │   ├── SIAP.jsx                    # Bento Grid 16 Aplikasi Digital
│   │   │   ├── ThePrincipals.jsx           # Komponen Sambutan Kepsek
│   │   │   └── TotalNews.jsx               # Counter Animasi Statistik Native
│   │   └── pages/                          # Seluruh 39 Modul Halaman
│   ├── service/
│   │   └── data.js                         # Sumber Data Tunggal Sekolah & Navigasi
│   ├── App.jsx                             # Beranda Utama
│   ├── index.css                           # Token Liquid Glass, Mesh Animation & Tipografi
│   └── main.jsx                            # Router, Suspense Fallback & Error Boundary
├── index.html                              # Meta tags, FontAwesome & Google Fonts
├── package.json                            # Dependensi Proyek
├── vite.config.js                          # Konfigurasi Vite & Tailwind Plugin
└── README.md                               # Dokumentasi Proyek
```

---

## Panduan Instalasi & Menjalankan Proyek

### Prasyarat
- **Node.js**: Versi 18.0.0 atau lebih tinggi
- **npm** atau **yarn**

### 1. Kloning Repositori
```bash
git clone https://github.com/syahrizaia/smk-gema-nusantara.git
cd smk-gema-nusantara
```

### 2. Instal Dependensi
Karena proyek menggunakan React 19 bersama React Three Fiber terkini, jalankan:
```bash
npm install --legacy-peer-deps
```

### 3. Menjalankan Server Pengembangan Lokal
```bash
npm run dev
```
Buka browser dan akses alamat:
```text
http://localhost:5173/
```

### 4. Membangun Bundel Produksi (*Production Build*)
```bash
npm run build
```
Hasil build yang teroptimasi akan berada di direktori `dist/` dan siap dideploy ke Vercel, Netlify, atau hosting statis lainnya.

### 5. Meninjau Hasil Build (*Preview*)
```bash
npm run preview
```

---

## Sistem Desain Liquid Glass

Bagi pengembang yang ingin memperluas antarmuka, gunakan kelas utilitas CSS yang telah disediakan di `src/index.css`:

```html
<!-- Kartu Kaca Standar -->
<div class="liquid-card p-6">
  Konten kartu...
</div>

<!-- Kartu Kaca Bertingkat (Elevated) -->
<div class="liquid-glass-elevated p-8 rounded-3xl">
  Konten elevasi tinggi...
</div>

<!-- Efek Kilau Dinamis -->
<div class="liquid-card liquid-sheen p-6">
  Kartu dengan kilau cahaya saat di-hover...
</div>

<!-- Badge Pill Kaca -->
<span class="liquid-badge">
  Label Vokasi
</span>

<!-- Input Field Kaca Transparan -->
<input type="text" class="liquid-input px-4 py-2.5 rounded-xl" placeholder="Tulis sesuatu..." />
```

---

## Kontribusi & Lisensi

Proyek ini dikembangkan dengan dedikasi untuk mendukung kemajuan pendidikan vokasi di Indonesia. Kontribusi, saran, dan *pull request* sangat terbuka.

Dilisensikan di bawah lisensi [MIT](LICENSE). Hak Cipta © 2026 **SMK Gema Nusantara**. Seluruh Hak Cipta Dilindungi Undang-Undang.
