import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout';
import Home from './components/home/Home';
import About from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'

const router = createBrowserRouter(
  createRoutesFromElements(
     < Route path='/' element={ <Layout />}>
        <Route path='' element={ <Home/>} />
        <Route path='about' element={ <About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='user/:id' element={<User /> } />
     </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
