import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../../../Layouts/PageLayout";

const reportsList = [
  {
    title: "Laporan Pelayanan Tata Usaha",
    desc: "Rekapitulasi berkas administrasi persuratan, mutasi siswa, penerbitan surat keterangan aktif, dan inventaris barang.",
    icon: "fas fa-folder-open",
    to: "/layanan/informasi-publik/laporan-laporan/tata-usaha",
    badge: "Administrasi",
    period: "Semesteran",
  },
  {
    title: "Laporan Respon Pelanggan",
    desc: "Dokumentasi rekapitulasi aspirasi masyarakat, survei kepuasan bulanan, dan tindak lanjut laporan pengaduan.",
    icon: "fas fa-comments",
    to: "/layanan/informasi-publik/laporan-laporan/respon-pelanggan",
    badge: "Feedback Publik",
    period: "Triwulan",
  },
  {
    title: "Laporan Akuntabilitas PPID",
    desc: "Laporan tahunan pengelolaan informasi publik, register pemohon informasi, sengketa, dan uji konsekuensi dokumen.",
    icon: "fas fa-file-shield",
    to: "/layanan/informasi-publik/laporan-laporan/ppid",
    badge: "KIP / PPID",
    period: "Tahunan",
  },
];

const LaporanLaporan = () => {
  return (
    <PageLayout
      badge="TRANSPARANSI KINERJA"
      badgeVariant="amber"
      title="Direktori Laporan"
      gradientText="& Akuntabilitas"
      subtitle="Arsip keterbukaan informasi dan pertanggungjawaban kinerja tata kelola pendidikan vokasi SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik", to: "/layanan/informasi-publik" },
        { label: "Laporan-Laporan" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Reports Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reportsList.map((rep, idx) => (
            <Link
              key={idx}
              to={rep.to}
              className="liquid-glass-card liquid-sheen p-8 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={rep.icon}></i>
                  </div>
                  <span className="liquid-badge-amber text-[10px]">
                    {rep.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {rep.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {rep.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-amber-400 font-semibold group-hover:text-amber-300">
                <span>Periode: {rep.period}</span>
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>

        {/* Accountability Statement Card */}
        <div className="liquid-glass p-8 rounded-3xl border border-white/15">
          <div className="flex items-center gap-3 mb-3">
            <i className="fas fa-certificate text-cyan-400 text-xl"></i>
            <h4 className="text-base font-bold text-white">
              Prinsip Good School Governance (GSG)
            </h4>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Seluruh laporan yang dipublikasikan telah diaudit oleh tim penjaminan mutu internal serta disahkan oleh Kepala Sekolah dan Yayasan Al-Fath Nusantara sebagai wujud pertanggungjawaban kepada masyarakat dan pemangku kepentingan pendidikan vokasi.
          </p>
        </div>
      </div>
    </PageLayout>
  );
};

export default LaporanLaporan;