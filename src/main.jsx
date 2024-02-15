import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom'
import HomePage from './Pages/Home_Page.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <HomePage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
