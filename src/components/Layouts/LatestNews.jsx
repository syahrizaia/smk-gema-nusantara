import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../Elements/SectionTitle";
import { dataApp } from "../../service/data";

const newsItems = [
  {
    id: 1,
    title: "Prestasi Gemilang di Ajang Kaizen Contest MMKI & Kiken Yochi",
    date: "2025-02-15",
    category: "Prestasi Industri",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil41.jpg",
    snippet: "Siswa konsentrasi Teknik Kendaraan Ringan berhasil meraih predikat unggulan dalam kompetisi Kaizen efisiensi kerja yang diselenggarakan PT Mitsubishi Motors Krama Yudha Indonesia.",
  },
  {
    id: 2,
    title: "School Musashi Olympic 2.0 Measuring Competition Berlangsung Sukses",
    date: "2025-01-20",
    category: "Kompetisi Vokasi",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2025/10/School-Musashi-Olympic-2.0-Measuring-Competition-7-1024x1024.jpg",
    snippet: "Kerja sama strategis dengan PT Musashi Auto Parts melatih presisi pengukuran mikrometer siswa hingga standar mikron industri manufaktur Jepang.",
  },
  {
    id: 3,
    title: "Implementasi Teaching Factory & Sistem Ganda Baru Tahun Ajaran",
    date: "2025-01-10",
    category: "Kurikulum TEFA",
    image: "https://smkgemanusantara.sch.id/wp-content/uploads/2023/05/profil2.jpg",
    snippet: "Memadukan jam praktik langsung di bengkel industri dan kantor simulasi modern untuk memastikan lulusan siap kerja tanpa masa tunggu panjang.",
  },
];

const LatestNews = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center mb-16">
          <SectionTitle
            eyebrow="Keunggulan & Agenda"
            title="Kenapa Memilih"
            gradientText="SMK Gema Nusantara?"
            subtitle="Menyelenggarakan pendidikan vokasi link-and-match dengan kurikulum terintegrasi, fasilitas teaching factory, dan penempatan kerja nyata."
          />
        </div>

        {/* 4-Column Bento Feature Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Main Hero Bento Card */}
          <div className="liquid-glass-card liquid-sheen p-7 flex flex-col justify-between border-cyan-500/30 bg-gradient-to-br from-blue-900/40 via-slate-900/60 to-cyan-950/30 shadow-xl">
            <div>
              <span className="liquid-badge text-xs mb-4">
                <i className="fas fa-star text-amber-300 mr-1.5"></i>
                Nilai Utama
              </span>
              <h3 className="text-2xl font-black text-white leading-tight mt-2">
                Pusat Keunggulan Vokasi Masa Depan
              </h3>
              <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                Berdiri sejak 2015 di bawah Yayasan Al-Fath Nusantara. Memadukan standar industri Kemendikbud, SKKNI, dan DUDI internasional.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10">
              <Link
                to="/tentang-kami"
                className="liquid-btn-primary !w-full !text-xs !py-2.5 text-center"
              >
                <span>Pelajari Profil Kami</span>
                <i className="fas fa-arrow-right text-[10px]"></i>
              </Link>
            </div>
          </div>

          {/* 3 Pillar Cards from dataApp */}
          {dataApp.card.map((item, index) => {
            const icons = [
              "fas fa-book-open-reader",
              "fas fa-screwdriver-wrench",
              "fas fa-briefcase",
            ];
            const badges = ["Kurikulum DUDI", "Teaching Factory", "Karier Global"];

            return (
              <div
                key={index}
                className="liquid-glass-card liquid-sheen p-7 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl group-hover:scale-110 transition-transform">
                      <i className={icons[index % icons.length]}></i>
                    </div>
                    <span className="liquid-badge text-[10px]">
                      {badges[index % badges.length]}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                  <span>Standar Industri Teruji</span>
                  <i className="fas fa-check-circle ml-auto text-cyan-400"></i>
                </div>
              </div>
            );
          })}
        </div>

        {/* Latest News Feed Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div>
            <span className="liquid-badge text-xs mb-1">Kilas Berita</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Warta & Agenda Terbaru
            </h3>
          </div>
          <Link
            to="/tentang-kami/berita-terkini"
            className="text-xs sm:text-sm font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
          >
            <span>Lihat Semua Berita</span>
            <i className="fas fa-arrow-right text-xs"></i>
          </Link>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((news) => (
            <article
              key={news.id}
              className="liquid-glass-card liquid-sheen overflow-hidden flex flex-col group"
            >
              <div className="relative aspect-video w-full overflow-hidden bg-slate-800">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3">
                  <span className="liquid-badge text-[10px] !py-0.5 !px-2 bg-slate-900/70 backdrop-blur-md">
                    {news.category}
                  </span>
                </div>
                <div className="absolute bottom-3 right-3 text-[10px] text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded-full backdrop-blur-md">
                  {news.date}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors line-clamp-2">
                    {news.title}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-300 leading-relaxed line-clamp-3">
                    {news.snippet}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-cyan-400 font-semibold group-hover:text-cyan-300">
                  <span>Baca Selengkapnya</span>
                  <i className="fas fa-arrow-right text-[10px] group-hover:translate-x-1 transition-transform"></i>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;