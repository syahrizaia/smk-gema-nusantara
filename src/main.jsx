import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Profil from './components/pages/profil/index.jsx'
import Pembelajaran from './components/pages/pembelajaran/index.jsx'
import Layanan from './components/pages/layanan/index.jsx'
import Prestasi from './components/pages/prestasi/index.jsx'
import Lulusan from './components/pages/lulusan/index.jsx'
import HubungiKami from './components/pages/hubungi-kami/index.jsx'
import NotFound from './components/pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/profil',
    element: <Profil />,
  },
  {
    path: '/pembelajaran',
    element: <Pembelajaran />,
  },
  {
    path: '/layanan',
    element: <Layanan />,
  },
  {
    path: '/prestasi',
    element: <Prestasi />,
  },
  {
    path: '/lulusan',
    element: <Lulusan />,
  },
  {
    path: '/hubungi-kami',
    element: <HubungiKami />,
  },
  {
    path: '/not-found',
    element: <NotFound />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
