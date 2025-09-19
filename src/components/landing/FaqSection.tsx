
"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
  { question: '¿Cómo funciona exactamente el servicio?', answer: 'Te unes a nuestro canal de Telegram gratuito. Cuando nuestro bot, con una alta tasa de acierto, detecta una oportunidad de apuesta basada en estadística, te avisamos para que te unas a un directo en Google Meet. Ahí, operamos juntos en tiempo real.' },
  { question: '¿Necesito experiencia previa en Baccarat?', answer: 'No, en absoluto. Durante el directo te guiaremos sobre cómo y dónde apostar. Es ideal tanto para principiantes como para jugadores que quieren un sistema que minimice el riesgo.' },
  { question: '¿Es un servicio de pago? ¿Hay costes ocultos?', answer: 'Actualmente, el acceso a nuestro canal de Telegram y a las sesiones en directo es completamente gratuito. No hay trucos ni cargos ocultos. Solo pedimos que actives las notificaciones para no perderte ningún directo.' },
  { question: '¿Qué estrategia de apuestas recomiendan?', answer: 'Promovemos el uso de la estrategia Martingala para la gestión de tu capital. Nuestro bot está diseñado para encontrar los momentos de entrada óptimos que se alinean perfectamente con este sistema, ayudándote a recuperar pérdidas y asegurar ganancias.' },
  { question: '¿Garantizan que voy a ganar dinero?', answer: 'El juego siempre conlleva un riesgo y no podemos garantizar legalmente las ganancias. Sin embargo, nuestro sistema está diseñado para maximizar tus probabilidades de éxito a largo plazo, basándose en un análisis estadístico avanzado, no en la suerte.' },
  { question: 'Si no hay señales, ¿cómo sé cuándo apostar?', answer: 'Esa es la clave de nuestro sistema. Solo apostamos cuando las probabilidades están a nuestro favor. Recibirás una notificación en Telegram con el enlace a Google Meet solo cuando nuestro bot confirme una entrada de alta probabilidad. ¡Paciencia y disciplina son la clave!' },
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
