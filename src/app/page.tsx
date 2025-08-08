
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
    const backgroundRef = useRef<HTMLImageElement>(null);
    const timelineRef = useRef<gsap.core.Timeline | null>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: mainRef.current,
                    start: 'top top',
                    end: '+=40000',
                    scrub: 1.5,
                    pin: true,
                    id: 'main-timeline'
                },
            });
            timelineRef.current = tl;

            tl.addLabel('hero', 0);
            tl.to(backgroundRef.current, { scale: 1.2, duration: 8 }, 0);
            tl.fromTo('.hero-card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 4 }, 1);
            tl.fromTo('.hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 4 }, 1);

            tl.addLabel('strategy', 20);
            tl.to('.hero-section', { opacity: 0, duration: 4 }, 'strategy-=4');
            tl.to(backgroundRef.current, { x: '-15%', y: '-10%', scale: 1.8, duration: 12 }, 'strategy');
            tl.fromTo('.strategy-1', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 6 }, 'strategy+=3');
            
            tl.addLabel('strategy-2', 40);
            tl.to('.strategy-1', { opacity: 0, x: -100, duration: 4 }, 'strategy-2-=4');
            tl.to(backgroundRef.current, { x: '0%', y: '15%', scale: 2, duration: 12 }, 'strategy-2');
            tl.fromTo('.strategy-2', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 6 }, 'strategy-2+=3');
            
            tl.addLabel('strategy-3', 60);
            tl.to('.strategy-2', { opacity: 0, x: 100, duration: 4 }, 'strategy-3-=4');
            tl.to(backgroundRef.current, { x: '10%', y: '-5%', scale: 2.2, duration: 12 }, 'strategy-3');
            tl.fromTo('.strategy-3', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 6 }, 'strategy-3+=3');
            
            tl.addLabel('videos', 80);
            tl.to('.strategy-3', { opacity: 0, duration: 4 }, 'videos-=4');
            tl.to(backgroundRef.current, { x: '0%', y: '0%', scale: 1.3, duration: 12 }, 'videos');
            tl.fromTo('.video-section', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 6 }, 'videos+=3');

            tl.addLabel('testimonials', 100);
            tl.to('.video-section', { opacity: 0, duration: 4 }, 'testimonials-=4');
            tl.to(backgroundRef.current, { x: '25%', y: '10%', scale: 1.6, duration: 12 }, 'testimonials');
            tl.fromTo('.testimonials-section', { opacity: 0 }, { opacity: 1, duration: 6 }, 'testimonials+=3');
            tl.fromTo('.testimonial-chip', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 1, duration: 4 }, 'testimonials+=4');

            tl.addLabel('faq', 120);
            tl.to('.testimonials-section', { opacity: 0, duration: 4 }, 'faq-=4');
            tl.to(backgroundRef.current, { x: '-20%', y: '-15%', scale: 1.5, duration: 12 }, 'faq');
            tl.fromTo('.faq-section', { opacity: 0 }, { opacity: 1, duration: 6 }, 'faq+=3');

            tl.addLabel('cta', 140);
            tl.to('.faq-section', { opacity: 0, duration: 4 }, 'cta-=4');
            tl.to(backgroundRef.current, { scale: 1, x: '0%', y: '0%', duration: 12 }, 'cta');
            tl.fromTo('.cta-section', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 6 }, 'cta+=3');

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
            const label = href.substring(1);

            if (timelineRef.current) {
                const mainTimelineTrigger = ScrollTrigger.getById('main-timeline');
                if (mainTimelineTrigger) {
                    const time = timelineRef.current.labels[label];
                    if (typeof time !== 'undefined') {
                        const scrollPos = mainTimelineTrigger.start + (time / timelineRef.current.duration()) * (mainTimelineTrigger.end - mainTimelineTrigger.start);
                        
                        gsap.to(window, {
                            scrollTo: {
                                y: scrollPos, 
                                autoKill: false,
                                offsetY: 20
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
        <div ref={mainRef} className="bg-background">
            <div className='relative h-screen w-full overflow-hidden'>
                <Image
                    ref={backgroundRef}
                    src="https://iili.io/FsXRNup.jpg"
                    alt="Baccarat Table"
                    width={2560}
                    height={1440}
                    priority
                    data-ai-hint="baccarat table cards"
                    className="absolute top-0 left-0 w-full h-full object-cover origin-center"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className='absolute inset-0'>
                    <HeroSection />
                    <StrategySection />
                    <VideoSection />
                    <TestimonialsSection />
                    <FaqSection />
                    <CtaSection />
                </div>
            </div>
            <BottomNav />
        </div>
    );
};


const MobileExperience = () => {
    useEffect(() => {
        gsap.utils.toArray('section').forEach((section: any) => {
            gsap.fromTo(section,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });

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
        <div className="bg-background relative">
            <div
              className="fixed top-0 left-0 w-full h-screen -z-10"
            >
                <Image
                    src="https://iili.io/FsXRNup.jpg"
                    alt="Baccarat Table"
                    width={2560}
                    height={1440}
                    priority
                    data-ai-hint="baccarat table cards"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            <div className="relative z-10">
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


export default function BaccaratProPage() {
  const isMobile = useIsMobile();

  if (isMobile === undefined) {
    return null; // or a loading spinner
  }

  return isMobile ? <MobileExperience /> : <DesktopExperience />;
}
