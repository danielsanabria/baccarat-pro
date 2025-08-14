
"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Check, X } from 'lucide-react';

const plans = [
    {
        name: 'Gratis',
        price: '€0',
        description: 'Empieza a explorar nuestras estrategias básicas.',
        features: [
            { text: 'Acceso a estrategia Martingala', included: true },
            { text: 'Acceso a la comunidad', included: true },
            { text: 'Guía de configuración de mesas', included: false },
            { text: 'Guía de configuración de VPN', included: false },
            { text: 'Soporte prioritario', included: false },
            { text: 'Sesiones 1-a-1 con expertos', included: false },
        ],
        cta: 'Empieza Gratis',
        highlight: false,
    },
    {
        name: 'Premium',
        price: '€49',
        description: 'Desbloquea todas las herramientas para maximizar tus ganancias.',
        features: [
            { text: 'Acceso a estrategia Martingala', included: true },
            { text: 'Acceso a la comunidad', included: true },
            { text: 'Guía de configuración de mesas', included: true },
            { text: 'Guía de configuración de VPN', included: true },
            { text: 'Soporte prioritario', included: true },
            { text: 'Sesiones 1-a-1 con expertos', included: false },
        ],
        cta: 'Hazte Premium',
        highlight: true,
    },
    {
        name: 'Exclusivo Premium',
        price: '€199',
        description: 'La experiencia definitiva para jugadores serios.',
        features: [
            { text: 'Acceso a estrategia Martingala', included: true },
            { text: 'Acceso a la comunidad', included: true },
            { text: 'Guía de configuración de mesas', included: true },
            { text: 'Guía de configuración de VPN', included: true },
            { text: 'Soporte prioritario', included: true },
            { text: 'Sesiones 1-a-1 con expertos', included: true },
        ],
        cta: 'Conviértete en Exclusivo',
        highlight: false,
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
                <p className="text-white/70 max-w-2xl mx-auto mb-12">Tenemos un plan para cada tipo de jugador. Encuentra el que mejor se adapte a ti.</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan) => (
                        <Card key={plan.name} className={`flex flex-col bg-card/60 backdrop-blur-sm border-primary/30 transition-all duration-300 ${plan.highlight ? 'border-primary shadow-[0_0_25px_hsl(var(--primary)/0.4)] scale-105' : 'hover:border-primary/60 hover:-translate-y-2'}`}>
                            <CardHeader className="text-left">
                                <CardTitle className="font-headline text-3xl text-primary">{plan.name}</CardTitle>
                                <CardDescription className="text-white/60">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow text-left">
                                <p className="text-4xl font-bold text-white mb-6">{plan.price}<span className="text-lg font-normal text-white/50">/mes</span></p>
                                <ul className="space-y-4">
                                    {plan.features.map(feature => <Feature key={feature.text} {...feature} />)}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button size="lg" className={`w-full font-bold ${plan.highlight ? 'bg-primary text-primary-foreground hover:bg-amber-500' : 'bg-secondary hover:bg-primary/80'}`}>
                                    {plan.cta}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
