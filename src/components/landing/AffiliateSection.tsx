
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const affiliatePartners = [
    {
        name: 'Spin Platinum',
        logoUrl: 'https://iili.io/Fm3KD3x.png',
        bonus: 'Apuesta mínima 0,20 cent.',
        requirement: 'Requiere VPN',
        affiliateLink: 'https://go.spaffiliates.co/visit/?bta=35324&nci=5354',
        dataAiHint: 'spin platinum logo'
    },
    {
        name: 'PlayRegal',
        logoUrl: 'https://iili.io/Fm3KbYQ.png',
        bonus: 'Apuesta mínima 10€.',
        requirement: 'Sin VPN',
        affiliateLink: 'https://suitglue.com/api/v3/offer/4?affiliate_source=CAES4471&affiliate_id=101603&url_id=173&free_1=es&free_2=101603',
        dataAiHint: 'playregal logo'
    },
];

export const AffiliateSection = () => {
    return (
        <section id="affiliates" className="pt-8 pb-16 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>
                    Nuestros casinos Online
                </h2>
                <p className="text-white/50 text-sm mb-12">
                    +18 | Juega con responsabilidad
                </p>
                <div className="max-w-3xl mx-auto space-y-4">
                    {affiliatePartners.map((partner, index) => (
                        <Card key={index} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors gap-4">
                            <div className="flex items-center gap-4 w-full">
                                <div className="w-28 h-12 relative flex items-center justify-center bg-white/10 rounded-md p-1 shrink-0">
                                    <Image 
                                        src={partner.logoUrl}
                                        alt={`Logo del casino ${partner.name}`}
                                        width={100}
                                        height={40}
                                        className="object-contain"
                                        data-ai-hint={partner.dataAiHint}
                                    />
                                </div>
                                <div className="text-left flex-grow">
                                    <p className="font-bold text-white/90">{partner.name}</p>
                                    <p className="text-white/70 text-sm md:text-base">{partner.bonus}</p>
                                    <p className="text-xs text-primary">{partner.requirement}</p>
                                </div>
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
