
import React from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Send, Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import Image from 'next/image';

const NavLinks = () => (
    <>
        <a href="#strategy" className="hover:text-primary transition-colors block py-2">Estrategia</a>
        <a href="#plans" className="hover:text-primary transition-colors block py-2">Planes</a>
        <a href="#affiliates" className="hover:text-primary transition-colors block py-2">Casinos</a>
        <a href="#calculator" className="hover:text-primary transition-colors block py-2">Calculadora</a>
    </>
);

export const BottomNav = () => {
    const isMobile = useIsMobile();
    
    const navClasses = "fixed left-0 right-0 h-16 bg-background/70 backdrop-blur-md z-50 md:top-0 md:bottom-auto bottom-0 md:border-b border-t md:border-t-0 border-white/10";

    return (
        <nav className={navClasses}>
            <div className="container mx-auto h-full flex items-center justify-between px-4">
                <a href="#hero" className="flex items-center gap-2 font-headline text-xl text-primary hover:text-amber-300 transition-colors">
                    <Image src="https://iili.io/FbANuA7.png" alt="Baccarat Pro Logo" width={32} height={32} data-ai-hint="baccarat logo" />
                    <span>Hero Baccarat</span>
                </a>
                
                <div className="hidden md:flex items-center gap-6 text-white/90">
                    <NavLinks />
                </div>

                <div className="flex items-center gap-2">
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">
                        <a href="https://t.me/+AbrdLUEQ-9JmZjFk" target="_blank" rel="noopener noreferrer">
                            Telegram
                            <Send className="hidden sm:inline" />
                        </a>
                    </Button>
                    
                    {isMobile && (
                        <Sheet>
                            <SheetTrigger asChild>
                                <Button variant="outline" size="icon">
                                    <Menu />
                                    <span className="sr-only">Abrir menú</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="bottom" className="bg-background/90 backdrop-blur-lg border-primary/20 text-white">
                                <SheetHeader>
                                    <SheetTitle className="text-primary font-headline">Menú</SheetTitle>
                                </SheetHeader>
                                <div className="grid gap-4 py-4 text-center text-lg">
                                    <SheetClose asChild>
                                        <a href="#strategy" className="hover:text-primary transition-colors block py-2">Estrategia</a>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <a href="#plans" className="hover:text-primary transition-colors block py-2">Planes</a>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <a href="#affiliates" className="hover:text-primary transition-colors block py-2">Casinos</a>
                                    </SheetClose>
                                    <SheetClose asChild>
                                        <a href="#calculator" className="hover:text-primary transition-colors block py-2">Calculadora</a>
                                    </SheetClose>
                                </div>
                            </SheetContent>
                        </Sheet>
                    )}
                </div>
            </div>
        </nav>
    );
};
