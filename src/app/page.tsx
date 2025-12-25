/**
 * @fileoverview Main page of the application, conditionally rendering either
 * the profile prompt or the symptom checker based on profile completion.
 */
"use client";

import SymptomChecker from "@/components/symptom-checker/symptom-checker";
import { MedicalExportDialog } from "@/components/medical-export/medical-export-dialog";

export default function Home() {

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative w-full flex justify-center mb-4">
        <h1 className="text-3xl font-extrabold text-center text-foreground">
          Ton diagnostic <br /> en quelques clics
        </h1>
        <div className="absolute right-0 top-0 pt-2">
          <MedicalExportDialog />
        </div>
      </div>

      <SymptomChecker />
    </div>
  );
}
