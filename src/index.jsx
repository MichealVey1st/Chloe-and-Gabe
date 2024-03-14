import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';


const root = ReactDOM.createRoot(document.getElementById('root'));

function Root() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    console.log('Stored Theme:', storedTheme);
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);
  
  return (
    <React.StrictMode>
      <NextUIProvider>
        <main className={`text-foreground bg-background ${theme}`}>
          <App />
        </main>
      </NextUIProvider>
    </React.StrictMode>
  );
}

root.render(<Root />);
