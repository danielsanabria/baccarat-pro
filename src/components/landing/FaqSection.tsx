"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useIsMobile } from '@/hooks/use-mobile';

const faqItems = [
    { question: '¿El Baccarat es un juego de suerte o de habilidad?', answer: 'El Baccarat es principalmente un juego de azar, pero entender las estrategias de apuesta, la gestión del bankroll y la regla de la tercera carta puede mejorar significativamente tus probabilidades y resultados a largo plazo.' },
    { question: '¿Cuál es la mejor apuesta en Baccarat?', answer: 'Estadísticamente, la apuesta al Banquero (Banker) tiene la ventaja de la casa más baja (alrededor del 1.06%), lo que la convierte en la apuesta más favorable a lo largo del tiempo, incluso con la comisión del 5% sobre las ganancias.' },
    { question: '¿Cómo funciona la regla de la tercera carta?', answer: 'La regla de la tercera carta es un conjunto de reglas fijas que determina si el Jugador (Player) o el Banquero (Banker) reciben una tercera carta. Nuestra plataforma ofrece guías visuales detalladas para ayudarte a dominar estas reglas sin esfuerzo.' },
    { question: '¿Puedo usar estas estrategias en cualquier casino?', answer: 'Sí, los principios de la estrategia de Baccarat son universales. Nuestra plataforma te enseña a aplicarlos en cualquier entorno, ya sea que juegues en línea o en una mesa de casino en vivo.' },
];
  

export const FaqSection = () => {
    const isMobile = useIsMobile();
    const sectionClasses = isMobile
        ? "relative flex flex-col items-center justify-center p-8 bg-background"
        : "faq-section absolute inset-0 flex flex-col items-center justify-center opacity-0 p-8";

    return (
        <section id="faq" className={sectionClasses}>
            <div className="w-full max-w-3xl">
              <h2 className="font-headline text-4xl md:text-5xl text-white text-center mb-8" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>Preguntas Frecuentes</h2>
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
