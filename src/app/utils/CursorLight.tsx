'use client';

import { useEffect, useRef } from 'react';

export function CursorLight() {
  const lightRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };

    const animate = () => {
      // Increase the speed (lower damping factor for more responsiveness)
      pos.current.x += (mouse.current.x - pos.current.x) * 0.2;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.2;

      if (lightRef.current) {
        // Tighter and brighter spotlight
        lightRef.current.style.background = `
          radial-gradient(circle at ${pos.current.x}px ${pos.current.y}px, rgba(255, 255, 255, 0.08), transparent 40%)
        `;
      }

      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      ref={lightRef}
      className="pointer-events-none fixed inset-0 z-0 transition-none"
    />
  );
}
