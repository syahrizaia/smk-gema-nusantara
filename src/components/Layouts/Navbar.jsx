import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { dataNavbar } from "../../service/data";

const DropdownMenu = ({ items, label, to }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = location.pathname.startsWith(to);

  return (
    <div
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        to={to}
        className={`px-3.5 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 flex items-center gap-1.5 ${
          isActive
            ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
            : "text-slate-200 hover:text-white hover:bg-white/10"
        }`}
      >
        <span>{label}</span>
        <i
          className={`fas fa-chevron-down text-[10px] transition-transform duration-300 ${
            isOpen ? "rotate-180 text-cyan-300" : "opacity-60"
          }`}
        ></i>
      </Link>

      <div
        className={`absolute left-0 top-full pt-2 min-w-[240px] z-50 transition-all duration-300 origin-top ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="liquid-glass-elevated p-2 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-2xl bg-slate-900/85">
          {items.map((item, idx) => (
            <div key={idx} className="relative group/sub">
              <NavLink
                to={item.to}
                className={({ isActive: isSubActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isSubActive
                      ? "bg-blue-600/35 text-cyan-300 font-semibold"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <span>{item.label}</span>
                {item.subLinks && (
                  <i className="fas fa-chevron-right text-[10px] opacity-60"></i>
                )}
              </NavLink>

              {item.subLinks && (
                <div className="hidden group-hover/sub:block absolute left-full top-0 ml-1 min-w-[210px]">
                  <div className="liquid-glass-elevated p-2 rounded-2xl shadow-2xl border border-white/20 backdrop-blur-2xl bg-slate-900/90">
                    {item.subLinks.map((sub, sIdx) => (
                      <NavLink
                        key={sIdx}
                        to={sub.to}
                        className={({ isActive: isDeepActive }) =>
                          `block px-3 py-2 rounded-lg text-xs transition-all duration-200 ${
                            isDeepActive
                              ? "bg-blue-600/35 text-cyan-300 font-semibold"
                              : "text-slate-200 hover:bg-white/10 hover:text-white"
                          }`
                        }
                      >
                        {sub.label}
                      </NavLink>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-4 sm:px-6 lg:px-8 pt-3 pb-2 transition-all duration-300 pointer-events-none">
        <nav
          className={`max-w-7xl mx-auto rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between pointer-events-auto transition-all duration-500 ${
            scrolled
              ? "liquid-glass-nav shadow-[0_20px_50px_rgba(0,0,0,0.7)] border-white/25"
              : "bg-slate-900/50 backdrop-blur-xl border border-white/15 shadow-lg"
          }`}
        >
          {/* Logo & School Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-full p-0.5 bg-gradient-to-tr from-cyan-400 to-blue-600 shadow-md group-hover:scale-105 transition-transform duration-300">
              <img
                src={dataNavbar.image}
                alt="SMK Gema Nusantara"
                className="w-full h-full object-contain rounded-full bg-slate-950"
                width={40}
                height={40}
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                SMK GENUS
              </span>
              <span className="text-[10px] text-cyan-400/90 font-medium tracking-wider uppercase -mt-0.5 hidden xs:inline">
                Pusat Keunggulan
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1.5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`
              }
            >
              Beranda
            </NavLink>

            <DropdownMenu
              to="/tentang-kami"
              label="Tentang Kami"
              items={dataNavbar.tentangKami}
            />

            <DropdownMenu
              to="/pembelajaran"
              label="Pembelajaran"
              items={dataNavbar.pembelajaran}
            />

            <DropdownMenu
              to="/layanan"
              label="Layanan"
              items={dataNavbar.layanan}
            />

            <DropdownMenu
              to="/prestasi"
              label="Prestasi"
              items={dataNavbar.prestasi}
            />

            <DropdownMenu
              to="/lulusan"
              label="Lulusan"
              items={dataNavbar.lulusan}
            />

            <NavLink
              to="/hubungi-kami"
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-full text-xs lg:text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
                    : "text-slate-200 hover:text-white hover:bg-white/10"
                }`
              }
            >
              Kontak
            </NavLink>
          </div>

          {/* Right Action Button & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/hubungi-kami"
              className="liquid-btn-primary !py-2 !px-4 !text-xs hidden sm:inline-flex"
            >
              <i className="fas fa-paper-plane mr-1 text-[11px]"></i>
              <span>PPDB & Kontak</span>
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-slate-100 hover:text-cyan-300 hover:bg-white/15 transition-all"
              aria-label="Toggle navigation menu"
            >
              <i className={`fas ${mobileOpen ? "fa-times" : "fa-bars"} text-sm`}></i>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Glass Drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            onClick={() => setMobileOpen(false)}
          />
          <div className="fixed top-20 inset-x-4 max-h-[80vh] overflow-y-auto liquid-glass-elevated rounded-3xl p-6 border border-white/25 bg-slate-950/90 shadow-2xl flex flex-col gap-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/15">
              <span className="font-bold text-white text-base">Menu Navigasi</span>
              <span className="liquid-badge text-[10px]">SMK GEMA NUSANTARA</span>
            </div>

            <div className="flex flex-col gap-2">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `px-4 py-2.5 rounded-xl font-medium text-sm ${
                    isActive ? "bg-cyan-500/25 text-cyan-300 font-semibold" : "text-slate-200 hover:bg-white/10"
                  }`
                }
              >
                Beranda
              </NavLink>

              <div className="flex flex-col gap-1 pl-2 border-l-2 border-white/15">
                <span className="text-xs font-semibold text-cyan-400 px-2 pt-2">Tentang Kami</span>
                {dataNavbar.tentangKami.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="flex flex-col gap-1 pl-2 border-l-2 border-white/15">
                <span className="text-xs font-semibold text-cyan-400 px-2 pt-2">Pembelajaran & Vokasi</span>
                {dataNavbar.pembelajaran.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="flex flex-col gap-1 pl-2 border-l-2 border-white/15">
                <span className="text-xs font-semibold text-cyan-400 px-2 pt-2">Layanan & Publikasi</span>
                {dataNavbar.layanan.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <div className="flex flex-col gap-1 pl-2 border-l-2 border-white/15">
                <span className="text-xs font-semibold text-cyan-400 px-2 pt-2">Prestasi & Alumni</span>
                {dataNavbar.prestasi.map((item, i) => (
                  <NavLink
                    key={i}
                    to={item.to}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </NavLink>
                ))}
                {dataNavbar.lulusan.map((item, i) => (
                  <NavLink
                    key={`l-${i}`}
                    to={item.to}
                    className="px-3 py-1.5 text-xs text-slate-300 hover:text-white"
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>

              <NavLink
                to="/hubungi-kami"
                className="mt-3 liquid-btn-primary w-full text-center text-sm py-2.5"
              >
                Hubungi Kami & PPDB
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
