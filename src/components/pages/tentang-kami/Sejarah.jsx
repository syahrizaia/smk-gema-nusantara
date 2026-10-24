import React from "react";
import PageLayout from "../../Layouts/PageLayout";
import ThePrincipals from "../../Layouts/ThePrincipals";
import TotalNews from "../../Layouts/TotalNews";

const milestones = [
  {
    year: "2015",
    title: "Pendirian SMK Gema Nusantara",
    desc: "Berdiri di bawah naungan Yayasan Al-Fath Nusantara di Cibarusah, Kabupaten Bekasi, dengan konsentrasi keahlian Teknik Kendaraan Ringan dan Administrasi Perkantoran.",
    icon: "fas fa-flag",
  },
  {
    year: "2016",
    title: "Penerbitan Izin Operasional Resmi",
    desc: "Mendapatkan SK Izin Operasional resmi dari BPMPPT Kabupaten Bekasi Nomor 503.15/06/II/SK-SMK/BPMPPT/2016 untuk mencetak lulusan terampil siap kerja.",
    icon: "fas fa-certificate",
  },
  {
    year: "2018",
    title: "Penerapan Sistem Ganda & Teaching Factory",
    desc: "Mengembangkan model pembelajaran Sistem Ganda (Dual System) yang memadukan jam belajar di sekolah dengan pengalaman kerja nyata di industri manufaktur.",
    icon: "fas fa-industry",
  },
  {
    year: "2021",
    title: "Kemitraan Strategis PT MMKI & PT Musashi",
    desc: "Membuka Kelas Industri resmi bersama PT Mitsubishi Motors Krama Yudha Indonesia dan PT Musashi Auto Parts, menyelaraskan kurikulum dengan standar Jepang.",
    icon: "fas fa-handshake",
  },
  {
    year: "2024 - Kini",
    title: "SMKS Pusat Keunggulan & Prestasi Kaizen",
    desc: "Ditetapkan sebagai SMK Pusat Keunggulan, meraih juara di ajang Kaizen Contest MMKI, serta membuka jalur karier internasional melalui LPK Jepang.",
    icon: "fas fa-trophy",
  },
];

const Sejarah = () => {
  return (
    <PageLayout
      badge="HISTORI & PERJALANAN"
      badgeVariant="amber"
      title="Sejarah Singkat"
      gradientText="SMK Gema Nusantara"
      subtitle="Menelusuri jejak langkah perjalanan sejak tahun 2015 dalam membangun ekosistem vokasi bermutu tinggi hingga menjadi SMK Pusat Keunggulan di Kabupaten Bekasi."
      breadcrumbs={[
        { label: "Tentang Kami", to: "/tentang-kami" },
        { label: "Sejarah" },
      ]}
    >
      <div className="flex flex-col gap-12">
        {/* Main Heritage Card */}
        <div className="liquid-glass-card liquid-sheen p-8 sm:p-12 flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-xl bg-slate-900 flex-shrink-0">
            <img
              loading="lazy"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              src="https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/IMG_20220810_161211-scaled-1-2048x942.jpg"
              alt="Gedung Kampus SMK Gema Nusantara"
            />
          </div>

          <div className="flex-1 text-left">
            <span className="liquid-badge text-xs mb-3">
              YAYASAN AL-FATH NUSANTARA
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">
              Lahir dari Kebutuhan Nyata Dunia Industri
            </h2>
            <div className="space-y-4 text-slate-300 text-sm leading-relaxed">
              <p>
                SMK Gema Nusantara berdiri pada tahun 2015 di bawah naungan Yayasan Al-Fath Nusantara. Kehadiran sekolah ini dilatarbelakangi oleh tingginya kebutuhan masyarakat Bekasi dan kawasan industri Cikarang-Cibarusah akan pendidikan vokasi yang benar-benar relevan dengan kemajuan teknologi manufaktur otomotif dan manajemen perkantoran.
              </p>
              <p>
                Sejak awal berdirinya, SMK Gema Nusantara memegang moto <b>“Your Future Begins Here”</b> dengan komitmen mencetak lulusan berkarakter unggul, berdisiplin tinggi, dan siap bersaing di tingkat nasional maupun internasional.
              </p>
              <p>
                Dengan dukungan fasilitas laboratorium Teaching Factory yang terus diperbarui serta kemitraan resmi bersama raksasa industri seperti <b>Mitsubishi Motors Krama Yudha Indonesia (MMKI)</b> dan <b>PT Musashi Auto Parts</b>, sekolah ini telah meluluskan ribuan siswa yang terserap di berbagai sektor industri strategis.
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="liquid-glass-card p-8 sm:p-12">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="liquid-badge text-xs mb-2">MILESTONE</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Garis Waktu Perjalanan Vokasi
            </h3>
          </div>

          <div className="relative border-l-2 border-cyan-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative group text-left">
                {/* Node Orb */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-1.5 w-6 h-6 rounded-full bg-slate-900 border-2 border-cyan-400 flex items-center justify-center text-cyan-300 text-[10px] shadow-[0_0_12px_rgba(56,189,248,0.5)] group-hover:scale-125 transition-transform">
                  <i className={m.icon}></i>
                </div>

                <div className="liquid-glass p-6 rounded-2xl border border-white/15 group-hover:border-cyan-400/40 transition-colors">
                  <span className="text-xs font-black text-cyan-400 tracking-wider">
                    TAHUN {m.year}
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                    {m.title}
                  </h4>
                  <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <TotalNews />
        <ThePrincipals />
      </div>
    </PageLayout>
  );
};

export default Sejarah;