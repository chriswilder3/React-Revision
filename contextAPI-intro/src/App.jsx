import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>
          Welcome to Context API
          <Login />
          <Profile />
      </h1>
    </>
  )
}

export default App
