import { createRoot } from 'react-dom/client'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'
import Index from './routes/Index/Index'
import Login from './routes/Login/Login'
import Register from './routes/Register/Register'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/' element={<Index />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
    </Route>
  )
)

const rootElement = document.getElementById('root')

if (rootElement != null) {
  createRoot(rootElement).render(
    <RouterProvider router={router} />
  )
} else {
  console.error("Element with id 'root' not found in the document.")
}
