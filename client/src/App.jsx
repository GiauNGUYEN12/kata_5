import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Acceuil from "../src/assets/composant/acceuil/Acceuil"
import MenuPage from './assets/composant/menu/MenuPage'
const router = createBrowserRouter ([
  {
    path: "/",
    element: <Acceuil/>
  },
  {
    path: "/detail-menu",
    element: <MenuPage/>
  },
  
])

function App () {
  return (
    <RouterProvider router={router} />
  )
}

export default App
