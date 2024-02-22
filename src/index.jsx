import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import About from './pages/about';
import Home from './pages/home';
import {
  createBrowserRouter,
  BrowserRouter,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter router={router}>
      <main className="red-dark text-#ffffff bg-foreground">
        <App />
      </main>
    </BrowserRouter>
  </React.StrictMode>
);