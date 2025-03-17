import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeContextProvider } from './contexts/theme'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const darkTheme = () => {
    setThemeMode('dark')
  }
  const lightTheme = () => {
    setThemeMode('light')
  }
  // Since HTML tag is out of grasp in react app directly, we need
  // to use Classic javascript to use it. Remember, if we had to
  // change the theme of any inner element we could have done easily
  // by adding dark/light to class list. But since tailwindcss theme works
  // at html level, we need to go for classis JS. Which means, re-renders
  // need to be triggered manually.

  useEffect( () => {
      document.querySelector('html').classList.remove('dark','light')
      document.querySelector('html').classList.add(themeMode)
  } , [themeMode])

  return (
    <ThemeContextProvider value={{themeMode, darkTheme, lightTheme}}>
      <div className='flex flex-col  justify-center items-center'>
        <h1 className='text-2xl text-blue-400 font-medium'>
          Theme Switcher 
        </h1>
        <ThemeBtn />
        <Card />
      </div>
    </ThemeContextProvider>
  )
}

export default App
