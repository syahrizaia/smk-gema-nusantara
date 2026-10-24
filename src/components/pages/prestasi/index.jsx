import React, { useState } from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../Layouts/PageLayout";
import { dataPrestasi } from "../../../service/data";

const achievementHighlights = [
  {
    title: "Juara Kaizen Contest MMKI 2024",
    field: "Teknik Otomotif & Manufaktur",
    year: "2024",
    org: "PT Mitsubishi Motors Krama Yudha Indonesia",
    badge: "Tingkat Industri",
    icon: "fas fa-trophy",
  },
  {
    title: "Akreditasi 'A' Unggul BAN-SM",
    field: "Kelayakan Satuan Pendidikan",
    year: "2023",
    org: "Badan Akreditasi Nasional Sekolah/Madrasah",
    badge: "Nasional",
    icon: "fas fa-certificate",
  },
  {
    title: "School Musashi Olympic 2.0 Champion",
    field: "Presisi Alat Ukur Mikrometer",
    year: "2025",
    org: "PT Musashi Auto Parts Indonesia",
    badge: "Presisi Vokasi",
    icon: "fas fa-medal",
  },
  {
    title: "Keterserapan Lulusan Industri 70%+",
    field: "Daya Serap Kerja Lulusan",
    year: "2024",
    org: "Dunia Usaha & Dunia Industri Mitra",
    badge: "Bursa Kerja",
    icon: "fas fa-briefcase",
  },
];

const Prestasi = () => {
  const [search, setSearch] = useState("");

  const filteredData = dataPrestasi.tableBody.filter((item) =>
    item.achievementsAchieved.toLowerCase().includes(search.toLowerCase()) ||
    item.year.includes(search)
  );

  return (
    <PageLayout
      badge="REKAM JEJAK KEUNGGULAN"
      badgeVariant="amber"
      title="Prestasi & Penghargaan"
      gradientText="SMK Gema Nusantara"
      subtitle="Bukti dedikasi, kerja keras, dan mutu kejuruan berstandar tinggi yang diraih sekolah, tenaga pendidik, serta siswa di berbagai kompetisi industri dan akademis."
      breadcrumbs={[{ label: "Prestasi" }]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Highlight Trophy Bento Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementHighlights.map((hl, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between group border-amber-500/25"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-400/30 flex items-center justify-center text-amber-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={hl.icon}></i>
                  </div>
                  <span className="liquid-badge-amber text-[10px] !py-0.5 !px-2">
                    {hl.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                  {hl.title}
                </h3>
                <p className="mt-1 text-xs text-cyan-300/90 font-medium">
                  {hl.field}
                </p>
                <p className="mt-2 text-xs text-slate-300/80">
                  {hl.org}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                <span>Tahun Raihan</span>
                <span className="text-amber-400 font-bold">{hl.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Subpage Navigation Pills */}
        <div className="liquid-glass p-3 rounded-2xl border border-white/15 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/prestasi/prestasi-sekolah"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <i className="fas fa-school text-amber-400"></i>
            <span>Prestasi Sekolah</span>
          </Link>
          <span className="text-white/20">•</span>
          <Link
            to="/prestasi/prestasi-guru"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <i className="fas fa-chalkboard-user text-cyan-400"></i>
            <span>Prestasi Guru</span>
          </Link>
          <span className="text-white/20">•</span>
          <Link
            to="/prestasi/prestasi-siswa"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <i className="fas fa-medal text-amber-400"></i>
            <span>Prestasi Siswa</span>
          </Link>
          <span className="text-white/20">•</span>
          <Link
            to="/prestasi/bintang-belajar"
            className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            <i className="fas fa-star text-amber-300"></i>
            <span>Bintang Belajar</span>
          </Link>
        </div>

        {/* Main Achievement Table Card */}
        <div className="liquid-glass-card p-6 sm:p-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="liquid-badge text-xs mb-1">DATA RESMI</span>
              <h3 className="text-2xl font-black text-white">
                Daftar Prestasi & Capaian Lembaga
              </h3>
            </div>

            <div className="w-full sm:w-72 relative">
              <i className="fas fa-search absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
              <input
                type="text"
                placeholder="Cari prestasi / tahun..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="liquid-input !pl-9 !text-xs !py-2"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/15 text-xs text-amber-400 font-semibold uppercase tracking-wider">
                  <th className="py-3 px-4 w-16 text-center">No</th>
                  <th className="py-3 px-4">Prestasi yang Diraih</th>
                  <th className="py-3 px-4 text-right w-28">Tahun</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-slate-200">
                {filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-white/5 transition-colors">
                    <td className="py-3.5 px-4 text-center font-bold text-slate-400 text-xs">
                      {item.no}
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-white flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg bg-amber-500/20 text-amber-300 flex items-center justify-center text-xs flex-shrink-0">
                        <i className="fas fa-award"></i>
                      </div>
                      <span>{item.achievementsAchieved}</span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <span className="liquid-badge-amber text-[10px] !py-0.5 !px-2.5 font-bold">
                        {item.year}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Prestasi;