/**
 * @fileoverview Service for managing health records and document data in localStorage.
 */
'use client';
import type { HealthRecord } from '@/lib/types';

const HEALTH_RECORDS_KEY = 'healthRecords';
const DOC_STORAGE_PREFIX = 'doc_';

// Health Record Management

export function getHealthRecords(): HealthRecord[] {
  if (typeof window === 'undefined') {
    return [];
  }
  const storedRecords = localStorage.getItem(HEALTH_RECORDS_KEY);
  if (storedRecords) {
    try {
        const parsedRecords = JSON.parse(storedRecords);
        // Sort by date, most recent first
        return parsedRecords.sort((a: HealthRecord, b: HealthRecord) => new Date(b.id).getTime() - new Date(a.id).getTime());
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
      // If for some reason the record doesn't exist, add it as a new one.
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

  // Delete associated document data from localStorage
  if (recordToDelete?.documents) {
    for (const doc of recordToDelete.documents) {
      deleteDocumentDataUrl(doc.id);
    }
  }
  
  const updatedRecords = existingRecords.filter(record => record.id !== id);
  localStorage.setItem(HEALTH_RECORDS_KEY, JSON.stringify(updatedRecords));
}


// Document Data Management

export function saveDocumentDataUrl(id: string, dataUrl: string) {
    if (typeof window === 'undefined') return;
    try {
        localStorage.setItem(`${DOC_STORAGE_PREFIX}${id}`, dataUrl);
    } catch (e) {
        console.error("Failed to save document to localStorage. It might be too large.", e);
        // Optionally, inform the user about the storage limit.
    }
}

export function getDocumentDataUrl(id: string): string | null {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem(`${DOC_STORAGE_PREFIX}${id}`);
}

export function deleteDocumentDataUrl(id: string) {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(`${DOC_STORAGE_PREFIX}${id}`);
}
