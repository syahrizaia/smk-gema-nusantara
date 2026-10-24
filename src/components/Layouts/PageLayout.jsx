import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AmbientBackground from "./AmbientBackground";

const PageLayout = ({
  badge = "SMK GEMA NUSANTARA",
  badgeVariant = "default", // default, amber, cyan, emerald
  title,
  gradientText,
  subtitle,
  breadcrumbs = [],
  children,
  maxWidth = "max-w-7xl",
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const badgeClass =
    badgeVariant === "amber"
      ? "liquid-badge-amber"
      : badgeVariant === "cyan"
      ? "liquid-badge-cyan"
      : badgeVariant === "emerald"
      ? "liquid-badge-emerald"
      : "liquid-badge";

  return (
    <div className="relative min-h-screen bg-[#090d16] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-200">
      <AmbientBackground />
      <Navbar />

      <main className="relative z-10 flex-1 pt-28 pb-16">
        {/* Page Hero Header Banner */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="liquid-glass-elevated p-6 sm:p-10 rounded-3xl border border-white/20 relative overflow-hidden shadow-2xl">
            {/* Ambient Refraction Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

            {/* Breadcrumb Navigation */}
            {breadcrumbs.length > 0 && (
              <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4 flex-wrap">
                <Link to="/" className="hover:text-cyan-300 transition-colors flex items-center gap-1">
                  <i className="fas fa-home text-[10px]"></i>
                  <span>Beranda</span>
                </Link>
                {breadcrumbs.map((crumb, idx) => (
                  <React.Fragment key={idx}>
                    <i className="fas fa-chevron-right text-[8px] text-slate-600"></i>
                    {crumb.to ? (
                      <Link to={crumb.to} className="hover:text-cyan-300 transition-colors">
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className="text-cyan-300 font-semibold">{crumb.label}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            <div className="flex flex-col gap-2 relative z-10">
              {badge && (
                <div className="flex items-center gap-2">
                  <span className={`${badgeClass} text-xs font-semibold`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                    {badge}
                  </span>
                </div>
              )}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {title}{" "}
                {gradientText && (
                  <span className="text-gradient-cyan">{gradientText}</span>
                )}
              </h1>
              {subtitle && (
                <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Page Main Content Area */}
        <div className={`${maxWidth} mx-auto px-4 sm:px-6 lg:px-8`}>
          {children}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PageLayout;
