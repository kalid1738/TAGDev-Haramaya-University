import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import PeoplePage from './pages/PeoplePage'
import PartnersPage from './pages/PartnersPage'
import NewsPage from './pages/NewsPage'
import ResourcesPage from './pages/ResourcesPage'
import ProgramsPage from './pages/ProgramsPage'
import ProgramDetailPage from './pages/ProgramDetailPage'
import MediaPage from './pages/MediaPage'
import SearchResultsPage from './pages/SearchResultsPage'
import EventCalendarPage from './pages/EventCalendarPage'

import AdminRouter from './admin/AdminRouter'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/about',
    element: <AboutPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/people',
    element: <PeoplePage />,
  },
  {
    path: '/partners',
    element: <PartnersPage />,
  },
  {
    path: '/news',
    element: <NewsPage />,
  },
  {
    path: '/programs',
    element: <ProgramsPage />,
  },
  {
    path: '/programs/:slug',
    element: <ProgramDetailPage />,
  },
  {
    path: '/resources',
    element: <ResourcesPage />,
  },
  {
    path: '/media',
    element: <MediaPage />,
  },
  {
    path: '/events',
    element: <EventCalendarPage />,
  },
  {
    path: '/search',
    element: <SearchResultsPage />,
  },
  {
    path: '/admin/*',
    element: <AdminRouter />,
  },
  {
    path: '*',
    element: <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404 - Page Not Found</h1>
        <p className="text-gray-600 mb-8">The page you're looking for doesn't exist.</p>
        <a href="/" className="btn-primary">Back to Home</a>
      </div>
    </div>,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)