import { useState, useEffect } from 'react';

interface Props {
  lightSrc: string;
  darkSrc: string;
  alt: string;
}

export default function ProjectImage({ lightSrc, darkSrc, alt }: Props) {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check if dark class is on html element
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);

    // Watch for changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          const isDark = document.documentElement.classList.contains('dark');
          setDarkMode(isDark);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <img
      src={darkMode ? darkSrc : lightSrc}
      alt={alt}
      className="max-w-full max-h-full object-contain"
    />
  );
}
