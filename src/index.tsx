import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import WelcomePage from './pages/WelcomePage/index'
import CreateNewProfilePage from './pages/CreateNewProfilePage/index'

const VideoGenerationPage = lazy(() => import("./pages/VideoGenerationPage/index"))

const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />
  },
  {
    path: "/create",
    element: <CreateNewProfilePage />
  },
  {
    path: "/generation",
    element: <VideoGenerationPage />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <div className='animate-in fade-in-5 duration-700 w-full'>
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
)
