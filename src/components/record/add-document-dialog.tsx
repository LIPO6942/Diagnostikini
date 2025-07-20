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
import { PlusCircle, LoaderCircle, Image as ImageIcon, X, FileText } from "lucide-react";
import type { HealthRecord, HealthDocument } from "@/lib/types";
import { saveHealthRecord, updateHealthRecord, saveDocumentDataUrl, getDocumentDataUrl, deleteDocumentDataUrl } from "@/services/health-record-service";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

const addDocumentSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères."),
  category: z.enum(["Bilan", "Ordonnance", "Autre"]),
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

  const form = useForm<AddDocumentForm>({
    resolver: zodResolver(addDocumentSchema),
    defaultValues: { title: "", category: "Bilan" },
  });
  
  const resetState = () => {
    form.reset({ title: "", category: "Bilan" });
    setNewFiles([]);
    newFilePreviews.forEach(url => URL.revokeObjectURL(url));
    setNewFilePreviews([]);
    setExistingDocuments([]);
    setDocsToDelete([]);
    setOpen(false);
    setIsProcessing(false);
  };
  
  useEffect(() => {
    if (open && isEditing) {
        form.reset({
            title: existingRecord.title,
            category: existingRecord.category,
        });
        setExistingDocuments(existingRecord.documents || []);
    } else if (open) {
        form.reset({ title: "", category: "Bilan" });
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
    if (newFiles.length === 0 && existingDocuments.length === 0) {
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
        
        if (isEditing) {
            const updatedRecord: HealthRecord = {
              ...existingRecord,
              title: values.title,
              category: values.category,
              documents: [...existingDocuments, ...newDocuments],
            };
            updateHealthRecord(updatedRecord);
            toast({ title: "Document mis à jour", description: "Votre document a été modifié avec succès." });

        } else {
            const newRecord: HealthRecord = {
                id: new Date().toISOString(),
                date: new Date().toLocaleDateString('fr-FR'),
                title: values.title,
                category: values.category,
                documents: newDocuments,
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
    : "Importez des bilans, des ordonnances ou d'autres documents (images ou PDF).";

  const allDocsCount = existingDocuments.length + newFiles.length;

  return (
    <Dialog open={open} onOpenChange={(isOpen) => { if (!isProcessing) setOpen(isOpen); }}>
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
      }} onExited={resetState}>
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
                      <SelectItem value="Bilan">Bilan</SelectItem>
                      <SelectItem value="Ordonnance">Ordonnance</SelectItem>
                      <SelectItem value="Autre">Autre</SelectItem>
                    </SelectContent>
                  </Select>
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
