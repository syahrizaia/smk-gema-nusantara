import React from "react";

const SectionTitle = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
  gradientText,
  className = "",
}) => {
  const alignClass =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <div className={`flex flex-col gap-2.5 max-w-3xl ${alignClass} ${className}`}>
      {eyebrow && (
        <span className="liquid-badge text-xs uppercase tracking-wider font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
        {title}{" "}
        {gradientText && (
          <span className="text-gradient-cyan">{gradientText}</span>
        )}
      </h2>
      {subtitle && (
        <p className="text-slate-300 text-sm md:text-base leading-relaxed max-w-2xl mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
