
"use client";

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { HeroSection } from '@/components/landing/HeroSection';
import { StrategySection } from '@/components/landing/StrategySection';
import { PricingSection } from '@/components/landing/PricingSection';
// import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { BottomNav } from '@/components/landing/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';
import { AffiliateSection } from '@/components/landing/AffiliateSection';
import { CalculatorSection } from '@/components/landing/CalculatorSection';

gsap.registerPlugin(ScrollToPlugin);

const LandingPage = () => {
    useEffect(() => {
        const handleNavClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (!anchor) return;
            
            const href = anchor.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            
            e.preventDefault();
            const elementId = href.substring(1);
            const element = document.getElementById(elementId);

            if (element) {
                gsap.to(window, { duration: 1, scrollTo: { y: element, autoKill: false, offsetY: 20 }, ease: 'power2.inOut' });
            }
        };
        document.addEventListener('click', handleNavClick);
        return () => document.removeEventListener('click', handleNavClick);
    }, []);

    return (
        <div className="relative bg-background">
            <main>
                <HeroSection />
                <StrategySection />
                <PricingSection />
                <AffiliateSection />
                <CalculatorSection />
                {/* <TestimonialsSection /> */}
                <FaqSection />
                <CtaSection />
            </main>
            
            <BottomNav />
        </div>
    );
};


export default function BaccaratProPage() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return (
        <div className="fixed inset-0 bg-background flex items-center justify-center text-white">
            Cargando...
        </div>
    );
  }

  return <LandingPage />;
}
