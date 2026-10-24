import React from "react";

const CardCustom = ({ title, description, icon, badge, className = "" }) => {
  return (
    <div className={`liquid-glass-card liquid-sheen p-6 flex flex-col justify-between gap-4 text-left group ${className}`}>
      <div>
        <div className="flex items-center justify-between mb-4">
          {icon ? (
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600/30 to-cyan-400/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-xl shadow-inner group-hover:scale-110 transition-transform duration-300">
              <i className={icon}></i>
            </div>
          ) : (
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400 text-lg shadow-inner">
              <i className="fas fa-check-circle"></i>
            </div>
          )}
          {badge && (
            <span className="liquid-badge text-xs">{badge}</span>
          )}
        </div>
        <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
          {title}
        </h3>
        <p className="mt-2 text-slate-300/90 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="pt-2 flex items-center text-xs font-semibold text-cyan-400/80 group-hover:text-cyan-300 transition-colors">
        <span>Pelajari Selengkapnya</span>
        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
      </div>
    </div>
  );
};

export default CardCustom;