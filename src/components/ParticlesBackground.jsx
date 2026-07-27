// src/components/ParticlesBackground.jsx

import { useEffect, useRef } from "react";
import { useTheme } from "../context/ThemeContext";

const ParticlesBackground = () => {
  const { theme } = useTheme();
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;

        // Different particle colors for each theme
        if (theme === "dark") {
          this.hue =
            Math.random() > 0.5 ? 160 : Math.random() > 0.5 ? 195 : 275;
        } else {
          this.hue =
            Math.random() > 0.5 ? 210 : Math.random() > 0.5 ? 180 : 260;
        }
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 70%, ${this.opacity})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const count = Math.min(
        80,
        Math.floor((canvas.width * canvas.height) / 15000),
      );

      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    init();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, i) => {
        p.update();
        p.draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = p.x - particles[j].x;
          const dy = p.y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = 0.03 * (1 - dist / 120);

            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(particles[j].x, particles[j].y);

            const lineColor = theme === "dark" ? "255,255,255" : "0,0,0";

            ctx.strokeStyle =
              theme === "dark"
                ? `rgba(255,255,255,${0.03 * (1 - dist / 120)})`
                : `rgba(0,0,0,${0.05 * (1 - dist / 120)})`;
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 z-0 pointer-events-none transition-opacity duration-500 ${
        theme === "dark" ? "opacity-70" : "opacity-35"
      }`}
    />
  );
};

export default ParticlesBackground;
