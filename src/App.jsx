import { useState } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Countrypage from './layouts/Countrypage'
import Homepage from './layouts/Homepage'
import NotFound from './layouts/NotFound'
import Navbar from "./components/Navbar"
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { useEffect } from 'react'


const  allCountriesLoader = async() => {
  const res = await fetch(`https://restcountries.com/v3.1/all`)
  if(!res.ok) {
    throw Error("Failed to fetch countries")
  }
  return res.json()

}

const countryLoader = async({params}) => {
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.code}`)
  if(!res.ok) {
    throw Error("Failed to fetch country data")
  }
  return res.json();
}

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(true);

   // Create light and dark themes
   const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#ffffff',
      },
      text: {
        primary: '#000',
      },
    },
  });

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: '#202C36',
      },
      text: {
        primary: '#fff',
      },
    },
  });

  useEffect(() => {
    // This effect will run every time darkMode changes
    if (darkMode) {
      document.body.classList.remove("light-mode");
      
    } else {
      document.body.classList.add("light-mode");
      
    }
  }, [darkMode]);

  const createroutesfromElements = createRoutesFromElements(
    <> 
    <Route path="/" loader={allCountriesLoader} element={<Homepage darkMode={darkMode} setDarkMode={setDarkMode}  />}/>
    <Route path="/country/:code" loader={countryLoader} element={<Countrypage darkMode={darkMode} setDarkMode={setDarkMode} />} />
    <Route path="*" element={<NotFound darkMode={darkMode} setDarkMode={setDarkMode} />} /> 

    </>

    
  
  
  )

  const router = createBrowserRouter(createroutesfromElements)
  return (
    // <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      // <CssBaseline />
      <RouterProvider router={router} />
  // </ThemeProvider>
  )
}



export default App

