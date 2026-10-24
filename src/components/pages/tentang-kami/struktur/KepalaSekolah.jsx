import React from "react";
import PageLayout from "../../../Layouts/PageLayout";
import { dataHeadmaster } from "../../../../service/data";

const KepalaSekolah = () => {
  const headmaster = dataHeadmaster.find((item) => item.id === 2);

  return (
    <PageLayout
      badge="PIMPINAN SEKOLAH"
      badgeVariant="cyan"
      title="Profil Kepala Sekolah"
      gradientText="SMK Gema Nusantara"
      subtitle="Mengenal visi kepemimpinan, dedikasi, dan arah strategis pengembangan pendidikan vokasi berbasis industri."
      breadcrumbs={[
        { label: "Tentang Kami", to: "/tentang-kami" },
        { label: "Struktur", to: "/tentang-kami/struktur/struktur-organisasi" },
        { label: "Kepala Sekolah" },
      ]}
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start text-left">
        {/* Profile Sidebar Card */}
        <div className="w-full lg:w-4/12 liquid-glass-card liquid-sheen p-8 flex flex-col items-center text-center flex-shrink-0">
          <div className="relative w-44 h-44 rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-2xl mb-6 bg-slate-800">
            <img
              loading="lazy"
              src={headmaster.photo}
              alt={headmaster.name}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent" />
          </div>

          <span className="liquid-badge text-xs mb-2">KEPALA SEKOLAH</span>
          <h2 className="text-xl sm:text-2xl font-black text-white">
            {headmaster.name}
          </h2>
          <p className="text-xs text-cyan-300 font-medium mt-1">
            {headmaster.position}
          </p>

          <div className="liquid-glass p-4 rounded-2xl w-full mt-6 border border-white/10 text-xs italic text-slate-300">
            "{headmaster.motto}"
          </div>

          <div className="flex items-center justify-center gap-3 mt-6 pt-6 border-t border-white/10 w-full">
            {headmaster.socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-cyan-500/30 hover:text-cyan-300 text-slate-300 flex items-center justify-center transition-all text-sm"
              >
                <i className={social.icon}></i>
              </a>
            ))}
          </div>
        </div>

        {/* Content Details */}
        <div className="w-full lg:w-8/12 flex flex-col gap-6">
          {headmaster.content.map((section, idx) => (
            <div key={idx} className="liquid-glass-card liquid-sheen p-8">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                <h3 className="text-xl font-bold text-white">
                  {section.title}
                </h3>
              </div>

              {Array.isArray(section.description) ? (
                <ul className="space-y-3">
                  {section.description.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <i className="fas fa-check-circle text-cyan-400 text-xs mt-1 flex-shrink-0"></i>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {section.description}
                </p>
              )}
            </div>
          ))}

          {/* Quick Leadership Highlights Card */}
          <div className="liquid-glass p-6 rounded-2xl border border-white/15 flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <i className="fas fa-trophy text-amber-400"></i>
              <span>Fokus Strategis: <b>Center of Excellence Vokasi Otomotif & Perkantoran</b></span>
            </div>
            <span className="liquid-badge-amber text-[10px]">
              Kaizen Winner MMKI
            </span>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default KepalaSekolah;