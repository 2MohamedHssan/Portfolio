"use client";

import { useEffect, useRef } from "react";

const AnimatedHeader = ({ Children, view, hight, bg }) => {
  const headerRef = useRef(null);
  const canvasRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const particles = useRef([]);

  // Initialize particles and animations
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const header = headerRef.current;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = header.clientWidth;
      canvas.height = header.clientHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create particles
    const initParticles = () => {
      particles.current = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 10000);

      for (let i = 0; i < particleCount; i++) {
        particles.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: Math.random() * 2 - 1,
          speedY: Math.random() * 2 - 1,
          color: `rgba(45, 212, 191, ${Math.random() * 0.5 + 0.1})`, // indigo-500
        });
      }
    };

    initParticles();
    // Mouse move event
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    header.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.current.forEach((particle) => {
        // Move particles
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        // Mouse interaction
        const dx = mouse.current.x - particle.x;
        const dy = mouse.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 50;
          const angle = Math.atan2(dy, dx);
          particle.x -= Math.cos(angle) * force;
          particle.y -= Math.sin(angle) * force;
        }

        // Draw particle
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      header.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={`relative flex ${
        hight && "h-screen"
      } items-center justify-center overflow-hidden ${
        bg ? bg : "bg-gradient-to-tr from-gray-900 to-gray-950"
      } text-white`}
    >
      {/* Animated background canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
      {Children}
      {view && (
        <div
          onClick={() => {
            window.scrollTo({
              top: 500,
              behavior: "smooth",
            });
          }}
          className="absolute bottom-10 md:bottom-32 cursor-pointer left-1/2 -translate-x-1/2 animate-bounce"
        >
          <div className="w-6 h-10 border-2 border-indigo-400 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-indigo-400 rounded-full mt-2 animate-scroll-indicator"></div>
          </div>
        </div>
      )}
    </header>
  );
};

export default AnimatedHeader;
