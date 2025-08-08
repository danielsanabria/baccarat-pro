
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

export default function BaccaratProPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);
  const isMobile = useIsMobile();

  useLayoutEffect(() => {
    if (isMobile) {
      // On mobile, we want a normal scrolling experience.
      // We can reveal sections with simple scroll triggers.
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
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top top',
          end: '+=30000',
          scrub: 1.5,
          pin: true,
          id: 'main-timeline'
        },
      });
      timelineRef.current = tl;

      // 1. Hero: Initial state
      tl.addLabel('hero', 0);
      tl.to(backgroundRef.current, { scale: 1.2, duration: 4 }, 0);
      tl.fromTo('.hero-card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 2 }, 1);
      tl.fromTo('.hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, 1);

      // 2. Strategy Section
      tl.addLabel('strategy', 12);
      tl.to('.hero-section', { opacity: 0, duration: 2 }, 'strategy-=2');
      tl.to(backgroundRef.current, { x: '-15%', y: '-10%', scale: 1.8, duration: 8 }, 'strategy');
      tl.fromTo('.strategy-1', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 4 }, 'strategy+=2');
      
      tl.addLabel('strategy-2', 24);
      tl.to('.strategy-1', { opacity: 0, x: -100, duration: 2 }, 'strategy-2-=2');
      tl.to(backgroundRef.current, { x: '0%', y: '15%', scale: 2, duration: 8 }, 'strategy-2');
      tl.fromTo('.strategy-2', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 4 }, 'strategy-2+=2');
      
      tl.addLabel('strategy-3', 36);
      tl.to('.strategy-2', { opacity: 0, x: 100, duration: 2 }, 'strategy-3-=2');
      tl.to(backgroundRef.current, { x: '10%', y: '-5%', scale: 2.2, duration: 8 }, 'strategy-3');
      tl.fromTo('.strategy-3', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 4 }, 'strategy-3+=2');
      
      // 3. Video Section
      tl.addLabel('videos', 48);
      tl.to('.strategy-3', { opacity: 0, duration: 2 }, 'videos-=2');
      tl.to(backgroundRef.current, { x: '0%', y: '0%', scale: 1.3, duration: 8 }, 'videos');
      tl.fromTo('.video-section', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 4 }, 'videos+=2');

      // 4. Testimonials Section
      tl.addLabel('testimonials', 60);
      tl.to('.video-section', { opacity: 0, duration: 2 }, 'testimonials-=2');
      tl.to(backgroundRef.current, { x: '25%', y: '10%', scale: 1.6, duration: 8 }, 'testimonials');
      tl.fromTo('.testimonials-section', { opacity: 0 }, { opacity: 1, duration: 4 }, 'testimonials+=2');
      tl.fromTo('.testimonial-chip', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.8, duration: 3.2 }, 'testimonials+=2.8');

      // 5. FAQ Section
      tl.addLabel('faq', 72);
      tl.to('.testimonials-section', { opacity: 0, duration: 2 }, 'faq-=2');
      tl.to(backgroundRef.current, { x: '-20%', y: '-15%', scale: 1.5, duration: 8 }, 'faq');
      tl.fromTo('.faq-section', { opacity: 0 }, { opacity: 1, duration: 4 }, 'faq+=2');

      // 6. CTA Section
      tl.addLabel('cta', 84);
      tl.to('.faq-section', { opacity: 0, duration: 2 }, 'cta-=2');
      tl.to(backgroundRef.current, { scale: 1, x: '0%', y: '0%', duration: 8 }, 'cta');
      tl.fromTo('.cta-section', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 4 }, 'cta+=2');

    }, mainRef);
    return () => ctx.revert();
  }, [isMobile]);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        
        e.preventDefault();
        const label = href.substring(1);

        if (isMobile) {
            const element = document.getElementById(label);
            if (element) {
                gsap.to(window, { scrollTo: { y: element.offsetTop, autoKill: false }, duration: 1, ease: 'power2.inOut' });
            }
            return;
        }

        if (timelineRef.current) {
            const time = timelineRef.current.labels[label];
            
            if (typeof time !== 'undefined') {
                const scrollTrigger = ScrollTrigger.getById('main-timeline');
                if (scrollTrigger) {
                    const scrollPosition = scrollTrigger.start + (time / timelineRef.current.duration()) * (scrollTrigger.end - scrollTrigger.start);
                    gsap.to(window, { scrollTo: { y: scrollPosition, autoKill: true }, duration: 1.5, ease: 'power2.inOut' });
                }
            }
        }
    };
    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, [isMobile]);
  
  return (
    <div ref={mainRef} className="bg-background">
      <div className={isMobile ? 'relative' : 'relative h-screen w-full overflow-hidden'}>
        <Image
          ref={backgroundRef}
          src="https://iili.io/FsXRNup.jpg"
          alt="Baccarat Table"
          width={2560}
          height={1440}
          priority
          data-ai-hint="baccarat table cards"
          className="absolute top-0 left-0 w-full h-full object-cover origin-center"
          style={{ display: isMobile ? 'none' : 'block' }}
        />

        <div className="absolute inset-0 bg-black/30" style={{ display: isMobile ? 'none' : 'block' }} />

        <div className={isMobile ? 'relative flex flex-col' : 'absolute inset-0'}>
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
}
