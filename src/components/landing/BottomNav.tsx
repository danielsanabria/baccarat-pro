
import React from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Send } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';

export const BottomNav = () => {
    const isMobile = useIsMobile();
    
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/70 backdrop-blur-md border-t border-white/10 z-50">
            <div className="container mx-auto h-full flex items-center justify-between px-4">
                <a href="#hero" className="flex items-center gap-2 font-headline text-xl text-primary hover:text-amber-300 transition-colors">
                    <Image src="https://iili.io/FbANuA7.png" alt="Hero Baccarat Logo" width={32} height={32} data-ai-hint="hero logo" />
                    <span>Hero Baccarat</span>
                </a>
                
                <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">
                    <a href="https://t.me/your_channel_name" target="_blank" rel="noopener noreferrer">
                        Telegram
                    </a>
                </Button>
            </div>
        </nav>
    );
};
