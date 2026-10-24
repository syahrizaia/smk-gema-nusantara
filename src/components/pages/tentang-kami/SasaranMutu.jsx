import React from "react";
import PageLayout from "../../Layouts/PageLayout";
import { dataSasaranMutu } from "../../../service/data";

const targetsMeta = [
  { target: "90%+", metric: "Kelulusan Tepat Waktu", icon: "fas fa-graduation-cap" },
  { target: "70%+", metric: "Terserap Industri Mitra", icon: "fas fa-briefcase" },
  { target: "100%", metric: "Guru Bersertifikat Pelatihan", icon: "fas fa-chalkboard-user" },
  { target: "+2 Mitra", metric: "Kerjasama DUDI / Tahun", icon: "fas fa-handshake" },
  { target: "85%+", metric: "Indeks Kepuasan Layanan", icon: "fas fa-smile" },
  { target: "Bertahap", metric: "Digitalisasi TEFA", icon: "fas fa-microchip" },
];

const SasaranMutu = () => {
  return (
    <PageLayout
      badge="STANDAR MUTU ISO"
      badgeVariant="emerald"
      title="Sasaran Mutu"
      gradientText="SMK Gema Nusantara"
      subtitle="Parameter terukur dan komitmen penjaminan mutu pendidikan vokasi dalam mencapai visi, misi, dan kepuasan pemangku kepentingan industri."
      breadcrumbs={[
        { label: "Tentang Kami", to: "/tentang-kami" },
        { label: "Sasaran Mutu" },
      ]}
    >
      <div className="flex flex-col gap-10">
        {/* Quality Policy Intro Card */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-10 border-emerald-500/30 text-left">
          <div className="flex items-center gap-2 mb-3">
            <span className="liquid-badge-emerald text-xs">
              <i className="fas fa-check-double mr-1"></i>
              SISTEM MANAJEMEN MUTU
            </span>
            <span className="text-xs text-slate-400">ISO & Akreditasi A</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Komitmen Peningkatan Berkelanjutan (Continuous Improvement)
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Dalam rangka menjamin mutu pendidikan dan mencapai visi serta misi sekolah secara konsisten, SMK Gema Nusantara menetapkan sasaran mutu yang terukur, dievaluasi secara berkala, dan diaudit melalui mekanisme penjaminan mutu internal dan eksternal.
          </p>
        </div>

        {/* 6 Targets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dataSasaranMutu.map((item, index) => {
            const meta = targetsMeta[index % targetsMeta.length];

            return (
              <div
                key={item.id}
                className="liquid-glass-card liquid-sheen p-7 flex flex-col justify-between text-left group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300 text-xl group-hover:scale-110 transition-transform">
                      <i className={meta.icon}></i>
                    </div>
                    <span className="liquid-badge-emerald text-xs font-bold">
                      {meta.target}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-cyan-400 uppercase tracking-wider">
                    SASARAN 0{item.no} • {meta.metric}
                  </span>

                  <p className="mt-3 text-slate-200 text-sm leading-relaxed">
                    {item.content}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <span>Target Tahunan</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <i className="fas fa-circle-check text-[11px]"></i> Terstandarisasi
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
};

export default SasaranMutu;