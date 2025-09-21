
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

export const InstagramHero = () => {
    return (
        <>
            <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-transparent">
                <div className="container mx-auto h-full flex items-center justify-between px-4">
                    <div className="flex items-center gap-2 font-headline text-xl text-primary">
                        <Image src="https://iili.io/FbANuA7.png" alt="Baccarat Pro Logo" width={32} height={32} data-ai-hint="baccarat logo" />
                        <span>El tapete de Hero</span>
                    </div>
                     <a href="https://t.me/+AbrdLUEQ-9JmZjFk" target="_blank" rel="noopener noreferrer">
                        <Button size="sm" className="font-bold bg-primary text-primary-foreground hover:shadow-[0_0_15px_hsl(var(--primary)/0.5)] transition-all duration-300">
                            ÚNETE
                            <Send className="hidden sm:inline" />
                        </Button>
                    </a>
                </div>
            </header>

            <main className="relative flex h-screen flex-col items-center justify-center text-center text-white p-4">
                <div className="absolute inset-0 z-0">
                    <Image
                      src="https://iili.io/FsXRNup.jpg"
                      alt="Mesa de Baccarat con cartas y fichas de casino, representando la estrategia de juego."
                      fill
                      className="object-cover"
                      priority
                      data-ai-hint="baccarat table cards"
                    />
                    <div className="absolute inset-0 bg-black/70" />
                </div>

                <div className="relative z-10 flex flex-col items-center">
                    <h1 className="font-headline text-4xl md:text-6xl font-bold" style={{ textShadow: '0 0 20px hsl(var(--primary) / 0.8)' }}>
                        Supera al 99% de los Jugadores de Baccarat
                    </h1>
                    <p className="mt-4 max-w-xl mx-auto text-md md:text-lg text-white/80">
                        Descubre cómo nuestro sistema analiza el juego para darte la ventaja. Estás a un clic de empezar a ganar de forma consistente.
                    </p>
                    <div className="mt-8">
                        <a href="https://t.me/+AbrdLUEQ-9JmZjFk" target="_blank" rel="noopener noreferrer">
                            <Button size="lg" className="font-bold text-lg bg-gradient-to-r from-primary via-amber-500 to-primary text-primary-foreground hover:shadow-[0_0_25px_hsl(var(--primary)/0.6)] transition-all duration-300 scale-100 hover:scale-105 transform">
                                ÚNETE A TELEGRAM
                                <Send />
                            </Button>
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};
