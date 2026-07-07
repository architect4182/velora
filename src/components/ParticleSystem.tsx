import { motion } from 'framer-motion';
import { useMemo } from 'react';

import type { Theme } from '../data/products';

interface ParticleSystemProps {
  currentTheme: Theme;
}

const themeColors: Record<Theme, string[]> = {
  white: ['#B89D6A', '#F4E8D0', '#FFF8EC'],
  dark: ['#6B4423', '#2A1810', '#3E2413'],
  silk: ['#3B82F6', '#8FA8FF', '#FFFFFF'],
  pista: ['#CDE8B5', '#567A36', '#98BD71'],
  about: ['#F4EAD8', '#B89D6A', '#3E2413'], // Fallback colors for about section
};

export default function ParticleSystem({ currentTheme }: ParticleSystemProps) {
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      size: Math.random() * 4 + 2, // 2px to 6px
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: Math.random() * 15 + 15, // 15s to 30s
      delay: Math.random() * -30, // Random negative delay to start midway
      colorIndex: Math.floor(Math.random() * 3),
      yOffset: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 100 + 50),
      xOffset: (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 50 + 20),
    }));
  }, []);

  const colors = themeColors[currentTheme];

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden mix-blend-screen">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full transition-colors duration-500"
          style={{
            width: p.size,
            height: p.size,
            left: p.left,
            top: p.top,
            backgroundColor: colors[p.colorIndex],
          }}
          animate={{
            y: [0, p.yOffset, 0],
            x: [0, p.xOffset, 0],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
