
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check } from 'lucide-react';

const plans = [
    {
        name: 'Gratis',
        price: '0€',
        description: 'Acceso a las sesiones en directo y a nuestra comunidad. ¡Activa las notificaciones de Telegram para no perderte nada!',
        features: [
            { text: 'Señales en directo por Google Meet', included: true },
            { text: 'Acceso a la comunidad de Telegram', included: true },
            { text: 'Análisis de nuestro bot de alta precisión', included: true },
            { text: 'Guía de estrategia Martingala', included: true },
            { text: 'Soporte para principiantes', included: true },
        ],
        cta: 'Únete Gratis',
        highlight: true,
        link: "https://t.me/+AbrdLUEQ-9JmZjFk",
        disabled: false
    },
];

const Feature = ({ text, included }: { text: string, included: boolean }) => (
    <li className="flex items-center gap-3">
        {included 
            ? <Check className="w-5 h-5 text-green-500" /> 
            : <Check className="w-5 h-5 text-white/30" />}
        <span className={included ? 'text-white/90' : 'text-white/50'}>{text}</span>
    </li>
);

export const PricingSection = () => {
    return (
        <section id="plans" className="py-16 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>Elige tu Plan</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-12">Empieza gratis y únete a una comunidad de ganadores. Sin compromisos, solo oportunidades.</p>
                <div className="flex justify-center">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col bg-card/60 backdrop-blur-sm border-primary/30 transition-all duration-300 w-full max-w-md ${plan.highlight ? 'border-primary shadow-[0_0_25px_hsl(var(--primary)/0.4)]' : 'hover:border-primary/60 hover:-translate-y-2'}`}>
                            <CardHeader className="text-left">
                                <CardTitle className="font-headline text-3xl text-primary">{plan.name}</CardTitle>
                                <CardDescription className="text-white/60">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow text-left">
                                {plan.price ? (
                                  <p className="text-4xl font-bold text-white mb-6">{plan.price}<span className="text-lg font-normal text-white/50">/para siempre</span></p>
                                ) : <div className="h-[56px] mb-6"></div> }
                                <ul className="space-y-4">
                                    {plan.features.map(feature => <Feature key={feature.text} {...feature} />)}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button asChild={!plan.disabled} size="lg" className={`w-full font-bold ${plan.highlight ? 'bg-primary text-primary-foreground hover:bg-amber-500' : ''}`} variant={plan.highlight ? 'default' : 'outline'} disabled={plan.disabled}>
                                    {plan.link ? (
                                      <a href={plan.link} target="_blank" rel="noopener noreferrer">{plan.cta}</a>
                                    ) : (
                                      <span>{plan.cta}</span>
                                    )}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
