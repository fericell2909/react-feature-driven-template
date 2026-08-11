import { createContext } from 'react';
import type { User } from '@/features/auth/interfaces/auth.types';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User, token: string, refresh_token: string) => void;
  logout: () => void;  
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);