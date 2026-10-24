import React from "react";
import { dataHeadmaster } from "../../service/data";
import SectionTitle from "../Elements/SectionTitle";

const ThePrincipals = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="mb-10 text-left">
        <SectionTitle
          align="left"
          eyebrow="Kepemimpinan Sekolah"
          title="Para Tokoh"
          gradientText="Kepala Sekolah"
          subtitle="Sosok pemimpin dedikatif yang meletakkan fondasi dan mengembangkan SMK Gema Nusantara menjadi pusat keunggulan vokasi."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {dataHeadmaster.map((item) => (
          <div
            key={item.id}
            className="liquid-glass-card liquid-sheen p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 group"
          >
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden border border-white/20 shadow-lg flex-shrink-0 bg-slate-800">
              <img
                loading="lazy"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                src={item.photo}
                alt={item.name}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div className="flex-1 flex flex-col justify-between text-left">
              <div>
                <span className="liquid-badge text-[10px] !py-0.5 !px-2 mb-2">
                  {item.position || "Pimpinan Sekolah"}
                </span>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.name}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {item.motto ? `"${item.motto}" — ` : ""}
                  {item.description}
                </p>
              </div>

              {item.socialMedia && (
                <div className="flex items-center gap-2 mt-4 pt-3 border-t border-white/10">
                  {item.socialMedia.map((social, sIdx) => (
                    <a
                      key={sIdx}
                      href={social.link}
                      target="_blank"
                      rel="noreferrer"
                      className="w-7 h-7 rounded-full bg-white/10 hover:bg-cyan-500/30 hover:text-cyan-300 text-slate-300 flex items-center justify-center transition-all text-xs"
                    >
                      <i className={social.icon}></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThePrincipals;