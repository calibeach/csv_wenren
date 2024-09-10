// src/context/AuthContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    // Check localStorage for a stored token on app startup
    const storedToken = localStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const login = async (username: string, password: string) => {
    // Normally, you would call an API to get a token
    // For this example, we assume successful login with hardcoded values
    if (username === "leila" && password === "lovelywife") {
      const token = "edward_is_best_husband"; // Replace this with a real token from your backend
      localStorage.setItem("authToken", token); // Store token in localStorage
      setToken(token);
    } else {
      throw new Error("Invalid credentials");
    }
  };

  const logout = () => {
    localStorage.removeItem("authToken"); // Remove the token from localStorage
    setToken(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
