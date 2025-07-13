/**
 * @fileoverview Main page of the application, conditionally rendering either
 * the profile prompt or the symptom checker based on profile completion.
 */
"use client";

import SymptomChecker from "@/components/symptom-checker/symptom-checker";

export default function Home() {

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-3xl font-extrabold text-center text-foreground mb-4">
        Ton diagnostic <br /> en quelques clics
      </h1>

      <SymptomChecker />
    </div>
  );
}
