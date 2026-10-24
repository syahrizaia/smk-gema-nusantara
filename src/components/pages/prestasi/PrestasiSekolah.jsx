import React from "react";
import PageLayout from "../../Layouts/PageLayout";

const schoolAwards = [
  {
    title: "Akreditasi 'A' Unggul dari BAN-SM",
    year: "2023 - 2028",
    issuer: "Badan Akreditasi Nasional Sekolah/Madrasah",
    icon: "fas fa-award",
    badge: "Nasional",
    desc: "Meraih predikat Akreditasi A dengan nilai sangat memuaskan, membuktikan pemenuhan 8 Standar Nasional Pendidikan secara paripurna.",
  },
  {
    title: "Penetapan SMK Pusat Keunggulan (Center of Excellence)",
    year: "2024",
    issuer: "Ditjen Pendidikan Vokasi Kemendikbudristek",
    icon: "fas fa-star",
    badge: "Pusat Keunggulan",
    desc: "Terpilih sebagai SMK pelaksana program SMK Pusat Keunggulan skema pemadanan industri untuk konsentrasi Teknik Otomotif.",
  },
  {
    title: "Mitra Pendidikan Vokasi Terbaik PT MMKI",
    year: "2024",
    issuer: "PT Mitsubishi Motors Krama Yudha Indonesia",
    icon: "fas fa-handshake-angle",
    badge: "Mitra Industri",
    desc: "Penghargaan atas komitmen tinggi menyelaraskan kurikulum kelas industri dan kedisiplinan 5S manufaktur otomotif Jepang.",
  },
  {
    title: "Sekolah Percontohan Teaching Factory (TEFA)",
    year: "2023",
    issuer: "Dinas Pendidikan Provinsi Jawa Barat",
    icon: "fas fa-industry",
    badge: "Regional",
    desc: "Menjadi rujukan bagi sekolah-sekolah vokasi di Jawa Barat dalam tata kelola bengkel TEFA yang produktif dan mandiri.",
  },
  {
    title: "Sertifikasi Lembaga Sertifikasi Profesi (LSP P-1)",
    year: "2022 - Kini",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
    icon: "fas fa-stamp",
    badge: "Lisensi BNSP",
    desc: "Lisensi resmi untuk menguji dan menerbitkan sertifikat kompetensi berlogo Garuda bagi lulusan kejuruan.",
  },
];

const PrestasiSekolah = () => {
  return (
    <PageLayout
      badge="PENGHARGAAN LEMBAGA"
      badgeVariant="amber"
      title="Prestasi & Akreditasi"
      gradientText="Tingkat Sekolah"
      subtitle="Pengakuan resmi dari pemerintah, badan akreditasi nasional, dan mitra industri global atas tata kelola mutu vokasi SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Prestasi", to: "/prestasi" },
        { label: "Prestasi Sekolah" },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {schoolAwards.map((item, idx) => (
          <div
            key={idx}
            className="liquid-glass-card liquid-sheen p-8 flex flex-col justify-between group border-amber-500/20"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 text-xl group-hover:scale-110 transition-transform">
                  <i className={item.icon}></i>
                </div>
                <span className="liquid-badge-amber text-xs font-bold">
                  {item.year}
                </span>
              </div>

              <span className="liquid-badge text-[10px] !py-0.5 !px-2 mb-2">
                {item.badge}
              </span>

              <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors mt-2">
                {item.title}
              </h3>
              <p className="text-xs text-cyan-300 font-semibold mt-1">
                Pemberi Penghargaan: {item.issuer}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
              <span>Status: Berlaku & Aktif</span>
              <span className="text-amber-400 font-semibold flex items-center gap-1">
                <i className="fas fa-check-circle text-[10px]"></i> Terverifikasi
              </span>
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default PrestasiSekolah;