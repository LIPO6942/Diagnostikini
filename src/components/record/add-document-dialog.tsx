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
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

const addDocumentSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères."),
  category: z.enum(["Bilan", "Ordonnance", "Autre"]),
});

type AddDocumentForm = z.infer<typeof addDocumentSchema>;

interface AddDocumentDialogProps {
    onRecordUpdate: () => void;
    existingRecord?: HealthRecord;
    triggerButton?: React.ReactNode;
}

export function AddDocumentDialog({ onRecordUpdate, existingRecord, triggerButton }: AddDocumentDialogProps) {
  const [open, setOpen] = useState(false);
  const [documents, setDocuments] = useState<HealthDocument[]>([]);
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
    setDocuments([]);
    setOpen(false);
  };
  
  useEffect(() => {
    if (open && existingRecord) {
        form.reset({
            title: existingRecord.title,
            category: existingRecord.category,
        });
        setDocuments(existingRecord.documents || []);
    } else if (!open) {
        // Reset form when dialog closes
        form.reset({
            title: "",
            category: "Bilan",
        });
        setDocuments([]);
    }
  }, [open, existingRecord, form]);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsUploading(true);
      const filesArray = Array.from(e.target.files);
      const filePromises = filesArray.map(file => {
        return new Promise<HealthDocument>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve({
            dataUrl: reader.result as string,
            mimeType: file.type,
            name: file.name
          });
          reader.onerror = error => reject(error);
        });
      });

      Promise.all(filePromises)
        .then(newDocuments => {
          setDocuments(prev => [...prev, ...newDocuments]);
          setIsUploading(false);
        })
        .catch(error => {
          console.error("Error reading files:", error);
          toast({ variant: "destructive", title: "Erreur de lecture de fichier" });
          setIsUploading(false);
        });
    }
  };

  const removeDocument = (index: number) => {
      setDocuments(prev => prev.filter((_, i) => i !== index));
  }

  const onSubmit = (values: AddDocumentForm) => {
    if (documents.length === 0) {
        toast({ variant: "destructive", title: "Veuillez ajouter au moins un document." });
        return;
    }
    
    if (isEditing) {
        const updatedRecord: HealthRecord = {
          ...existingRecord,
          title: values.title,
          category: values.category,
          documents: documents,
        };
        updateHealthRecord(updatedRecord);
        toast({ title: "Document mis à jour", description: "Votre document a été modifié avec succès." });

    } else {
        const newRecord: HealthRecord = {
            id: new Date().toISOString(),
            date: new Date().toLocaleDateString('fr-FR'),
            title: values.title,
            category: values.category,
            documents: documents,
        };
        saveHealthRecord(newRecord);
        toast({ title: "Document ajouté", description: "Votre document a été sauvegardé avec succès." });
    }
    
    onRecordUpdate();
    resetAndClose();
  };


  const dialogTitle = isEditing ? "Modifier le document" : "Ajouter un nouveau document";
  const dialogDescription = isEditing 
    ? "Modifiez le titre, la catégorie ou ajoutez/supprimez des fichiers pour ce dossier."
    : "Importez des bilans, des ordonnances ou d'autres documents importants (images ou PDF).";

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
        // Prevent closing if form is dirty
        if(form.formState.isDirty || documents.length > 0) {
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

            {documents.length > 0 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
                    {documents.map((doc, index) => (
                        <div key={index} className="relative group">
                            {doc.mimeType.startsWith('image/') ? (
                                <Image src={doc.dataUrl} alt={`preview ${index}`} width={150} height={150} className="rounded-md object-cover aspect-square border" />
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
