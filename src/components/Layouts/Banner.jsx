import React, { useState } from "react";
import { Link } from "react-router-dom";
import SmkGemaNusantaraScene from "../3d/SmkGemaNusantaraScene";

const Banner = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 lg:pt-32 lg:pb-24 flex items-center justify-center overflow-hidden">
      {/* Background Subtle Ambience */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-950/20 via-transparent to-slate-950/80 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Liquid Glass Hero Card */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="liquid-badge text-xs">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                SMKS PUSAT KEUNGGULAN
              </span>
              <span className="liquid-badge-amber text-xs">
                <i className="fas fa-certificate text-[11px] mr-1"></i>
                Akreditasi "A" BAN-SM
              </span>
              <span className="liquid-badge-cyan text-xs hidden sm:inline-flex">
                <i className="fas fa-handshake text-[11px] mr-1"></i>
                Kelas Industri MMKI
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
                SMK GEMA <br className="hidden sm:inline" />
                <span className="text-gradient-cyan">NUSANTARA</span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-cyan-200/90 mt-1">
                Mencetak Generasi Vokasi Unggul, Terampil & Berdaya Saing Global
              </p>
            </div>

            {/* Description Glass Container */}
            <div className="liquid-glass p-5 rounded-2xl border border-white/15">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Pendidikan kejuruan terdepan di Cibarusah, Kabupaten Bekasi dengan kurikulum terintegrasi industri, laboratorium modern berbasis <b>Teaching Factory</b>, serta kemitraan resmi bersama <b>Mitsubishi Motors (MMKI)</b> dan <b>Musashi Auto Parts</b>.
              </p>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link to="/pembelajaran" className="liquid-btn-primary">
                <span>Jelajahi Jurusan & Vokasi</span>
                <i className="fas fa-arrow-right text-xs"></i>
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="liquid-btn-secondary"
              >
                <i className="fas fa-play-circle text-cyan-400 text-lg"></i>
                <span>Tonton Profil Sekolah</span>
              </button>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-left">
              <div>
                <span className="block text-2xl font-black text-white">70%+</span>
                <span className="text-xs text-slate-400">Terserap Industri</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-cyan-400">2015</span>
                <span className="text-xs text-slate-400">Tahun Berdiri</span>
              </div>
              <div>
                <span className="block text-2xl font-black text-amber-400">2</span>
                <span className="text-xs text-slate-400">Jurusan Unggulan</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3D High-Poly Interactive Scene */}
          <div className="lg:col-span-5 h-[380px] sm:h-[460px] lg:h-[540px] w-full relative flex items-center justify-center">
            {/* Ambient Glass Backdrop Ring */}
            <div className="absolute inset-0 rounded-3xl liquid-glass border border-white/15 p-2 shadow-2xl flex flex-col justify-between overflow-hidden">
              <div className="flex items-center justify-between p-3 border-b border-white/10 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80"></span>
                  <span className="text-[11px] font-semibold text-slate-300 ml-2">
                    3D Vocational Diorama
                  </span>
                </div>
                <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                  WebGL 60FPS
                </span>
              </div>

              {/* 3D Canvas */}
              <div className="flex-1 w-full h-full relative cursor-grab active:cursor-grabbing">
                <SmkGemaNusantaraScene />
              </div>

              {/* Diorama Footer Info */}
              <div className="p-3 border-t border-white/10 z-10 flex items-center justify-between text-[11px] text-slate-400">
                <span>TKR Machined Gear • Office Tech Core</span>
                <span className="text-cyan-400 font-semibold flex items-center gap-1">
                  <i className="fas fa-hand-pointer text-[10px]"></i> Geser Kursor
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl liquid-glass-elevated rounded-3xl p-4 sm:p-6 border border-white/20 shadow-2xl">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/15">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <i className="fab fa-youtube text-red-500"></i>
                Profil Resmi SMK Gema Nusantara
              </h3>
              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/DgtJ2uv5p_E?autoplay=1"
                title="Profil SMK Gema Nusantara"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;