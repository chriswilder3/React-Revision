import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import InputBox from './InputBox'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {

  const [sourceCurrency, setSourceCurrency] = useState("usd")
  const [destCurrency, setDestCurrency] = useState("inr")
  const [amount, setAmount] = useState(1)
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(sourceCurrency)
  const currencyOptions = Object.keys(currencyInfo)

  const convert = () =>{
    setConvertedAmount( amount * currencyInfo[destCurrency] )
  }

  const swap = () => {
    const temp = sourceCurrency
    setSourceCurrency(destCurrency)
    setDestCurrency(temp)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <>
      <h1 className='text-3xl arvo font-medium text-blue-500'>
         Curreny Converter App
      </h1>

      <form onSubmit={(e) => {
          e.preventDefault()
          convert()
      }} className='flex flex-col justify-center gap-3 items-center'>
    
          <InputBox label="from" selectedCurreny = {sourceCurrency} 
                amount={amount} currencyOptions={currencyOptions} 
                onCurrencyChange={(currency) => setSourceCurrency(currency) }
                onAmountChange={(amount) => setAmount(amount) }

                amountDisabled={false} />
          
          <button onClick={swap} className='mx-auto duration-100 delay-75 transition-colors bg-orange-400 text-slate-700 hover:bg-rose-400 px-3'>
            Swap
          </button>

          <InputBox label="to" selectedCurreny = {destCurrency} 
                amount={convertedAmount} currencyOptions={currencyOptions} 
                onCurrencyChange={(currency) => setDestCurrency(currency) }
                
                amountDisabled={true} />
          
          <button className='bg-blue-500 ' type="submit"> 
              Convert {sourceCurrency} to {destCurrency}
          </button>
      </form>
      
    </>
  )
}

export default App
