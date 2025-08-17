
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const testimonials = [
  { 
    title: 'El que Empezó Gratis',
    rating: '⭐⭐⭐⭐⭐',
    quote: 'Entré al canal gratuito de Telegram por curiosidad. Después de ver la efectividad de las primeras 3 señales que mandaron, me uní al VIP sin pensarlo. La frecuencia y el soporte del equipo son de otro nivel. Ya he recuperado la inversión de la membresía de sobra.',
    author: '— Carlos M., Medellín' 
  },
  { 
    title: 'El Miembro VIP Ocupado',
    rating: '⭐⭐⭐⭐⭐',
    quote: 'Pagar por el servicio VIP es la mejor decisión que he tomado. Mi trabajo no me deja tiempo para analizar mesas. Ahora, simplemente espero la notificación en mi móvil, hago la apuesta que indican los expertos y sigo con mi día. Me ahorran tiempo y me generan ingresos.',
    author: '— Sofía G., Madrid'
  },
  { 
    title: 'El que Valora la Estrategia',
    rating: '⭐⭐⭐⭐⭐',
    quote: 'Lo mejor no son solo las señales, es que te enseñan a gestionar tu capital. Antes, una mala racha me destrozaba. Ahora, con su guía sobre la estrategia Martingala, sé exactamente cómo reaccionar ante una pérdida para recuperarme en la siguiente jugada. Es un servicio completo.',
    author: '— Javier L., Buenos Aires'
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
