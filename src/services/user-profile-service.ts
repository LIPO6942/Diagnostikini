/**
 * @fileoverview Service for managing user profile in localStorage.
 */
'use client';
import type { UserProfile } from '@/lib/types';
import { UserProfileSchema } from '@/lib/types';

const PROFILE_STORAGE_KEY = 'userProfile';

export function getProfile(): UserProfile | null {
  if (typeof window === 'undefined') {
    return null;
  }
  const storedProfile = localStorage.getItem(PROFILE_STORAGE_KEY);
  if (!storedProfile) {
    return null;
  }
  try {
    const parsed = JSON.parse(storedProfile);
    const validated = UserProfileSchema.safeParse(parsed);
    if (validated.success) {
      return validated.data;
    }
    return null;
  } catch (error) {
    return null;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') {
    return;
  }
  localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(profile));
}
