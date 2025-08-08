import React from 'react';
import { Button } from '../ui/button';

export const BottomNav = () => {
    const navItems = [
        { label: 'Strategy', href: '#strategy' },
        { label: 'Videos', href: '#videos' },
        { label: 'Testimonials', href: '#testimonials' },
        { label: 'FAQ', href: '#faq' },
    ];
    return (
        <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/70 backdrop-blur-md border-t border-white/10 z-50">
            <div className="container mx-auto h-full flex items-center justify-center md:justify-between px-4">
                <a href="#hero" className="font-headline text-xl text-primary hover:text-amber-300 transition-colors">
                    Baccarat Pro
                </a>
                <div className="hidden md:flex items-center gap-2 text-sm font-medium text-white/80">
                    {navItems.map(item => (
                         <a key={item.label} href={item.href}>
                             <Button variant="ghost" className="hover:bg-primary/10 hover:text-primary transition-colors">{item.label}</Button>
                         </a>
                    ))}
                    <a href="#cta">
                        <Button className="ml-4 bg-primary text-primary-foreground hover:bg-amber-500 transition-colors">Join Now</Button>
                    </a>
                </div>
            </div>
        </nav>
    );
};

    