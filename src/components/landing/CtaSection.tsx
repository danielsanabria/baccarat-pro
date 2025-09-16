
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export const CtaSection = () => {
    const sectionClasses = "relative flex flex-col items-center justify-center text-center p-16 min-h-[60vh]";

    return (
        <section id="cta" className={sectionClasses}>
            <div className="absolute inset-0 bg-vignette" />
            <div className="relative">
              <h2 className="font-headline text-5xl md:text-7xl font-bold text-white" style={{ textShadow: '0 0 20px hsl(var(--primary) / 0.7)' }}>¿Listo para ganar en comunidad?</h2>
              <p className="mt-4 text-lg md:text-xl text-white/80 max-w-xl mx-auto">El próximo directo está a punto de empezar. ¿Te lo vas a perder?</p>
              <Button asChild size="lg" className="mt-8 font-bold text-lg bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all duration-300 scale-100 hover:scale-105">
                <a href="https://t.me/+AbrdLUEQ-9JmZjFk" target="_blank" rel="noopener noreferrer">
                    Únete a Telegram
                    <Send />
                </a>
              </Button>
            </div>
        </section>
    );
};
