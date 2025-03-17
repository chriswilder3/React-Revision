import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col  justify-center items-center'>
      <h1 className='text-2xl text-blue-400 font-medium'>
        Theme Switcher 
      </h1>
      <ThemeBtn />
      <Card />
    </div>
  )
}

export default App
