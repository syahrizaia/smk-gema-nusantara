import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";

const staffList = [
  {
    name: "Gumilang Agung Laksono, S.E.",
    role: "Kepala Sekolah & Pembina Manajemen",
    dept: "Pimpinan",
    category: "pimpinan",
    edu: "S1 Ekonomi Manajemen",
    cert: "Sertifikasi Kepala Sekolah & Penggerak Vokasi",
    icon: "fas fa-user-tie",
  },
  {
    name: "Bambang Sudarsono, S.T., M.Pd.",
    role: "Waka Kurikulum & Guru Produktif TKR",
    dept: "Teknik Kendaraan Ringan",
    category: "tkr",
    edu: "S2 Pendidikan Kejuruan, S1 Teknik Mesin",
    cert: "Asesor BNSP & Master Trainer MMKI",
    icon: "fas fa-wrench",
  },
  {
    name: "Sri Wahyuni, S.Pd., M.M.",
    role: "Kaprog Manajemen Perkantoran",
    dept: "Manajemen Perkantoran",
    category: "mp",
    edu: "S2 Manajemen, S1 Pendidikan Administrasi",
    cert: "Asesor Kompetensi LSP P-1 Administrasi",
    icon: "fas fa-building",
  },
  {
    name: "Agus Pratama, S.T.",
    role: "Instruktur Bengkel TEFA & Kelistrikan",
    dept: "Teknik Kendaraan Ringan",
    category: "tkr",
    edu: "S1 Teknik Otomotif",
    cert: "Kaizen Certified PT Mitsubishi Motors",
    icon: "fas fa-car",
  },
  {
    name: "Dewi Larasati Indah Purnama, S.Kom.",
    role: "Operator Dapodik & Guru Komputer",
    dept: "Tenaga Kependidikan & IT",
    category: "tendik",
    edu: "S1 Sistem Informasi",
    cert: "Sertifikasi Administrator Database Kemendikbud",
    icon: "fas fa-laptop-code",
  },
  {
    name: "Drs. H. Mulyadi",
    role: "Guru Bahasa Indonesia & Pembina Literasi",
    dept: "Muatan Umum (Normatif)",
    category: "umum",
    edu: "S1 Pendidikan Bahasa & Sastra Indonesia",
    cert: "Guru Penggerak Nasional",
    icon: "fas fa-book-open",
  },
  {
    name: "Nurhasanah, S.Pd.",
    role: "Guru Bahasa Inggris Komunikasi Bisnis",
    dept: "Muatan Umum & LPK Jepang",
    category: "umum",
    edu: "S1 Pendidikan Bahasa Inggris",
    cert: "TOEIC Certified Trainer & JLPT N3",
    icon: "fas fa-globe",
  },
  {
    name: "Hendra Wijaya, S.Pd.",
    role: "Waka Kesiswaan & Pembina Paskibra",
    dept: "Kesiswaan & Karakter",
    category: "tendik",
    edu: "S1 Pendidikan Jasmani & Kesehatan",
    cert: "Instruktur Bela Negara Kodim",
    icon: "fas fa-medal",
  },
];

const ProfilSDM = () => {
  const [filter, setFilter] = useState("all");

  const filteredStaff =
    filter === "all" ? staffList : staffList.filter((s) => s.category === filter);

  return (
    <PageLayout
      badge="TENAGA PENDIDIK & KEPENDIDIKAN"
      badgeVariant="cyan"
      title="Profil Sumber Daya"
      gradientText="Manusia (SDM)"
      subtitle="Jajaran dewan guru, instruktur industri, dan tenaga kependidikan berdedikasi tinggi yang mengantarkan siswa meraih prestasi puncak."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "SDM", to: "/pembelajaran" },
        { label: "Profil SDM" },
      ]}
    >
      <div className="flex flex-col gap-8 text-left">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full liquid-glass border border-white/15 w-fit">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === "all"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Semua SDM ({staffList.length})
          </button>
          <button
            onClick={() => setFilter("tkr")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === "tkr"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Guru Produktif TKR
          </button>
          <button
            onClick={() => setFilter("mp")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === "mp"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Guru Produktif MP
          </button>
          <button
            onClick={() => setFilter("umum")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === "umum"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Guru Muatan Umum
          </button>
          <button
            onClick={() => setFilter("tendik")}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
              filter === "tendik"
                ? "bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 shadow-sm"
                : "text-slate-300 hover:text-white"
            }`}
          >
            Tenaga Kependidikan
          </button>
        </div>

        {/* Staff Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStaff.map((staff, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={staff.icon}></i>
                  </div>
                  <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                    {staff.dept}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {staff.name}
                </h3>
                <p className="text-xs text-cyan-400 font-semibold mt-1">
                  {staff.role}
                </p>

                <div className="mt-4 pt-3 border-t border-white/10 space-y-1.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <i className="fas fa-graduation-cap text-cyan-400 text-[10px]"></i>
                    <span className="line-clamp-1">{staff.edu}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <i className="fas fa-certificate text-amber-400 text-[10px]"></i>
                    <span className="line-clamp-1 text-slate-300/80">{staff.cert}</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center text-xs text-slate-400">
                <i className="fas fa-circle-check text-cyan-400 mr-2 text-[10px]"></i>
                <span>Tersertifikasi Pendidik</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default ProfilSDM;