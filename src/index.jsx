import "./output.css";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { NextUIProvider } from '@nextui-org/react';

// TODO: Integrate a wonderful way to change themes based on what the ThemeSwitcher is set to
// TODO: Create another color pallet to use in themes mainly a light mode and possibly revamp darkmode? Or just use the default theme?

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NextUIProvider>
      <main className="red-dark text-foreground bg-background">
        <App />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);