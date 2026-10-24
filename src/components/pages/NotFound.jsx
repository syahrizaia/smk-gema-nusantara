import React from "react";
import { Link } from "react-router-dom";
import AmbientBackground from "../Layouts/AmbientBackground";

const NotFound = () => {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between overflow-hidden selection:bg-blue-500/30 selection:text-white">
      <AmbientBackground />

      {/* Top Bar */}
      <header className="relative z-10 p-6 md:p-8 flex items-center justify-between max-w-7xl mx-auto w-full">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center p-1.5 shadow-lg shadow-blue-500/10 group-hover:scale-105 transition-transform">
            <img
              src="https://smkgemanusantara.sch.id/wp-content/uploads/2023/09/cropped-Logo-SMK-Circle-1.png"
              alt="Logo SMK GN"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-sm font-bold text-white font-heading tracking-wide block">
              SMK GEMA NUSANTARA
            </span>
            <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">
              Pusat Keunggulan
            </span>
          </div>
        </Link>

        <Link
          to="/"
          className="px-4 py-2 rounded-xl text-xs font-semibold liquid-card text-slate-300 hover:text-white hover:border-white/40 transition-all inline-flex items-center gap-1.5"
        >
          <i className="fa-solid fa-arrow-left text-[10px]"></i>
          <span>Beranda</span>
        </Link>
      </header>

      {/* Center 404 Glass Card */}
      <main className="relative z-10 flex-1 flex items-center justify-center p-4">
        <div className="max-w-xl w-full text-center relative">
          {/* Ambient Glow Orb Behind 404 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-tr from-blue-600/30 via-indigo-600/30 to-purple-600/30 rounded-full blur-3xl pointer-events-none" />

          <div className="liquid-card p-8 md:p-12 relative overflow-hidden border-white/20 shadow-2xl">
            {/* Top Badge */}
            <span className="px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest bg-rose-500/15 text-rose-300 border border-rose-400/30 mb-6 inline-block">
              Galat 404 • Halaman Tidak Ditemukan
            </span>

            {/* Giant 404 Typography */}
            <h1 className="text-7xl md:text-8xl font-black font-heading tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-slate-500 mb-4 drop-shadow-sm">
              404
            </h1>

            <h2 className="text-xl md:text-2xl font-bold text-white font-heading mb-3">
              Lintasan Halaman Tidak Terdeteksi
            </h2>

            <p className="text-xs md:text-sm text-slate-300 leading-relaxed mb-8 max-w-md mx-auto">
              Halaman atau berkas digital yang Anda cari mungkin telah dipindahkan, direstrukturisasi dalam pembaruan sistem, atau alamat URL yang Anda masukkan kurang tepat.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25 hover:brightness-110 transition-all text-center"
              >
                Kembali ke Beranda Utama
              </Link>
              <Link
                to="/hubungi-kami"
                className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold liquid-card text-slate-200 hover:text-white hover:border-white/40 transition-all text-center"
              >
                Pusat Kontak & Bantuan
              </Link>
            </div>

            {/* Helpful Quick Links */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <p className="text-[11px] text-slate-400 mb-3">Pintasan Informasi Populer:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Link
                  to="/tentang-kami/berita-terkini"
                  className="px-3 py-1 rounded-lg text-[11px] bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Berita Terkini
                </Link>
                <Link
                  to="/pembelajaran/kurikulum/struktur-kurikulum"
                  className="px-3 py-1 rounded-lg text-[11px] bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Kurikulum & Jurusan
                </Link>
                <Link
                  to="/lulusan/keterserapan-lulusan"
                  className="px-3 py-1 rounded-lg text-[11px] bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Keterserapan Lulusan
                </Link>
                <Link
                  to="/prestasi/prestasi-sekolah"
                  className="px-3 py-1 rounded-lg text-[11px] bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Prestasi Sekolah
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Simple Glass Footer */}
      <footer className="relative z-10 p-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SMK Gema Nusantara. All Rights Reserved.
      </footer>
    </div>
  );
};

export default NotFound;