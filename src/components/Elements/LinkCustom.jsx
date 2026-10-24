import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const LinkCustom = ({ to, children, subLinks = [] }) => {
  const location = useLocation();
  const isActive = location.pathname === to || (to !== "/" && location.pathname.startsWith(to));

  return (
    <div className="relative group">
      <NavLink
        to={to}
        onClick={(e) => {
          if (to === "#") e.preventDefault();
        }}
        className={`px-3.5 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1.5 ${
          isActive
            ? "bg-white/15 text-cyan-300 border border-white/25 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4)]"
            : "text-slate-200 hover:text-white hover:bg-white/10"
        }`}
      >
        <span>{children}</span>
      </NavLink>

      {subLinks.length > 0 && (
        <div className="absolute left-0 top-full hidden group-hover:block pt-2 min-w-[220px] z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="liquid-glass-elevated p-1.5 rounded-2xl shadow-2xl border border-white/20">
            {subLinks.map((sub, index) => (
              <NavLink
                key={index}
                to={sub.to}
                className={({ isActive: isSubActive }) =>
                  `flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all duration-200 ${
                    isSubActive
                      ? "bg-blue-600/30 text-cyan-300 font-semibold"
                      : "text-slate-200 hover:bg-white/10 hover:text-white"
                  }`
                }
              >
                <span>{sub.label}</span>
                {sub.withArrow && <i className="fas fa-chevron-right text-[10px] opacity-70"></i>}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LinkCustom;