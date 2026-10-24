import React, { useEffect, useRef } from "react";

const AmbientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Inisialisasi partikel halus (bintang debu bercahaya yang melayang tenang)
    const particleCount = Math.min(Math.floor(width / 32), 42);
    const particles = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.8 + 0.8,
        speedX: (Math.random() - 0.5) * 0.25,
        speedY: -Math.random() * 0.35 - 0.08, // mengambang perlahan ke atas
        alpha: Math.random() * 0.4 + 0.1,
        maxAlpha: Math.random() * 0.45 + 0.2,
        pulseSpeed: Math.random() * 0.015 + 0.006,
        pulseVal: Math.random() * Math.PI * 2,
        color:
          Math.random() > 0.45
            ? "56, 189, 248" // cyan lembut
            : Math.random() > 0.5
            ? "99, 102, 241" // indigo neon lembut
            : "251, 191, 36", // aksen keemasan hangat
      });
    }

    let mouseX = width / 2;
    let mouseY = height / 2;
    let targetMouseX = width / 2;
    let targetMouseY = height / 2;

    const handleMouseMove = (e) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Interpolasi lerp posisi kursor secara halus
      mouseX += (targetMouseX - mouseX) * 0.035;
      mouseY += (targetMouseY - mouseY) * 0.035;

      // Efek specular ambient light yang mengikuti kursor di balik kaca gelap (sangat lembut di mata)
      const glowGrad = ctx.createRadialGradient(
        mouseX,
        mouseY,
        0,
        mouseX,
        mouseY,
        Math.min(width * 0.4, 500)
      );
      glowGrad.addColorStop(0, "rgba(14, 165, 233, 0.07)");
      glowGrad.addColorStop(0.45, "rgba(59, 130, 246, 0.03)");
      glowGrad.addColorStop(1, "rgba(9, 13, 22, 0)");
      ctx.fillStyle = glowGrad;
      ctx.fillRect(0, 0, width, height);

      // Gambar dan gerakkan partikel-partikel bercahaya tenang
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.pulseVal += p.pulseSpeed;

        const currentAlpha =
          (Math.sin(p.pulseVal) * 0.5 + 0.5) * (p.maxAlpha - 0.08) + 0.08;

        // Reset partikel jika keluar dari layar
        if (p.y < -15) {
          p.y = height + 15;
          p.x = Math.random() * width;
        }
        if (p.x < -15) p.x = width + 15;
        if (p.x > width + 15) p.x = -15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${currentAlpha})`;
        ctx.shadowColor = `rgba(${p.color}, 0.5)`;
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ambient-mesh-canvas" aria-hidden="true">
      {/* Dynamic Animated Aurora Orbs */}
      <div className="ambient-orb-1" />
      <div className="ambient-orb-2" />
      <div className="ambient-orb-3" />
      <div className="ambient-orb-4" />

      {/* Floating Canvas Particles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Modern High-Tech Precision Grid Overlay */}
      <div className="ambient-grid-overlay" />

      {/* Gentle Diagonal Liquid Sheen Wave */}
      <div className="ambient-sheen-sweep" />
    </div>
  );
};

export default AmbientBackground;
