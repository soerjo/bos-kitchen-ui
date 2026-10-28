'use client';

import { createContext, useContext, useMemo, type ReactNode } from 'react';

interface AuthContextValue {
  isAuthenticated: boolean;
  isLoading: boolean;
  isAuthLoading: boolean;
  logout: () => Promise<void>;
  error: Error | null;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  // Public application: no authentication redirect
  const value = useMemo<AuthContextValue>(
    () => ({
      isAuthenticated: true,
      isLoading: false,
      isAuthLoading: false,
      logout: async () => {},
      error: null,
    }),
    [],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
