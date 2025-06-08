import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Link } from 'react-router';
import { HomePage } from './pages/HomePage/HomePage';
import { BlogDetail } from './pages/Blog/BlogDetail';
import { BlogList } from './pages/Blog/BlogList';
import { CreatorDetail } from './pages/Creators/CreatorDetail';
import { CreatorList } from './pages/Creators/CreatorsList';
import { NotFound } from './pages/NotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/blog',
    element: <BlogList />,
  },
  {
    path: '/blog/:id',
    element: <BlogDetail />,
  },
  {
    path: '/tvurci',
    element: <CreatorList />,
  },
  {
    path: '/tvurce/:id',
    element: <CreatorDetail />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const root = createRoot(document.getElementById('app'));
root.render(<RouterProvider router={router} />);
