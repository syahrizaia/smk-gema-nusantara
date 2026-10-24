import React, { useState } from "react";
import SectionTitle from "../Elements/SectionTitle";
import { dataGallery } from "../../service/data";

const galleryMeta = [
  {
    id: 1,
    title: "Bengkel Teaching Factory Otomotif",
    tag: "Praktik Kejuruan",
    src: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil2.jpg",
  },
  {
    id: 2,
    title: "Laboratorium Komputer & Simulasi Kantor",
    tag: "Fasilitas Modern",
    src: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil3.jpg",
  },
  {
    id: 3,
    title: "Aktivitas Kesiswaan & Kedisiplinan",
    tag: "Karakter Vokasi",
    src: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil5.jpg",
  },
  {
    id: 4,
    title: "Kunjungan Industri & Pelatihan MMKI",
    tag: "Kemitraan DUDI",
    src: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil41.jpg",
  },
  {
    id: 5,
    title: "Musashi Olympic Measuring Competition",
    tag: "Presisi Manufaktur",
    src: "https://smkgemanusantara.sch.id/wp-content/uploads/2025/10/School-Musashi-Olympic-2.0-Measuring-Competition-7-1024x1024.jpg",
  },
  {
    id: 6,
    title: "Gedung Pembelajaran & Kampus Terpadu",
    tag: "Infrastruktur",
    src: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/IMG_20220810_161211-scaled-1-2048x942.jpg",
  },
];

const Gallery = () => {
  const [activeImage, setActiveImage] = useState(null);

  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            eyebrow="Dokumentasi Visual"
            title="Galeri Aktivitas"
            gradientText="& Fasilitas Kampus"
            subtitle="Merekam dinamika proses belajar berbasis atmosfer industri nyata, kompetisi presisi, dan pembentukan karakter insan vokasi."
          />
        </div>

        {/* Bento Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryMeta.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="liquid-glass-card liquid-sheen group cursor-pointer overflow-hidden aspect-[4/3] relative flex flex-col justify-end"
            >
              <img
                src={item.src}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

              <div className="relative p-5 z-10 flex flex-col gap-1">
                <span className="liquid-badge text-[10px] !py-0.5 !px-2 w-fit mb-1 bg-slate-900/80">
                  {item.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center text-[11px] text-cyan-400 font-semibold mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Lihat Foto Penuh</span>
                  <i className="fas fa-expand ml-1.5 text-[10px]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
          onClick={() => setActiveImage(null)}
        >
          <div
            className="relative max-w-4xl w-full liquid-glass-elevated rounded-3xl p-4 border border-white/25 shadow-2xl flex flex-col gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-2 pt-1">
              <div>
                <span className="liquid-badge text-xs mr-2">{activeImage.tag}</span>
                <span className="text-sm font-bold text-white">{activeImage.title}</span>
              </div>
              <button
                onClick={() => setActiveImage(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="w-full max-h-[75vh] overflow-hidden rounded-2xl border border-white/10 flex items-center justify-center bg-black">
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;