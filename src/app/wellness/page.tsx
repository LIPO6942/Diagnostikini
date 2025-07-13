/**
 * @fileoverview Wellness page component displaying various health tips and daily challenges.
 */
"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { wellnessTips } from "@/constants/wellness";
import { dailyChallenges } from "@/constants/wellness-challenges";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Award } from "lucide-react";
import Image from 'next/image';

const WELLNESS_CHALLENGES_KEY = "wellnessChallenges";

type ChallengeStatus = {
  [key: string]: boolean;
};

type StoredChallenges = {
  date: string;
  statuses: ChallengeStatus;
};

function DailyChallenges() {
  const [challenges, setChallenges] = useState<ChallengeStatus>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const todayStr = new Date().toISOString().split("T")[0];
    const storedData = localStorage.getItem(WELLNESS_CHALLENGES_KEY);

    if (storedData) {
      const parsed: StoredChallenges = JSON.parse(storedData);
      if (parsed.date === todayStr) {
        setChallenges(parsed.statuses);
      } else {
        // New day, reset challenges
        resetChallenges();
      }
    }
    setIsMounted(true);
  }, []);

  const updateChallengeStatus = (id: string, completed: boolean) => {
    const newChallenges: ChallengeStatus = { ...challenges, [id]: completed };
    setChallenges(newChallenges);

    const todayStr = new Date().toISOString().split("T")[0];
    const dataToStore: StoredChallenges = {
      date: todayStr,
      statuses: newChallenges,
    };
    localStorage.setItem(WELLNESS_CHALLENGES_KEY, JSON.stringify(dataToStore));
  };
  
  const resetChallenges = () => {
    const initialChallenges: ChallengeStatus = {};
    dailyChallenges.forEach(c => initialChallenges[c.id] = false);
    setChallenges(initialChallenges);
    localStorage.removeItem(WELLNESS_CHALLENGES_KEY);
  }

  if (!isMounted) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" />
            Chargement des défis...
          </CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
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
          const isCompleted = challenges[challenge.id] || false;
          return (
            <div
              key={challenge.id}
              className={cn(
                "flex items-start gap-4 p-4 rounded-lg transition-all",
                isCompleted ? "bg-primary/10 text-muted-foreground" : "bg-card"
              )}
            >
              <Checkbox
                id={challenge.id}
                checked={isCompleted}
                onCheckedChange={(checked) => updateChallengeStatus(challenge.id, !!checked)}
                className="size-6 mt-1"
              />
              <div className="grid gap-1.5">
                <label
                  htmlFor={challenge.id}
                  className={cn(
                    "font-semibold cursor-pointer",
                    isCompleted && "line-through"
                  )}
                >
                  {challenge.title}
                </label>
                <p className="text-sm text-muted-foreground">
                  {challenge.description}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
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

      <div className="grid md:grid-cols-2 gap-6">
        {wellnessTips.map((item) => (
          <Card key={item.category} className="overflow-hidden">
            <div className="relative h-48 w-full">
               <Image src={item.image.src} alt={item.category} layout="fill" objectFit="cover" data-ai-hint={item.image.hint} />
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
  );
}
