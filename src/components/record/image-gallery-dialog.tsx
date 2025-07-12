/**
 * @fileoverview Dialog component to display a gallery of document images.
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
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { HealthRecord } from '@/lib/types';
import { FileImage, FileText } from 'lucide-react';

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
        <div className="flex flex-wrap gap-2">
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
      <DialogContent className="max-w-3xl w-full h-[90vh]">
        <DialogHeader>
          <DialogTitle>{record.title}</DialogTitle>
        </DialogHeader>
        <div className="p-4 h-full flex flex-col">
             <Carousel className="w-full h-full flex-grow">
                <CarouselContent className="h-full">
                    {record.documents.map((doc, index) => (
                    <CarouselItem key={index} className="h-full">
                        <div className="p-1 h-full flex flex-col">
                            <div className="relative flex-grow">
                                {doc.mimeType.startsWith('image/') ? (
                                    <Image
                                        src={doc.dataUrl}
                                        alt={`Document page ${index + 1}`}
                                        fill
                                        className="object-contain"
                                    />
                                ) : (
                                    <iframe src={doc.dataUrl} className="w-full h-full border-0" title={doc.name} />
                                )}
                            </div>
                            <p className="text-center text-sm text-muted-foreground mt-2">Page {index + 1} / {record.documents.length}</p>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
      </DialogContent>
    </Dialog>
  );
}
