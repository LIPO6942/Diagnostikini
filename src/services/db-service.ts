/**
 * @fileoverview Service for interacting with the IndexedDB database.
 */
import { openDB, type DBSchema } from 'idb';

const DB_NAME = 'DiagnostikiniDB';
const DB_VERSION = 1;
const STORE_NAME = 'documents';

interface DiagnostikiniDB extends DBSchema {
  [STORE_NAME]: {
    key: string;
    value: File;
  };
}

const dbPromise = openDB<DiagnostikiniDB>(DB_NAME, DB_VERSION, {
  upgrade(db) {
    if (!db.objectStoreNames.contains(STORE_NAME)) {
      db.createObjectStore(STORE_NAME);
    }
  },
});

export async function saveFile(id: string, file: File) {
  return (await dbPromise).put(STORE_NAME, file, id);
}

export async function getFile(id: string): Promise<File | undefined> {
  return (await dbPromise).get(STORE_NAME, id);
}

export async function deleteFile(id: string) {
  return (await dbPromise).delete(STORE_NAME, id);
}
