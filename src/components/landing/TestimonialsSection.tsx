import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const testimonials = [
  { name: 'Alex Johnson', quote: 'The strategies are a game-changer. My win rate has improved dramatically.' },
  { name: 'Samantha Lee', quote: 'I finally understand the nuances of the game. Highly recommended!' },
  { name: 'Michael Chen', quote: 'Baccarat Pro gave me the confidence I needed at the table. A must-have.' },
];

export const TestimonialsSection = () => {
    const isMobile = useIsMobile();
    const sectionClasses = isMobile
        ? "relative flex flex-col items-center justify-center p-8 bg-background"
        : "testimonials-section absolute inset-0 flex flex-col items-center justify-center opacity-0 p-8";

    return (
        <section id="testimonials" className={sectionClasses}>
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-12 text-center" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>What Players Are Saying</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
            {testimonials.map((t, i) => (
                <div key={i} className="testimonial-chip group relative cursor-pointer transition-transform duration-300 hover:-translate-y-2">
                <div className="absolute -inset-1 bg-primary/20 rounded-lg blur-lg group-hover:bg-primary/30 transition-all duration-300"></div>
                <Card className="relative bg-card/60 backdrop-blur-sm border-primary/30 group-hover:border-primary/60 transition-all duration-300">
                    <CardHeader>
                      <CardTitle className="text-primary text-lg font-headline">{t.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-white/80">"{t.quote}"</p>
                    </CardContent>
                </Card>
                </div>
            ))}
            </div>
        </section>
    );
};
