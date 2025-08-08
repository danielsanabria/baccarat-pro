
import React from 'react';
import { Button } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

export const CtaSection = () => {
    const sectionClasses = "relative flex flex-col items-center justify-center text-center p-16 min-h-[60vh]";

    return (
        <section id="cta" className={sectionClasses}>
            <div className="absolute inset-0 bg-vignette" />
            <div className="relative">
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white" style={{ textShadow: '0 0 20px hsl(var(--primary) / 0.7)' }}>¿Listo para empezar a ganar?</h2>
              <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl mx-auto">Únete a una comunidad de jugadores que han transformado su juego y elevado su estrategia.</p>
              <Button size="lg" className="mt-8 font-bold text-lg bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all duration-300 scale-100 hover:scale-105">
                Regístrate ahora
                <MoveRight className="ml-2" />
              </Button>
            </div>
        </section>
    );
};
