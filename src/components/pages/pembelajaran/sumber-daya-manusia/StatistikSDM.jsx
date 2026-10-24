import React, { useState } from "react";
import PageLayout from "../../../Layouts/PageLayout";
import { dataStatistikSDM } from "../../../../service/data";

const sdmKpis = [
  { label: "Total Pendidik & Tendik", val: "65+", sub: "Dosen tamu, guru tetap & instruktur", icon: "fas fa-users" },
  { label: "Kualifikasi S1 & S2", val: "100%", sub: "Lulusan PTN/PTS terakreditasi unggul", icon: "fas fa-user-graduate" },
  { label: "Asesor Berlisensi BNSP", val: "18", sub: "Penguji resmi kompetensi kejuruan", icon: "fas fa-stamp" },
  { label: "Instruktur Certified MMKI", val: "12", sub: "Master trainer Kaizen & otomotif", icon: "fas fa-award" },
];

const StatistikSDM = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <PageLayout
      badge="DATA & DEMOGRAFI"
      badgeVariant="cyan"
      title="Statistik SDM"
      gradientText="Pendidik & Tenaga Kependidikan"
      subtitle="Gambaran komprehensif profil kompetensi, kualifikasi akademis, dan sertifikasi industri tenaga pengajar SMK Gema Nusantara."
      breadcrumbs={[
        { label: "Pembelajaran", to: "/pembelajaran" },
        { label: "SDM", to: "/pembelajaran" },
        { label: "Statistik SDM" },
      ]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* KPI Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {sdmKpis.map((kpi, idx) => (
            <div
              key={idx}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-400">{kpi.label}</span>
                <i className={`${kpi.icon} text-cyan-400 text-lg`}></i>
              </div>
              <div>
                <span className="text-3xl font-black text-white">{kpi.val}</span>
                <p className="text-xs text-slate-300/80 mt-1">{kpi.sub}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Statistical Infographics Grid */}
        <div className="liquid-glass-card p-8 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="liquid-badge text-xs mb-2">DIAGRAM STATISTIK RESMI</span>
            <h3 className="text-2xl font-black text-white">
              Infografis Distribusi Jabatan & Kompetensi SDM
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 mt-2">
              Klik gambar untuk melihat rincian grafik pembagian tugas, masa kerja, dan sertifikasi keahlian.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataStatistikSDM.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedImg(item.image)}
                className="liquid-glass rounded-2xl overflow-hidden border border-white/15 p-2 shadow-xl cursor-pointer group relative bg-slate-900"
              >
                <img
                  loading="lazy"
                  className="w-full h-auto object-cover rounded-xl group-hover:scale-102 transition-transform duration-500"
                  src={item.image}
                  alt="Infografis Statistik SDM"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-2xl">
                  <span className="liquid-btn-primary !text-xs !py-2 !px-4 pointer-events-none">
                    <i className="fas fa-search-plus mr-1.5"></i> Perbesar Gambar
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal Zoom */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-200"
          onClick={() => setSelectedImg(null)}
        >
          <div
            className="relative max-w-4xl w-full liquid-glass-elevated rounded-3xl p-4 border border-white/20 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-3 px-2">
              <span className="text-sm font-bold text-white">Diagram Statistik SDM</span>
              <button
                onClick={() => setSelectedImg(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="w-full max-h-[80vh] overflow-auto rounded-xl bg-white p-2">
              <img src={selectedImg} alt="Statistik Full" className="w-full h-auto" />
            </div>
          </div>
        </div>
      )}
    </PageLayout>
  );
};

export default StatistikSDM;