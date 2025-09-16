
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const testimonials = [
  { 
    title: 'El Escéptico Convertido',
    rating: '⭐⭐⭐⭐⭐',
    quote: 'Al principio no me fiaba. Me uní al canal gratis y vi cómo llegaban las señales: "Apuesta a Jugador", "Ahora a Banca". Seguí un par con poco dinero y acertaron. Esa misma tarde ya estaba en el VIP. Llevo dos semanas y mi bankroll ha crecido un 40%. Es increíble.',
    author: '— Javier R., Valencia' 
  },
  { 
    title: 'La Jugadora Ocupada',
    rating: '⭐⭐⭐⭐⭐',
    quote: 'No tengo tiempo para analizar patrones ni nada de eso. Este servicio es perfecto. Me llega la notificación de Telegram, hago la apuesta que dicen y listo. He ganado más en un mes que en un año jugando por mi cuenta. ¡Y sin el estrés de tener que decidir yo!',
    author: '— Lucía F., CDMX'
  },
  { 
    title: 'El Estratega',
    rating: '⭐⭐⭐⭐⭐',
    quote: 'Lo que me convenció fue entender la estrategia. No se trata de acertar siempre, sino de gestionar el riesgo. Con la Martingala que explican, incluso si hay una pérdida, la siguiente señal te ayuda a recuperarte y salir con ganancias. Es apostar con inteligencia, no al azar.',
    author: '— David S., Bogotá'
  },
];

export const TestimonialsSection = () => {
    const sectionClasses = "relative flex flex-col items-center justify-center p-8 bg-background";

    return (
        <section id="testimonials" className={sectionClasses}>
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-12 text-center" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>Lo que dicen los jugadores</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {testimonials.map((t, i) => (
                <div key={i} className="testimonial-chip group relative cursor-pointer transition-transform duration-300 hover:-translate-y-2">
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
            ))}
            </div>
        </section>
    );
};
