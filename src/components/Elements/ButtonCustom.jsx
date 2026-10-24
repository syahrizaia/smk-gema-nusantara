import React from "react";

const ButtonCustom = ({
  children,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  disabled = false,
  ...props
}) => {
  const baseClass =
    variant === "secondary"
      ? "liquid-btn-secondary"
      : variant === "glass"
      ? "liquid-glass-elevated px-5 py-2.5 rounded-full font-semibold text-white hover:border-cyan-400/50 transition-all duration-300 cursor-pointer"
      : "liquid-btn-primary";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} liquid-sheen ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonCustom;