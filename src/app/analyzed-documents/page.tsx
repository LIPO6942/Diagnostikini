/**
 * @fileoverview Page for managing and viewing AI consultations.
 */
"use client";

import { useState, useEffect, useMemo } from 'react';
import type { HealthRecord, HealthDocument } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BookHeart, FileText, PlusCircle, TriangleAlert, Trash2, FileKey2, Pencil, Eye, Search, CalendarIcon, User, Undo2, Pill } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { Button, buttonVariants } from '@/components/ui/button';
import { getHealthRecords, deleteHealthRecord, getDocumentDataUrl } from '@/services/health-record-service';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { useToast } from '@/hooks/use-toast';
import { AddDocumentDialog } from '@/components/record/add-document-dialog';
import { Separator } from '@/components/ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import { Input } from '@/components/ui/input';
import { fr } from 'date-fns/locale';

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
                <FileKey2 className="size-8" />
            </div>
            <h3 className="text-xl font-semibold">Aucune consultation trouvée</h3>
            <p className="text-muted-foreground mt-2">L'historique de vos consultations IA apparaîtra ici.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 mt-4">
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

export default function ConsultationsPage() {
  const [allRecords, setAllRecords] = useState<HealthRecord[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<HealthRecord[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();
  
  const [titleFilter, setTitleFilter] = useState('');
  const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);


  const refreshRecords = () => {
    const records = getHealthRecords().filter(r => r.category === 'Consultation IA');
    setAllRecords(records);
  }

  useEffect(() => {
    refreshRecords();
    setIsMounted(true);
  }, []);

  const handleResetFilters = () => {
    setTitleFilter('');
    setDateFilter(undefined);
  }

  useEffect(() => {
    if (!isMounted) return;
    let records = [...allRecords];
    if (titleFilter) {
      records = records.filter(record => 
        record.title?.toLowerCase().includes(titleFilter.toLowerCase())
      );
    }
    if (dateFilter) {
      const formattedDateFilter = format(dateFilter, 'yyyy-MM-dd');
      records = records.filter(record => 
        record.date && format(new Date(record.date), 'yyyy-MM-dd') === formattedDateFilter
      );
    }
    setFilteredRecords(records);

  }, [titleFilter, dateFilter, allRecords, isMounted]);

  const handleDeleteRecord = async (id: string) => {
    await deleteHealthRecord(id);
    refreshRecords();
    toast({
        title: "Dossier supprimé",
        description: "La consultation a été supprimée avec succès.",
    });
  };

  const recurringSymptom = useMemo(() => {
    if (allRecords.length < 2) return null;
    
    const diagnosisCounts: Record<string, number> = {};
    const recentRecords = allRecords.slice(0, 5);

    for (const record of recentRecords) {
        if(record.title){
            diagnosisCounts[record.title] = (diagnosisCounts[record.title] || 0) + 1;
            if (diagnosisCounts[record.title] >= 2) {
                return record.title;
            }
        }
    }
    
    return null;
  }, [allRecords]);


  if (!isMounted) {
    return <HealthRecordSkeleton />;
  }

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Historique des Consultations</h1>
          <p className="text-muted-foreground">Un journal de vos consultations avec l'assistant IA.</p>
        </div>
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Filtrer les consultations
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                <Input 
                    placeholder="Filtrer par diagnostic..."
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                    className="pl-9"
                />
            </div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className="w-full sm:w-auto justify-start text-left font-normal"
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateFilter ? format(dateFilter, "PPP", { locale: fr }) : <span>Filtrer par date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={dateFilter}
                  onSelect={setDateFilter}
                  initialFocus
                  locale={fr}
                />
              </PopoverContent>
            </Popover>
             <Button onClick={handleResetFilters} variant="ghost" size="icon">
                <Undo2 className="h-4 w-4" />
                <span className="sr-only">Réinitialiser</span>
             </Button>
        </CardContent>
      </Card>

      {recurringSymptom && <RecurringSymptomAlert symptom={recurringSymptom} />}
      
      {allRecords.length === 0 ? (
        <EmptyState />
      ) : filteredRecords.length === 0 ? (
         <Card className="text-center p-8">
            <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-secondary text-secondary-foreground">
                <Search className="size-8" />
            </div>
            <h3 className="text-xl font-semibold">Aucune consultation ne correspond</h3>
            <p className="text-muted-foreground mt-2">Essayez d'ajuster vos filtres de recherche.</p>
        </Card>
      ) : (
        <div className="space-y-4">
            {filteredRecords.map(record => (
                <Card key={record.id} className={record.title === recurringSymptom ? "border-destructive" : ""}>
                <CardHeader>
                    <div className="flex justify-between items-start">
                        <div className="flex-1">
                            <CardTitle className="flex items-center gap-2">
                                <FileKey2 className="h-5 w-5 text-primary" />
                                {record.title}
                            </CardTitle>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                                {record.date && <div className="flex items-center gap-1.5"><CalendarIcon className="size-3" />{format(new Date(record.date), "d MMMM yyyy", { locale: fr })}</div>}
                            </div>
                        </div>
                        <CardDescription>{format(new Date(record.id), "d MMM yy", { locale: fr })}</CardDescription>
                    </div>
                </CardHeader>
                <CardContent className="space-y-4">
                    {record.symptoms && (
                    <>
                        <p className="font-semibold text-sm">Symptômes signalés :</p>
                        <p className="text-muted-foreground text-sm">{record.symptoms}</p>
                    </>
                    )}
                    {record.summary && (
                    <>
                        <p className="font-semibold text-sm">Résumé généré par l'IA :</p>
                        <p className="text-muted-foreground text-sm">{record.summary}</p>
                    </>
                    )}
                </CardContent>
                <CardFooter className="justify-end gap-2">
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
                                    Cette action est irréversible. La consultation sera définitivement supprimée de votre appareil.
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
