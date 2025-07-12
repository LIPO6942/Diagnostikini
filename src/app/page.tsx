/**
 * @fileoverview Main page of the application, conditionally rendering either
 * the profile prompt or the symptom checker based on profile completion.
 */
"use client";

import SymptomChecker from "@/components/symptom-checker/symptom-checker";
import { ProfilePrompt } from "@/components/symptom-checker/profile-prompt";
import { useProfile } from "@/contexts/profile-context";
import { Skeleton } from "@/components/ui/skeleton";

function HomePageSkeleton() {
  return (
    <div className="flex flex-col items-center w-full">
      <Skeleton className="h-10 w-3/4 mb-4" />
      <Skeleton className="h-96 w-full max-w-2xl" />
    </div>
  )
}

export default function Home() {
  const { isProfileComplete } = useProfile();

  if (isProfileComplete === undefined) {
    return <HomePageSkeleton />;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-extrabold text-center text-foreground mb-4">
        Ton diagnostic, en quelques clics
      </h1>

      {isProfileComplete ? <SymptomChecker /> : <ProfilePrompt />}
    </div>
  );
}