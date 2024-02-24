import React from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Routes/Router'
import AuthProviders from './Providers/AuthProviders'
import { HelmetProvider } from 'react-helmet-async'
import { Toaster } from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import store from './redux/Store'


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <DndProvider backend={HTML5Backend}>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProviders>
          <HelmetProvider>
            <Provider store={store}>
              <RouterProvider router={Router} />
            </Provider>
          </HelmetProvider>
        </AuthProviders>
        <Toaster></Toaster>
      </QueryClientProvider>
    </React.StrictMode>
  </DndProvider>,
)
