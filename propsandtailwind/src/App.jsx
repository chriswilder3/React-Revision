import { useState } from 'react'
import './App.css'
import Card from './components/Card'
function App() {
  
  let authorIds = [2,3,5]
  return (
    <div className='flex flex-col gap-3 font-serif '>
      <h1 className='mb-auto text-3xl font-mono p-3 rounded-md text-yellow-400'>
        Hello, Tailwind Demo
      </h1>
      <Card author="sachin" idList = {authorIds} />
      <Card author="Ramesh" idList = {authorIds} />
      <Card idList = {authorIds} />

    </div >
  )
}

export default App
