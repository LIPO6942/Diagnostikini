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
  console.log('🔎 getProfile → raw localStorage:', storedProfile);
  if (!storedProfile) {
    return null;
  }
  try {
    const parsed = JSON.parse(storedProfile);
    console.log('📦 getProfile → parsed:', parsed);
    const validated = UserProfileSchema.safeParse(parsed);
    if (validated.success) {
      console.log('✅ getProfile → validated:', validated.data);
      return validated.data;
    }
    console.warn('⚠️ getProfile → validation failed:', validated.error);
    return null;
  } catch (error) {
    console.error('❌ getProfile → parse error:', error);
    return null;
  }
}

export function saveUserProfile(profile: UserProfile): void {
  if (typeof window === 'undefined') {
    return;
  }
  console.log('💾 saveUserProfile → saving:', profile);
  const serialized = JSON.stringify(profile);
  console.log('💾 saveUserProfile → serialized:', serialized);
  localStorage.setItem(PROFILE_STORAGE_KEY, serialized);
  console.log('✅ saveUserProfile → stored in localStorage');
}
