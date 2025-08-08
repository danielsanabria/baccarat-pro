import React from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

export const BottomNav = () => {
    const navItems = [
        { label: 'Estrategia', href: '#strategy' },
        { label: 'Vídeos', href: '#videos' },
        { label: 'Testimonios', href: '#testimonials' },
        { label: 'Preguntas', href: '#faq' },
    ];
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/70 backdrop-blur-md border-t border-white/10 z-50">
            <div className="container mx-auto h-full flex items-center justify-between px-4">
                <a href="#hero" className="font-headline text-xl text-primary hover:text-amber-300 transition-colors">
                    Baccarat Pro
                </a>
                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-2 text-sm font-medium text-white/80">
                    {navItems.map(item => (
                         <a key={item.label} href={item.href}>
                             <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">{item.label}</Button>
                         </a>
                    ))}
                    <a href="#cta">
                        <Button className="ml-4 bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">Regístrate</Button>
                    </a>
                </div>
                {/* Mobile Nav */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="bottom" className="bg-background/90 backdrop-blur-lg border-t-primary/20 text-white">
                           <SheetHeader>
                             <SheetTitle className="sr-only">Menú Principal</SheetTitle>
                           </SheetHeader>
                           <div className="flex flex-col items-center justify-center h-full gap-4 pt-8">
                                {navItems.map(item => (
                                    <SheetClose asChild key={item.label}>
                                        <a href={item.href} className="text-xl font-headline hover:text-primary transition-colors">{item.label}</a>
                                    </SheetClose>
                                ))}
                                <SheetClose asChild>
                                    <a href="#cta">
                                        <Button size="lg" className="mt-4 bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">Regístrate</Button>
                                    </a>
                                </SheetClose>
                           </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </nav>
    );
};
