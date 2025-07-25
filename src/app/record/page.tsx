/**
 * @fileoverview Health record page component with smart symptom tracking and document management.
 */
"use client";

import { useState, useEffect, useMemo } from 'react';
import type { HealthRecord, HealthDocument } from '@/lib/types';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { BookHeart, FileText, PlusCircle, TriangleAlert, Trash2, FileKey2, Pencil, Eye, Search, CalendarIcon, User, Undo2 } from 'lucide-react';
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

function EmptyState({ onRecordUpdate }: { onRecordUpdate: () => void }) {
    return (
        <Card className="text-center p-8">
            <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-secondary text-secondary-foreground">
                <BookHeart className="size-8" />
            </div>
            <h3 className="text-xl font-semibold">Aucun dossier trouvé</h3>
            <p className="text-muted-foreground mt-2">L'historique de vos consultations et documents apparaîtra ici.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-2 mt-4">
                <AddDocumentDialog onRecordUpdate={onRecordUpdate} />
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
    'Radio': <FileText className="h-5 w-5 text-purple-500" />,
    'Scanner': <FileText className="h-5 w-5 text-purple-500" />,
    'IRM': <FileText className="h-5 w-5 text-purple-500" />,
    'Échographie': <FileText className="h-5 w-5 text-purple-500" />,
    'Autre': <FileText className="h-5 w-5 text-gray-500" />,
}

function DocumentPreview({ doc }: { doc: HealthDocument }) {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;
        async function loadPreview() {
            if (doc.mimeType.startsWith('image/')) {
                const url = await getDocumentDataUrl(doc.id);
                if (isMounted && url) {
                    setPreviewUrl(url);
                }
            }
            if(isMounted) setIsLoading(false);
        }
        loadPreview();

        return () => { isMounted = false };
    }, [doc.id, doc.mimeType]);

    const handleOpenDocument = async () => {
        const dataUrl = await getDocumentDataUrl(doc.id);
        if (dataUrl) {
            const newWindow = window.open();
            if (newWindow) {
                if(doc.mimeType.startsWith('image/')){
                     newWindow.document.write(`<img src="${dataUrl}" style="max-width: 100%;">`);
                } else if(doc.mimeType === 'application/pdf') {
                     newWindow.document.write(`<iframe src="${dataUrl}" style="width:100%; height:100%;" frameborder="0"></iframe>`);
                } else {
                     newWindow.location.href = dataUrl;
                }
            }
        }
    };

    return (
        <button 
            onClick={handleOpenDocument}
            className="relative focus:outline-none focus:ring-2 focus:ring-ring rounded-md size-20 group text-left"
        >
            {isLoading ? (
                 <div className="w-full h-full rounded-md border bg-secondary flex items-center justify-center animate-pulse">
                    <FileText className="size-8 text-secondary-foreground/50"/>
                 </div>
            ) : previewUrl ? (
                <Image
                    src={previewUrl}
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
                <Eye className="text-white size-6" />
            </div>
        </button>
    )
}

export default function HealthRecordPage() {
  const [allRecords, setAllRecords] = useState<HealthRecord[]>([]);
  const [filteredRecords, setFilteredRecords] = useState<HealthRecord[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const { toast } = useToast();
  
  const [doctorFilter, setDoctorFilter] = useState('');
  const [dateFilter, setDateFilter] = useState<Date | undefined>(undefined);


  const refreshRecords = () => {
    const records = getHealthRecords();
    setAllRecords(records);
    setFilteredRecords(records);
  }

  useEffect(() => {
    refreshRecords();
    setIsMounted(true);
  }, []);

  const handleResetFilters = () => {
    setDoctorFilter('');
    setDateFilter(undefined);
    setFilteredRecords(allRecords);
  }

  useEffect(() => {
    let records = [...allRecords];
    if (doctorFilter) {
      records = records.filter(record => 
        record.doctorName?.toLowerCase().includes(doctorFilter.toLowerCase())
      );
    }
    if (dateFilter) {
      const formattedDateFilter = format(dateFilter, 'yyyy-MM-dd');
      records = records.filter(record => 
        record.treatmentDate && format(new Date(record.treatmentDate), 'yyyy-MM-dd') === formattedDateFilter
      );
    }
    setFilteredRecords(records);

  }, [doctorFilter, dateFilter, allRecords]);

  const handleDeleteRecord = async (id: string) => {
    await deleteHealthRecord(id);
    refreshRecords();
    toast({
        title: "Dossier supprimé",
        description: "Le dossier de santé a été supprimé avec succès.",
    });
  };

  const recurringSymptom = useMemo(() => {
    if (allRecords.length < 2) return null;
    
    const aiConsultations = allRecords.filter(r => r.category === 'Consultation IA');
    const diagnosisCounts: Record<string, number> = {};
    const recentRecords = aiConsultations.slice(0, 5);

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

  const groupedRecords = filteredRecords.reduce((acc, record) => {
    const category = record.category || 'Autre';
    if(!acc[category]) acc[category] = [];
    acc[category].push(record);
    return acc;
  }, {} as Record<string, HealthRecord[]>);
  
  const categories = ['Consultation IA', 'Ordonnance', 'Bilan', 'Radio', 'Scanner', 'IRM', 'Échographie', 'Autre'];


  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Dossier de santé</h1>
          <p className="text-muted-foreground">Un journal de vos consultations et documents.</p>
        </div>
        <AddDocumentDialog onRecordUpdate={refreshRecords} />
      </div>
      
      <Card>
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Search className="h-5 w-5" />
                Filtrer les dossiers
            </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
                <Input 
                    placeholder="Filtrer par médecin..."
                    value={doctorFilter}
                    onChange={(e) => setDoctorFilter(e.target.value)}
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
        <EmptyState onRecordUpdate={refreshRecords} />
      ) : filteredRecords.length === 0 ? (
         <Card className="text-center p-8">
            <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-secondary text-secondary-foreground">
                <Search className="size-8" />
            </div>
            <h3 className="text-xl font-semibold">Aucun dossier ne correspond</h3>
            <p className="text-muted-foreground mt-2">Essayez d'ajuster vos filtres de recherche.</p>
        </Card>
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
                                <div className="flex justify-between items-start">
                                    <div className="flex-1">
                                        <CardTitle className="flex items-center gap-2">
                                            {categoryIcons[record.category as keyof typeof categoryIcons] || categoryIcons['Autre']}
                                            {record.title}
                                        </CardTitle>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                                            {record.doctorName && <div className="flex items-center gap-1.5"><User className="size-3" />Dr. {record.doctorName}</div>}
                                            {record.treatmentDate && <div className="flex items-center gap-1.5"><CalendarIcon className="size-3" />{format(new Date(record.treatmentDate), "d MMMM yyyy", { locale: fr })}</div>}
                                        </div>
                                    </div>
                                    <CardDescription>{format(new Date(record.id), "d MMM yy", { locale: fr })}</CardDescription>
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
                                                <DocumentPreview key={doc.id || index} doc={doc} />
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
