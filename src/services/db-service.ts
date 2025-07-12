/**
 * @fileoverview Service for interacting with the IndexedDB database.
 */
import { openDB, type DBSchema, type IDBPDatabase } from 'idb';

const DB_NAME = 'DiagnostikiniDB';
const DB_VERSION = 1;
const STORE_NAME = 'documents';

interface DiagnostikiniDB extends DBSchema {
  [STORE_NAME]: {
    key: string;
    value: File;
  };
}

let dbPromise: Promise<IDBPDatabase<DiagnostikiniDB>> | null = null;

function getDb() {
    if (typeof window === 'undefined') {
        // Return a promise that never resolves on the server.
        // This prevents errors during SSR. The actual logic will only run client-side.
        return new Promise<IDBPDatabase<DiagnostikiniDB>>(() => {});
    }
    if (!dbPromise) {
        dbPromise = openDB<DiagnostikiniDB>(DB_NAME, DB_VERSION, {
            upgrade(db) {
                if (!db.objectStoreNames.contains(STORE_NAME)) {
                    db.createObjectStore(STORE_NAME);
                }
            },
        });
    }
    return dbPromise;
}


export async function saveFile(id: string, file: File) {
  const db = await getDb();
  return db.put(STORE_NAME, file, id);
}

export async function getFile(id: string): Promise<File | undefined> {
  const db = await getDb();
  return db.get(STORE_NAME, id);
}

export async function deleteFile(id: string) {
  const db = await getDb();
  return db.delete(STORE_NAME, id);
}
