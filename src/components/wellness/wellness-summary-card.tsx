/**
 * @fileoverview Card component to display wellness summary, including today's progress and 7-day history.
 */
"use client"

import { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { StoredChallengeHistory } from '@/app/wellness/page';
import type { Challenge } from '@/constants/wellness-challenges';
import { Sun, Cloud, CloudSun, Zap, Wind } from 'lucide-react';
import { format, subDays } from 'date-fns';
import { fr } from 'date-fns/locale';

interface WellnessSummaryCardProps {
    history: StoredChallengeHistory[];
    dailyChallenges: Challenge[];
}

const getWellnessWeather = (completedCount: number, totalChallenges: number) => {
    if (totalChallenges === 0) return { 
        Icon: Wind,
        message: `Un nouveau jour se lève.`,
        description: "Prêt(e) à relever votre premier défi de bien-être ?",
        color: "text-muted-foreground"
    };

    const percentage = (completedCount / totalChallenges) * 100;
    
    if (percentage === 100) return { 
        Icon: Zap,
        message: `Journée Électrisante !`,
        description: "Vous avez accompli tous les défis. Quelle énergie !",
        color: "text-yellow-400"
    };
    if (percentage >= 75) return { 
        Icon: Sun,
        message: `Météo Radieuse !`,
        description: "Belle performance aujourd'hui, le soleil brille sur votre bien-être.",
        color: "text-orange-500"
    };
    if (percentage >= 50) return { 
        Icon: CloudSun,
        message: `Belles Éclaircies.`,
        description: "Vous êtes à mi-chemin, une belle journée pour prendre soin de soi.",
        color: "text-blue-500"
    };
    if (percentage > 0) return { 
        Icon: Cloud,
        message: `Un peu nuageux.`,
        description: "Chaque défi complété est un pas dans la bonne direction.",
        color: "text-gray-500"
    };
    return { 
        Icon: Wind,
        message: `Un nouveau jour se lève.`,
        description: "Prêt(e) à relever votre premier défi de bien-être ?",
        color: "text-muted-foreground"
    };
}


export function WellnessSummaryCard({ history, dailyChallenges }: WellnessSummaryCardProps) {

    const totalChallenges = dailyChallenges.length;

    const chartData = useMemo(() => {
        const last7Days = Array.from({ length: 7 }).map((_, i) => {
            const d = subDays(new Date(), 6 - i);
            return format(d, 'yyyy-MM-dd');
        });

        return last7Days.map(dateStr => {
            const entry = history.find(h => h.date === dateStr);
            const completed = entry ? Object.values(entry.statuses).filter(Boolean).length : 0;
            return {
                name: format(new Date(dateStr), "EEE", { locale: fr }),
                défis: completed
            }
        })
    }, [history]);
    
    const todayStr = new Date().toISOString().split("T")[0];
    const todaysEntry = history.find(h => h.date === todayStr);
    const completedToday = todaysEntry ? Object.values(todaysEntry.statuses).filter(Boolean).length : 0;
    const { Icon, message, description, color } = getWellnessWeather(completedToday, totalChallenges);


    return (
        <Card className="mb-8">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                    <div>
                        <CardTitle className="flex items-center gap-2">
                             <Icon className={`size-6 ${color}`} />
                            {message}
                        </CardTitle>
                        <CardDescription>{description}</CardDescription>
                    </div>
                    <div className="text-right">
                        <p className="text-2xl font-bold">{completedToday}/{totalChallenges}</p>
                        <p className="text-xs text-muted-foreground">Défis du jour</p>
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="h-[100px] w-full">
                     <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={chartData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                            <XAxis
                                dataKey="name"
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#888888"
                                fontSize={12}
                                tickLine={false}
                                axisLine={false}
                                allowDecimals={false}
                                domain={[0, totalChallenges > 0 ? totalChallenges : 4]}
                            />
                             <Tooltip 
                                cursor={{fill: 'hsl(var(--muted))'}}
                                contentStyle={{
                                    background: "hsl(var(--background))",
                                    border: "1px solid hsl(var(--border))",
                                    borderRadius: "var(--radius)"
                                }}
                             />
                            <Bar dataKey="défis" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}
