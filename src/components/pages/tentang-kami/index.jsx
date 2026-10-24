import React from "react";
import PageLayout from "../../Layouts/PageLayout";
import TotalNews from "../../Layouts/TotalNews";
import { dataProfil } from "../../../service/data";

const TentangKami = () => {
  return (
    <PageLayout
      badge="PROFIL RESMI"
      badgeVariant="default"
      title="Tentang Kami"
      gradientText="SMK Gema Nusantara"
      subtitle="Mengenal lebih dekat sejarah, ekosistem pembelajaran Teaching Factory, dan kemitraan industri manufaktur SMK Pusat Keunggulan di Kabupaten Bekasi."
      breadcrumbs={[{ label: "Tentang Kami" }]}
    >
      <div className="flex flex-col gap-10">
        {dataProfil.dataContent.map((item, index) => {
          const isVideo = item.media && item.media.includes("youtube.com");
          const embedUrl = isVideo
            ? item.media.replace("watch?v=", "embed/")
            : item.media;

          return (
            <div
              key={item.id}
              className="liquid-glass-card liquid-sheen p-6 sm:p-10 flex flex-col lg:flex-row gap-8 items-center"
            >
              <div className={`flex-1 text-left ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="liquid-badge text-[10px]">
                    BAGIAN 0{item.id}
                  </span>
                  {item.title && (
                    <span className="text-xs font-semibold text-cyan-400">
                      Standar Vokasi
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
                  {item.title || "Profil Sekolah Menengah Kejuruan Gema Nusantara"}
                </h2>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>

              {item.media && (
                <div
                  className={`w-full lg:w-5/12 flex-shrink-0 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="liquid-glass p-2 rounded-2xl border border-white/20 shadow-xl overflow-hidden aspect-video bg-slate-900">
                    {isVideo ? (
                      <iframe
                        className="w-full h-full rounded-xl"
                        src={embedUrl}
                        title={item.title || "Video Profil"}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    ) : (
                      <img
                        src={item.media}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-xl"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <TotalNews />
      </div>
    </PageLayout>
  );
};

export default TentangKami;