import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const addCount = () => setCount(count+1)
  const delCount = () => setCount(count-1)

  return (
    <>
      <h1
      >
        Basic couter Program
      </h1>
      <h2>
         Count : {count}
      </h2>
      <button type='button' onClick={addCount}>
        Add Value
      </button> 
      {" "}    
      {/* Above {" "} adds a gap bw elements */}

      <button type='button' onClick={delCount}>
        Remove Value
      </button>
    </>
  )
}

export default App
