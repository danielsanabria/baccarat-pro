import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/use-mobile';

const StrategyCard = ({ className, title, description, icon }: { className?: string, title: string, description: string, icon: string }) => (
    <Card className={`${className} opacity-0 max-w-sm bg-card/60 backdrop-blur-md border-primary/30 shadow-2xl shadow-black/50`}>
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

const MobileStrategyCard = ({ title, description, icon }: { title: string, description: string, icon: string }) => (
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
    const isMobile = useIsMobile();
    
    if (isMobile) {
        return (
            <section id="strategy" className="relative flex flex-col items-center justify-center py-16 px-8 bg-background">
                <MobileStrategyCard className="strategy-1" title="The Key Bets" description="Focus on Player and Banker bets. Our system reveals the statistical advantages and helps you make informed decisions." icon="Player & Banker" />
                <MobileStrategyCard className="strategy-2" title="Third Card Rule" description="Demystify the game's most complex rule. Learn to anticipate the draw and adjust your strategy accordingly." icon="Third Card" />
                <MobileStrategyCard className="strategy-3" title="Side Bets & Risk" description="Understand the high-risk, high-reward nature of Tie and Pair bets. We teach you when to take calculated risks." icon="Tie & Pair" />
            </section>
        )
    }

    return (
        <section id="strategy" className="absolute inset-0">
            <div className="absolute inset-0 flex items-center justify-start p-8 md:p-16">
              <StrategyCard className="strategy-1" title="The Key Bets" description="Focus on Player and Banker bets. Our system reveals the statistical advantages and helps you make informed decisions." icon="Player & Banker" />
            </div>
            <div className="absolute inset-0 flex items-center justify-end p-8 md:p-16">
              <StrategyCard className="strategy-2" title="Third Card Rule" description="Demystify the game's most complex rule. Learn to anticipate the draw and adjust your strategy accordingly." icon="Third Card" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-16">
               <StrategyCard className="strategy-3" title="Side Bets & Risk" description="Understand the high-risk, high-reward nature of Tie and Pair bets. We teach you when to take calculated risks." icon="Tie & Pair" />
            </div>
        </section>
    );
};
