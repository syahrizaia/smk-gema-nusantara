import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../Layouts/PageLayout";
import { dataPembelajaran } from "../../../service/data";

const learningPillars = [
  {
    title: "Kurikulum Terintegrasi",
    desc: "Perpaduan standar Kemendikbudristek, SKKNI level II/III, serta standar mutu manufaktur Mitsubishi & Musashi.",
    icon: "fas fa-layer-group",
    link: "/pembelajaran/kurikulum/struktur-kurikulum",
    badge: "Standar DUDI",
  },
  {
    title: "Teaching Factory (TEFA)",
    desc: "Pembelajaran berbasis produk dan jasa riil dengan atmosfer bengkel otomotif dan kantor modern sesungguhnya.",
    icon: "fas fa-industry",
    link: "/pembelajaran/fasilitas/fasilitas-laboratorium",
    badge: "Praktik Nyata",
  },
  {
    title: "Pendidikan Sistem Ganda",
    desc: "Pengalaman magang industri (Prakerin) terstruktur selama minimal 6 bulan di perusahaan mitra bersertifikat.",
    icon: "fas fa-handshake",
    link: "/lulusan/industri-mitra",
    badge: "Magang DUDI",
  },
  {
    title: "Jadwal & Kalender Akademik",
    desc: "Pengaturan jam belajar teori dan rotasi blok praktik bengkel yang teratur untuk kelas X, XI, dan XII.",
    icon: "fas fa-calendar-days",
    link: "/pembelajaran/kurikulum/jadwal-pembelajaran",
    badge: "Terjadwal",
  },
];

const Pembelajaran = () => {
  return (
    <PageLayout
      badge="KURIKULUM & AKADEMIK"
      badgeVariant="cyan"
      title="Pusat Pembelajaran"
      gradientText="& Vokasi Industri"
      subtitle="Menyelenggarakan sistem pendidikan kejuruan link-and-match dengan kurikulum terintegrasi, sarana teaching factory mutakhir, dan sertifikasi BNSP."
      breadcrumbs={[{ label: "Pembelajaran" }]}
    >
      <div className="flex flex-col gap-10 text-left">
        {/* Intro Hero Bento Card */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-12 border-cyan-500/30">
          <div className="flex items-center gap-2 mb-3">
            <span className="liquid-badge text-xs">MODEL PEMBELAJARAN</span>
            <span className="text-xs text-cyan-400 font-semibold">
              Pusat Keunggulan 2026
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
            Sinergi Kurikulum Nasional & Standar Industri Global
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Sejak tahun 2015, SMK Gema Nusantara berkomitmen menerapkan model <b>Teaching Factory (TEFA)</b> dan mulai tahun pelajaran 2018–2019 menyempurnakannya dengan <b>Sistem Ganda</b>. Siswa tidak hanya mempelajari teori di kelas ber-AC yang nyaman, namun secara intensif mengasah kompetensi teknis, mentalitas 5S (Seiri, Seiton, Seiso, Seiketsu, Shitsuke), dan kemampuan analitis di laboratorium berstandar industri.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {learningPillars.map((p, idx) => (
            <Link
              key={idx}
              to={p.link}
              className="liquid-glass-card liquid-sheen p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl group-hover:scale-110 transition-transform">
                    <i className={p.icon}></i>
                  </div>
                  <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                    {p.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                <span>Eksplorasi Detail</span>
                <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
              </div>
            </Link>
          ))}
        </div>

        {/* Curricular Scheme Showcase Card */}
        {dataPembelajaran?.dataImage?.map((item) => (
          <div
            key={item.id}
            className="liquid-glass-card p-6 sm:p-10 flex flex-col items-center text-center"
          >
            <div className="max-w-2xl mb-8">
              <span className="liquid-badge text-xs mb-2">INFOGRAFIS RESMI</span>
              <h3 className="text-2xl font-black text-white">
                Skema Kurikulum SMK Gema Nusantara
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Peta jalan pembelajaran terpadu antara pembekalan ilmu dasar kejuruan hingga penguasaan kompetensi spesialisasi di industri mitra.
              </p>
            </div>

            <div className="w-full max-w-4xl rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-white/5 p-3">
              <img
                src={item.src}
                alt="Skema Kurikulum SMK Gema Nusantara"
                className="w-full h-auto object-contain rounded-xl"
                loading="lazy"
              />
            </div>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Pembelajaran;