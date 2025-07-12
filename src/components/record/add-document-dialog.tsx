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
import { saveHealthRecord, updateHealthRecord } from "@/services/health-record-service";
import { saveFile } from "@/services/db-service";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

const addDocumentSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères."),
  category: z.enum(["Bilan", "Ordonnance", "Autre"]),
});

type AddDocumentForm = z.infer<typeof addDocumentSchema>;

// Helper to create a temporary preview URL from a File object
const getPreviewUrl = (file: File) => URL.createObjectURL(file);

interface AddDocumentDialogProps {
    onRecordUpdate: () => void;
    existingRecord?: HealthRecord;
    triggerButton?: React.ReactNode;
}

export function AddDocumentDialog({ onRecordUpdate, existingRecord, triggerButton }: AddDocumentDialogProps) {
  const [open, setOpen] = useState(false);
  const [documentFiles, setDocumentFiles] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();
  const isEditing = !!existingRecord;

  const form = useForm<AddDocumentForm>({
    resolver: zodResolver(addDocumentSchema),
    defaultValues: {
      title: "",
      category: "Bilan",
    },
  });
  
  const resetAndClose = () => {
    form.reset({
      title: "",
      category: "Bilan",
    });
    setDocumentFiles([]);
    setPreviewUrls([]);
    setOpen(false);
  };
  
  useEffect(() => {
    if (!open) {
        // Clean up preview URLs when dialog closes
        previewUrls.forEach(url => URL.revokeObjectURL(url));
        setPreviewUrls([]);
        setDocumentFiles([]);
        form.reset({ title: "", category: "Bilan" });
    } else if (existingRecord) {
        form.reset({
            title: existingRecord.title,
            category: existingRecord.category,
        });
        // Note: We don't load existing files for preview/editing to keep it simple.
        // The logic will append new files to the existing ones.
    }
  }, [open, existingRecord, form]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsUploading(true);
      const filesArray = Array.from(e.target.files);
      setDocumentFiles(prev => [...prev, ...filesArray]);
      
      const newPreviewUrls = filesArray.map(getPreviewUrl);
      setPreviewUrls(prev => [...prev, ...newPreviewUrls]);
      
      setIsUploading(false);
    }
  };

  const removeDocument = (index: number) => {
      setDocumentFiles(prev => prev.filter((_, i) => i !== index));
      setPreviewUrls(prev => {
          const newPreviews = prev.filter((_, i) => i !== index);
          URL.revokeObjectURL(prev[index]); // Clean up memory
          return newPreviews;
      });
  }

  const onSubmit = async (values: AddDocumentForm) => {
    if (documentFiles.length === 0 && !isEditing) {
        toast({ variant: "destructive", title: "Veuillez ajouter au moins un document." });
        return;
    }
    
    // Create document metadata and save files to IndexedDB
    const newDocuments: HealthDocument[] = [];
    for (const file of documentFiles) {
        const docId = `${Date.now()}-${Math.random()}`;
        await saveFile(docId, file);
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
          documents: [...(existingRecord.documents || []), ...newDocuments],
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
    resetAndClose();
  };

  const dialogTitle = isEditing ? "Modifier le document" : "Ajouter un nouveau document";
  const dialogDescription = isEditing 
    ? "Modifiez les informations ou ajoutez de nouveaux fichiers à ce dossier."
    : "Importez des bilans, des ordonnances ou d'autres documents (images ou PDF).";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {triggerButton ? triggerButton : (
          <Button>
            <PlusCircle className="mr-2" />
            Ajouter un document
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]" onInteractOutside={(e) => {
        if(form.formState.isDirty || documentFiles.length > 0) {
          e.preventDefault();
        }
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
                            <span>{isUploading ? "Chargement..." : "Téléchargez un ou plusieurs fichiers"}</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*,application/pdf" onChange={handleFileChange} disabled={isUploading} />
                        </div>
                        <p className="text-xs text-muted-foreground">PNG, JPG, PDF jusqu'à 10MB</p>
                    </div>
                  </label>
                  {isUploading && <LoaderCircle className="animate-spin mt-2" />}
                </div>
              </FormControl>
            </FormItem>

            {documentFiles.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {documentFiles.map((file, index) => (
                        <div key={index} className="relative group">
                            {file.type.startsWith('image/') ? (
                                <Image src={previewUrls[index]} alt={`preview ${index}`} width={150} height={150} className="rounded-md object-cover aspect-square border" />
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
                                onClick={() => removeDocument(index)}
                            >
                                <X className="h-4 w-4"/>
                            </Button>
                        </div>
                    ))}
                </div>
            )}

            <DialogFooter>
                <Button type="button" variant="outline" onClick={resetAndClose}>Annuler</Button>
                <Button type="submit">{isEditing ? "Mettre à jour" : "Sauvegarder"}</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
