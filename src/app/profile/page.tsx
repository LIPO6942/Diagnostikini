// src/app/profile/page.tsx
"use client";
import * as React from "react";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useProfile } from "@/contexts/profile-context";
import { UserProfileSchema, type UserProfile } from "@/lib/types";
import { Checkbox } from "@/components/ui/checkbox";
import {
  medicalHistoryOptions,
  allergyOptions,
  treatmentOptions,
  additionalSymptomOptions,
  hereditaryDiseaseOptions,
  relationshipOptions,
} from "@/constants/profile-options";
import { Skeleton } from "@/components/ui/skeleton";

// -----------------------------------------------------------------------------
// Dynamic form field groups (medical history, allergies, etc.)
// -----------------------------------------------------------------------------
const formFields = [
  { name: "medicalHistory", label: "Antécédents médicaux", options: medicalHistoryOptions, formKey: "conditions" },
  { name: "allergies", label: "Allergies", options: allergyOptions, formKey: "items" },
  { name: "currentTreatments", label: "Traitements en cours", options: treatmentOptions, formKey: "medications" },
  { name: "additionalSymptoms", label: "Symptômes généraux supplémentaires", options: additionalSymptomOptions, formKey: "symptoms" },
] as const;


// -----------------------------------------------------------------------------
// Helper component displayed while the profile is loading
// -----------------------------------------------------------------------------
function ProfileFormSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-10 w-full" />
          </div>
        </div>
        <Skeleton className="h-10 w-48" />
      </CardContent>
    </Card>
  );
}

// -----------------------------------------------------------------------------
// Main profile page component
// -----------------------------------------------------------------------------
export default function ProfilePage() {
  const { profile, saveProfile, isProfileComplete } = useProfile();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<UserProfile>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: profile || {
      age: undefined,
      sex: undefined,
      bloodGroup: undefined,
      weight: undefined,
      medicalHistory: { conditions: [], other: "" },
      allergies: { items: [], other: "" },
      currentTreatments: { medications: [], other: "" },
      additionalSymptoms: { symptoms: [], other: "" },
      familyHistory: [],
    },
  });



  function onSubmit(values: UserProfile) {
    console.log("💾 Saving profile:", values);
    saveProfile(values);
    toast({
      title: "Profil sauvegardé",
      description: "Vos informations ont été mises à jour. Vous allez être redirigé.",
    });
    router.push("/");
  }

  // ---------------------------------------------------------------------------
  // Render loading skeleton while profile completeness is being determined
  // ---------------------------------------------------------------------------
  if (isProfileComplete === undefined) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
              <User className="w-8 h-8 text-primary" />
              Votre Profil
            </h1>
            <p className="text-muted-foreground">
              Ces informations aident l'IA à fournir des analyses plus pertinentes.
            </p>
          </div>
        </div>
        <ProfileFormSkeleton />
      </div>
    );
  }

  // ---------------------------------------------------------------------------
  // Main form UI
  // ---------------------------------------------------------------------------
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
            <User className="w-8 h-8 text-primary" />
            Votre Profil
          </h1>
          <p className="text-muted-foreground">
            Ces informations aident l'IA à fournir des analyses plus pertinentes.
          </p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Informations Personnelles</CardTitle>
          <CardDescription>
            Toutes les données sont stockées localement sur votre appareil et ne sont jamais partagées.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {/* Age */}
              <FormField
                control={form.control}
                name="age"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="age">Âge</FormLabel>
                    <FormControl>
                      <Input
                        id="age"
                        type="number"
                        placeholder="Ex: 35"
                        {...field}
                        onChange={e =>
                          field.onChange(e.target.value === "" ? "" : Number(e.target.value))
                        }
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Sex */}
              <FormField
                control={form.control}
                name="sex"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="sex">
                      Sexe <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value ?? ""} name="sex" id="sex">
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="homme">Homme</SelectItem>
                        <SelectItem value="femme">Femme</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Weight */}
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="weight">Poids (kg)</FormLabel>
                    <FormControl>
                      <Input
                        id="weight"
                        type="number"
                        placeholder="Ex: 70"
                        {...field}
                        onChange={e =>
                          field.onChange(e.target.value === "" ? "" : Number(e.target.value))
                        }
                        value={field.value ?? ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Blood Group */}
              <FormField
                control={form.control}
                name="bloodGroup"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="bloodGroup">
                      Groupe sanguin <span className="text-red-500">*</span>
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      value={field.value ?? ""}
                      name="bloodGroup"
                      id="bloodGroup"
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="A+">A+</SelectItem>
                        <SelectItem value="A-">A-</SelectItem>
                        <SelectItem value="B+">B+</SelectItem>
                        <SelectItem value="B-">B-</SelectItem>
                        <SelectItem value="AB+">AB+</SelectItem>
                        <SelectItem value="AB-">AB-</SelectItem>
                        <SelectItem value="O+">O+</SelectItem>
                        <SelectItem value="O-">O-</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>Important pour les urgences médicales</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Dynamic sections (medical history, allergies, etc.) */}
              {formFields.map(section => (
                <FormField
                  key={section.name}
                  control={form.control}
                  name={section.name}
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-base">{section.label}</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
                        {section.options.map(item => {
                          const fieldName = `${section.name}.${section.formKey}` as const;
                          return (
                            <FormField
                              key={item}
                              control={form.control}
                              name={fieldName}
                              render={({ field }) => {
                                const values = Array.isArray(field.value) ? field.value : [];
                                return (
                                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                                    <FormControl>
                                      <Checkbox
                                        checked={values.includes(item)}
                                        onCheckedChange={checked => {
                                          if (checked) {
                                            field.onChange([...values, item]);
                                          } else {
                                            field.onChange(values.filter(v => v !== item));
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">{item}</FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          );
                        })}
                        <FormField
                          control={form.control}
                          name={`${section.name}.other`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="font-normal">Autre (veuillez préciser)</FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Si autre, décrivez ici..."
                                  {...field}
                                  value={field.value ?? ""}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    </FormItem>
                  )}
                />
              ))}

              {/* Family History Section */}
              <FormItem className="space-y-4">
                <FormLabel className="text-xl font-bold">Maladies Héréditaires / Antécédents Familiaux</FormLabel>
                <FormDescription>
                  Sélectionnez les maladies présentes dans votre famille et précisez le lien de parenté.
                </FormDescription>
                <div className="space-y-6 pt-4">
                  {hereditaryDiseaseOptions.map((disease) => {
                    const familyHistoryValue = form.watch("familyHistory");
                    const entry = Array.isArray(familyHistoryValue)
                      ? familyHistoryValue.find((f: any) => f.disease === disease)
                      : undefined;
                    const isChecked = !!entry;

                    return (
                      <div key={disease} className="p-4 border rounded-xl bg-card/50 space-y-4">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={`disease-${disease}`}
                            checked={isChecked}
                            onCheckedChange={(checked) => {
                              const current = form.getValues("familyHistory") || [];
                              if (checked) {
                                form.setValue("familyHistory", [...current, { disease, relatives: [] }]);
                              } else {
                                form.setValue("familyHistory", current.filter((f: any) => f.disease !== disease));
                              }
                            }}
                          />
                          <FormLabel htmlFor={`disease-${disease}`} className="text-base font-semibold cursor-pointer">
                            {disease}
                          </FormLabel>
                        </div>

                        {isChecked && (
                          <div className="pl-8 space-y-3 animate-in fade-in slide-in-from-left-2 duration-300">
                            <FormLabel className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                              Membres de la famille concernés :
                            </FormLabel>
                            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                              {relationshipOptions.map((rel) => (
                                <div key={rel} className="flex items-center space-x-2">
                                  <Checkbox
                                    id={`rel-${disease}-${rel}`}
                                    checked={entry.relatives.includes(rel)}
                                    onCheckedChange={(checked) => {
                                      const current = form.getValues("familyHistory") || [];
                                      const updated = current.map((f: any) => {
                                        if (f.disease === disease) {
                                          return {
                                            ...f,
                                            relatives: checked
                                              ? [...f.relatives, rel]
                                              : f.relatives.filter((r: string) => r !== rel),
                                          };
                                        }
                                        return f;
                                      });
                                      form.setValue("familyHistory", updated);
                                    }}
                                  />
                                  <label
                                    htmlFor={`rel-${disease}-${rel}`}
                                    className="text-sm font-normal cursor-pointer"
                                  >
                                    {rel}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </FormItem>

              <Button type="submit">Sauvegarder et continuer</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
