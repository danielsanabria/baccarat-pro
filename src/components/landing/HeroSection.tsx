
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import Image from 'next/image';

export const HeroSection = () => {
  const sectionClasses = 'relative flex h-screen flex-col items-center justify-center text-center text-white p-4';
  
  return (
    <section id="hero" className={sectionClasses}>
      <div className="absolute inset-0 z-0">
        <Image
          src="https://iili.io/FsXRNup.jpg"
          alt="Mesa de Baccarat con cartas"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="baccarat table cards"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="hero-text text-center relative z-10 flex flex-col items-center">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold" style={{ textShadow: '0 0 15px hsl(var(--primary) / 0.7)' }}>
          Domina el Arte del Baccarat.
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
          La estrategia definitiva para convertir cada mano en una oportunidad.
        </p>
        <div className="mt-12">
            <a href="https://t.me/your_channel_name" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-bold text-lg bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all duration-300 scale-100 hover:scale-105">
                    Únete a Telegram
                    <Send />
                </Button>
            </a>
        </div>
      </div>
    </section>
  );
};
