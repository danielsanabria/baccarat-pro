
"use client"
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqItems = [
    { question: '¿Qué es exactamente lo que ofrecen? ¿Un software?', answer: 'No, no vendemos un software. Vendemos un servicio de señales premium. Nuestro equipo de analistas, apoyado por un sistema de inteligencia artificial, monitorea las mesas de Baccarat 24/7. Cuando detectamos una apuesta de alta probabilidad, enviamos una alerta a nuestros miembros. Tú solo recibes la instrucción y apuestas.' },
    { question: '¿Cómo recibo las señales?', answer: 'A través de un canal exclusivo de Telegram. Es instantáneo, discreto y puedes recibir las notificaciones directamente en tu móvil donde quiera que estés.' },
    { question: '¿Por qué hay un canal Gratis y otro VIP?', answer: 'El canal gratuito es para que puedas comprobar la efectividad de nuestro análisis con algunas señales seleccionadas. El canal VIP es para nuestros miembros serios: reciben muchas más señales al día, tienen acceso prioritario, análisis más detallados y soporte directo de nuestro equipo para aplicar la estrategia correctamente.' },
    { question: '¿Necesito instalar algo o tener conocimientos técnicos?', answer: 'Absolutamente nada. Solo necesitas tener la aplicación de Telegram instalada en tu móvil o computador. Nosotros hacemos todo el trabajo pesado de análisis.' },
    { question: '¿Qué estrategia de apuestas usan?', answer: 'Recomendamos seguir nuestras señales utilizando la estrategia Martingala, que es muy sencilla de aplicar. Si pierdes una apuesta, te indicaremos cómo duplicar en la siguiente señal para recuperar lo perdido y asegurar una ganancia. Es la forma más disciplinada de gestionar tu capital.' },
    { question: '¿Me garantizan que voy a ganar dinero?', answer: 'No podemos garantizar legalmente ganancias, ya que el juego siempre conlleva un riesgo. Lo que sí te garantizamos es que cada señal que enviamos ha pasado por un riguroso proceso de análisis de datos para maximizar las probabilidades a tu favor. Estarás apostando con una ventaja que la mayoría de los jugadores ni sueñan tener.' },
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
