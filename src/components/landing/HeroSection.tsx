import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export const HeroSection = () => {
  const isMobile = useIsMobile();
  const sectionClasses = isMobile
    ? 'relative flex h-screen flex-col items-center justify-center text-center text-white p-4'
    : 'hero-section absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4';
  
  return (
    <section id="hero" className={sectionClasses}>
      <div className="hero-text text-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold" style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.7)' }}>
          Domina el Arte del Baccarat.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
          La estrategia definitiva para convertir cada mano en una oportunidad.
        </p>
      </div>
      <div className="mt-12">
        <a href="#cta">
            <Button size="lg" className="font-bold text-lg bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all duration-300 scale-100 hover:scale-105">
                Regístrate ahora
                <MoveRight className="ml-2" />
            </Button>
        </a>
      </div>
    </section>
  );
};
