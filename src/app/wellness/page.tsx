/**
 * @fileoverview Wellness page component displaying various health tips and daily challenges.
 */
"use client";

import { useState, useEffect, useMemo } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { wellnessTips } from "@/constants/wellness";
import { weekdayChallenges, saturdayChallenges, sundayChallenges, type Challenge } from "@/constants/wellness-challenges";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Award, HelpCircle, Info } from "lucide-react";
import Image from 'next/image';
import { Separator } from "@/components/ui/separator";
import { WellnessSummaryCard } from "@/components/wellness/wellness-summary-card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const WELLNESS_HISTORY_KEY = "wellnessHistory";
const HISTORY_LENGTH_DAYS = 7;

export type ChallengeStatus = {
  [key: string]: boolean;
};

export type StoredChallengeHistory = {
  date: string; // YYYY-MM-DD
  statuses: ChallengeStatus;
};

function getChallengesForToday(): Challenge[] {
    const dayOfWeek = new Date().getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
    if(dayOfWeek === 6) { // Saturday
        return saturdayChallenges;
    }
    if(dayOfWeek === 0) { // Sunday
        return sundayChallenges;
    }
    return weekdayChallenges;
}

function DailyChallenges() {
  const [history, setHistory] = useState<StoredChallengeHistory[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const dailyChallenges = useMemo(() => getChallengesForToday(), []);


  // Helper to get today's date string
  const getTodayStr = () => new Date().toISOString().split("T")[0];

  useEffect(() => {
    let storedData: StoredChallengeHistory[] = [];
    try {
      const item = localStorage.getItem(WELLNESS_HISTORY_KEY);
      storedData = item ? JSON.parse(item) : [];
      if (!Array.isArray(storedData)) storedData = [];
    } catch (e) {
      storedData = [];
    }

    const todayStr = getTodayStr();
    
    // Prune old history
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - (HISTORY_LENGTH_DAYS -1));
    const sevenDaysAgoStr = sevenDaysAgo.toISOString().split("T")[0];

    const recentHistory = storedData.filter(item => item.date >= sevenDaysAgoStr);

    // Check if today's entry exists
    let todayEntry = recentHistory.find(item => item.date === todayStr);

    if (!todayEntry) {
      const initialChallenges: ChallengeStatus = {};
      dailyChallenges.forEach(c => initialChallenges[c.id] = false);
      todayEntry = { date: todayStr, statuses: initialChallenges };
      recentHistory.push(todayEntry);
    }
    
    setHistory(recentHistory);
    setIsMounted(true);

  }, [dailyChallenges]);

  const updateChallengeStatus = (id: string, completed: boolean) => {
    const todayStr = getTodayStr();
    
    setHistory(prevHistory => {
      const newHistory = prevHistory.map(item => {
        if (item.date === todayStr) {
          const newStatuses = { ...item.statuses, [id]: completed };
          return { ...item, statuses: newStatuses };
        }
        return item;
      });

      localStorage.setItem(WELLNESS_HISTORY_KEY, JSON.stringify(newHistory));
      return newHistory;
    });
  };
  
  const resetChallenges = () => {
     const todayStr = getTodayStr();
     setHistory(prevHistory => {
        const newHistory = prevHistory.map(item => {
           if (item.date === todayStr) {
             const initialChallenges: ChallengeStatus = {};
             dailyChallenges.forEach(c => initialChallenges[c.id] = false);
             return { ...item, statuses: initialChallenges };
           }
           return item;
        });
        localStorage.setItem(WELLNESS_HISTORY_KEY, JSON.stringify(newHistory));
        return newHistory;
     });
  }

  const todayChallenges = useMemo(() => {
    const todayStr = getTodayStr();
    return history.find(item => item.date === todayStr)?.statuses || null;
  }, [history]);

  if (!isMounted) {
    return (
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Chargement des défis...
          </CardTitle>
        </CardHeader>
         <CardContent className="space-y-4">
          {dailyChallenges.map((challenge) => (
             <div key={challenge.id} className="flex items-start gap-4 p-4 rounded-lg bg-card animate-pulse">
                <div className="size-6 mt-1 bg-muted rounded"></div>
                 <div className="grid gap-2 w-full">
                    <div className="h-4 w-1/2 bg-muted rounded"></div>
                    <div className="h-3 w-full bg-muted rounded"></div>
                 </div>
             </div>
          ))}
        </CardContent>
      </Card>
    );
  }

  return (
    <>
      <WellnessSummaryCard history={history} dailyChallenges={dailyChallenges} />
      <Card className="bg-primary/5 border-primary/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Vos défis bien-être du jour
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={resetChallenges}>Réinitialiser</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {dailyChallenges.map((challenge) => {
            const isCompleted = todayChallenges ? todayChallenges[challenge.id] || false : false;
            const GuideIcon = challenge.guide.icon;

            return (
              <div
                key={challenge.id}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-lg transition-all",
                  isCompleted ? "bg-primary/10 " : "bg-card"
                )}
              >
                <Checkbox
                  id={challenge.id}
                  checked={isCompleted}
                  onCheckedChange={(checked) => updateChallengeStatus(challenge.id, !!checked)}
                  className="size-6"
                  aria-label={challenge.title}
                />
                <div className="grid gap-1.5 flex-1">
                  <label
                    htmlFor={challenge.id}
                    className={cn(
                      "font-semibold cursor-pointer",
                      isCompleted && "line-through text-muted-foreground"
                    )}
                  >
                    {challenge.title}
                  </label>
                  <p className="text-sm text-muted-foreground">
                    {challenge.description}
                  </p>
                </div>
                 <Dialog>
                    <DialogTrigger asChild>
                         <Button variant="ghost" size="icon" className="text-muted-foreground">
                            <HelpCircle className="size-5" />
                         </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <div className="flex items-center flex-col gap-4 text-center">
                                <div className="p-3 rounded-full bg-primary/10">
                                   <GuideIcon className="size-10 text-primary" />
                                </div>
                                <DialogTitle>{challenge.title}</DialogTitle>
                                <DialogDescription className="text-base">
                                    {challenge.guide.text}
                                </DialogDescription>
                            </div>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  )
}

export default function WellnessPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-headline">Module Bien-être</h1>
        <p className="text-muted-foreground">Conseils et défis pour un mode de vie plus sain.</p>
      </div>

      <DailyChallenges />
      
      <Separator />

      <div>
        <h2 className="text-2xl font-bold font-headline mb-4">Conseils de vie</h2>
        <div className="grid md:grid-cols-2 gap-6">
            {wellnessTips.map((item) => (
            <Card key={item.category} className="overflow-hidden">
                <div className="relative h-48 w-full">
                <Image src={item.image.src} alt={item.category} fill className="object-cover" data-ai-hint={item.image.hint} />
                </div>
                <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <item.icon className="h-6 w-6 text-primary" />
                    {item.category}
                </CardTitle>
                </CardHeader>
                <CardContent>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {item.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                    ))}
                </ul>
                </CardContent>
            </Card>
            ))}
        </div>
      </div>
    </div>
  );
}
