
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const plans = [
    {
        name: 'Gratis',
        price: '0€',
        description: 'Acceso completo a nuestra comunidad y señales en Telegram.',
        features: [
            { text: 'Señales de Baccarat en tiempo real', included: true },
            { text: 'Acceso a la comunidad de Telegram', included: true },
            { text: 'Guía de estrategia Martingala', included: true },
            { text: 'Soporte para principiantes', included: true },
            { text: 'Análisis de mercado por nuestro bot', included: true },
            { text: 'Recomendaciones de casinos', included: true },


        ],
        cta: 'Únete Gratis',
        highlight: false,
        link: "https://t.me/+AbrdLUEQ-9JmZjFk",
        disabled: false
    },
    {
        name: 'Premium',
        price: '-- €', // Ocultamos el precio
        description: 'Desbloquea todas las herramientas para maximizar tus ganancias.',
        features: [
            { text: 'Acceso a estrategia Martingala', included: true },
            { text: 'Acceso a la comunidad', included: true },
            { text: 'Guía de configuración de mesas', included: true },
            { text: 'Guía de configuración de VPN', included: true },
            { text: '3 Señales de apuestas diarias', included: true },
            { text: '5 señales de apuestas VIP', included: true },
            { text: 'Soporte Prioritario', included: true },

        ],
        cta: 'Próximamente',
        highlight: true,
        disabled: true
    },
];

const Feature = ({ text, included }: { text: string, included: boolean }) => (
    <li className="flex items-center gap-3">
        {included 
            ? <Check className="w-5 h-5 text-green-500" /> 
            : <X className="w-5 h-5 text-red-500" />}
        <span className={included ? 'text-white/90' : 'text-white/50'}>{text}</span>
    </li>
);

export const PricingSection = () => {
    return (
        <section id="plans" className="py-16 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>Elige tu Plan</h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-12">Empieza gratis y únete a una comunidad de ganadores. Sin compromisos, solo oportunidades.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col bg-card/60 backdrop-blur-sm border-primary/30 transition-all duration-300 ${plan.highlight ? 'border-primary shadow-[0_0_25px_hsl(var(--primary)/0.4)] md:scale-105' : 'hover:border-primary/60 hover:-translate-y-2'}`}>
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
