/**
 * @fileoverview Context to manage and provide user profile data throughout the app.
 */
"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useMemo } from 'react';
import type { UserProfile } from '@/lib/types';
import { getProfile, saveUserProfile } from '@/services/user-profile-service';

interface ProfileContextType {
  profile: UserProfile | null;
  saveProfile: (profile: UserProfile) => void;
  isProfileComplete: boolean | undefined;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setProfile(getProfile());
    setIsMounted(true);
  }, []);

  const saveProfile = (newProfile: UserProfile) => {
    saveUserProfile(newProfile);
    setProfile(newProfile);
  };
  
  const isProfileComplete = useMemo(() => {
    if (!isMounted) return undefined;
    if (!profile) return false;
    // A profile is "complete" if at least age and sex are filled.
    return !!(profile.age && profile.sex && profile.sex !== 'ne-specifie-pas');
  }, [profile, isMounted]);

  const value = { profile, saveProfile, isProfileComplete };

  return (
    <ProfileContext.Provider value={value}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
