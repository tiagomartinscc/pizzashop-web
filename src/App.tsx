import './index.css'

import { RouterProvider } from 'react-router-dom'

import { router } from './routs'

export function App() {
  return <RouterProvider router={router} />
}
