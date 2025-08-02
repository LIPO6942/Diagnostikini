/**
 * @fileoverview Card component to display wellness summary, including today's progress and 7-day history.
 */
"use client"

import { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"
import type { StoredChallengeHistory } from '@/app/wellness/page';
import { weekdayChallenges, saturdayChallenges, sundayChallenges, type Challenge } from '@/constants/wellness-challenges';
import { Sun, Cloud, CloudSun, Zap, Wind, TrendingUp, Award, Activity } from 'lucide-react';
import { format, subDays, getDay } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Separator } from '../ui/separator';

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

const getWeeklyMotivation = (average: number) => {
    if (average >= 75) return { 
        Icon: Award,
        message: "Quelle constance impressionnante !",
        color: "text-primary"
    };
    if (average >= 50) return { 
        Icon: TrendingUp,
        message: "Vous construisez une routine solide. Continuez !",
        color: "text-green-500"
    };
     if (average > 0) return { 
        Icon: Activity,
        message: "Chaque jour compte. Beau début de routine !",
        color: "text-blue-500"
    };
    return { 
        Icon: Activity,
        message: "Prêt à démarrer une nouvelle semaine ?",
        color: "text-muted-foreground"
    };
}


export function WellnessSummaryCard({ history, dailyChallenges }: WellnessSummaryCardProps) {

    const totalChallenges = dailyChallenges.length;

    const { chartData, weeklyAverage } = useMemo(() => {
        let totalCompleted = 0;
        let totalPossible = 0;

        const last7Days = Array.from({ length: 7 }).map((_, i) => {
            const d = subDays(new Date(), 6 - i);
            return {
                date: d,
                dateStr: format(d, 'yyyy-MM-dd'),
                dayOfWeek: getDay(d) // 0 for Sunday, 6 for Saturday
            }
        });

        const chartPoints = last7Days.map(dayInfo => {
            let challengesForDay: Challenge[];
            if (dayInfo.dayOfWeek === 6) { // Saturday
                challengesForDay = saturdayChallenges;
            } else if (dayInfo.dayOfWeek === 0) { // Sunday
                challengesForDay = sundayChallenges;
            } else { // Weekday
                challengesForDay = weekdayChallenges;
            }
            totalPossible += challengesForDay.length;

            const entry = history.find(h => h.date === dayInfo.dateStr);
            const completed = entry ? Object.values(entry.statuses).filter(Boolean).length : 0;
            totalCompleted += completed;

            return {
                name: format(dayInfo.date, "EEE", { locale: fr }),
                défis: completed
            }
        });

        const average = totalPossible > 0 ? (totalCompleted / totalPossible) * 100 : 0;

        return { chartData: chartPoints, weeklyAverage: average };
    }, [history]);
    
    const todayStr = new Date().toISOString().split("T")[0];
    const todaysEntry = history.find(h => h.date === todayStr);
    const completedToday = todaysEntry ? Object.values(todaysEntry.statuses).filter(Boolean).length : 0;
    
    const { Icon, message, description, color } = getWellnessWeather(completedToday, totalChallenges);
    const { Icon: WeeklyIcon, message: weeklyMessage, color: weeklyColor } = getWeeklyMotivation(weeklyAverage);


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
                                domain={[0, Math.max(4, ...chartData.map(d => d.défis))]}
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
                <Separator className="my-4" />
                <div className="flex items-center justify-center gap-4 text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-2xl font-bold">{Math.round(weeklyAverage)}%</p>
                        <p className="text-xs text-muted-foreground">Constance (7j)</p>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                        <WeeklyIcon className={`size-5 ${weeklyColor}`} />
                        <span className="font-medium">{weeklyMessage}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
