
"use client";

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

import { HeroSection } from '@/components/landing/HeroSection';
import { StrategySection } from '@/components/landing/StrategySection';
import { VideoSection } from '@/components/landing/VideoSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { BottomNav } from '@/components/landing/BottomNav';
import { useIsMobile } from '@/hooks/use-mobile';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const DesktopExperience = () => {
    const mainRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const sections = gsap.utils.toArray('section:not(#hero)');
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: 'top top',
                    end: `+=${(sections.length + 1) * 1000}`, // Adjusted end
                    scrub: 1.5,
                    pin: true,
                    id: 'main-timeline'
                },
            });
            timelineRef.current = tl;

            tl.to('.hero-section', { scale: 0.8, opacity: 0.5, duration: 1});

            sections.forEach((section, index) => {
              const el = section as HTMLElement;
              const label = el.id;
              tl.addLabel(label, index + 1);

              if (el.style.opacity === "0") {
                  tl.fromTo(el, { y: 100 }, { opacity: 1, y: 0, duration: 0.5 });
              }
              
              if (index < sections.length -1) {
                tl.to(el, { opacity: 0, y: -100, duration: 0.5}, '+=1');
              }
            })

        }, mainRef);
        return () => ctx.revert();
    }, []);

    useEffect(() => {
        const handleNavClick = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const anchor = target.closest('a');
            if (!anchor) return;
            
            const href = anchor.getAttribute('href');
            if (!href || !href.startsWith('#')) return;
            
            e.preventDefault();
            const elementId = href.substring(1);

            if (elementId === 'hero') {
                gsap.to(window, {
                    scrollTo: {
                        y: 0, 
                        autoKill: false,
                    },
                    duration: 1.5,
                    ease: 'power2.inOut'
                });
                return;
            }

            if (timelineRef.current) {
                const mainTimelineTrigger = ScrollTrigger.getById('main-timeline');
                if (mainTimelineTrigger) {
                    const time = timelineRef.current.labels[elementId];
                    if (typeof time !== 'undefined') {
                        const scrollPos = mainTimelineTrigger.start + (time / timelineRef.current.duration()) * (mainTimelineTrigger.end - mainTimelineTrigger.start);
                        
                        gsap.to(window, {
                            scrollTo: {
                                y: scrollPos, 
                                autoKill: false,
                                offsetY: 100
                            },
                            duration: 1.5,
                            ease: 'power2.inOut'
                        });
                    }
                }
            }
        };
        document.addEventListener('click', handleNavClick);
        return () => document.removeEventListener('click', handleNavClick);
    }, []);

    return (
        <div ref={mainRef}>
            <div className='relative h-screen w-full overflow-hidden'>
                <HeroSection />
                <StrategySection />
                <VideoSection />
                <TestimonialsSection />
                <FaqSection />
                <CtaSection />
            </div>
            <BottomNav />
        </div>
    );
};


const MobileExperience = () => {
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
        <div className="relative">
            <main>
                <HeroSection />
                <StrategySection />
                <VideoSection />
                <TestimonialsSection />
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

  return isMobile ? <MobileExperience /> : <DesktopExperience />;
}
