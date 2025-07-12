/**
 * @fileoverview Health record page component.
 */
"use client";

import { useState, useEffect } from 'react';
import type { HealthRecord } from '@/lib/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BookHeart, FileText } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getHealthRecords } from '@/services/health-record-service';

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

function EmptyState() {
    return (
        <Card className="text-center p-8">
            <div className="mb-4 inline-flex items-center justify-center size-16 rounded-full bg-secondary text-secondary-foreground">
                <BookHeart className="size-8" />
            </div>
            <h3 className="text-xl font-semibold">Aucun dossier trouvé</h3>
            <p className="text-muted-foreground mt-2">L'historique de vos consultations apparaîtra ici.</p>
            <Button asChild className="mt-4">
                <Link href="/">Démarrer une nouvelle consultation</Link>
            </Button>
        </Card>
    );
}

export default function HealthRecordPage() {
  const [records, setRecords] = useState<HealthRecord[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setRecords(getHealthRecords());
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <HealthRecordSkeleton />;
  }

  return (
    <div className="space-y-6">
       <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-headline">Dossier de santé</h1>
          <p className="text-muted-foreground">Un journal de vos consultations passées.</p>
        </div>
      </div>
      
      {records.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="space-y-4">
          {records.map(record => (
            <Card key={record.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    {record.diagnosis}
                  </CardTitle>
                  <CardDescription>{record.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-semibold text-sm">Symptômes signalés :</p>
                <p className="text-muted-foreground text-sm mb-4">{record.symptoms}</p>
                <p className="font-semibold text-sm">Résumé généré par l'IA :</p>
                <p className="text-muted-foreground text-sm">{record.summary}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
