
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const testimonials = [
    { 
        title: '¡No me lo creía!',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Entré al canal de Telegram por curiosidad. En la primera llamada de Google Meet, seguí las instrucciones y... ¡boom! Primera ganancia. El bot que usan es una locura.',
        author: '— Javier M., Valencia' 
    },
    { 
        title: 'De cero a entender el juego',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'El Baccarat me parecía súper complicado. Aquí te lo explican todo en directo. No solo he ganado dinero, sino que ahora entiendo por qué hacemos cada apuesta.',
        author: '— Lucía F., Sevilla'
    },
    { 
        title: 'La paciencia paga (y mucho)',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Lo mejor es que no fuerzan las apuestas. Esperan el momento exacto que el bot indica. Ayer tuvimos una racha increíble en el directo. Se siente como un equipo.',
        author: '— Alejandro R., Madrid'
    },
    { 
        title: 'Pensé que era otra estafa más',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Gratis, señales en directo... olía raro. Pero llevo dos semanas y mi bankroll ha crecido un 30%. La clave es ser disciplinado y seguir la estrategia Martingala como dicen.',
        author: '— Sofía G., Barcelona'
    },
    {
        title: '¡Adiós a apostar a ciegas!',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Antes tiraba el dinero. Ahora solo entro cuando llega la notificación de Telegram. Unirme a la llamada y ganar con gente que sabe es otro nivel. 100% recomendado.',
        author: '— Carlos V., Bilbao'
    },
    {
        title: 'Fácil y desde el móvil',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Me uno a las llamadas de Meet desde donde sea. Ver la notificación, entrar al directo y seguir la jugada es súper simple. Me ha ahorrado horas y dinero.',
        author: '— María P., Málaga'
    },
    {
        title: 'Una comunidad de verdad',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Cuando se gana, lo celebramos todos en el chat de Telegram. Hay muy buen rollo. Es mucho más divertido que jugar solo contra el casino y encima, ¡ganando!',
        author: '— David S., Zaragoza'
    },
    {
        title: 'Resultados consistentes',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Lo que me convenció es la consistencia. No ganas todas, obviamente, pero aplicando la gestión de riesgo que enseñan, el balance a final de semana es siempre positivo.',
        author: '— Elena N., Murcia'
    }
];

export const TestimonialsSection = () => {
    const sectionClasses = "relative flex flex-col items-center justify-center py-16 px-0 bg-background";

    return (
        <section id="testimonials" className={sectionClasses}>
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-12 text-center" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>Lo que dicen nuestros miembros</h2>
            <Carousel
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                      delay: 3000,
                      stopOnInteraction: true,
                      stopOnMouseEnter: true,
                    }),
                ]}
                className="w-full max-w-7xl"
            >
                <CarouselContent className="-ml-4 py-4">
                    {testimonials.map((t, i) => (
                        <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                            <div className="h-full p-1">
                                <div className="testimonial-chip group relative cursor-pointer transition-transform duration-300 h-full">
                                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-md group-hover:bg-primary/30 transition-all duration-300"></div>
                                    <Card className="relative bg-card/60 backdrop-blur-sm border-primary/30 group-hover:border-primary/60 transition-all duration-300 h-full flex flex-col">
                                        <CardHeader>
                                          <CardTitle className="text-primary text-lg font-headline">{t.title}</CardTitle>
                                          <CardDescription className="text-amber-300">{t.rating}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow flex flex-col justify-between">
                                          <p className="text-white/80 italic mb-4">"{t.quote}"</p>
                                          <p className="text-right font-bold text-white/90 mt-auto">{t.author}</p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </section>
    );
};
