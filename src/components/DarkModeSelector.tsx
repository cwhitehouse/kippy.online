import { useState, useRef, useEffect } from 'react';
import { useDarkMode } from './DarkModeProvider';
import Moon from './icons/Moon.astro';
import Sun from './icons/Sun.astro';
import MoonAuto from './icons/MoonAuto.astro';
import SunAuto from './icons/SunAuto.astro';

type ModeOption = {
  label: string;
  description: string;
  icon: string;
  iconDark?: string;
  mode: 'auto' | 'light' | 'dark';
};

const options: ModeOption[] = [
  {
    label: 'Auto',
    description: 'Use whatever dark mode setting your browser is using',
    icon: 'sun-auto',
    iconDark: 'moon-auto',
    mode: 'auto',
  },
  {
    label: 'Light',
    description: 'Always use light mode (white background)',
    icon: 'sun',
    mode: 'light',
  },
  {
    label: 'Dark',
    description: 'Always use dark mode (black background)',
    icon: 'moon',
    mode: 'dark',
  },
];

function IconComponent({ name, size = 24 }: { name: string; size?: number }) {
  const iconProps = { width: size, height: size, className: 'fill-current' };

  switch (name) {
    case 'moon':
      return (
        <svg
          className="fill-current"
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.0907 25.9797C28.4671 25.5043 20 16.741 20 6C20 3.91703 20.3184 1.90844 20.9093 0.0202399C20.6079 0.00675396 20.3047 -6.10352e-05 20 -6.10352e-05C8.9543 -6.10352e-05 0 8.95424 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999C28.9627 39.9999 36.5485 34.1044 39.0907 25.9797Z"
            fill="inherit"
          />
        </svg>
      );
    case 'sun':
      return (
        <svg
          className="fill-current"
          width={size}
          height={size}
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28ZM19 0H21V6H19V0ZM19 34H21V40H19V34ZM40 19V21H34V19H40ZM6 19V21H0V19H6ZM33.0711 4.51471L34.4853 5.92893L30.0711 10.3431L28.6569 8.92893L33.0711 4.51471ZM9.92893 28.6569L11.3431 30.0711L5.92893 35.4853L4.51471 34.0711L9.92893 28.6569ZM34.4853 34.0711L33.0711 35.4853L28.6569 31.0711L30.0711 29.6569L34.4853 34.0711ZM11.3431 9.92893L9.92893 11.3431L4.51471 5.92893L5.92893 4.51471L11.3431 9.92893Z"
            fill="inherit"
          />
        </svg>
      );
    case 'moon-auto':
      return (
        <svg
          className="fill-current"
          width={size}
          height={size}
          viewBox="0 0 56 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.0907 25.9797C28.4671 25.5043 20 16.741 20 6C20 3.91703 20.3184 1.90844 20.9093 0.0202399C20.6079 0.00675396 20.3047 -6.10352e-05 20 -6.10352e-05C8.9543 -6.10352e-05 0 8.95424 0 19.9999C0 31.0456 8.9543 39.9999 20 39.9999C28.9627 39.9999 36.5485 34.1044 39.0907 25.9797Z"
            fill="inherit"
          />
          <path
            d="M50.4 7.2H51.6L56 0H54.4L50.4 7.2ZM46.4 7.2H47.6L52 0H50.4L46.4 7.2ZM42.4 7.2H43.6L48 0H46.4L42.4 7.2Z"
            fill="inherit"
          />
        </svg>
      );
    case 'sun-auto':
      return (
        <svg
          className="fill-current"
          width={size}
          height={size}
          viewBox="0 0 56 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 28C24.4183 28 28 24.4183 28 20C28 15.5817 24.4183 12 20 12C15.5817 12 12 15.5817 12 20C12 24.4183 15.5817 28 20 28ZM19 0H21V6H19V0ZM19 34H21V40H19V34ZM40 19V21H34V19H40ZM6 19V21H0V19H6ZM33.0711 4.51471L34.4853 5.92893L30.0711 10.3431L28.6569 8.92893L33.0711 4.51471ZM9.92893 28.6569L11.3431 30.0711L5.92893 35.4853L4.51471 34.0711L9.92893 28.6569ZM34.4853 34.0711L33.0711 35.4853L28.6569 31.0711L30.0711 29.6569L34.4853 34.0711ZM11.3431 9.92893L9.92893 11.3431L4.51471 5.92893L5.92893 4.51471L11.3431 9.92893Z"
            fill="inherit"
          />
          <path
            d="M50.4 7.2H51.6L56 0H54.4L50.4 7.2ZM46.4 7.2H47.6L52 0H50.4L46.4 7.2ZM42.4 7.2H43.6L48 0H46.4L42.4 7.2Z"
            fill="inherit"
          />
        </svg>
      );
    default:
      return null;
  }
}

export default function DarkModeSelector() {
  const { mode, setMode, darkMode, systemDark } = useDarkMode();
  const [showModal, setShowModal] = useState(false);
  const [usedMouse, setUsedMouse] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<HTMLButtonElement>(null);

  // Close modal when clicking outside
  useEffect(() => {
    if (!showModal) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        if (!usedMouse) {
          setShowModal(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [showModal, usedMouse]);

  const handleMouseOver = () => {
    setUsedMouse(true);
    setShowModal(true);
  };

  const handleClick = (e: React.MouseEvent) => {
    setUsedMouse(false);
    setShowModal(true);

    // Triggered by keyboard (detail === 0)
    if (e.detail === 0) {
      setTimeout(() => {
        autoRef.current?.focus();
      }, 0);
    }
  };

  const handleSetMode = (newMode: 'auto' | 'light' | 'dark') => {
    setMode(newMode);
    if (!usedMouse) {
      setShowModal(false);
      setUsedMouse(false);
    }
  };

  const handleMouseLeave = () => {
    setUsedMouse(false);
    setShowModal(false);
  };

  const handleEscape = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowModal(false);
      setUsedMouse(false);
    }
  };

  // Get current icon
  const getCurrentIcon = () => {
    if (mode === 'auto') {
      return darkMode ? 'moon-auto' : 'sun-auto';
    }
    return mode === 'dark' ? 'moon' : 'sun';
  };

  return (
    <div className="flex flex-col items-end relative" ref={modalRef}>
      <button
        className="p-1 lg:p-2 text-gray-600 dark:text-gray-300"
        onMouseOver={handleMouseOver}
        onClick={handleClick}
        aria-label="Open dark mode selector"
      >
        <IconComponent name={getCurrentIcon()} size={24} />
      </button>

      {showModal && (
        <div
          onMouseLeave={handleMouseLeave}
          className="absolute -mt-3 lg:-mt-2 -mr-1 lg:-mr-2 flex flex-col items-stretch rounded bg-white dark:bg-gray-800 py-2 border-2 shadow-xl space-y-1 z-50"
          role="dialog"
          aria-label="Dark mode selector"
          style={{ top: '-2px', right: '-2px' }}
        >
          {options.map((option) => (
            <button
              key={option.mode}
              ref={option.mode === 'auto' ? autoRef : null}
              onClick={() => handleSetMode(option.mode)}
              onKeyDown={handleEscape}
              className="flex items-center hover:bg-blue-100 dark:hover:bg-gray-700 px-2 lg:px-4 py-2"
              aria-label={option.description}
            >
              <p
                className={
                  mode === option.mode
                    ? 'text-blue-600 dark:text-blue-400'
                    : 'text-gray-500 dark:text-gray-400'
                }
              >
                {option.iconDark && systemDark ? (
                  <IconComponent name={option.iconDark} size={24} />
                ) : (
                  <IconComponent name={option.icon} size={24} />
                )}
              </p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
