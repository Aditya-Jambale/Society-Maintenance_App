import { cn } from "../../../utils/cn";
import { useEffect, useState } from "react";

export const SparklesCore = ({
  background,
  minSize,
  maxSize,
  particleDensity,
  className,
  particleColor,
}: {
  background?: string;
  minSize?: number;
  maxSize?: number;
  particleDensity?: number;
  className?: string;
  particleColor?: string;
}) => {
  const [particles, setParticles] = useState<Array<{ x: number; y: number; size: number }>>([]);

  useEffect(() => {
    const particleCount = particleDensity || 50;
    const newParticles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * ((maxSize || 4) - (minSize || 1)) + (minSize || 1),
    }));
    setParticles(newParticles);
  }, [maxSize, minSize, particleDensity]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden", className)} style={{ background }}>
      {particles.map((particle, idx) => (
        <div
          key={idx}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particleColor || "white",
            animation: `sparkle ${Math.random() * 2 + 1}s linear infinite`,
            opacity: Math.random(),
          }}
        />
      ))}
    </div>
  );
};