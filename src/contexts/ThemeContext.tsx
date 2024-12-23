import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";


type Theme = "dark" | "light";

interface ThemeContextType {
  isDark: Theme;
  handleLightMode: () => void;
  handleDarkMode: () => void;
}


const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState<Theme>(() => {
    return (localStorage.getItem("theme") as Theme) || "light";
  });

  useEffect(() => {
    if (isDark === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const handleLightMode = () => setIsDark("light");
  const handleDarkMode = () => setIsDark("dark");

  return (
    <ThemeContext.Provider value={{ isDark, handleLightMode, handleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
