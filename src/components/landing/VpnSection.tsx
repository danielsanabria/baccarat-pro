
"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const VideoTrigger = ({ title, videoUrl, thumbnailUrl }: { title: string, videoUrl: string, thumbnailUrl: string }) => (
    <div className="flex flex-col items-center gap-4">
        <Dialog>
            <DialogTrigger asChild>
            <button className="group relative w-96 h-56 rounded-lg overflow-hidden border-2 border-primary/50 hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                <Image
                    src={thumbnailUrl}
                    alt={`Miniatura del video: ${title}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    data-ai-hint="video thumbnail"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-4 left-0 right-0 text-center font-headline text-xl text-white px-4">{title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[70vh] bg-black border-primary/50 p-0">
            <iframe 
                width="100%" 
                height="100%" 
                src={`${videoUrl}?autoplay=1`} 
                title="Reproductor de video de YouTube sobre configuración de VPN" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-domain" 
                allowFullScreen>
            </iframe>
            </DialogContent>
        </Dialog>
    </div>
);

export const VpnSection = () => {
    return (
        <section id="vpn" className="py-16 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-12" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>
                    Configuración VPN
                </h2>
                <div className="flex justify-center mb-12">
                    <VideoTrigger 
                        title="Configuración VPN" 
                        videoUrl="https://www.youtube.com/embed/z4e92_a2tXI?si=yv7QyGv9D2uY-w_f"
                        thumbnailUrl="https://placehold.co/384x224.png"
                    />
                </div>
                
                <div className="max-w-3xl mx-auto space-y-4">
                    <Card className="flex flex-col sm:flex-row items-center justify-between p-4 bg-card/60 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors gap-4">
                        <div className="flex items-center gap-4 w-full">
                            <div className="w-28 h-12 relative flex items-center justify-center bg-white/10 rounded-md p-1 shrink-0">
                                <Image 
                                    src="https://iili.io/FpL0fJj.png"
                                    alt="Logo de NordVPN"
                                    width={100}
                                    height={40}
                                    className="object-contain"
                                    data-ai-hint="nordvpn logo"
                                />
                            </div>
                            <div className="text-left flex-grow">
                                <p className="font-bold text-white/90">NordVPN</p>
                                <p className="text-white/70 text-sm md:text-base">Navega de forma segura y accede a casinos sin restricciones</p>
                                <p className="text-xs text-primary">Recomendado para Spin Platinum</p>
                            </div>
                        </div>
                        <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors shrink-0 w-full sm:w-auto">
                            <a href="https://go.nordvpn.net/aff_c?offer_id=15&aff_id=129626&url_id=902" target="_blank" rel="noopener noreferrer">
                                Obtener VPN
                            </a>
                        </Button>
                    </Card>
                </div>
            </div>
        </section>
    );
};
