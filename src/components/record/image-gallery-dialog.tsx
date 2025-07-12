/**
 * @fileoverview Dialog component to display a gallery of document images and PDFs.
 */
"use client";

import { useState } from 'react';
import Image from 'next/image';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { HealthRecord } from '@/lib/types';
import { FileText } from 'lucide-react';

interface ImageGalleryDialogProps {
  record: HealthRecord;
}

export function ImageGalleryDialog({ record }: ImageGalleryDialogProps) {
  const [open, setOpen] = useState(false);

  if (!record.documents || record.documents.length === 0) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex flex-wrap gap-2 cursor-pointer">
            {record.documents.slice(0, 5).map((doc, index) => (
                <button key={index} className="relative focus:outline-none focus:ring-2 focus:ring-ring rounded-md size-16">
                     {doc.mimeType.startsWith('image/') ? (
                        <Image
                            src={doc.dataUrl}
                            alt={`${record.title} - page ${index + 1}`}
                            fill
                            className="rounded-md object-cover border"
                        />
                     ) : (
                        <div className="w-full h-full rounded-md border bg-secondary flex items-center justify-center">
                            <FileText className="size-8 text-secondary-foreground"/>
                        </div>
                     )}
                    {index === 4 && record.documents.length > 5 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
                            <span className="text-white font-bold text-sm">+{record.documents.length - 5}</span>
                        </div>
                    )}
                </button>
            ))}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl w-full h-[90vh] flex flex-col p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>{record.title}</DialogTitle>
        </DialogHeader>
        <div className="flex-1 mt-4 relative">
             <Carousel className="w-full h-full">
                <CarouselContent className="h-full">
                    {record.documents.map((doc, index) => (
                      <CarouselItem key={index} className="h-full">
                        <div className="w-full h-[calc(100%-2rem)] relative">
                          {doc.mimeType.startsWith('image/') ? (
                            <Image
                              src={doc.dataUrl}
                              alt={`Document page ${index + 1}: ${doc.name}`}
                              fill
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              className="object-contain"
                            />
                          ) : (
                            <iframe 
                              src={doc.dataUrl} 
                              className="w-full h-full border-0" 
                              title={doc.name} 
                            />
                          )}
                        </div>
                        <p className="text-center text-sm text-muted-foreground mt-2 h-8">
                          Page {index + 1} sur {record.documents?.length} - {doc.name}
                        </p>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                {record.documents.length > 1 && (
                  <>
                    <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
                  </>
                )}
            </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
