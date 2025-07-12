/**
 * @fileoverview Health record page component with smart symptom tracking.
 */
"use client";

import { useState, useEffect, useMemo } from 'react';
import type { HealthRecord } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BookHeart, FileText, TriangleAlert, Trash2 } from 'lucide-react';
import Link from 'next/link';
import { Button, buttonVariants } from '@/components/ui/button';
import { getHealthRecords, deleteHealthRecord } from '@/services/health-record-service';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';

function HealthRecordSkeleton() {
  return (
    <div className="space-y-4">
      {[...Array(3)].map((_, i) => (
         <Card key={i} className="animate-pulse">
          <CardHeader>
            <div className="h-6 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/4 mt-2"></div>
          </CardHeader>
          <CardContent>
            <div className="h-4 bg-muted rounded w-full"></div>
            <div className="h-4 bg-muted rounded w-full mt-2"></div>
            <div className="h-4 bg-muted rounded w-2/3 mt-2"></div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function EmptyState() {
    return (
        <Card className="text-center p-8">
            <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-secondary text-secondary-foreground">
                <BookHeart className="size-8" />
            </div>
            <h3 className="text-xl font-semibold">Aucun dossier trouvé</h3>
            <p className="text-muted-foreground mt-2">L'historique de vos consultations apparaîtra ici.</p>
            <Button asChild className="mt-4">
                <Link href="/">Démarrer une nouvelle consultation</Link>
            </Button>
        </Card>
    );
}

function RecurringSymptomAlert({ symptom }: { symptom: string }) {
    return (
        <Alert variant="destructive">
            <TriangleAlert className="h-4 w-4" />
            <AlertTitle>Suivi Intelligent</AlertTitle>
            <AlertDescription>
                Nous avons remarqué que le symptôme <span className="font-semibold">"{symptom}"</span> a été enregistré plusieurs fois récemment. Si ce problème persiste, veuillez consulter un professionnel de santé.
            </AlertDescription>
        </Alert>
    )
}

export default function HealthRecordPage() {
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    setRecords(getHealthRecords());
    setIsMounted(true);
  }, []);

  const handleDeleteRecord = (id: string) => {
    deleteHealthRecord(id);
    setRecords(getHealthRecords()); // Refresh records from storage
    toast({
        title: "Dossier supprimé",
        description: "Le dossier de santé a été supprimé avec succès.",
    });
  };

  const recurringSymptom = useMemo(() => {
    if (records.length < 2) return null;
    
    const symptomCounts: Record<string, number> = {};
    const recentRecords = records.slice(0, 5); // Check last 5 records

    for (const record of recentRecords) {
        // Use diagnosis as the key for recurrence check
        const key = record.diagnosis;
        symptomCounts[key] = (symptomCounts[key] || 0) + 1;
        if (symptomCounts[key] >= 2) { // Trigger alert on 2nd occurrence
            return key;
        }
    }
    
    return null;
  }, [records]);


  if (!isMounted) {
    return <HealthRecordSkeleton />;
  }

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Dossier de santé</h1>
          <p className="text-muted-foreground">Un journal de vos consultations passées.</p>
        </div>
      </div>

      {recurringSymptom && <RecurringSymptomAlert symptom={recurringSymptom} />}
      
      {records.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {records.map(record => (
            <Card key={record.id} className={record.diagnosis === recurringSymptom ? "border-destructive" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {record.diagnosis}
                  </CardTitle>
                  <CardDescription>{record.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sm">Symptômes signalés :</p>
                <p className="text-muted-foreground text-sm mb-4">{record.symptoms}</p>
                <p className="font-semibold text-sm">Résumé généré par l'IA :</p>
                <p className="text-muted-foreground text-sm">{record.summary}</p>
              </CardContent>
              <CardFooter className="justify-end">
                <AlertDialog>
                    <AlertDialogTrigger asChild>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive hover:bg-destructive/10">
                            <Trash2 className="mr-2 h-4 w-4" />
                            Supprimer
                        </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                        <AlertDialogHeader>
                            <AlertDialogTitle>Êtes-vous sûr de vouloir supprimer ?</AlertDialogTitle>
                            <AlertDialogDescription>
                                Cette action est irréversible. Le dossier de santé sera définitivement supprimé de votre appareil.
                            </AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <AlertDialogCancel>Annuler</AlertDialogCancel>
                            <AlertDialogAction onClick={() => handleDeleteRecord(record.id)} className={buttonVariants({ variant: "destructive" })}>
                                Supprimer
                            </AlertDialogAction>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
