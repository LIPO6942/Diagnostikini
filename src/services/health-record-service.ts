/**
 * @fileoverview Service for managing health records in localStorage.
 */
'use client';
import type { HealthRecord } from '@/lib/types';

const HEALTH_RECORDS_KEY = 'healthRecords';

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
  

export function deleteHealthRecord(id: string): void {
  if (typeof window === 'undefined') {
    return;
  }
  const existingRecords = getHealthRecords();
  const updatedRecords = existingRecords.filter(record => record.id !== id);
  localStorage.setItem(HEALTH_RECORDS_KEY, JSON.stringify(updatedRecords));
}
