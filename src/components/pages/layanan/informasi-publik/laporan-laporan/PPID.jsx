import React from "react";
import PageLayout from "../../../../Layouts/PageLayout";

const ppidMetrics = [
  { label: "Total Permohonan Informasi Masuk", val: "48 Permohonan", sub: "Tahun Anggaran 2024" },
  { label: "Permohonan Dikabulkan Sepenuhnya", val: "100%", sub: "Semua data publik tersalurkan" },
  { label: "Sengketa Informasi Publik", val: "0 Kasus", sub: "Nol sengketa di Komisi Informasi" },
  { label: "Rata-Rata Waktu Penyelesaian", val: "2.3 Hari", sub: "Jauh di bawah batas 10 hari UU KIP" },
];

const annualPpidReports = [
  {
    year: "2024",
    title: "Laporan Tahunan Pelaksanaan Keterbukaan Informasi Publik PPID Tahun 2024",
    date: "10 Januari 2025",
    pages: "42 Halaman",
    size: "2.4 MB",
    summary: "Berisi rekapitulasi buku register permohonan informasi, daftar uji konsekuensi informasi yang dikecualikan, serta laporan evaluasi keterbukaan sekolah.",
  },
  {
    year: "2023",
    title: "Laporan Tahunan Pelaksanaan Keterbukaan Informasi Publik PPID Tahun 2023",
    date: "12 Januari 2024",
    pages: "36 Halaman",
    size: "2.1 MB",
    summary: "Mendokumentasikan integrasi sistem informasi digital sekolah dan peningkatan partisipasi wali murid serta industri dalam pengawasan mutu.",
  },
  {
    year: "2022",
    title: "Laporan Tahunan Pelaksanaan Keterbukaan Informasi Publik PPID Tahun 2022",
    date: "15 Januari 2023",
    pages: "30 Halaman",
    size: "1.9 MB",
    summary: "Awal pembentukan unit layanan PPID mandiri SMK Gema Nusantara pasca pandemi dan digitalisasi arsip kejuruan.",
  },
];

const PPID = () => {
  return (
    <PageLayout
      badge="AKUNTABILITAS PUBLIK"
      badgeVariant="amber"
      title="Laporan Kinerja"
      gradientText="PPID Sekolah"
      subtitle="Publikasi pertanggungjawaban Pejabat Pengelola Informasi dan Dokumentasi (PPID) SMK Gema Nusantara sesuai standar Komisi Informasi Publik."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik", to: "/layanan/informasi-publik" },
        { label: "Laporan", to: "/layanan/informasi-publik/laporan-laporan" },
        { label: "PPID" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ppidMetrics.map((m, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between"
            >
              <span className="text-xs font-semibold text-slate-400 mb-2">{m.label}</span>
              <div>
                <span className="text-3xl font-black text-amber-300">{m.val}</span>
                <p className="text-xs text-slate-300/80 mt-1">{m.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Annual PPID Archives List */}
        <div className="space-y-6">
          {annualPpidReports.map((rep) => (
            <div
              key={rep.year}
              className="liquid-glass-card liquid-sheen p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="liquid-badge-amber text-xs font-bold">
                    TAHUN {rep.year}
                  </span>
                  <span className="text-xs text-slate-400">Rilis: {rep.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {rep.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-3">
                  {rep.summary}
                </p>
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span><i className="far fa-file-pdf mr-1 text-red-400"></i> {rep.pages}</span>
                  <span>•</span>
                  <span>Ukuran: {rep.size}</span>
                </div>
              </div>

              <button
                onClick={() => alert(`Mengunduh dokumen PPID: ${rep.title}`)}
                className="liquid-btn-primary !text-xs !py-2.5 !px-5 whitespace-nowrap flex-shrink-0"
              >
                <i className="fas fa-download mr-1.5"></i>
                <span>Unduh PDF</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default PPID;