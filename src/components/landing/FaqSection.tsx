"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';

const faqItems = [
    { question: 'Is Baccarat a game of luck or skill?', answer: 'Baccarat is primarily a game of chance, but understanding betting strategies, bankroll management, and the third card rule can significantly improve your odds and long-term results.' },
    { question: 'What is the best bet in Baccarat?', answer: 'Statistically, the Banker bet has the lowest house edge (around 1.06%), making it the most favorable bet over time, even with the 5% commission on winnings.' },
    { question: 'How does the Third Card Rule work?', answer: 'The Third Card Rule is a fixed set of rules that determines if the Player or Banker receives a third card. Our platform provides detailed visual guides to help you master these rules effortlessly.' },
    { question: 'Can I use these strategies in any casino?', answer: 'Yes, the principles of Baccarat strategy are universal. Our platform teaches you to apply them in any setting, whether you are playing online or at a live casino table.' },
];
  

export const FaqSection = () => {
    const isMobile = useIsMobile();
    const sectionClasses = isMobile
        ? "relative flex flex-col items-center justify-center p-8 bg-background"
        : "faq-section absolute inset-0 flex flex-col items-center justify-center opacity-0 p-8";

    return (
        <section id="faq" className={sectionClasses}>
            <div className="w-full max-w-3xl">
              <h2 className="font-headline text-4xl md:text-5xl text-white text-center mb-8" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>Frequently Asked Questions</h2>
              <Accordion type="single" collapsible className="w-full bg-card/60 backdrop-blur-sm rounded-lg border border-primary/30 p-2 md:p-4">
                {faqItems.map((item, i) => (
                  <AccordionItem value={`item-${i}`} key={i} className="border-b-primary/20 data-[state=open]:border-b-primary/50 transition-colors">
                    <AccordionTrigger className="text-left font-headline text-lg text-white/90 hover:text-primary transition-colors data-[state=open]:text-primary">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70 pt-2">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
        </section>
    );
};
