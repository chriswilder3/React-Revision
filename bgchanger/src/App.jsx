import React,{ useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setbgColor] = useState('white')

  const changeBG = (color) => {
    setbgColor(color)
  }
  

  return (
    <div style={{backgroundColor : bgColor}} className='flex flex-col duration-100 text-gray-300 min-h-screen w-full justify-around items-center'>
      <h1 className='text-xl font-mono bg-gray-600 p-3 rounded-md'>
        Background Color Changer
      </h1>
      <h3 className='text-xl font-mono bg-gray-300 text-slate-600 p-1 rounded'>
        Change color using below buttons
      </h3>
      
      <div className='flex flex-row gap-10 text-slate-500 '>
          <button className='shadow-md' onClick={() => changeBG('red')}>
            Red
          </button>
          <button className='shadow-md' onClick={() => changeBG('blue')}>
            Blue
          </button>
          <button className='shadow-md' onClick={() => changeBG('yellow')}>
            Yellow
          </button>
      </div>
    </div>
  )
}

export default App
