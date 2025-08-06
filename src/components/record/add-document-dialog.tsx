/**
 * @fileoverview Dialog component for adding or editing a document in the health record.
 */
"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { PlusCircle, LoaderCircle, Image as ImageIcon, X, FileText, CalendarIcon } from "lucide-react";
import type { HealthRecord, HealthDocument } from "@/lib/types";
import { saveHealthRecord, updateHealthRecord, saveDocumentDataUrl, getDocumentDataUrl, deleteDocumentDataUrl } from "@/services/health-record-service";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';
import { format } from "date-fns";
import { fr } from 'date-fns/locale';
import { analysisTypeOptions } from "@/constants/profile-options";


const addDocumentSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères."),
  category: z.enum(["Bilan", "Ordonnance", "Radio", "Scanner", "IRM", "Échographie", "Autre"]),
  doctorName: z.string().optional(),
  treatmentDate: z.date().optional(),
  prescription: z.string().optional(),
});

type AddDocumentForm = z.infer<typeof addDocumentSchema>;

const fileToDataUrl = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

interface AddDocumentDialogProps {
    onRecordUpdate: () => void;
    existingRecord?: HealthRecord;
    triggerButton?: React.ReactNode;
}

function ExistingDocPreview({doc, onRemove}: {doc: HealthDocument, onRemove: (id: string) => void}) {
    const [previewUrl, setPreviewUrl] = useState<string|null>(null);

    useEffect(() => {
        async function loadUrl() {
            if(doc.mimeType.startsWith('image/')) {
                const url = await getDocumentDataUrl(doc.id);
                setPreviewUrl(url);
            }
        }
        loadUrl();
    }, [doc.id, doc.mimeType]);

    return (
         <div className="relative group">
            {previewUrl ? (
                <Image src={previewUrl} alt={doc.name} width={150} height={150} className="rounded-md object-cover aspect-square border" />
            ) : (
                <div className="rounded-md object-cover aspect-square border bg-secondary flex flex-col items-center justify-center p-2">
                    <FileText className="size-8 text-secondary-foreground"/>
                    <span className="text-xs text-secondary-foreground text-center truncate w-full mt-1">{doc.name}</span>
                </div>
            )}
            <Button
                type="button"
                variant="destructive"
                size="icon"
                className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                onClick={() => onRemove(doc.id)}
            >
                <X className="h-4 w-4"/>
            </Button>
        </div>
    )
}

export function AddDocumentDialog({ onRecordUpdate, existingRecord, triggerButton }: AddDocumentDialogProps) {
  const [open, setOpen] = useState(false);
  const [newFiles, setNewFiles] = useState<File[]>([]);
  const [newFilePreviews, setNewFilePreviews] = useState<string[]>([]);
  const [existingDocuments, setExistingDocuments] = useState<HealthDocument[]>([]);
  const [docsToDelete, setDocsToDelete] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();
  const isEditing = !!existingRecord;
  
  const defaultFormValues: AddDocumentForm = {
    title: "",
    category: "Bilan" as const,
    doctorName: "",
    treatmentDate: undefined,
    prescription: "",
  };

  const form = useForm<AddDocumentForm>({
    resolver: zodResolver(addDocumentSchema),
    defaultValues: defaultFormValues,
  });
  
  const resetState = () => {
    form.reset(defaultFormValues);
    setNewFiles([]);
    newFilePreviews.forEach(url => URL.revokeObjectURL(url));
    setNewFilePreviews([]);
    setExistingDocuments([]);
    setDocsToDelete([]);
    setOpen(false);
    setIsProcessing(false);
  };
  
  useEffect(() => {
    if (open) {
      if (isEditing) {
        form.reset({
            title: existingRecord.title || "",
            category: existingRecord.category || "Bilan",
            doctorName: existingRecord.doctorName || "",
            treatmentDate: existingRecord.treatmentDate ? new Date(existingRecord.treatmentDate) : undefined,
            prescription: existingRecord.prescription || "",
        });
        setExistingDocuments(existingRecord.documents || []);
      } else {
        form.reset(defaultFormValues);
      }
    }
  }, [open, existingRecord, isEditing, form]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files);
      setNewFiles(prev => [...prev, ...filesArray]);
      
      const newPreviews = filesArray.map(file => URL.createObjectURL(file));
      setNewFilePreviews(prev => [...prev, ...newPreviews]);
    }
  };

  const removeNewFile = (index: number) => {
    URL.revokeObjectURL(newFilePreviews[index]);
    setNewFiles(prev => prev.filter((_, i) => i !== index));
    setNewFilePreviews(prev => prev.filter((_, i) => i !== index));
  }

  const removeExistingDoc = (docId: string) => {
    setExistingDocuments(prev => prev.filter(doc => doc.id !== docId));
    setDocsToDelete(prev => [...prev, docId]);
  }

  const onSubmit = async (values: AddDocumentForm) => {
    if (!isEditing && newFiles.length === 0) {
        toast({ variant: "destructive", title: "Veuillez ajouter au moins un document." });
        return;
    }
    
    setIsProcessing(true);

    try {
        await Promise.all(docsToDelete.map(docId => deleteDocumentDataUrl(docId)));

        const newDocuments: HealthDocument[] = [];
        for (const file of newFiles) {
            const dataUrl = await fileToDataUrl(file);
            const docId = crypto.randomUUID();
            await saveDocumentDataUrl(docId, dataUrl);
            newDocuments.push({
                id: docId,
                name: file.name,
                mimeType: file.type,
            });
        }
        
        const recordData = {
          title: values.title,
          category: values.category,
          doctorName: values.doctorName,
          treatmentDate: values.treatmentDate?.toISOString(),
          prescription: values.prescription,
          documents: [...existingDocuments, ...newDocuments],
        };

        if (isEditing) {
            const updatedRecord: HealthRecord = {
              ...existingRecord,
              ...recordData,
            };
            updateHealthRecord(updatedRecord);
            toast({ title: "Document mis à jour", description: "Votre document a été modifié avec succès." });

        } else {
            const newRecord: HealthRecord = {
                id: new Date().toISOString(),
                date: new Date().toISOString(),
                ...recordData
            };
            saveHealthRecord(newRecord);
            toast({ title: "Document ajouté", description: "Votre document a été sauvegardé avec succès." });
        }
        
        onRecordUpdate();
        resetState();
    } catch(error) {
        console.error("Error processing files:", error);
        toast({ variant: "destructive", title: `Erreur lors de la sauvegarde` });
        setIsProcessing(false);
    }
  };

  const dialogTitle = isEditing ? "Modifier le document" : "Ajouter un nouveau document";
  const dialogDescription = isEditing 
    ? "Modifiez les informations ou ajoutez/supprimez des fichiers pour ce dossier."
    : "Importez des bilans, ordonnances, radios, etc. (images ou PDF).";

  const allDocsCount = existingDocuments.length + newFiles.length;

  const handleOpenChange = (isOpen: boolean) => {
    if (isProcessing) return;
    if (!isOpen) {
      resetState();
    }
    setOpen(isOpen);
  };


  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        {triggerButton ? triggerButton : (
          <Button>
            <PlusCircle className="mr-2" />
            Ajouter un document
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]" onInteractOutside={(e) => {
        if(form.formState.isDirty || newFiles.length > 0 || isProcessing) e.preventDefault();
      }}>
        <DialogHeader>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogDescription>{dialogDescription}</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titre du document</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Bilan sanguin annuel" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="doctorName"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Médecin traitant (optionnel)</FormLabel>
                    <FormControl>
                        <Input placeholder="Ex: Dr. Ben Foulen" {...field} value={field.value ?? ''} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="treatmentDate"
                render={({ field }) => (
                    <FormItem className="flex flex-col">
                    <FormLabel>Date (optionnel)</FormLabel>
                    <Popover>
                        <PopoverTrigger asChild>
                        <FormControl>
                            <Button
                            variant={"outline"}
                            className="font-normal"
                            >
                            {field.value ? (
                                format(field.value, "PPP", { locale: fr })
                            ) : (
                                <span>Choisir une date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                        </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                        />
                        </PopoverContent>
                    </Popover>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Catégorie</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez une catégorie" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {analysisTypeOptions.filter(o => o !== 'Consultation IA').map(option => (
                        <SelectItem key={option} value={option}>{option}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="prescription"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prescription / Notes (optionnel)</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Ex: Paracétamol 1g, 3 fois par jour pendant 5 jours..."
                      {...field}
                      value={field.value ?? ''}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Fichiers (Images ou PDF)</FormLabel>
              <FormControl>
                <div>
                  <label htmlFor="file-upload" className="cursor-pointer mt-2 flex justify-center w-full rounded-md border-2 border-dashed border-border px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                        <div className="flex text-sm text-muted-foreground">
                            <span>{isProcessing ? "Traitement..." : "Téléchargez un ou plusieurs fichiers"}</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*,application/pdf" onChange={handleFileChange} disabled={isProcessing} />
                        </div>
                        <p className="text-xs text-muted-foreground">PNG, JPG, PDF jusqu'à 10MB</p>
                    </div>
                  </label>
                </div>
              </FormControl>
            </FormItem>

            {allDocsCount > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {existingDocuments.map((doc) => (
                         <ExistingDocPreview key={doc.id} doc={doc} onRemove={removeExistingDoc} />
                    ))}
                    {newFiles.map((file, index) => (
                        <div key={file.name + index} className="relative group">
                            {file.type.startsWith('image/') ? (
                                <Image src={newFilePreviews[index]} alt={`preview ${index}`} width={150} height={150} className="rounded-md object-cover aspect-square border" />
                            ) : (
                                <div className="rounded-md object-cover aspect-square border bg-secondary flex flex-col items-center justify-center p-2">
                                    <FileText className="size-8 text-secondary-foreground"/>
                                    <span className="text-xs text-secondary-foreground text-center truncate w-full mt-1">{file.name}</span>
                                </div>
                            )}
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                                onClick={() => removeNewFile(index)}
                            >
                                <X className="h-4 w-4"/>
                            </Button>
                        </div>
                    ))}
                </div>
            )}

            <DialogFooter>
                <Button type="button" variant="outline" onClick={resetState} disabled={isProcessing}>Annuler</Button>
                <Button type="submit" disabled={isProcessing}>
                    {isProcessing ? <><LoaderCircle className="animate-spin mr-2" />Sauvegarde...</> : isEditing ? "Mettre à jour" : "Sauvegarder"}
                </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
