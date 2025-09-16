
"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
    { question: '¿Qué es exactamente lo que ofrecen? ¿Un software?', answer: 'No, es un servicio gratuito de análisis. Usamos un bot con una alta tasa de acierto para detectar los mejores momentos para apostar. Luego, compartimos esas oportunidades en directo a través de una llamada de Google Meet. Tú solo tienes que unirte y seguir nuestras indicaciones.' },
    { question: '¿Cómo recibo las señales?', answer: 'Las "señales" se dan en vivo. Publicamos el enlace a la llamada de Google Meet en nuestro canal de Telegram. Por eso es crucial que tengas las notificaciones activadas para no perderte el aviso y poder unirte a tiempo.' },
    { question: '¿Por qué es gratis? ¿Dónde está el truco?', answer: 'No hay truco. De momento, nuestro servicio es 100% gratuito. Queremos construir una comunidad fuerte de ganadores y demostrar la efectividad de nuestro sistema. En el futuro podríamos ofrecer servicios premium, pero ahora mismo puedes beneficiarte sin coste alguno.' },
    { question: '¿Necesito instalar algo o tener conocimientos técnicos?', answer: 'Solo necesitas tener Telegram para recibir los enlaces y Google Meet para unirte a los directos. No requiere ninguna instalación ni conocimiento técnico. Nosotros hacemos todo el análisis complejo.' },
    { question: '¿Qué estrategia de apuestas usan?', answer: 'Usamos la estrategia Martingala como sistema de gestión. Nuestro bot nos indica el momento estadísticamente más favorable para entrar. Si se pierde una apuesta, la estrategia nos guía para recuperar y asegurar una ganancia en la siguiente oportunidad.' },
    { question: '¿Me garantizan que voy a ganar dinero?', answer: 'No podemos garantizar legalmente ganancias, ya que el juego siempre implica riesgo. Lo que sí te aseguramos es que cada operación se basa en un análisis estadístico profundo para maximizar las probabilidades a tu favor. Estarás apostando con una ventaja matemática, no al azar.' },
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
