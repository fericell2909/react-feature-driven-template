import { useState, useCallback } from "react";
import type { ReactNode } from "react";
import Cookies from "js-cookie";
import type { User } from "@/features/auth/interfaces/auth.types";
import {
  AUTH_TOKEN_COOKIE_NAME,
  AUTH_USER_COKKIE_NAME,
  AUTH_REFRESH_TOKEN_COOKIE_NAME,
} from "@/app/constants/environment";
import { AuthContext } from "@/app/context/AuthContext";

const TOKEN_KEY = AUTH_TOKEN_COOKIE_NAME;
const TOKEN_REFRESH_KEY = AUTH_REFRESH_TOKEN_COOKIE_NAME;
const USER_KEY = AUTH_USER_COKKIE_NAME;

const COOKIE_OPTIONS = {
  expires: 7,
  path: "/",
  secure: true,
  sameSite: "strict" as const,
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const savedUser = Cookies.get(USER_KEY);
      const savedToken = Cookies.get(TOKEN_KEY);

      if (
        savedUser &&
        savedToken &&
        savedUser !== "undefined" &&
        savedUser !== "null" &&
        savedToken !== "undefined"
      ) {
        return JSON.parse(savedUser) as User;
      }
    } catch (error) {
      console.warn(
        "[Auth Warning]: No se pudo restaurar la sesión guardada:",
        error,
      );
    }

    Cookies.remove(USER_KEY, { path: "/" });
    Cookies.remove(TOKEN_KEY, { path: "/" });
    Cookies.remove(TOKEN_REFRESH_KEY, { path: "/" });
    return null;
  });

  const isAuthenticated = !!user;

  const login = useCallback(
    (userData: User, token: string, refresh_token: string) => {
      try {
        Cookies.set(TOKEN_KEY, token, COOKIE_OPTIONS);
        Cookies.set(USER_KEY, JSON.stringify(userData), COOKIE_OPTIONS);
        Cookies.set(TOKEN_REFRESH_KEY, refresh_token, COOKIE_OPTIONS);

        if (
          !Cookies.get(TOKEN_KEY) ||
          !Cookies.get(USER_KEY) ||
          !Cookies.get(TOKEN_REFRESH_KEY)
        ) {
          throw new Error(
            "Las cookies no se pudieron persistir correctamente en el navegador.",
          );
        }

        setUser(userData);
      } catch (error) {
        console.error(
          "[Auth Security Error]: Fallo al registrar la sesión en las cookies:",
          error,
        );
        Cookies.remove(USER_KEY, { path: "/" });
        Cookies.remove(TOKEN_KEY, { path: "/" });
        Cookies.remove(TOKEN_REFRESH_KEY, { path: "/" });
        setUser(null);
        throw new Error(
          "No se pudo establecer la sesión de usuario de forma segura.",
        );
      }
    },
    [],
  );

  const logout = useCallback(() => {
    const cookieNames = [TOKEN_KEY, TOKEN_REFRESH_KEY, USER_KEY];

    cookieNames.forEach((name) => {

      Cookies.remove(name, { path: "/" });

      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; secure;`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
    });

    setUser(null);
    localStorage.clear();
    sessionStorage.clear();
  }, []);

  const displayName = useCallback(() => {
    if (user) {
      return user?.displayName || user?.username;
    }
    return "Usuario";
  }, [user]);


  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout , displayName}}>
      {children}
    </AuthContext.Provider>
  );
};