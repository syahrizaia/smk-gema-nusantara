import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const infoTypes = [
  {
    category: "berkala",
    badge: "Wajib Berkala",
    title: "Informasi Berkala",
    desc: "Informasi yang wajib diperbarui dan dipublikasikan secara rutin minimal setiap semester atau tahun ajaran baru.",
    items: [
      { name: "Profil Lengkap Satuan Pendidikan & Legalitas NPSN", period: "Tahunan", format: "PDF / Web" },
      { name: "Rencana Kerja & Anggaran Sekolah (RKAS)", period: "Tahunan", format: "Ringkasan Eksekutif" },
      { name: "Laporan Akuntabilitas Kinerja Satuan Pendidikan", period: "Tahunan", format: "Dokumen Resmi" },
      { name: "Kalender Pendidikan & Jadwal Kegiatan Tahunan", period: "Semesteran", format: "Digital" },
      { name: "Penerimaan Peserta Didik Baru (PPDB) & Persyaratannya", period: "Tahunan", format: "Brosur & Web" },
    ],
  },
  {
    category: "sertamerta",
    badge: "Serta Merta",
    title: "Informasi Serta Merta",
    desc: "Informasi yang menyangkut keselamatan khalayak umum dan harus segera diumumkan tanpa penundaan.",
    items: [
      { name: "Prosedur Mitigasi Kedaruratan & K3 Lingkungan Bengkel TEFA", period: "Setiap Saat", format: "SOP K3" },
      { name: "Pemberitahuan Cuaca Ekstrem atau Banjir di Akses Jalan Cibarusah", period: "Insidental", format: "Broadcast" },
      { name: "Protokol Kesehatan & Kebijakan Khusus Satgas Sekolah", period: "Insidental", format: "Edaran Resmi" },
    ],
  },
  {
    category: "setiapsaat",
    badge: "Tersedia Setiap Saat",
    title: "Informasi Tersedia Setiap Saat",
    desc: "Informasi yang telah dikompilasi dan siap diakses kapan pun oleh pemohon informasi yang sah.",
    items: [
      { name: "Struktur Kurikulum Merdeka & Capaian Pembelajaran TKR/MP", period: "Tersedia", format: "Dokumen" },
      { name: "Daftar Kerjasama Industri Resmi (MoU MMKI & Musashi)", period: "Tersedia", format: "Salinan MoU" },
      { name: "Standar Operasional Prosedur (SOP) Layanan Tata Usaha", period: "Tersedia", format: "Buku Panduan" },
      { name: "Data Sarana Prasarana & Sertifikat Akreditasi 'A'", period: "Tersedia", format: "Sertifikat BAN-SM" },
    ],
  },
  {
    category: "dikecualikan",
    badge: "Dikecualikan (Rahasia)",
    title: "Informasi yang Dikecualikan",
    desc: "Informasi yang tidak dapat dibuka untuk umum berdasarkan uji konsekuensi Pasal 17 UU No. 14 Tahun 2008.",
    items: [
      { name: "Data Pribadi, NIK, dan Riwayat Medis Khusus Siswa / Guru", period: "Tertutup", format: "Dirahasiakan" },
      { name: "Bank Soal Asesmen dan Kunci Jawaban Ujian yang Belum Diujikan", period: "Tertutup", format: "Dokumen Rahasia" },
      { name: "Catatan Konseling Bimbingan Pribadi Siswa (BK)", period: "Tertutup", format: "Konfidensial" },
    ],
  },
];

const JenisInformasi = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all" ? infoTypes : infoTypes.filter((t) => t.category === activeTab);

  return (
    <PageLayout
      badge="KLASIFIKASI DOKUMEN PPID"
      badgeVariant="amber"
      title="Daftar & Jenis"
      gradientText="Informasi Publik"
      subtitle="Klasifikasi keterbukaan informasi publik SMK Gema Nusantara berdasarkan mandat Undang-Undang KIP No. 14 Tahun 2008."
      breadcrumbs={[
        { label: "Layanan", to: "/layanan" },
        { label: "Informasi Publik", to: "/layanan/informasi-publik" },
        { label: "Jenis Informasi" },
      ]}
    >
      <div className="flex flex-col gap-8 text-left">
        {/* Tab Filters */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full liquid-glass border border-white/15 w-fit">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "all"
                ? "bg-amber-500/30 text-amber-300 border border-amber-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Semua Kategori ({infoTypes.length})
          </button>
          <button
            onClick={() => setActiveTab("berkala")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "berkala"
                ? "bg-amber-500/30 text-amber-300 border border-amber-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Informasi Berkala
          </button>
          <button
            onClick={() => setActiveTab("sertamerta")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "sertamerta"
                ? "bg-amber-500/30 text-amber-300 border border-amber-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Serta Merta
          </button>
          <button
            onClick={() => setActiveTab("setiapsaat")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "setiapsaat"
                ? "bg-amber-500/30 text-amber-300 border border-amber-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Tersedia Setiap Saat
          </button>
          <button
            onClick={() => setActiveTab("dikecualikan")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              activeTab === "dikecualikan"
                ? "bg-amber-500/30 text-amber-300 border border-amber-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Dikecualikan
          </button>
        </div>

        {/* Categories Sections */}
        <div className="space-y-6">
          {filtered.map((cat, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-8 flex flex-col gap-5"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                <div>
                  <span className="liquid-badge-amber text-xs mb-1">
                    {cat.badge}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">{cat.desc}</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs sm:text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-cyan-400 font-semibold uppercase tracking-wider text-[11px]">
                      <th className="py-2.5 px-3">Nama Dokumen / Informasi</th>
                      <th className="py-2.5 px-3">Periode Publikasi</th>
                      <th className="py-2.5 px-3 text-right">Format / Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5 text-slate-200">
                    {cat.items.map((item, iIdx) => (
                      <tr key={iIdx} className="hover:bg-white/5 transition-colors">
                        <td className="py-3 px-3 font-medium flex items-center gap-2">
                          <i className="far fa-file-lines text-slate-400 text-xs"></i>
                          <span>{item.name}</span>
                        </td>
                        <td className="py-3 px-3 text-slate-400 text-xs">
                          {item.period}
                        </td>
                        <td className="py-3 px-3 text-right">
                          <span
                            className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                              item.format === "Dirahasiakan" || item.format === "Dokumen Rahasia"
                                ? "bg-red-500/20 text-red-300 border border-red-500/30"
                                : "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30"
                            }`}
                          >
                            {item.format}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default JenisInformasi;