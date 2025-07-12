/**
 * @fileoverview Dialog component for adding a new document to the health record.
 */
"use client";

import { useState } from "react";
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
import { PlusCircle, LoaderCircle, Image as ImageIcon, X } from "lucide-react";
import type { HealthRecord } from "@/lib/types";
import { saveHealthRecord } from "@/services/health-record-service";
import { useToast } from "@/hooks/use-toast";
import Image from 'next/image';

const addDocumentSchema = z.object({
  title: z.string().min(3, "Le titre doit contenir au moins 3 caractères."),
  category: z.enum(["Bilan", "Ordonnance", "Autre"]),
});

type AddDocumentForm = z.infer<typeof addDocumentSchema>;

interface AddDocumentDialogProps {
    onRecordAdded: () => void;
}

export function AddDocumentDialog({ onRecordAdded }: AddDocumentDialogProps) {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  const form = useForm<AddDocumentForm>({
    resolver: zodResolver(addDocumentSchema),
    defaultValues: {
      title: "",
      category: "Bilan",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setIsUploading(true);
      const filesArray = Array.from(e.target.files);
      const filePromises = filesArray.map(file => {
        return new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = error => reject(error);
        });
      });

      Promise.all(filePromises)
        .then(base64Images => {
          setImages(prev => [...prev, ...base64Images]);
          setIsUploading(false);
        })
        .catch(error => {
          console.error("Error reading files:", error);
          toast({ variant: "destructive", title: "Erreur de lecture de fichier" });
          setIsUploading(false);
        });
    }
  };

  const removeImage = (index: number) => {
      setImages(prev => prev.filter((_, i) => i !== index));
  }

  const onSubmit = (values: AddDocumentForm) => {
    if (images.length === 0) {
        toast({ variant: "destructive", title: "Veuillez ajouter au moins une image." });
        return;
    }
    
    const newRecord: HealthRecord = {
      id: new Date().toISOString(),
      date: new Date().toLocaleDateString('fr-FR'),
      title: values.title,
      category: values.category,
      images: images,
    };
    
    saveHealthRecord(newRecord);
    toast({ title: "Document ajouté", description: "Votre document a été sauvegardé avec succès." });
    onRecordAdded();
    resetAndClose();
  };

  const resetAndClose = () => {
    form.reset();
    setImages([]);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2" />
          Ajouter un document
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]" onInteractOutside={(e) => e.preventDefault()}>
        <DialogHeader>
          <DialogTitle>Ajouter un nouveau document</DialogTitle>
          <DialogDescription>
            Importez des bilans, des ordonnances ou d'autres documents importants.
          </DialogDescription>
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
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
              <FormLabel>Images du document</FormLabel>
              <FormControl>
                <div>
                  <label htmlFor="file-upload" className="cursor-pointer mt-2 flex justify-center w-full rounded-md border-2 border-dashed border-border px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                        <ImageIcon className="mx-auto h-12 w-12 text-muted-foreground" />
                        <div className="flex text-sm text-muted-foreground">
                            <span>{isUploading ? "Chargement..." : "Téléchargez un ou plusieurs fichiers"}</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple accept="image/*" onChange={handleFileChange} disabled={isUploading} />
                        </div>
                        <p className="text-xs text-muted-foreground">PNG, JPG, GIF jusqu'à 10MB</p>
                    </div>
                  </label>
                  {isUploading && <LoaderCircle className="animate-spin mt-2" />}
                </div>
              </FormControl>
            </FormItem>

            {images.length > 0 && (
                <div className="grid grid-cols-3 gap-4">
                    {images.map((img, index) => (
                        <div key={index} className="relative group">
                            <Image src={img} alt={`preview ${index}`} width={150} height={150} className="rounded-md object-cover aspect-square" />
                            <Button
                                type="button"
                                variant="destructive"
                                size="icon"
                                className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                onClick={() => removeImage(index)}
                            >
                                <X className="h-4 w-4"/>
                            </Button>
                        </div>
                    ))}
                </div>
            )}

            <DialogFooter>
                <Button type="button" variant="outline" onClick={resetAndClose}>Annuler</Button>
                <Button type="submit">Sauvegarder</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
