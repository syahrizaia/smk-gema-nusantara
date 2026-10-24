import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Elements/SectionTitle";

const appsData = [
  {
    name: "Buku Pribadi Digital",
    category: "akademik",
    icon: "fas fa-id-card-clip",
    to: "/not-found",
    badge: "Siswa",
    desc: "Portofolio digital, catatan kedisiplinan, dan rekam jejak capaian siswa.",
  },
  {
    name: "Jarvis GENUS",
    category: "akademik",
    icon: "fas fa-robot",
    to: "/not-found",
    badge: "AI Assistant",
    desc: "Asisten cerdas pendukung kegiatan belajar dan layanan informasi sekolah.",
  },
  {
    name: "Perpus Khazanah Analitika",
    category: "akademik",
    icon: "fas fa-book-bookmark",
    to: "/not-found",
    badge: "Literasi",
    desc: "Akses ribuan buku digital, jurnal ilmiah, dan modul vokasi resmi.",
  },
  {
    name: "GENUS Open Championship",
    category: "akademik",
    icon: "fas fa-trophy",
    to: "/not-found",
    badge: "Kompetisi",
    desc: "Ajang unjuk kebolehan keterampilan vokasi & bakat siswa tingkat regional.",
  },
  {
    name: "KHS Online",
    category: "akademik",
    icon: "fas fa-chart-line",
    to: "/not-found",
    badge: "Nilai",
    desc: "Kartu Hasil Studi dan rapor kompetensi semester secara real-time.",
  },
  {
    name: "Gadget Assisted Exam",
    category: "akademik",
    icon: "fas fa-laptop-code",
    to: "/not-found",
    badge: "CBT",
    desc: "Sistem ujian berbasis komputer dan gawai yang aman dan terstandardisasi.",
  },
  {
    name: "LSP P-1 GENUS",
    category: "akademik",
    icon: "fas fa-award",
    to: "/not-found",
    badge: "BNSP",
    desc: "Lembaga Sertifikasi Profesi Pihak Pertama berlisensi resmi BNSP.",
  },
  {
    name: "Praktik Kejuruan Terpadu",
    category: "akademik",
    icon: "fas fa-gears",
    to: "/not-found",
    badge: "TEFA",
    desc: "Modul pembelajaran praktikum berbasis standar manufaktur MMKI & Musashi.",
  },
  {
    name: "Legalisir di Rumah (LDR)",
    category: "layanan",
    icon: "fas fa-house-laptop",
    to: "/layanan/legalisir-di-rumah",
    badge: "Layanan",
    desc: "Permohonan dan pengiriman legalisir ijazah langsung ke rumah alumni.",
  },
  {
    name: "Surat Rekomendasi",
    category: "layanan",
    icon: "fas fa-file-signature",
    to: "/layanan/surat-rekomendasi",
    badge: "Layanan",
    desc: "Pengajuan surat rekomendasi kerja industri atau melanjutkan kuliah.",
  },
  {
    name: "Respon Pelanggan",
    category: "layanan",
    icon: "fas fa-comments",
    to: "/layanan/informasi-publik/laporan-laporan/respon-pelanggan",
    badge: "Feedback",
    desc: "Saluran aspirasi, kritik, dan saran dari siswa, orang tua, dan mitra industri.",
  },
  {
    name: "Career Development Center",
    category: "layanan",
    icon: "fas fa-briefcase",
    to: "/not-found",
    badge: "BKK",
    desc: "Bursa Kerja Khusus penempatan lulusan ke perusahaan mitra dalam & luar negeri.",
  },
  {
    name: "Praktik Kerja Industri",
    category: "layanan",
    icon: "fas fa-industry",
    to: "/not-found",
    badge: "Prakerin",
    desc: "Sistem monitoring pelaksanaan magang dan evaluasi kinerja industri.",
  },
  {
    name: "Pelaporan Gratifikasi",
    category: "integritas",
    icon: "fas fa-shield-halved",
    to: "/not-found",
    badge: "Integritas",
    desc: "Komitmen anti-korupsi demi mewujudkan zona integritas sekolah bersih.",
  },
  {
    name: "Benturan Kepentingan",
    category: "integritas",
    icon: "fas fa-scale-balanced",
    to: "/not-found",
    badge: "Good Gov",
    desc: "Pengelolaan etika dan transparansi pelayanan administrasi pendidikan.",
  },
  {
    name: "Whistle Blowing System",
    category: "integritas",
    icon: "fas fa-bullhorn",
    to: "/not-found",
    badge: "WBS",
    desc: "Layanan pengaduan pelanggaran secara rahasia, aman, dan terlindungi.",
  },
];

const SIAP = () => {
  const [filter, setFilter] = useState("all");

  const filteredApps =
    filter === "all" ? appsData : appsData.filter((a) => a.category === filter);

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-12">
          <SectionTitle
            eyebrow="Portal Terpadu SMK GENUS"
            title="Sistem Integrasi"
            gradientText="Aplikasi (SIAP)"
            subtitle="Ekosistem digital terintegrasi yang memudahkan seluruh siswa, pendidik, orang tua, dan alumni mengakses layanan akademik, karier, dan transparansi publik."
          />

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8 p-1.5 rounded-full liquid-glass border border-white/15">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Semua Portal ({appsData.length})
            </button>
            <button
              onClick={() => setFilter("akademik")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "akademik"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Akademik & Siswa
            </button>
            <button
              onClick={() => setFilter("layanan")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "layanan"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Layanan & BKK
            </button>
            <button
              onClick={() => setFilter("integritas")}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                filter === "integritas"
                  ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                  : "text-slate-300 hover:text-white hover:bg-white/10"
              }`}
            >
              Zona Integritas
            </button>
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredApps.map((app, index) => (
            <Link
              key={index}
              to={app.to}
              className="liquid-glass-card liquid-sheen p-5 flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600/30 to-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-base shadow-inner group-hover:scale-110 group-hover:bg-cyan-500/30 transition-all duration-300">
                    <i className={app.icon}></i>
                  </div>
                  <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                    {app.badge}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {app.name}
                </h4>
                <p className="mt-1.5 text-xs text-slate-300/80 leading-relaxed line-clamp-2">
                  {app.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-cyan-400 font-semibold group-hover:text-cyan-300">
                <span>Buka Aplikasi</span>
                <i className="fas fa-arrow-up-right-from-square text-[10px] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SIAP;