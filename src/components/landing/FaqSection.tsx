
"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  { question: '¿Qué es Baccarat Pro y cómo funciona?', answer: 'Baccarat Pro es un canal de Telegram donde compartimos señales de apuestas para Baccarat. Utilizamos un sistema de análisis para identificar las mejores oportunidades y te las enviamos en tiempo real para que puedas apostar con ventaja.' },
  { question: '¿Necesito experiencia previa en Baccarat?', answer: 'No, en absoluto. Nuestras señales son claras y fáciles de seguir. Te decimos exactamente dónde y cuándo apostar. Es ideal tanto para principiantes como para jugadores experimentados que quieren optimizar sus ganancias.' },
  { question: '¿Es un servicio de pago? ¿Hay costes ocultos?', answer: 'Actualmente, el acceso a nuestro canal de señales es completamente gratuito. Podríamos ofrecer planes premium en el futuro, pero siempre seremos transparentes con los costes. No hay trucos ni cargos ocultos.' },
  { question: '¿Qué estrategia de apuestas recomiendan?', answer: 'Promovemos el uso de la estrategia Martingala para la gestión de tu bankroll. Nuestras señales están diseñadas para funcionar de manera óptima con este sistema, ayudándote a recuperar pérdidas y asegurar ganancias.' },
  { question: '¿Garantizan que voy a ganar dinero?', answer: 'El juego siempre conlleva un riesgo y no podemos garantizar legalmente las ganancias. Sin embargo, nuestro sistema está diseñado para maximizar tus probabilidades de éxito a largo plazo, basándose en análisis estadísticos y no en la suerte.' },
  { question: '¿En qué casinos puedo usar las señales?', answer: 'Nuestras señales son aplicables a la mayoría de las mesas de Baccarat online. En la sección "Nuestros Casinos" recomendamos algunos operadores donde nuestra estrategia ha sido probada y funciona bien.' },
];
  

export const FaqSection = () => {
    const sectionClasses = "relative flex flex-col items-center justify-center p-8 bg-background";

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
