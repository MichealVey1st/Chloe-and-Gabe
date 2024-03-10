import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';
import { useDarkMode } from 'usehooks-ts';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Root() {
  const { isDarkMode, toggle } = useDarkMode({
    localStorageKey: 'uniqueThemeKey', 
  });

  useEffect(() => {
    const savedTheme = localStorage.getItem('uniqueThemeKey');
    if (savedTheme) {
      toggle(savedTheme === 'red-dark');
    }
  }, [toggle]);

  useEffect(() => {
    localStorage.setItem('uniqueThemeKey', isDarkMode ? 'red-dark' : 'light'); 
  }, [isDarkMode]);

  const theme = isDarkMode ? 'red-dark' : 'light'; 

  return (
    <React.StrictMode>
      <NextUIProvider theme={theme}>
        <main className={`text-foreground bg-background ${theme}`}>
          <App />
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
}

root.render(<Root />); // Correct rendering using createRoot
