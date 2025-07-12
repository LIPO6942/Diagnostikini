/**
 * @fileoverview Health record page component with smart symptom tracking and document management.
 */
"use client";

import { useState, useEffect, useMemo } from 'react';
import type { HealthRecord } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BookHeart, FileText, PlusCircle, TriangleAlert, Trash2, FileImage, FileKey2, Pencil } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { getHealthRecords, deleteHealthRecord } from '@/services/health-record-service';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { AddDocumentDialog } from '@/components/record/add-document-dialog';
import { Separator } from '@/components/ui/separator';

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
            <p className="text-muted-foreground mt-2">L'historique de vos consultations et documents apparaîtra ici.</p>
            <div className="flex justify-center gap-2 mt-4">
                <AddDocumentDialog onRecordUpdate={() => { /* This will be handled by the parent component's refresh logic */ }} />
                <Button asChild variant="outline">
                    <Link href="/">Démarrer une consultation IA</Link>
                </Button>
            </div>
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

const categoryIcons = {
    'Consultation IA': <FileKey2 className="h-5 w-5 text-primary" />,
    'Bilan': <FileText className="h-5 w-5 text-blue-500" />,
    'Ordonnance': <FileText className="h-5 w-5 text-green-500" />,
    'Autre': <FileText className="h-5 w-5 text-gray-500" />,
}

export default function HealthRecordPage() {
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();

  const refreshRecords = () => {
    setRecords(getHealthRecords());
  }

  useEffect(() => {
    refreshRecords();
    setIsMounted(true);
  }, []);

  const handleDeleteRecord = (id: string) => {
    deleteHealthRecord(id);
    refreshRecords();
    toast({
        title: "Dossier supprimé",
        description: "Le dossier de santé a été supprimé avec succès.",
    });
  };

  const recurringSymptom = useMemo(() => {
    if (records.length < 2) return null;
    
    const aiConsultations = records.filter(r => r.category === 'Consultation IA');
    const diagnosisCounts: Record<string, number> = {};
    const recentRecords = aiConsultations.slice(0, 5); // Check last 5 AI records

    for (const record of recentRecords) {
        if(record.title){
            diagnosisCounts[record.title] = (diagnosisCounts[record.title] || 0) + 1;
            if (diagnosisCounts[record.title] >= 2) { // Trigger alert on 2nd occurrence
                return record.title;
            }
        }
    }
    
    return null;
  }, [records]);


  if (!isMounted) {
    return <HealthRecordSkeleton />;
  }

  const groupedRecords = records.reduce((acc, record) => {
    const category = record.category || 'Autre';
    if(!acc[category]) acc[category] = [];
    acc[category].push(record);
    return acc;
  }, {} as Record<string, HealthRecord[]>);
  
  const categories = ['Consultation IA', 'Bilan', 'Ordonnance', 'Autre'];


  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Dossier de santé</h1>
          <p className="text-muted-foreground">Un journal de vos consultations et documents.</p>
        </div>
        <AddDocumentDialog onRecordUpdate={refreshRecords} />
      </div>

      {recurringSymptom && <RecurringSymptomAlert symptom={recurringSymptom} />}
      
      {records.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-8">
          {categories.map(category => (
            groupedRecords[category] && (
                <div key={category}>
                    <h2 className="text-xl font-semibold mb-3">{category}</h2>
                     <div className="space-y-4">
                        {groupedRecords[category].map(record => (
                            <Card key={record.id} className={record.title === recurringSymptom ? "border-destructive" : ""}>
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                <CardTitle className="flex items-center gap-2">
                                    {categoryIcons[record.category as keyof typeof categoryIcons] || categoryIcons['Autre']}
                                    {record.title}
                                </CardTitle>
                                <CardDescription>{record.date}</CardDescription>
                                </div>
                            </CardHeader>
                            <CardContent>
                                {record.symptoms && (
                                <>
                                    <p className="font-semibold text-sm">Symptômes signalés :</p>
                                    <p className="text-muted-foreground text-sm mb-4">{record.symptoms}</p>
                                </>
                                )}
                                {record.summary && (
                                <>
                                    <p className="font-semibold text-sm">Résumé généré par l'IA :</p>
                                    <p className="text-muted-foreground text-sm">{record.summary}</p>
                                </>
                                )}
                                {record.documents && record.documents.length > 0 && (
                                    <>
                                        <Separator className="my-4" />
                                        <p className="font-semibold text-sm mb-2">Documents ({record.documents.length}) :</p>
                                        <div className="flex flex-wrap gap-2">
                                            {record.documents.map((doc, index) => (
                                                <a 
                                                    key={index}
                                                    href={doc.dataUrl} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="relative focus:outline-none focus:ring-2 focus:ring-ring rounded-md size-20 group"
                                                >
                                                    {doc.mimeType.startsWith('image/') ? (
                                                        <Image
                                                            src={doc.dataUrl}
                                                            alt={doc.name}
                                                            fill
                                                            className="rounded-md object-cover border"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full rounded-md border bg-secondary flex flex-col items-center justify-center p-2 text-center">
                                                            <FileText className="size-8 text-secondary-foreground"/>
                                                            <span className="text-xs text-secondary-foreground truncate w-full mt-1">{doc.name}</span>
                                                        </div>
                                                    )}
                                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <span className="text-white text-xs font-bold">Ouvrir</span>
                                                    </div>
                                                </a>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </CardContent>
                            <CardFooter className="justify-end gap-2">
                                <AddDocumentDialog 
                                  existingRecord={record}
                                  onRecordUpdate={refreshRecords} 
                                  triggerButton={
                                    <Button variant="outline" size="sm">
                                      <Pencil className="mr-2 h-4 w-4" />
                                      Modifier
                                    </Button>
                                  }
                                />
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
                </div>
            )
          ))}
        </div>
      )}
    </div>
  );
}
