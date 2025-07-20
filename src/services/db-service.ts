/**
 * @fileoverview IndexedDB service for storing large data like document data URLs.
 */
'use client';
import { openDB, type DBSchema } from 'idb';

const DB_NAME = 'DiagnostikiniDB';
const DB_VERSION = 1;
const DOC_STORE_NAME = 'documents';

interface DiagnostikiniDBSchema extends DBSchema {
  [DOC_STORE_NAME]: {
    key: string; // Document ID
    value: string; // Data URL
  };
}

const dbPromise = typeof window !== 'undefined' 
  ? openDB<DiagnostikiniDBSchema>(DB_NAME, DB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(DOC_STORE_NAME)) {
          db.createObjectStore(DOC_STORE_NAME);
        }
      },
    })
  : null;

export async function setDocument(id: string, dataUrl: string): Promise<void> {
    if (!dbPromise) return;
    const db = await dbPromise;
    await db.put(DOC_STORE_NAME, dataUrl, id);
}

export async function getDocument(id: string): Promise<string | undefined> {
    if (!dbPromise) return undefined;
    const db = await dbPromise;
    return db.get(DOC_STORE_NAME, id);
}

export async function deleteDocument(id: string): Promise<void> {
    if (!dbPromise) return;
    const db = await dbPromise;
    await db.delete(DOC_STORE_NAME, id);
}
