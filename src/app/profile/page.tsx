/**
 * @fileoverview User profile page for entering personal health information.
 */
"use client";

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
} from "@/constants/profile-options";
import { Skeleton } from "@/components/ui/skeleton";

const formFields = [
  { name: 'medicalHistory', label: 'Antécédents médicaux', options: medicalHistoryOptions, formKey: 'conditions' },
  { name: 'allergies', label: 'Allergies', options: allergyOptions, formKey: 'items' },
  { name: 'currentTreatments', label: 'Traitements en cours', options: treatmentOptions, formKey: 'medications' },
  { name: 'additionalSymptoms', label: 'Symptômes généraux supplémentaires', options: additionalSymptomOptions, formKey: 'symptoms' }
] as const;

function ProfileFormSkeleton() {
  return (
    <Card>
      <CardHeader>
        <Skeleton className="h-8 w-1/3" />
        <Skeleton className="h-4 w-2/3" />
      </CardHeader>
      <CardContent className="space-y-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2"><Skeleton className="h-4 w-16" /><Skeleton className="h-10 w-full" /></div>
          <div className="space-y-2"><Skeleton className="h-4 w-16" /><Skeleton className="h-10 w-full" /></div>
          <div className="space-y-2"><Skeleton className="h-4 w-16" /><Skeleton className="h-10 w-full" /></div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
        <div className="space-y-4">
          <Skeleton className="h-6 w-1/4" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
          </div>
        </div>
        <Skeleton className="h-10 w-48" />
      </CardContent>
    </Card>
  )
}

export default function ProfilePage() {
  const { profile, saveProfile, isProfileComplete } = useProfile();
  const { toast } = useToast();
  const router = useRouter();

  const form = useForm<UserProfile>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: {
      age: undefined,
      sex: undefined,
      bloodGroup: undefined,
      weight: undefined,
      medicalHistory: { conditions: [], other: '' },
      allergies: { items: [], other: '' },
      currentTreatments: { medications: [], other: '' },
      additionalSymptoms: { symptoms: [], other: '' }
    },
  });

  useEffect(() => {
    if (isProfileComplete !== undefined) {
      const defaultValues = {
        age: undefined as number | undefined,
        sex: undefined as 'homme' | 'femme' | undefined,
        bloodGroup: undefined as 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-' | undefined,
        weight: undefined as number | undefined,
        medicalHistory: { conditions: [] as string[], other: '' },
        allergies: { items: [] as string[], other: '' },
        currentTreatments: { medications: [] as string[], other: '' },
        additionalSymptoms: { symptoms: [] as string[], other: '' }
      };

      if (profile) {
        form.reset({
          ...defaultValues,
          ...profile,
          medicalHistory: {
            conditions: profile.medicalHistory?.conditions || [],
            other: profile.medicalHistory?.other || ''
          },
          allergies: {
            items: profile.allergies?.items || [],
            other: profile.allergies?.other || ''
          },
          currentTreatments: {
            medications: profile.currentTreatments?.medications || [],
            other: profile.currentTreatments?.other || ''
          },
          additionalSymptoms: {
            symptoms: profile.additionalSymptoms?.symptoms || [],
            other: profile.additionalSymptoms?.other || ''
          }
        });
      } else {
        form.reset(defaultValues);
      }
    }
  }, [profile, form, isProfileComplete])


  function onSubmit(values: UserProfile) {
    saveProfile(values);
    toast({
      title: "Profil sauvegardé",
      description: "Vos informations ont été mises à jour. Vous allez être redirigé.",
    });
    router.push('/');
  }

  if (isProfileComplete === undefined) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
              <User className="w-8 h-8 text-primary" />
              Votre Profil
            </h1>
            <p className="text-muted-foreground">Ces informations aident l'IA à fournir des analyses plus pertinentes.</p>
          </div>
        </div>
        <ProfileFormSkeleton />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
            <User className="w-8 h-8 text-primary" />
            Votre Profil
          </h1>
          <p className="text-muted-foreground">Ces informations aident l'IA à fournir des analyses plus pertinentes.</p>
        </div>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Informations Personnelles</CardTitle>
          <CardDescription>Toutes les données sont stockées localement sur votre appareil et ne sont jamais partagées.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid md:grid-cols-3 gap-8">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Âge</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 35" {...field} onChange={e => field.onChange(e.target.value === '' ? '' : Number(e.target.value))} value={field.value ?? ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="sex"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Sexe <span className="text-red-500">*</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
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
                <FormField
                  control={form.control}
                  name="weight"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Poids (kg)</FormLabel>
                      <FormControl>
                        <Input type="number" placeholder="Ex: 70" {...field} onChange={e => field.onChange(e.target.value === '' ? '' : Number(e.target.value))} value={field.value ?? ''} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="bloodGroup"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Groupe sanguin <span className="text-red-500">*</span></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value ?? undefined}>
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
                      <FormDescription>
                        Important pour les urgences médicales
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {formFields.map((section) => (
                <FormField
                  key={section.name}
                  control={form.control}
                  name={section.name}
                  render={() => (
                    <FormItem>
                      <FormLabel className="text-base">{section.label}</FormLabel>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-2">
                        {section.options.map((item) => {
                          const fieldName = `${section.name}.${section.formKey}` as const;
                          return (
                            <FormField
                              key={item}
                              control={form.control}
                              name={fieldName}
                              render={({ field }) => {
                                const fieldValue = Array.isArray(field.value) ? field.value : [];
                                return (
                                  <FormItem
                                    key={item}
                                    className="flex flex-row items-start space-x-3 space-y-0"
                                  >
                                    <FormControl>
                                      <Checkbox
                                        checked={fieldValue.includes(item)}
                                        onCheckedChange={(checked) => {
                                          if (checked) {
                                            field.onChange([...fieldValue, item]);
                                          } else {
                                            field.onChange(fieldValue.filter((value: string) => value !== item));
                                          }
                                        }}
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      {item}
                                    </FormLabel>
                                  </FormItem>
                                );
                              }}
                            />
                          );
                        })}
                      </div>
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
                                value={field.value ?? ''}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ))}

              <Button type="submit">Sauvegarder et continuer</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
