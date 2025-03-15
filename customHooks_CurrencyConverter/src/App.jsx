import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './InputBox'

function App() {

  const [sourceCurrency, setSourceCurrency] = useState("usd")
  const [destCurrency, setDestCurrency] = useState("inr")
  const [amount, setAmount] = useState(1)


  return (
    <>
      <h1 className='text-3xl arvo font-medium text-blue-500'>
         Curreny Converter App
      </h1>
      <InputBox currency = {sourceCurrency} amount={amount}/>
      <button className='duration-100 delay-75 transition-colors bg-orange-400 text-slate-700 hover:bg-rose-400 px-3'>
        Swap
      </button>
      <InputBox label="from" selectedCurreny = "usd" amount={100} amountDisabled='false' />

    </>
  )
}

export default App
