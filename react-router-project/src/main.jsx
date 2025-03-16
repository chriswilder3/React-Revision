import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout';
import Home from './components/home/Home';

const router = createBrowserRouter(
  createRoutesFromElements(
     < Route path='/' element={ <Layout />}>
        <Route path='' element={ <Home/>} />
     </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
