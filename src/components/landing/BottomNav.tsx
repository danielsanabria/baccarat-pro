
import React from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu, MoveRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';

export const BottomNav = () => {
    const isMobile = useIsMobile();
    
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/70 backdrop-blur-md border-t border-white/10 z-50">
            <div className="container mx-auto h-full flex items-center justify-between px-4">
                <a href="#hero" className="flex items-center gap-2 font-headline text-xl text-primary hover:text-amber-300 transition-colors">
                    <Image src="https://iili.io/JAfH4ss.png" alt="Hero Baccarat Logo" width={32} height={32} data-ai-hint="hero logo" />
                    <span>Hero Baccarat</span>
                </a>
                
                {isMobile ? (
                     <a href="#cta">
                        <Button className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">
                            Regístrate
                            <MoveRight className="ml-2" />
                        </Button>
                    </a>
                ) : (
                    <div className="flex items-center gap-6">
                         <a href="#cta">
                            <Button className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">Regístrate</Button>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};
