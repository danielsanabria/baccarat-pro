
import React from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

export const BottomNav = () => {
    const isMobile = useIsMobile();
    const navItems = [
        { label: 'Estrategia', href: '#strategy' },
        { label: 'Planes', href: '#plans' },
        { label: 'Bonos', href: '#affiliates' },
        { label: 'Testimonios', href: '#testimonials' },
        { label: 'Preguntas', href: '#faq' },
    ];
    
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/70 backdrop-blur-md border-t border-white/10 z-50">
            <div className="container mx-auto h-full flex items-center justify-between px-4">
                <a href="#hero" className="font-headline text-xl text-primary hover:text-amber-300 transition-colors">
                    Baccarat Pro
                </a>
                
                {isMobile ? (
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon"><Menu /></Button>
                        </SheetTrigger>
                        <SheetContent side="bottom" className="bg-background/90 backdrop-blur-lg border-primary/30">
                            <SheetHeader>
                                <SheetTitle className="sr-only">Menú de Navegación</SheetTitle>
                            </SheetHeader>
                            <div className="flex flex-col items-center gap-4 pt-8">
                                {navItems.map((item) => (
                                    <SheetClose asChild key={item.href}>
                                        <a href={item.href} className="text-xl font-headline text-white/80 hover:text-primary transition-colors">{item.label}</a>
                                    </SheetClose>
                                ))}
                                <SheetClose asChild>
                                    <a href="#cta" className="mt-4">
                                        <Button className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors w-full">Regístrate</Button>
                                    </a>
                                </SheetClose>
                            </div>
                        </SheetContent>
                    </Sheet>
                ) : (
                    <div className="flex items-center gap-6">
                        {navItems.map((item) => (
                           <a key={item.href} href={item.href} className="font-headline text-white/80 hover:text-primary transition-colors">{item.label}</a>
                        ))}
                         <a href="#cta">
                            <Button className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">Regístrate</Button>
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};
