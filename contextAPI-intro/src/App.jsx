import { useState } from 'react'

import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider >
      <h1>
          Welcome to Context API
          <Login />
          <Profile />
      </h1>
    </ UserContextProvider >
  )
}

export default App
