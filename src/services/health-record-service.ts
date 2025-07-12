/**
 * @fileoverview Service for managing health records in localStorage.
 */
'use client';
import type { HealthRecord } from '@/lib/types';

export function getHealthRecords(): HealthRecord[] {
  if (typeof window === 'undefined') {
    return [];
  }
  const storedRecords = localStorage.getItem('healthRecords');
  return storedRecords ? JSON.parse(storedRecords) : [];
}

export function saveHealthRecord(newRecord: HealthRecord): void {
  if (typeof window === 'undefined') {
    return;
  }
  const existingRecords = getHealthRecords();
  localStorage.setItem(
    'healthRecords',
    JSON.stringify([newRecord, ...existingRecords])
  );
}
