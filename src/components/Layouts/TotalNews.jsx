import React, { useState, useEffect, useRef } from "react";

const AnimatedNumber = ({ target, duration = 2200 }) => {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const isStarted = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStarted.current) {
          isStarted.current = true;
          const startTime = performance.now();
          const step = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out quart: 1 - (1 - t)^4
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setVal(Math.floor(easeOut * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setVal(target);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.25 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [target, duration]);

  return <span ref={ref}>{val.toLocaleString("id-ID")}</span>;
};

const StatItem = ({ count, label, suffix = "", icon, desc }) => {
  return (
    <div className="liquid-glass-card liquid-sheen p-6 flex flex-col items-center text-center group">
      <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl mb-4 group-hover:scale-110 transition-transform">
        <i className={icon}></i>
      </div>
      <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight flex items-center justify-center font-heading">
        <AnimatedNumber target={count} />
        <span className="text-cyan-400 font-extrabold ml-0.5">{suffix}</span>
      </div>
      <h4 className="mt-2 text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
        {label}
      </h4>
      <p className="mt-1 text-xs text-slate-400 leading-relaxed max-w-[200px]">
        {desc}
      </p>
    </div>
  );
};

const TotalNews = () => {
  return (
    <section className="py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatItem
            count={2182}
            suffix="+"
            label="Lulusan Terserap"
            icon="fas fa-user-graduate"
            desc="Terserap di industri MMKI, Musashi, Astra group, & universitas negeri/swasta."
          />
          <StatItem
            count={65}
            suffix="+"
            label="Guru & Instruktur"
            icon="fas fa-chalkboard-user"
            desc="Pendidik tersertifikasi asesor BNSP dan master trainer standar industri."
          />
          <StatItem
            count={8}
            suffix=" Unit"
            label="Laboratorium TEFA"
            icon="fas fa-flask-vial"
            desc="Lab TKR, Lab Komputer Administrasi, Bahasa, & Bengkel Teaching Factory."
          />
          <StatItem
            count={1554}
            suffix="+"
            label="Agenda & Prestasi"
            icon="fas fa-newspaper"
            desc="Publikasi rekam jejak kegiatan, kejuaraan Kaizen, dan kemitraan DUDI."
          />
        </div>
      </div>
    </section>
  );
};

export default TotalNews;