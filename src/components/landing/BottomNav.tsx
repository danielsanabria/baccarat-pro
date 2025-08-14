
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
        { label: 'Testimonios', href: '#testimonials' },
        { label: 'Preguntas', href: '#faq' },
    ];
    
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/70 backdrop-blur-md border-t border-white/10 z-50">
            <div className="container mx-auto h-full flex items-center justify-between px-4">
                <a href="#hero" className="font-headline text-xl text-primary hover:text-amber-300 transition-colors">
                    Baccarat Pro
                </a>
                
                <div className="flex items-center gap-2">
                     <a href="#cta">
                        <Button className="bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">Regístrate</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};
