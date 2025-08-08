
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const StrategyCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
    <Card className="w-full max-w-sm bg-card/80 border-primary/30 shadow-lg my-4">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/50 text-center">
            <span className="font-bold text-primary text-xs leading-tight">{icon}</span>
          </div>
          <CardTitle className="font-headline text-2xl text-primary">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-white/80">{description}</p>
      </CardContent>
    </Card>
);

export const StrategySection = () => {
    return (
        <section id="strategy" className="relative flex flex-col items-center justify-center py-16 px-8 bg-background">
            <div className="flex flex-col md:flex-row md:flex-wrap md:justify-center gap-8">
                <StrategyCard title="Apuestas Clave" description="Concéntrate en las apuestas al Jugador y al Banquero. Nuestro sistema revela las ventajas estadísticas y te ayuda a tomar decisiones informadas." icon="Jugador & Banquero" />
                <StrategyCard title="Regla de la Tercera Carta" description="Desmitifica la regla más compleja del juego. Aprende a anticipar el robo de carta y ajusta tu estrategia." icon="Tercera Carta" />
                <StrategyCard title="Apuestas Laterales" description="Comprende el alto riesgo y la alta recompensa de las apuestas a Empate (Tie) y Pares (Pair). Te enseñamos cuándo tomar riesgos calculados." icon="Empate & Pares" />
            </div>
        </section>
    )
};
