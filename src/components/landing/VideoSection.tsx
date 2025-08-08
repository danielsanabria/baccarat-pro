
"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { MoveRight } from 'lucide-react';

const VideoTrigger = ({ title, videoUrl, registrationLink }: { title: string, videoUrl: string, registrationLink: string }) => (
    <div className="flex flex-col items-center gap-4">
        <Dialog>
            <DialogTrigger asChild>
            <button className="group relative w-48 h-64 rounded-lg overflow-hidden border-2 border-primary/50 hover:border-primary transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <p className="absolute bottom-4 left-4 font-headline text-xl text-white">{title}</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-300" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
            </button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl h-[70vh] bg-black border-primary/50 p-0">
            <iframe 
                width="100%" 
                height="100%" 
                src={`${videoUrl}?autoplay=1`} 
                title="Reproductor de video de YouTube" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-domain" 
                allowFullScreen>
            </iframe>
            </DialogContent>
        </Dialog>
        <a href={registrationLink}>
            <Button variant="outline" className="border-primary/50 text-primary hover:bg-primary/10 hover:text-primary transition-colors">
                Regístrate ahora
                <MoveRight className="ml-2 h-4 w-4" />
            </Button>
        </a>
    </div>
);


export const VideoSection = () => {
    const sectionClasses = "relative flex flex-col items-center justify-center py-16 bg-background";

    return (
        <section id="videos" className={sectionClasses}>
            <h2 className="font-headline text-4xl md:text-5xl text-white mb-8 text-center" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>Masterclasses Regionales</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <VideoTrigger title="Estrategias para España" videoUrl="https://www.youtube.com/embed/z4e92_a2tXI?si=yv7QyGv9D2uY-w_f" registrationLink="#cta" />
              <VideoTrigger title="Estrategias para LATAM" videoUrl="https://www.youtube.com/embed/z4e92_a2tXI?si=yv7QyGv9D2uY-w_f" registrationLink="#cta" />
            </div>
        </section>
    );
};
