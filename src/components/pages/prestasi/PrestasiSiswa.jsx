import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const studentAchievements = [
  {
    id: 1,
    title: "Juara I Kaizen Contest 2024",
    student: "Muhammad Rizky Pratama & Tim Vokasi TKR",
    department: "Teknik Kendaraan Ringan Otomotif",
    organizer: "PT Mitsubishi Motors Krama Yudha Indonesia (MMKI)",
    category: "Industri",
    year: "2024",
    medal: "Juara 1 (Gold)",
    desc: "Menciptakan jig perakitan presisi berbasis sensor torsi untuk mengeliminasi potensi human error pada proses tightening baut chasis kendaraan."
  },
  {
    id: 2,
    title: "Juara I Kiken Yochi (KYT) Contest 2025",
    student: "Fajar Nugraha, Dimas Arya, & Bayu Saputra",
    department: "Teknik Kendaraan Ringan Otomotif",
    organizer: "PT MMKI Safety Committee & Vocational Network",
    category: "Industri",
    year: "2025",
    medal: "Juara 1 (Gold)",
    desc: "Menunjukkan kecepatan dan ketepatan analisis potensi bahaya di lingkungan workshop manufaktur dengan standar Zero Accident industri otomotif Jepang."
  },
  {
    id: 3,
    title: "Juara I Lomba Kompetensi Siswa (LKS) Otomotif",
    student: "Bagus Setiawan",
    department: "Teknik Kendaraan Ringan Otomotif",
    organizer: "Dinas Pendidikan Wilayah V Jawa Barat",
    category: "LKS Vokasi",
    year: "2024",
    medal: "Juara 1 (Gold)",
    desc: "Meraih skor tertinggi dalam uji Engine Diagnostic, Electronic Fuel Injection (EFI) Troubleshooting, dan Overhaul Transmisi Manual."
  },
  {
    id: 4,
    title: "Juara II LKS Bidang Digital Office Administration",
    student: "Anisa Maulida Putri",
    department: "Manajemen Perkantoran (MP)",
    organizer: "Musyawarah Kerja Kepala Sekolah (MKKS) SMK",
    category: "LKS Vokasi",
    year: "2024",
    medal: "Juara 2 (Silver)",
    desc: "Keahlian unggul dalam kecepatan mengetik 10 jari buta (85 WPM akurasi 99%), pengarsipan digital terenkripsi, dan simulasi korespondensi bisnis billingual."
  },
  {
    id: 5,
    title: "Juara I Kejuaraan Pencak Silat Antar Pelajar Se-Jabar",
    student: "Rangga Aditya",
    department: "Teknik Kendaraan Ringan Otomotif",
    organizer: "Ikatan Pencak Silat Indonesia (IPSI)",
    category: "Olahraga & Seni",
    year: "2024",
    medal: "Juara 1 (Gold)",
    desc: "Meraih medali emas kelas tanding C Putra tingkat pelajar se-Jawa Barat melalui ketangguhan teknik dan sportivitas tinggi."
  },
  {
    id: 6,
    title: "Juara II Musashi Monozukuri Vocational Cup",
    student: "Ilham Ramadhan & Tim QC",
    department: "Teknik Kendaraan Ringan Otomotif",
    organizer: "PT Musashi Auto Parts Indonesia",
    category: "Industri",
    year: "2023",
    medal: "Juara 2 (Silver)",
    desc: "Ketelitian pengukuran mikron komponen transmisi presisi dan pemecahan studi kasus Six Sigma pada lini produksi part sepeda motor."
  },
  {
    id: 7,
    title: "Juara I Lomba Cepat Tepat Akuntansi & Perkantoran",
    student: "Dewi Anggraini & Safira Az-Zahra",
    department: "Manajemen Perkantoran (MP)",
    organizer: "Fakultas Ekonomi Universitas Negeri Mitra",
    category: "Akademik",
    year: "2023",
    medal: "Juara 1 (Gold)",
    desc: "Menguasai kompetensi pembukuan kas kecil, rekonsiliasi bank, dan presentasi perencanaan anggaran kantor modern."
  },
  {
    id: 8,
    title: "Juara Harapan I Desain Poster Keselamatan Kerja Vokasi",
    student: "Rifky Al-Faruq",
    department: "Manajemen Perkantoran (MP)",
    organizer: "Kementerian Ketenagakerjaan RI",
    category: "Olahraga & Seni",
    year: "2024",
    medal: "Harapan 1",
    desc: "Karya infografis kreatif dan komunikatif mengenai pentingnya implementasi budaya 5S/5R (Seiri, Seiton, Seiso, Seiketsu, Shitsuke) di tempat kerja."
  }
];

const PrestasiSiswa = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const categories = ["Semua", "Industri", "LKS Vokasi", "Olahraga & Seni", "Akademik"];

  const filtered = selectedCategory === "Semua"
    ? studentAchievements
    : studentAchievements.filter(item => item.category === selectedCategory);

  return (
    <PageLayout
      badge="Generasi Berprestasi"
      title="Prestasi Siswa & Siswi"
      subtitle="Bukti dedikasi, kedisiplinan, dan ketangguhan siswa SMK Gema Nusantara di kancah kejuaraan industri, olimpiade vokasi daerah & nasional, hingga cabang olahraga bela diri."
      breadcrumbs={[
        { label: "Prestasi", to: "/prestasi" },
        { label: "Prestasi Siswa" }
      ]}
    >
      {/* Metric Highlights */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-amber-400 mb-1 font-heading">48+</p>
          <p className="text-xs text-slate-300">Trofi & Medali (2021-2025)</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-blue-400 mb-1 font-heading">Juara 1</p>
          <p className="text-xs text-slate-300">Kaizen Contest MMKI 2024</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-cyan-400 mb-1 font-heading">Juara 1</p>
          <p className="text-xs text-slate-300">Kiken Yochi Contest MMKI 2025</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-emerald-400 mb-1 font-heading">Gold Medal</p>
          <p className="text-xs text-slate-300">LKS Vokasi Wilayah Jabar</p>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
              selectedCategory === cat
                ? "bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold shadow-lg shadow-amber-500/25 border border-amber-300/60"
                : "liquid-card text-slate-300 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Student Champions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="liquid-card p-6 flex flex-col justify-between group hover:border-amber-400/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-500/15 text-amber-300 border border-amber-400/30">
                  {item.medal}
                </span>
                <span className="text-xs font-mono text-slate-400 font-semibold">
                  Tahun {item.year}
                </span>
              </div>

              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                {item.title}
              </h3>

              <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                <p className="text-sm font-semibold text-white">{item.student}</p>
                <p className="text-xs text-blue-400 mt-0.5">{item.department}</p>
                <p className="text-[11px] text-slate-400 mt-1">Penyelenggara: {item.organizer}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
              <span className="text-slate-400">Kategori: <strong className="text-slate-200">{item.category}</strong></span>
              <span className="text-amber-400 font-semibold flex items-center">
                <i className="fa-solid fa-shield-halved text-amber-400 mr-1.5 text-xs"></i>
                <span>Terverifikasi SMK GN</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default PrestasiSiswa;