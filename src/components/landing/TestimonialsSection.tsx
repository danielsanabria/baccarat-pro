
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
        title: '¡Es como magia!',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Entré a la llamada de Google Meet sin saber qué esperar. El analista fue súper claro, nos dijo exactamente cuándo y dónde apostar. Gané en las primeras tres rondas. ¡No me lo creía!',
        author: '— Carlos G., Madrid' 
    },
    { 
        title: 'Disciplina y ganancias',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Siempre perdía por impulsivo. Aquí es diferente. El bot te da la señal y tú solo la sigues. Te enseñan a gestionar el bankroll y a no dejarte llevar. Por fin estoy viendo beneficios constantes.',
        author: '— Sofía L., Buenos Aires'
    },
    { 
        title: 'La comunidad es lo mejor',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Estar en la llamada con más gente es genial. Celebramos las victorias juntos. Se siente como un equipo. Ya no es el juego solitario y frustrante de antes. ¡Recomendadísimo!',
        author: '— Miguel A., Lima'
    },
    { 
        title: 'Cero estrés, solo seguir la señal',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Odio tener que analizar mil cosas. Con el canal de Telegram, me llega la notificación, me uno al Meet y sigo las instrucciones. Es el sistema perfecto para alguien que solo quiere ganar sin complicaciones.',
        author: '— Valentina M., Santiago'
    },
    {
        title: 'De escéptico a creyente',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Pensé que era otra estafa. Pero como era gratis, probé. La tasa de acierto del bot es real. Fallamos una, y a la siguiente la recuperamos con creces. Esto es pura estadística, no suerte.',
        author: '— Alejandro P., Barcelona'
    },
    {
        title: 'Perfecto para mi horario',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Trabajo todo el día, pero siempre aviso cuando hay directo. Me uno desde el móvil, sigo la jugada y listo. He ganado más en un par de sesiones que en meses jugando por mi cuenta. ¡Gracias!',
        author: '— Isabella C., Ciudad de México'
    },
    {
        title: 'Aprendiendo a jugar con cabeza',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'No solo te dan las señales, también explican por qué se entra en ese momento. He aprendido más sobre gestión de riesgo aquí que en cualquier otro lugar. Ahora juego mucho más tranquilo.',
        author: '— Mateo R., Bogotá'
    },
    {
        title: '¡Resultados desde el primer día!',
        rating: '⭐⭐⭐⭐⭐',
        quote: 'Me uní, entré al directo de esa misma noche y dupliqué mi inversión inicial en menos de una hora. Estaba flipando. Si estás dudando, no lo hagas. Entra y compruébalo tú mismo.',
        author: '— Luciana V., Valencia'
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
                <CarouselContent>
                    {testimonials.map((t, i) => (
                        <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
                            <div className="p-1">
                                <div className="testimonial-chip group relative cursor-pointer transition-transform duration-300 h-full">
                                    <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
                                    <Card className="relative bg-card/60 backdrop-blur-sm border-primary/30 group-hover:border-primary/60 transition-all duration-300 h-full flex flex-col">
                                        <CardHeader>
                                          <CardTitle className="text-primary text-lg font-headline">{t.title}</CardTitle>
                                          <CardDescription className="text-amber-300">{t.rating}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow flex flex-col justify-between">
                                          <p className="text-white/80 italic mb-4">"{t.quote}"</p>
                                          <p className="text-right font-bold text-white/90">{t.author}</p>
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
