
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const affiliatePartners = [
    {
        name: 'Betfair',
        logoUrl: 'https://iili.io/JADb0B7.png',
        bonus: 'Bono 200€ apuestas gratis',
        affiliateLink: '#',
        dataAiHint: 'betfair logo'
    },
    {
        name: 'Bet365',
        logoUrl: 'https://iili.io/JADb3hb.png',
        bonus: 'Bono 100€ en créditos',
        affiliateLink: '#',
        dataAiHint: 'bet365 logo'
    },
    {
        name: 'Pokerstars Sports',
        logoUrl: 'https://iili.io/JADblax.png',
        bonus: 'Bono 100€ apuestas gratis',
        affiliateLink: '#',
        dataAiHint: 'pokerstars logo'
    },
    {
        name: 'Betway',
        logoUrl: 'https://iili.io/JADbJps.png',
        bonus: 'Bono 150€ primeros depósitos',
        affiliateLink: '#',
        dataAiHint: 'betway logo'
    },
    {
        name: 'DAF',
        logoUrl: 'https://iili.io/JADbXf1.png',
        bonus: 'Bono 50€ + 20€ primer depósito',
        affiliateLink: '#',
        dataAiHint: 'daf logo'
    },
];

export const AffiliateSection = () => {
    return (
        <section id="affiliates" className="py-16 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>
                    Mejores Bonos de Apuestas
                </h2>
                <p className="text-white/50 text-sm mb-12">
                    +18 | Publicidad | Juega con responsabilidad
                </p>
                <div className="max-w-3xl mx-auto space-y-4">
                    {affiliatePartners.map((partner, index) => (
                        <Card key={index} className="flex items-center justify-between p-4 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="w-28 h-12 relative flex items-center justify-center bg-white/10 rounded-md p-1">
                                    <Image 
                                        src={partner.logoUrl}
                                        alt={`${partner.name} logo`}
                                        width={100}
                                        height={40}
                                        objectFit="contain"
                                        data-ai-hint={partner.dataAiHint}
                                    />
                                </div>
                                <p className="text-white/90 text-left text-sm md:text-base">{partner.bonus}</p>
                            </div>
                            <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors shrink-0">
                                <a href={partner.affiliateLink} target="_blank" rel="noopener noreferrer">
                                    Recibir
                                </a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

