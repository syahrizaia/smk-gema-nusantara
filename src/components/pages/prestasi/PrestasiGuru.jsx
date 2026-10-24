import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const teacherAchievements = [
  {
    id: 1,
    name: "Drs. H. Mulyadi, M.Pd.",
    role: "Guru Teknik Otomotif & Kepala Program TKR",
    award: "Master Trainer Mitsubishi MMKI Kaizen & Kiken Yochi 2024",
    level: "Industri Nasional",
    year: "2024",
    organizer: "PT Mitsubishi Motors Krama Yudha Indonesia (MMKI)",
    desc: "Mendapat sertifikasi instruktur utama berstandar manufaktur Jepang dalam penerapan keselamatan kerja (Kiken Yochi) dan continuous improvement (Kaizen) di lingkungan bengkel sekolah.",
    badge: "Industri",
    tags: ["Kaizen", "Kiken Yochi", "MMKI Automotive"]
  },
  {
    id: 2,
    name: "Siti Rahmawati, S.Pd., M.M.",
    role: "Ketua Program Keahlian Manajemen Perkantoran",
    award: "Juara I Guru Inovatif Vokasi Bidang Digital Office Automation",
    level: "Tingkat Provinsi",
    year: "2024",
    organizer: "Balai Besar Guru Penggerak & Disdikbud",
    desc: "Mengembangkan model pembelajaran Cloud-Based Archiving & Modern ERP Administration yang meningkatkan efisiensi simulasi kantor virtual hingga 65%.",
    badge: "Regional",
    tags: ["Office Automation", "Cloud Archiving", "ERP"]
  },
  {
    id: 3,
    name: "Ahmad Fauzi, S.T., M.Kom.",
    role: "Guru Teknologi Informasi & Komputer Otomotif",
    award: "Finalis Nasional Inovasi Modul Digital Vokasi",
    level: "Nasional",
    year: "2023",
    organizer: "Ditjen Vokasi Kemendikbudristek RI",
    desc: "Penyusunan modul ajar digital interaktif 3D Engine Disassembly yang diakses oleh lebih dari 4.000 siswa SMK di Indonesia.",
    badge: "Nasional",
    tags: ["Kemendikbudristek", "3D Modeling", "Modul Digital"]
  },
  {
    id: 4,
    name: "Hendra Wijaya, S.T.",
    role: "Instruktur Praktik Mesin & Transmisi",
    award: "Sertifikasi Asesor Kompetensi Bidang Otomotif Terpuji",
    level: "Nasional",
    year: "2023",
    organizer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    desc: "Menyandang predikat Asesor Kompetensi LSP-P1 dengan integritas pengujian tinggi pada skema pemeliharaan berkala kendaraan roda empat.",
    badge: "Nasional",
    tags: ["BNSP", "Asesor LSP", "Uji Kompetensi"]
  },
  {
    id: 5,
    name: "Nurlela Hanum, S.Pd.",
    role: "Guru Bahasa Inggris Komunikasi Bisnis",
    award: "Gold Award International Vocational Language Coaching",
    level: "Internasional",
    year: "2024",
    organizer: "Asia-Pacific TVET Educator Forum",
    desc: "Membimbing siswa dalam program intensif persiapan interview kerja magang ke Jepang (LPK Mitra) dengan tingkat kelulusan bahasa 94%.",
    badge: "Internasional",
    tags: ["TVET", "Business English", "Global Placement"]
  },
  {
    id: 6,
    name: "Rian Hidayat, S.Pd.",
    role: "Pembina Ekstrakurikuler Robotika & IoT",
    award: "Best Mentor Inovasi IoT Automotive Safety System",
    level: "Tingkat Provinsi",
    year: "2023",
    organizer: "Himpunan Teknik Elektro & Otomotif",
    desc: "Membimbing tim siswa menciptakan sensor pintar anti-blind spot untuk kendaraan komersial berbasis mikrokontroler hemat daya.",
    badge: "Regional",
    tags: ["IoT Safety", "Microcontroller", "Mentorship"]
  }
];

const PrestasiGuru = () => {
  const [activeFilter, setActiveFilter] = useState("Semua");

  const categories = ["Semua", "Nasional", "Industri", "Regional", "Internasional"];

  const filtered = activeFilter === "Semua"
    ? teacherAchievements
    : teacherAchievements.filter(item => item.badge === activeFilter || item.level.includes(activeFilter));

  return (
    <PageLayout
      badge="Keunggulan Pengajar"
      title="Prestasi & Dedikasi Guru"
      subtitle="Pendidik bersertifikasi BNSP, Master Trainer industri multinasional, dan pengembang inovasi vokasi yang berdedikasi membimbing generasi unggul SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Prestasi", to: "/prestasi" },
        { label: "Prestasi Guru" }
      ]}
    >
      {/* Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-white mb-1 font-heading">100%</p>
          <p className="text-xs text-slate-300">Guru Tersertifikasi Profesi & Pendidik</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-cyan-400 mb-1 font-heading">14+</p>
          <p className="text-xs text-slate-300">Asesor Kompetensi Lisensi BNSP</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-indigo-400 mb-1 font-heading">8</p>
          <p className="text-xs text-slate-300">Master Trainer Mitra Industri (MMKI/Musashi)</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-emerald-400 mb-1 font-heading">24+</p>
          <p className="text-xs text-slate-300">Karya Modul & Inovasi Vokasi Terbit</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
              activeFilter === cat
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40"
                : "liquid-card text-slate-300 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Teacher Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((teacher) => (
          <div
            key={teacher.id}
            className="liquid-card p-6 flex flex-col justify-between group hover:border-blue-400/40 transition-all duration-500 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none" />

            <div>
              {/* Header Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-blue-500/15 text-blue-300 border border-blue-400/30">
                  {teacher.level}
                </span>
                <span className="text-xs text-slate-400 font-semibold font-mono">
                  {teacher.year}
                </span>
              </div>

              {/* Title & Info */}
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                {teacher.award}
              </h3>
              <p className="text-xs text-slate-400 font-medium mb-3">
                Diselenggarakan oleh: <span className="text-slate-300">{teacher.organizer}</span>
              </p>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-4">
                <p className="text-sm font-semibold text-white">{teacher.name}</p>
                <p className="text-xs text-blue-400">{teacher.role}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {teacher.desc}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
              {teacher.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-white/5 text-slate-300 border border-white/5"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default PrestasiGuru;