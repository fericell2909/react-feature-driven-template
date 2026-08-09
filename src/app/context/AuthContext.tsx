import { createContext, useContext, useState, ReactNode, useCallback } from 'react';
import Cookies from 'js-cookie';

interface User {
  id: string;
  email: string;
  name: string;
  [key: string]: unknown;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (userData: User, token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TOKEN_KEY = 'token';
const USER_KEY = 'user';

export const AuthProvider = ({ children }: { children: ReactNode }) => {

  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedUser = Cookies.get(USER_KEY);
      const savedToken = Cookies.get(TOKEN_KEY);
      
      if (savedUser && savedToken) {
        return JSON.parse(savedUser) as User;
      }
    } catch (error) {
      console.error('Error al parsear el usuario desde las cookies:', error);
      Cookies.remove(USER_KEY);
      Cookies.remove(TOKEN_KEY);
    }
    return null;
  });

  const isAuthenticated = !!user;

  const login = useCallback((userData: User, token: string) => {
    const cookieOptions = {
      expires: 7,
      secure: window.location.protocol === 'https:',
      sameSite: 'strict' as const,
    };

    Cookies.set(TOKEN_KEY, token, cookieOptions);
    Cookies.set(USER_KEY, JSON.stringify(userData), cookieOptions);
    
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    
    Cookies.remove(TOKEN_KEY);
    Cookies.remove(USER_KEY);
    setUser(null);
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth debe ser utilizado dentro de un AuthProvider');
  }
  
  return context;
};