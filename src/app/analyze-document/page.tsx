/**
 * @fileoverview Page for uploading and analyzing health documents with AI.
 */
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { createWorker } from 'tesseract.js';
import { useProfile } from '@/contexts/profile-context';
import { analyzeDocument, type AnalyzeDocumentInput, type AnalyzeDocumentOutput } from '@/ai/flows/analyze-document';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { FileScan, Upload, BrainCircuit, LoaderCircle, Sparkles, AlertTriangle, FilePlus2, ListChecks, FlaskConical, Stethoscope } from 'lucide-react';
import { saveHealthRecord } from '@/services/health-record-service';
import { Skeleton } from '@/components/ui/skeleton';

const analysisFormSchema = z.object({
  file: z.any().refine(file => file?.length > 0, 'Un fichier est requis.'),
  analysisType: z.string().min(3, { message: "Le type d'analyse doit avoir au moins 3 caractères." }),
  analysisDate: z.string().refine((date) => !isNaN(Date.parse(date)), { message: "Date invalide." }),
});

type AnalysisFormValues = z.infer<typeof analysisFormSchema>;

function AnalysisResult({ result, onSave, isLoading }: { result: AnalyzeDocumentOutput, onSave: () => void, isLoading: boolean }) {
  if (!result.analysisItems || result.analysisItems.length === 0) {
    return (
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Aucune donnée détectée</AlertTitle>
        <AlertDescription>
          L'IA n'a pas pu extraire de données mesurables de ce document. Veuillez essayer avec une image plus claire ou un autre document.
        </AlertDescription>
      </Alert>
    )
  }

  const hasAbnormalValues = result.analysisItems.some(item => item.isAbnormal);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ListChecks className="text-primary" />
          Résultats de l'analyse
        </CardTitle>
        {hasAbnormalValues && (
           <Alert variant="destructive" className="mt-2">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Des valeurs hors normes ont été détectées !</AlertTitle>
            <AlertDescription>
              Consultez votre médecin pour discuter de ces résultats. Ceci n'est pas un diagnostic.
            </AlertDescription>
          </Alert>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {result.analysisItems.map((item, index) => (
            <Card key={index} className={item.isAbnormal ? 'border-destructive' : ''}>
              <CardHeader className="p-4">
                <CardTitle className="text-base flex items-center gap-2">
                  <FlaskConical className="size-4" />
                  {item.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0 text-sm">
                <p><strong>Valeur :</strong> {item.value}</p>
                <p className="text-muted-foreground"><strong>Seuil normal :</strong> {item.normalRange}</p>
                {item.isAbnormal && <p className="font-semibold text-destructive mt-1">Hors norme</p>}
              </CardContent>
            </Card>
          ))}
        </div>

        {result.summary && (
          <div className="pt-4 border-t">
            <h4 className="font-semibold mb-2">Résumé de l'IA</h4>
            <p className="text-sm text-muted-foreground whitespace-pre-wrap">{result.summary}</p>
          </div>
        )}
      </CardContent>
      <CardContent>
         <Button onClick={onSave} disabled={isLoading}>
            {isLoading ? <LoaderCircle className="mr-2 animate-spin" /> : <FilePlus2 className="mr-2" />}
            Sauvegarder au dossier
          </Button>
      </CardContent>
    </Card>
  )
}

function AnalysisSkeleton() {
  return (
    <Card>
       <CardHeader>
        <Skeleton className="h-6 w-1/2" />
      </CardHeader>
       <CardContent className="space-y-4">
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(4)].map((_, i) => (
             <Card key={i}>
                <CardHeader className="p-4">
                  <Skeleton className="h-5 w-3/4" />
                </CardHeader>
                <CardContent className="p-4 pt-0 space-y-2">
                  <Skeleton className="h-4 w-1/2" />
                  <Skeleton className="h-4 w-2/3" />
                </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default function AnalyzeDocumentPage() {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [extractedText, setExtractedText] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalyzeDocumentOutput | null>(null);
  const [isOcrLoading, setIsOcrLoading] = useState(false);
  const [isAiLoading, setIsAiLoading] = useState(false);
  const { toast } = useToast();
  const { profile } = useProfile();
  
  const form = useForm<AnalysisFormValues>({
    resolver: zodResolver(analysisFormSchema),
    defaultValues: { analysisDate: new Date().toISOString().split('T')[0] }
  });

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = async () => {
        setImagePreview(reader.result as string);
        setExtractedText(null);
        setAnalysisResult(null);
        setIsOcrLoading(true);
        toast({ title: 'Lecture du document...', description: 'L\'OCR analyse votre image. Cela peut prendre un moment.' });
        try {
          const worker = await createWorker('fra');
          const { data: { text } } = await worker.recognize(reader.result as string);
          await worker.terminate();
          setExtractedText(text);
          toast({ title: 'Texte extrait avec succès !', description: 'Vous pouvez maintenant lancer l\'analyse IA.' });
        } catch(error) {
          console.error(error);
          toast({ variant: 'destructive', title: 'Erreur OCR', description: 'Impossible de lire le texte du document.' });
        } finally {
          setIsOcrLoading(false);
        }
      };
      reader.readAsDataURL(file);
    } else {
      toast({ variant: 'destructive', title: 'Fichier invalide', description: 'Veuillez sélectionner un fichier image.' });
    }
  };

  const onSubmit = async () => {
    if (!extractedText || !imagePreview) {
      toast({ variant: "destructive", title: "Aucun document à analyser." });
      return;
    }
    
    setIsAiLoading(true);
    setAnalysisResult(null);

    try {
      const input: AnalyzeDocumentInput = {
        documentText: extractedText,
        userProfile: profile ?? undefined,
        documentImage: imagePreview,
      };
      const result = await analyzeDocument(input);
      setAnalysisResult(result);
    } catch (error) {
      console.error(error);
      toast({ variant: 'destructive', title: "Erreur d'analyse IA", description: 'Une erreur est survenue.' });
    } finally {
      setIsAiLoading(false);
    }
  };
  
  const handleSaveToRecord = () => {
    const values = form.getValues();
    if (!analysisResult || !imagePreview) return;
    
    const newRecord = {
      id: new Date().toISOString(),
      date: new Date().toISOString(),
      category: 'Bilan' as const,
      title: `Analyse: ${values.analysisType}`,
      doctorName: "Analyse IA",
      treatmentDate: new Date(values.analysisDate).toISOString(),
      summary: analysisResult.summary,
      prescription: analysisResult.analysisItems.map(item => `${item.name}: ${item.value} (Normal: ${item.normalRange})`).join('\n'),
      documents: [{
        id: crypto.randomUUID(),
        name: values.file[0].name,
        mimeType: values.file[0].type
      }]
    };

    saveHealthRecord(newRecord, imagePreview);
    toast({ title: "Analyse sauvegardée", description: "Le document et son analyse ont été ajoutés à votre dossier de santé." });
  };


  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline flex items-center gap-2">
            <FileScan className="w-8 h-8 text-primary" />
            Analyser un document
        </h1>
        <p className="text-muted-foreground">Importez une analyse pour obtenir une lecture intelligente par l'IA.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>1. Importer le document</CardTitle>
          <CardDescription>Sélectionnez une image de votre bilan (sanguin, radio, etc.).</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form className="space-y-4">
               <div className="grid md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="analysisType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Type d'analyse</FormLabel>
                        <FormControl>
                          <Input placeholder="Ex: Bilan sanguin, Rapport de radio..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="analysisDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Date de l'analyse</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
               </div>
               <FormField
                  control={form.control}
                  name="file"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Fichier</FormLabel>
                      <FormControl>
                        <Input type="file" accept="image/*" onChange={e => {
                          field.onChange(e.target.files);
                          handleFileChange(e);
                        }} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
            </form>
          </Form>
        </CardContent>
      </Card>
      
      {imagePreview && (
        <div className="grid md:grid-cols-2 gap-6 items-start">
            <Card>
              <CardHeader>
                <CardTitle>Aperçu du document</CardTitle>
              </CardHeader>
              <CardContent>
                 <Image src={imagePreview} alt="Aperçu du document" width={500} height={700} className="rounded-md border" />
              </CardContent>
            </Card>

            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>2. Lancer l'analyse IA</CardTitle>
                  <CardDescription>Après la lecture du texte, cliquez pour obtenir une interprétation.</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button onClick={onSubmit} disabled={isOcrLoading || isAiLoading || !extractedText} className="w-full">
                    {isOcrLoading && <><LoaderCircle className="mr-2 animate-spin" />Lecture du texte...</>}
                    {isAiLoading && <><BrainCircuit className="mr-2 animate-spin" />Analyse en cours...</>}
                    {!isOcrLoading && !isAiLoading && <><Sparkles className="mr-2" />Analyser avec l'IA</>}
                  </Button>
                   {extractedText && !isAiLoading && !analysisResult &&(
                    <Alert className="mt-4">
                      <Stethoscope className="h-4 w-4" />
                      <AlertTitle>Prêt pour l'analyse !</AlertTitle>
                      <AlertDescription>
                        Le texte a été extrait. Cliquez sur le bouton pour que l'IA l'interprète.
                      </AlertDescription>
                    </Alert>
                  )}
                </CardContent>
              </Card>

              {isAiLoading && <AnalysisSkeleton />}
              
              {analysisResult && <AnalysisResult result={analysisResult} onSave={handleSaveToRecord} isLoading={false} />}
            </div>
        </div>
      )}
    </div>
  );
}
