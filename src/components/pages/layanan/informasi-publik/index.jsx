import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../../Layouts/PageLayout";

const infoCards = [
  {
    title: "Permohonan Informasi Publik",
    desc: "Formulir digital resmi untuk mengajukan permohonan data dan dokumen publik sekolah secara transparan.",
    icon: "fas fa-file-lines",
    to: "/layanan/informasi-publik/permohonan-informasi-publik",
    badge: "Formulir Digital",
  },
  {
    title: "Daftar & Jenis Informasi",
    desc: "Klasifikasi informasi publik yang wajib disediakan secara berkala, serta merta, dan tersedia setiap saat.",
    icon: "fas fa-list-check",
    to: "/layanan/informasi-publik/jenis-informasi",
    badge: "Klasifikasi UU KIP",
  },
  {
    title: "Arsip Laporan Sekolah",
    desc: "Kumpulan laporan akuntabilitas kinerja mencakup laporan Tata Usaha, Respon Pelanggan, dan laporan tahunan PPID.",
    icon: "fas fa-folder-closed",
    to: "/layanan/informasi-publik/laporan-laporan",
    badge: "Akuntabilitas",
  },
  {
    title: "Survei Kepuasan Pelanggan",
    desc: "Partisipasi publik dalam mengevaluasi kualitas layanan pendidikan dan administrasi SMK Gema Nusantara.",
    icon: "fas fa-star-half-stroke",
    to: "/layanan/informasi-publik/survei-kepuasan-pelanggan",
    badge: "Indeks Kepuasan",
  },
];

const InformasiPublik = () => {
  return (
    <PageLayout
      badge="KETERBUKAAN INFORMASI PUBLIK"
      badgeVariant="amber"
      title="Informasi Publik"
      gradientText="& PPID Sekolah"
      subtitle="Menjamin hak masyarakat untuk memperoleh informasi publik secara transparan, akuntabel, dan bertanggung jawab sesuai amanat UU No. 14 Tahun 2008."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Maklumat Pelayanan Card */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-10 border-amber-500/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="liquid-badge-amber text-xs">MAKLUMAT PELAYANAN PPID</span>
            <span className="text-xs text-slate-400">SMK Pusat Keunggulan</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-3">
            "Dengan ini kami menyatakan sanggup menyelenggarakan pelayanan informasi publik sesuai standar operasional yang telah ditetapkan."
          </h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            Pejabat Pengelola Informasi dan Dokumentasi (PPID) SMK Gema Nusantara berkomitmen melayani setiap pemohon informasi dengan prinsip cepat, tepat waktu, biaya proporsional, dan cara sederhana demi mewujudkan tata kelola satuan pendidikan yang bersih dan bebas dari gratifikasi.
          </p>
        </div>

        {/* 4 Navigation Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {infoCards.map((card, idx) => (
            <Link
              key={idx}
              to={card.to}
              className="liquid-glass-card liquid-sheen p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={card.icon}></i>
                  </div>
                  <span className="liquid-badge-amber text-[10px]">
                    {card.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {card.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {card.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
                <span>Akses Halaman</span>
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default InformasiPublik;