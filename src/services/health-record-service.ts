/**
 * @fileoverview Service for managing health records metadata in localStorage and document data in IndexedDB.
 */
'use client';
import type { HealthRecord } from '@/lib/types';
import { setDocument, getDocument, deleteDocument } from './db-service';

const HEALTH_RECORDS_KEY = 'healthRecords';

// Health Record Management (Metadata in localStorage)

export function getHealthRecords(): HealthRecord[] {
  if (typeof window === 'undefined') {
    return [];
  }
  const storedRecords = localStorage.getItem(HEALTH_RECORDS_KEY);
  if (storedRecords) {
    try {
        const parsedRecords = JSON.parse(storedRecords);
        // Sort by ID (ISO date string) descending
        return parsedRecords.sort((a: HealthRecord, b: HealthRecord) => b.id.localeCompare(a.id));
    } catch(e) {
        console.error("Failed to parse health records", e);
        return [];
    }
  }
  return [];
}

export function saveHealthRecord(newRecord: HealthRecord): void {
  if (typeof window === 'undefined') {
    return;
  }
  const existingRecords = getHealthRecords();
  localStorage.setItem(
    HEALTH_RECORDS_KEY,
    JSON.stringify([newRecord, ...existingRecords])
  );
}

export function updateHealthRecord(updatedRecord: HealthRecord): void {
    if (typeof window === 'undefined') {
      return;
    }
    const existingRecords = getHealthRecords();
    const recordIndex = existingRecords.findIndex(record => record.id === updatedRecord.id);
  
    if (recordIndex === -1) {
      // This case should ideally not happen if called from edit, but as a fallback, save as new.
      saveHealthRecord(updatedRecord);
      return;
    }
  
    const updatedRecords = [...existingRecords];
    updatedRecords[recordIndex] = updatedRecord;
  
    localStorage.setItem(HEALTH_RECORDS_KEY, JSON.stringify(updatedRecords));
}
  
export async function deleteHealthRecord(id: string): Promise<void> {
  if (typeof window === 'undefined') {
    return;
  }
  const existingRecords = getHealthRecords();
  const recordToDelete = existingRecords.find(record => record.id === id);

  if (recordToDelete?.documents) {
    for (const doc of recordToDelete.documents) {
      // No need to wait for each one, can run in parallel
      await deleteDocument(doc.id);
    }
  }
  
  const updatedRecords = existingRecords.filter(record => record.id !== id);
  localStorage.setItem(HEALTH_RECORDS_KEY, JSON.stringify(updatedRecords));
}


// Document Data Management (using IndexedDB via db-service)

export async function saveDocumentDataUrl(id: string, dataUrl: string): Promise<void> {
    try {
        await setDocument(id, dataUrl);
    } catch (e) {
        console.error("Failed to save document to IndexedDB.", e);
        throw e;
    }
}

export async function getDocumentDataUrl(id: string): Promise<string | null> {
    const data = await getDocument(id);
    return data || null;
}

export async function deleteDocumentDataUrl(id: string): Promise<void> {
    await deleteDocument(id);
}
