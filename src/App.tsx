
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './pages/home/Home'
import Gallery from './pages/gallery/Gallery'
import RootLayout from './rootLayout/RootLayout'
import { useState } from 'react'
import { DarkModeContext } from './context/Context'
import Loader from './components/loader/Loader'

function App() {

  const [darkMode, setDarkMode] = useState<boolean>(false)
  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<RootLayout/>}>

      <Route index element={<Home/>}/>
      <Route path='gallery' element={<Gallery/>}/>
      <Route path='loader' element={<Loader/>}/>

      </Route>
      </>
    )
  )

  return (
    <div className={`${darkMode && "dark"}`}>
      <DarkModeContext.Provider value={{darkMode, setDarkMode}}>
     <RouterProvider router={router}/>
     </DarkModeContext.Provider>
    </div>
  )
}

export default App
