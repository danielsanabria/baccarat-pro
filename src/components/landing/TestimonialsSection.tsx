
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
        title: '¡Resultados desde el día 1!',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Me uní al Telegram, seguí la primera señal que mandaron y gané. Así de simple. Es increíble tener a alguien que haga el trabajo duro de analizar por ti.',
        author: '— Javier M., Valencia' 
    },
    { 
        title: 'Por fin entiendo el juego',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Siempre me había intimidado el Baccarat. Con las señales y las guías que comparten, no solo estoy ganando, sino que estoy aprendiendo a jugar con cabeza. ¡Gracias!',
        author: '— Lucía F., Sevilla'
    },
    { 
        title: 'La mejor comunidad',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Lo que más me gusta es el ambiente en el grupo de Telegram. Todos compartimos las victorias y nos animamos. Se siente como un equipo, no como que juegas solo contra el casino.',
        author: '— Alejandro R., Madrid'
    },
    { 
        title: 'De escéptico a creyente',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Pensé que era otra estafa más, pero como era gratis, probé. La tasa de acierto es real. Llevo dos semanas con ganancias consistentes siguiendo la estrategia al pie de la letra.',
        author: '— Sofía G., Barcelona'
    },
    {
        title: 'Disciplina y paciencia',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'El sistema me ha enseñado a ser paciente y a no apostar por impulso. Solo entro cuando llega una señal. Mis números han mejorado drásticamente. 100% recomendado.',
        author: '— Carlos V., Bilbao'
    },
    {
        title: '¡Fácil y efectivo!',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Recibir una notificación en el móvil y saber que es una buena oportunidad para apostar no tiene precio. Me ahorra horas de mirar patrones. ¡Un servicio de 10!',
        author: '— María P., Málaga'
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
