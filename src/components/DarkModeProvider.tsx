import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Mode = 'light' | 'dark' | 'auto';

interface DarkModeContextType {
  mode: Mode;
  setMode: (mode: Mode) => void;
  darkMode: boolean;
  systemDark: boolean;
}

const DarkModeContext = createContext<DarkModeContextType | null>(null);

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>('auto');
  const [systemDark, setSystemDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load from localStorage
    const stored = localStorage.getItem('mode') as Mode | null;
    if (stored && ['light', 'dark', 'auto'].includes(stored)) {
      setModeState(stored);
    }

    // Detect system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setSystemDark(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setSystemDark(e.matches);
    mediaQuery.addEventListener('change', handler);

    setMounted(true);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const setMode = (newMode: Mode) => {
    setModeState(newMode);
    localStorage.setItem('mode', newMode);
  };

  const darkMode = mode === 'dark' || (mode === 'auto' && systemDark);

  // Apply dark class to document
  useEffect(() => {
    if (mounted) {
      document.documentElement.classList.toggle('dark', darkMode);
    }
  }, [darkMode, mounted]);

  return (
    <DarkModeContext.Provider value={{ mode, setMode, darkMode, systemDark }}>
      {children}
    </DarkModeContext.Provider>
  );
}

export function useDarkMode() {
  const context = useContext(DarkModeContext);
  // During SSR, return default values instead of throwing
  if (!context) {
    if (typeof window === 'undefined') {
      // SSR: return defaults
      return {
        mode: 'auto' as Mode,
        setMode: () => {},
        darkMode: false,
        systemDark: false,
      };
    }
    throw new Error('useDarkMode must be used within DarkModeProvider');
  }
  return context;
}
