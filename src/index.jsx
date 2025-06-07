import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { HomePage } from './pages/HomePage/HomePage';
import './global.css';

createRoot(document.querySelector('#app')).render(<HomePage />);

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <div>blog</div>,
  },
  {
    path: '/blog/:id',
    element: <div>blogDetail</div>,
  },
  {
    path: '/tvurci',
    element: <div>tvurci</div>,
  },
  {
    path: '/tvurci/:id',
    element: <div>tvurciId</div>,
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
