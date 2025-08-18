
"use client";

import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const CalculatorSection = () => {
    const [bankroll, setBankroll] = useState<number | string>(100);

    const handleBankrollChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        if (value === '') {
            setBankroll('');
        } else {
            const numValue = parseFloat(value);
            if (!isNaN(numValue) && numValue >= 0) {
                setBankroll(numValue);
            }
        }
    };

    const martingaleBets = useMemo(() => {
        const numBankroll = typeof bankroll === 'number' ? bankroll : 0;
        if (numBankroll <= 0) return [];
        
        const initialBet = numBankroll * 0.01;
        const bets = [];
        let currentBet = initialBet;

        for (let i = 0; i < 6; i++) {
            bets.push(currentBet);
            currentBet *= 2;
        }
        return bets;
    }, [bankroll]);

    const totalInvestment = useMemo(() => {
        return martingaleBets.reduce((acc, bet) => acc + bet, 0);
    }, [martingaleBets]);
    
    const numBankroll = typeof bankroll === 'number' ? bankroll : 0;


    return (
        <section id="calculator" className="py-16 px-4 bg-background">
            <div className="container mx-auto text-center">
                <h2 className="font-headline text-4xl md:text-5xl text-white mb-4" style={{ textShadow: '0 0 10px hsl(var(--primary) / 0.5)' }}>
                    Calculadora de Estrategia
                </h2>
                <p className="text-white/70 max-w-2xl mx-auto mb-12">
                    Introduce tu bankroll para calcular tu plan de apuestas con la estrategia Martingala. Recomendamos empezar con un 1% de tu capital.
                </p>
                <Card className="max-w-3xl mx-auto bg-card/60 backdrop-blur-sm border-primary/30 p-6 text-left">
                    <CardHeader className="p-0 mb-6">
                        <Label htmlFor="bankroll-input" className="text-white/80 mb-2">Tu Bankroll Inicial (€)</Label>
                        <Input
                            id="bankroll-input"
                            type="number"
                            placeholder="Ej: 100"
                            value={bankroll}
                            onChange={handleBankrollChange}
                            className="bg-input border-primary/40 text-white text-lg"
                        />
                    </CardHeader>
                    <CardContent className="p-0">
                        {martingaleBets.length > 0 ? (
                            <>
                                <Table>
                                    <TableHeader>
                                        <TableRow className="border-primary/20">
                                            <TableHead className="text-white/80 font-bold">Ronda</TableHead>
                                            <TableHead className="text-right text-white/80 font-bold">Apuesta</TableHead>
                                        </TableRow>
                                    </TableHeader>
                                    <TableBody>
                                        {martingaleBets.map((bet, index) => (
                                            <TableRow key={index} className="border-primary/20">
                                                <TableCell className="text-white/90">Ronda {index + 1}</TableCell>
                                                <TableCell className="text-right font-mono text-primary">{bet.toFixed(2)}€</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                <div className="mt-6 pt-4 border-t border-primary/20 text-right">
                                    <p className="text-white/70">Inversión total para 6 rondas:</p>
                                    <p className="text-2xl font-bold text-white">{totalInvestment.toFixed(2)}€</p>
                                    {numBankroll < totalInvestment && (
                                         <p className="text-destructive text-sm mt-2">Atención: Tu bankroll no es suficiente para cubrir 6 rondas. Considera un bankroll mayor o una apuesta inicial menor.</p>
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-8 text-white/50">
                                Introduce un bankroll válido para ver el plan de apuestas.
                            </div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};
