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
import { FileImage } from 'lucide-react';

interface ImageGalleryDialogProps {
  record: HealthRecord;
}

export function ImageGalleryDialog({ record }: ImageGalleryDialogProps) {
  const [open, setOpen] = useState(false);

  if (!record.images || record.images.length === 0) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="flex flex-wrap gap-2">
            {record.images.slice(0, 5).map((image, index) => (
                <button key={index} className="relative focus:outline-none focus:ring-2 focus:ring-ring rounded-md">
                     <Image
                        src={image}
                        alt={`${record.title} - page ${index + 1}`}
                        width={64}
                        height={64}
                        className="rounded-md object-cover aspect-square border"
                    />
                    {index === 4 && record.images.length > 5 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-md">
                            <span className="text-white font-bold text-sm">+{record.images.length - 5}</span>
                        </div>
                    )}
                </button>
            ))}
        </div>
      </DialogTrigger>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{record.title}</DialogTitle>
        </DialogHeader>
        <div className="p-4">
             <Carousel className="w-full">
                <CarouselContent>
                    {record.images.map((image, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <div className="relative aspect-auto max-h-[70vh]">
                                <Image
                                    src={image}
                                    alt={`Document page ${index + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <p className="text-center text-sm text-muted-foreground mt-2">Page {index + 1} / {record.images.length}</p>
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
