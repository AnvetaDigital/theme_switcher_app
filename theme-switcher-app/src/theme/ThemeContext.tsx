import React, { createContext, useContext, useState, useEffect } from "react";

type Theme = "theme1" | "theme2" | "theme3";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<Theme>("theme1");

  useEffect(() => {
    const savedTheme = localStorage.getItem("app-theme") as Theme | null;
    if (savedTheme) {
      setThemeState(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: Theme) => setThemeState(newTheme);

  // Map theme → Tailwind classes
  const themeClasses =
    theme === "theme1"
      ? "bg-white text-gray-800 font-sans"
      : theme === "theme2"
      ? "bg-gray-800 text-blue-400 font-serif"
      : "bg-gradient-to-br from-pink-200 via-yellow-200 to-green-200 text-gray-900 font-[Pacifico]";

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`min-h-screen ${themeClasses}`}>{children}</div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
