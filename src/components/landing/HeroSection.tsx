import React from 'react';

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
  return (
    <section id="hero" className="hero-section absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
      <div className="hero-text">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold" style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.7)' }}>
          Master the Art of Baccarat.
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-white/80">
          The definitive strategy to turn every hand into an opportunity.
        </p>
      </div>
      <div className="flex gap-8 md:gap-16 mt-12">
        <CardSVG className="hero-card" label="Player" />
        <CardSVG className="hero-card" label="Banker" />
      </div>
    </section>
  );
};
