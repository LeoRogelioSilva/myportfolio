import React, { createContext, useContext, useState, useEffect } from "react";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.style.setProperty("--background-color", "black");
      root.style.setProperty("--background-color-secondary", "#111");
      root.style.setProperty("--text-color", "#f8f8f8");
      root.style.setProperty("--accent-color", "#f60");
    } else {
      root.style.setProperty("--background-color", "#f8f8f8");
      root.style.setProperty("--background-color-secondary", "#ddd");
      root.style.setProperty("--text-color", "#111");
      root.style.setProperty("--accent-color", "#f60");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within a ThemeProvider");
  return context;
};
