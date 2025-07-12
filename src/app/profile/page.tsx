/**
 * @fileoverview User profile page for entering personal health information.
 */
"use client";

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

export default function ProfilePage() {
  const { profile, saveProfile } = useProfile();
  const { toast } = useToast();
  const router = useRouter();
  
  const form = useForm<UserProfile>({
    resolver: zodResolver(UserProfileSchema),
    defaultValues: profile || {
      age: '',
      sex: 'ne-specifie-pas',
      weight: '',
      medicalHistory: '',
      allergies: '',
      currentTreatments: '',
      additionalSymptoms: ''
    },
  });

  function onSubmit(values: UserProfile) {
    saveProfile(values);
    toast({
      title: "Profil sauvegardé",
      description: "Vos informations ont été mises à jour. Vous allez être redirigé.",
    });
    router.push('/');
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
                        <FormLabel>Sexe</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                            <SelectTrigger>
                                <SelectValue placeholder="Sélectionnez..." />
                            </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value="homme">Homme</SelectItem>
                                <SelectItem value="femme">Femme</SelectItem>
                                <SelectItem value="ne-specifie-pas">Ne pas spécifier</SelectItem>
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
                 </div>
                <FormField
                  control={form.control}
                  name="medicalHistory"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Antécédents médicaux</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Listez vos conditions médicales connues (ex: Diabète, hypertension...)"
                          {...field}
                          value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="allergies"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Allergies</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Listez vos allergies connues (ex: Pénicilline, arachides...)"
                          {...field}
                           value={field.value ?? ''}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="currentTreatments"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Traitements en cours</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Listez les médicaments que vous prenez actuellement"
                          {...field}
                           value={field.value ?? ''}
                        />
                      </FormControl>
                       <FormDescription>
                        Cela aide à éviter les suggestions de remèdes contradictoires.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="additionalSymptoms"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Symptômes généraux supplémentaires</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Décrivez ici tout autre symptôme ou information pertinente (ex: perte d'appétit, déshydratation, insomnie...)"
                          {...field}
                           value={field.value ?? ''}
                        />
                      </FormControl>
                       <FormDescription>
                        Ces informations aideront à affiner l'analyse de l'IA.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit">Sauvegarder et continuer</Button>
              </form>
            </Form>
          </CardContent>
      </Card>
    </div>
  );
}
