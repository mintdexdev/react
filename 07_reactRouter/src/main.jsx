import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Root from './Root.jsx'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router'
import {
  About,
  Contact,
  Github,
  Home,
  User,
  githubInfoLoader
} from './components/index.js'

const route = createBrowserRouter(
  createRoutesFromChildren(
    <Route path="/" element={<Root />} >
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/:userId" element={<User />} />
      <Route path="/github" element={<Github />}
        loader={githubInfoLoader} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
