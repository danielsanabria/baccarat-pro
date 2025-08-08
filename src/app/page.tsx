
"use client";

import React, { useRef, useLayoutEffect, useEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { HeroSection } from '@/components/landing/HeroSection';
import { StrategySection } from '@/components/landing/StrategySection';
import { VideoSection } from '@/components/landing/VideoSection';
import { TestimonialsSection } from '@/components/landing/TestimonialsSection';
import { FaqSection } from '@/components/landing/FaqSection';
import { CtaSection } from '@/components/landing/CtaSection';
import { BottomNav } from '@/components/landing/BottomNav';

gsap.registerPlugin(ScrollTrigger);

export default function BaccaratProPage() {
  const mainRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLImageElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top top',
          end: '+=20000',
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
      tl.addLabel('strategy', 6);
      tl.to('.hero-section', { opacity: 0, duration: 1 }, 'strategy-=1');
      tl.to(backgroundRef.current, { x: '-15%', y: '-10%', scale: 1.8, duration: 4 }, 'strategy');
      tl.fromTo('.strategy-1', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 2 }, 'strategy+=1');
      
      tl.addLabel('strategy-2', 11);
      tl.to('.strategy-1', { opacity: 0, x: -100, duration: 1 }, 'strategy-2-=1');
      tl.to(backgroundRef.current, { x: '0%', y: '15%', scale: 2, duration: 4 }, 'strategy-2');
      tl.fromTo('.strategy-2', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 2 }, 'strategy-2+=1');
      
      tl.addLabel('strategy-3', 16);
      tl.to('.strategy-2', { opacity: 0, x: 100, duration: 1 }, 'strategy-3-=1');
      tl.to(backgroundRef.current, { x: '10%', y: '-5%', scale: 2.2, duration: 4 }, 'strategy-3');
      tl.fromTo('.strategy-3', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2 }, 'strategy-3+=1');
      
      // 3. Video Section
      tl.addLabel('videos', 21);
      tl.to('.strategy-3', { opacity: 0, duration: 1 }, 'videos-=1');
      tl.to(backgroundRef.current, { x: '0%', y: '0%', scale: 1.3, duration: 4 }, 'videos');
      tl.fromTo('.video-section', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 2 }, 'videos+=1');

      // 4. Testimonials Section
      tl.addLabel('testimonials', 26);
      tl.to('.video-section', { opacity: 0, duration: 1 }, 'testimonials-=1');
      tl.to(backgroundRef.current, { x: '25%', y: '10%', scale: 1.6, duration: 4 }, 'testimonials');
      tl.fromTo('.testimonials-section', { opacity: 0 }, { opacity: 1, duration: 2 }, 'testimonials+=1');
      tl.fromTo('.testimonial-chip', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.4, duration: 1.6 }, 'testimonials+=1.4');

      // 5. FAQ Section
      tl.addLabel('faq', 31);
      tl.to('.testimonials-section', { opacity: 0, duration: 1 }, 'faq-=1');
      tl.to(backgroundRef.current, { x: '-20%', y: '-15%', scale: 1.5, duration: 4 }, 'faq');
      tl.fromTo('.faq-section', { opacity: 0 }, { opacity: 1, duration: 2 }, 'faq+=1');

      // 6. CTA Section
      tl.addLabel('cta', 36);
      tl.to('.faq-section', { opacity: 0, duration: 1 }, 'cta-=1');
      tl.to(backgroundRef.current, { scale: 1, x: '0%', y: '0%', duration: 4 }, 'cta');
      tl.fromTo('.cta-section', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 2 }, 'cta+=1');

    }, mainRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const handleNavClick = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const anchor = target.closest('a');
        if (!anchor) return;
        
        const href = anchor.getAttribute('href');
        if (!href || !href.startsWith('#') || !timelineRef.current) return;

        e.preventDefault();
        const label = href.substring(1);
        const time = timelineRef.current.labels[label];
        
        if (typeof time !== 'undefined') {
            const scrollTrigger = ScrollTrigger.getById('main-timeline');
            if (scrollTrigger) {
                const scrollPosition = scrollTrigger.start + (time / timelineRef.current.duration()) * (scrollTrigger.end - scrollTrigger.start);
                gsap.to(window, { scrollTo: { y: scrollPosition, autoKill: false }, duration: 1.5, ease: 'power2.inOut' });
            }
        }
    };
    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);
  
  return (
    <div ref={mainRef} className="bg-background">
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          ref={backgroundRef}
          src="https://freeimage.host/i/FsW4sfI.jpg"
          alt="Baccarat Table"
          width={2560}
          height={1440}
          priority
          data-ai-hint="baccarat table"
          className="absolute top-0 left-0 w-full h-full object-cover origin-center"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0">
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
