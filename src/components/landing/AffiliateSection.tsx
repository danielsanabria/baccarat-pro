
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const affiliatePartners = [
    {
        name: 'Spin Platinum',
        logoUrl: 'https://placehold.co/100x40.png',
        bonus: 'Apuesta mínima 0,20 cent.',
        affiliateLink: 'https://spinplatinum.com/',
        dataAiHint: 'spin platinum logo'
    },
    {
        name: 'PlayRegal',
        logoUrl: 'https://placehold.co/100x40.png',
        bonus: 'Apuesta mínima 10€.',
        affiliateLink: 'https://es1.playregal-snap.com/?affid=101369&subaff=b08f78301bc3ce49e774a5220fd06417&subaff1=&subaff2=&src=381b9474-f871-11ec-b939-0242ac120002',
        dataAiHint: 'playregal logo'
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
                        <Card key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors gap-4">
                            <div className="flex items-center gap-4 w-full">
                                <div className="w-28 h-12 relative flex items-center justify-center bg-white/10 rounded-md p-1 shrink-0">
                                    <Image 
                                        src={partner.logoUrl}
                                        alt={`${partner.name} logo`}
                                        width={100}
                                        height={40}
                                        objectFit="contain"
                                        data-ai-hint={partner.dataAiHint}
                                    />
                                </div>
                                <p className="text-white/90 text-left text-sm md:text-base flex-grow">{partner.bonus}</p>
                            </div>
                            <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors shrink-0 w-full sm:w-auto">
                                <a href={partner.affiliateLink} target="_blank" rel="noopener noreferrer">
                                    Ingresar
                                </a>
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
