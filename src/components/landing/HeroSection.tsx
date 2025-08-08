import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';


const CardSVG = ({ className, label }: { className?: string; label: string }) => (
  <div className={className}>
    <div className="relative w-32 h-48 md:w-40 md:h-56 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg">
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="font-headline text-primary text-2xl">{label.charAt(0)}</span>
      </div>
    </div>
    <p className="mt-2 text-center font-semibold text-lg text-white/80">{label}</p>
  </div>
);

export const HeroSection = () => {
  const isMobile = useIsMobile();
  const sectionClasses = isMobile
    ? 'relative flex h-screen flex-col items-center justify-center text-center text-white p-4 bg-background'
    : 'hero-section absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4';
  
  return (
    <section id="hero" className={sectionClasses}>
      <div className="hero-text">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold" style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.7)' }}>
          Domina el Arte del Baccarat.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/80">
          La estrategia definitiva para convertir cada mano en una oportunidad.
        </p>
      </div>
      <div className="flex gap-8 md:gap-16 mt-12">
        <CardSVG className="hero-card" label="Jugador" />
        <CardSVG className="hero-card" label="Banquero" />
      </div>
    </section>
  );
};
