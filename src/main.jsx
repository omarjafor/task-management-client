import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProviders from './Providers/AuthProviders'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <HelmetProvider>
      <RouterProvider router={Router} />
      </HelmetProvider>
    </AuthProviders>
    <Toaster></Toaster>
  </React.StrictMode>,
)
