"use client";

import React, { useRef, useLayoutEffect } from 'react';
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

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainRef.current,
          start: 'top top',
          end: '+=7000',
          scrub: 1,
          pin: true,
        },
      });

      // 1. Hero: Initial state
      tl.to(backgroundRef.current, { scale: 1.2, duration: 2 }, 0);
      tl.fromTo('.hero-card', { y: 100, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.2, duration: 1 }, 0.5);
      tl.fromTo('.hero-text', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, 0.5);

      // 2. Strategy Section: Pan to Player/Banker bets
      tl.to('.hero-section', { opacity: 0, duration: 0.5 }, 2);
      tl.to(backgroundRef.current, { x: '-15%', y: '-10%', scale: 1.8, duration: 2 }, 2);
      tl.fromTo('.strategy-1', { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1 }, 2.5);
      
      // 3. Pan to Third Card Area
      tl.to('.strategy-1', { opacity: 0, x: -100, duration: 0.5 }, 4.5);
      tl.to(backgroundRef.current, { x: '0%', y: '15%', scale: 2, duration: 2 }, 4.5);
      tl.fromTo('.strategy-2', { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1 }, 5);

      // 4. Pan to Tie Bet Area
      tl.to('.strategy-2', { opacity: 0, x: 100, duration: 0.5 }, 7);
      tl.to(backgroundRef.current, { x: '10%', y: '-5%', scale: 2.2, duration: 2 }, 7);
      tl.fromTo('.strategy-3', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 1 }, 7.5);
      
      // 5. Video Section
      tl.to('.strategy-3', { opacity: 0, duration: 0.5 }, 9.5);
      tl.to(backgroundRef.current, { x: '0%', y: '0%', scale: 1.3, duration: 2 }, 9.5);
      tl.fromTo('.video-section', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1 }, 10);

      // 6. Testimonials Section
      tl.to('.video-section', { opacity: 0, duration: 0.5 }, 12);
      tl.to(backgroundRef.current, { x: '25%', y: '10%', scale: 1.6, duration: 2 }, 12);
      tl.fromTo('.testimonials-section', { opacity: 0 }, { opacity: 1, duration: 1 }, 12.5);
      tl.fromTo('.testimonial-chip', { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: 0.2, duration: 0.8 }, 12.7);

      // 7. FAQ Section
      tl.to('.testimonials-section', { opacity: 0, duration: 0.5 }, 14.5);
      tl.to(backgroundRef.current, { x: '-20%', y: '-15%', scale: 1.5, duration: 2 }, 14.5);
      tl.fromTo('.faq-section', { opacity: 0 }, { opacity: 1, duration: 1 }, 15);

      // 8. CTA Section
      tl.to('.faq-section', { opacity: 0, duration: 0.5 }, 17);
      tl.to(backgroundRef.current, { scale: 1, x: '0%', y: '0%', duration: 2 }, 17);
      tl.fromTo('.cta-section', { opacity: 0, scale: 1.2 }, { opacity: 1, scale: 1, duration: 1 }, 17.5);

    }, mainRef);
    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={mainRef} className="bg-background">
      <div className="relative h-screen w-full overflow-hidden">
        <Image
          ref={backgroundRef}
          src="https://placehold.co/2560x1440.png"
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
