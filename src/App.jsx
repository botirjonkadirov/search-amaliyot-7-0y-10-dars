import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Mainlayout from '../layouts/Mainlayout'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Single from './components/Single'
import Likedphotos from './components/Likedphotos'
import Login from './components/Login'
function App() {
  const routes = createBrowserRouter([{
    path: '/',
    element: <Mainlayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'about',
        element: <About/>
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: `single/:id`,
        element: <Single/>
      },
      {
        path: 'login',
        element: <Login/>
      },
      {
        path: 'likedphotos',
        element: <Likedphotos/>
      }
    ]
  }])
  return <RouterProvider router={routes}/>
}

export default App