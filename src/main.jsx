import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './components/Navbar.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import { ToastContainer } from 'react-toastify'
import { StateProvider } from './contexts/StateContext.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateProvider >
        <CartProvider>
          <RouterProvider router={router} />
          <ToastContainer />
        </CartProvider>

      </StateProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
