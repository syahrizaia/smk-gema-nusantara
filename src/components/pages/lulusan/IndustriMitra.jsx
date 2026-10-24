import React, { useState } from "react";
import PageLayout from "../../Layouts/PageLayout";

const industryPartners = [
  {
    id: 1,
    name: "PT Mitsubishi Motors Krama Yudha Indonesia (MMKI)",
    category: "Otomotif & Manufaktur",
    scope: "Kelas Industri, Kaizen Training, Kiken Yochi Contest & Rekrutmen",
    desc: "Kemitraan strategis tingkat manufaktur perakitan kendaraan kelas dunia meliputi transfer teknologi otomotif terkini, sertifikasi keselamatan kerja Jepang, serta prioritas rekrutmen lulusan TKR.",
    highlight: "Kelas Industri Resmi MMKI"
  },
  {
    id: 2,
    name: "PT Musashi Auto Parts Indonesia",
    category: "Otomotif & Manufaktur",
    scope: "Program Monozukuri, Praktik Presisi & Magang Kerja",
    desc: "Kolaborasi pembekalan kompetensi permesinan komponen transmisi presisi roda dua dan roda empat dengan standar kontrol kualitas Six Sigma industri otomotif.",
    highlight: "Mitra Prioritas QC"
  },
  {
    id: 3,
    name: "PT Astra International Tbk - Auto2000",
    category: "Otomotif & Manufaktur",
    scope: "PKL Siswa, On-the-Job Training & Penempatan Teknisi",
    desc: "Jejaring bengkel resmi Toyota terbesar di Indonesia sebagai tempat pelaksanaan PKL intensif bagi siswa berprestasi dengan fasilitas diagnostik komputer modern.",
    highlight: "Bengkel Resmi Modern"
  },
  {
    id: 4,
    name: "Bank BJB (Bank Pembangunan Daerah)",
    category: "Perkantoran & Bisnis",
    scope: "Simulasi Perbankan, Praktik Teller & Tata Kelola Keuangan",
    desc: "Mendukung kurikulum Manajemen Perkantoran dalam bidang transaksi keuangan, pelayanan nasabah prima, dan tata kelola kas kecil berbasis perbankan riil.",
    highlight: "Layanan Keuangan Prima"
  },
  {
    id: 5,
    name: "LPK Mitra Penempatan Jepang (IM Japan)",
    category: "Sertifikasi & Luar Negeri",
    scope: "Pelatihan Bahasa Jepang, Budaya Kerja & Penempatan Magang",
    desc: "Pemberian fasilitas intensif pembelajaran bahasa Jepang (N4/N3) dan seleksi fisik/teknis untuk program magang kerja resmi selama 3-5 tahun di industri manufaktur Jepang.",
    highlight: "Karier Global di Jepang"
  },
  {
    id: 6,
    name: "Badan Nasional Sertifikasi Profesi (BNSP) & LSP-P1",
    category: "Sertifikasi & Luar Negeri",
    scope: "Sertifikasi Kompetensi Terakreditasi Nasional",
    desc: "Badan penguji independen negara yang memberikan sertifikat lisensi Garuda kepada lulusan yang lulus uji skema kompetensi kejuruan Otomotif dan Perkantoran.",
    highlight: "Sertifikat Berstandar BNSP"
  },
  {
    id: 7,
    name: "PT Denso Indonesia",
    category: "Otomotif & Manufaktur",
    scope: "Teknologi Sistem Pendingin & Kelistrikan Mobil",
    desc: "Pemberian workshop berkala mengenai sistem AC mobil modern, alternator, starter, dan sensor manajemen mesin generasi terbaru.",
    highlight: "Spesialis Kelistrikan"
  },
  {
    id: 8,
    name: "Ikatan Notaris & Konsultan Legal Regional",
    category: "Perkantoran & Bisnis",
    scope: "Pengarsipan Dokumen Resmi, Administrasi Hukum & Korespondensi",
    desc: "Penempatan siswa Manajemen Perkantoran dalam pengelolaan berkas hukum, akta otentik, serta sistem digitalisasi berkas legal perkantoran modern.",
    highlight: "Administrasi Legal"
  },
  {
    id: 9,
    name: "PT Telkom Indonesia Regional",
    category: "Perkantoran & Bisnis",
    scope: "Infrastruktur Cloud, Customer Relationship & Office ERP",
    desc: "Penyediaan studi kasus tata kelola data pelanggan korporat dan integrasi sistem cloud workspace untuk efisiensi perkantoran modern.",
    highlight: "Digital Office Infrastructure"
  }
];

const IndustriMitra = () => {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const categories = ["Semua", "Otomotif & Manufaktur", "Perkantoran & Bisnis", "Sertifikasi & Luar Negeri"];

  const filtered = activeCategory === "Semua"
    ? industryPartners
    : industryPartners.filter(p => p.category === activeCategory);

  return (
    <PageLayout
      badge="Kolaborasi Vokasi"
      title="Industri Mitra & Kerja Sama Strategis"
      subtitle="Menghubungkan ruang kelas dengan lantai pabrik dan kantor modern melalui kemitraan berkelanjutan bersama puluhan korporasi multinasional dan institusi sertifikasi terpercaya."
      breadcrumbs={[
        { label: "Lulusan", to: "/lulusan" },
        { label: "Industri Mitra" }
      ]}
    >
      {/* Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-blue-400 mb-1 font-heading">50+</p>
          <p className="text-xs text-slate-300">Korporasi Mitra Terikat MoU</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-cyan-400 mb-1 font-heading">100%</p>
          <p className="text-xs text-slate-300">Siswa Tersalurkan PKL Industri</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-indigo-400 mb-1 font-heading">2</p>
          <p className="text-xs text-slate-300">Kelas Industri Khusus Binaan Pabrik</p>
        </div>
        <div className="liquid-card p-5 text-center">
          <p className="text-3xl font-extrabold text-emerald-400 mb-1 font-heading">Global</p>
          <p className="text-xs text-slate-300">Jalur Magang Resmi ke Jepang</p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? "bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 border border-blue-400/40"
                : "liquid-card text-slate-300 hover:text-white hover:border-white/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Partners Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="liquid-card p-6 flex flex-col justify-between group hover:border-blue-400/40 transition-all duration-300 relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-500/15 text-blue-300 border border-blue-400/30">
                  {item.category}
                </span>
                <span className="text-[11px] font-semibold text-emerald-400">
                  {item.highlight}
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                {item.name}
              </h3>

              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 mb-3">
                <p className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Bentuk Kerja Sama:</p>
                <p className="text-xs text-cyan-300 font-medium">{item.scope}</p>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Status: <strong className="text-emerald-400">MoU Aktif</strong></span>
              <span className="text-blue-400 font-semibold flex items-center gap-1">
                <span>Tersinkronisasi</span>
                <i className="fa-solid fa-check text-[11px]"></i>
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Partnership Program Bento Card */}
      <div className="liquid-card p-6 md:p-8 border-cyan-500/30 relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <span className="liquid-badge mb-2">Bagi Perusahaan & Industri</span>
            <h3 className="text-xl font-bold text-white font-heading mb-2">
              Ingin Menjalin Kemitraan dengan SMK Gema Nusantara?
            </h3>
            <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
              Kami membuka peluang kerja sama untuk penyelarasan kurikulum kejuruan, rekrutmen prioritas, program Praktik Kerja Lapangan (PKL), program CSR donasi alat praktik, hingga pembukaan Kelas Industri khusus.
            </p>
          </div>

          <div className="shrink-0">
            <a
              href="mailto:hubin@smkgemanusantara.sch.id"
              className="px-5 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-cyan-500/20 hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Hubungi Divisi Hubin (Kerja Sama)</span>
              <i className="fa-solid fa-arrow-right text-[11px]"></i>
            </a>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default IndustriMitra;