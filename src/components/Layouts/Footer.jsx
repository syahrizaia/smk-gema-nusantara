import React from "react";
import { Link } from "react-router-dom";
import { dataFooter, dataNavbar } from "../../service/data";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-20 pt-16 pb-12 overflow-hidden z-10 border-t border-white/10">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top Bento Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 mb-12">
          {/* Main School Brand Card */}
          <div className="lg:col-span-5 liquid-glass-card p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-md">
                  <img
                    src={dataNavbar.image}
                    alt="Logo SMK Gema Nusantara"
                    className="w-full h-full object-contain rounded-full bg-slate-950"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    SMK GEMA NUSANTARA
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="liquid-badge text-[10px] !py-0.5 !px-2">
                      Akreditasi A
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      NPSN: 69938604
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Sekolah Menengah Kejuruan Pusat Keunggulan yang berkomitmen mencetak lulusan terampil, berkarakter, mandiri, dan berdaya saing global melalui sinergi industri kelas dunia.
              </p>

              <div className="flex flex-col gap-2.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <i className="fas fa-map-marker-alt text-cyan-400 mt-1"></i>
                  <span>
                    Jl. Raya Cibarusah, Warung Bambu, Sindangmulya, Kec. Cibarusah, Kab. Bekasi, Jawa Barat 17343
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-phone text-cyan-400"></i>
                  <span>(021) 22154328</span>
                </div>
                <div className="flex items-center gap-3">
                  <i className="fas fa-envelope text-cyan-400"></i>
                  <span>mail@smkgemanusantara.sch.id</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400">#YourFutureBeginsHere</span>
              <div className="flex items-center gap-2">
                <a
                  href="https://youtube.com/@smkgemanusantara"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500/30 hover:text-red-400 text-slate-300 flex items-center justify-center transition-all text-xs"
                  aria-label="YouTube"
                >
                  <i className="fab fa-youtube"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-pink-500/30 hover:text-pink-400 text-slate-300 flex items-center justify-center transition-all text-xs"
                  aria-label="Instagram"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-blue-600/30 hover:text-blue-400 text-slate-300 flex items-center justify-center transition-all text-xs"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Bento Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {dataFooter.quickLink.map((category) => (
              <div
                key={category.id}
                className="liquid-glass-card p-6 flex flex-col justify-start"
              >
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4 pb-2 border-b border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  {category.title}
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {category.link.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.to}
                        className="text-xs text-slate-300 hover:text-cyan-300 transition-colors flex items-center group/link"
                      >
                        <i className="fas fa-chevron-right text-[8px] text-cyan-400/60 mr-2 group-hover/link:translate-x-1 transition-transform"></i>
                        <span>{item.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Partner Badges */}
        <div className="liquid-glass p-4 rounded-2xl mb-8 flex flex-wrap items-center justify-between gap-4 border border-white/15">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <i className="fas fa-handshake text-cyan-400"></i>
            <span>Mitra Industri Utama:</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <span className="hover:text-white transition-colors font-semibold">
              PT Mitsubishi Motors Krama Yudha Indonesia (MMKI)
            </span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition-colors font-semibold">
              PT Musashi Auto Parts Indonesia
            </span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition-colors font-semibold">
              LPK Global Vokasi Jepang
            </span>
            <span className="text-white/20">•</span>
            <span className="hover:text-white transition-colors font-semibold">
              DUDI Wilayah Bekasi
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 SMK Gema Nusantara. All Rights Reserved. Terakreditasi "A" BAN-SM.</p>
          <div className="flex items-center gap-4">
            <Link to="/tentang-kami/sasaran-mutu" className="hover:text-white transition-colors">
              Standar Mutu ISO
            </Link>
            <span>•</span>
            <Link to="/layanan/informasi-publik" className="hover:text-white transition-colors">
              Transparansi Publik
            </Link>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="w-7 h-7 rounded-full bg-white/10 hover:bg-cyan-500/30 hover:text-cyan-300 flex items-center justify-center transition-all cursor-pointer"
              title="Kembali ke atas"
            >
              <i className="fas fa-arrow-up text-[10px]"></i>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;