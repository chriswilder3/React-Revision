import React from 'react'

function InputBox({label, amount, onAmountChange, onCurrencyChange, 
                currenyOptions=[], selectedCurreny='usd',
                amountDisabled = false, currencyDisabled = false, className='' }) {
  return (
    <div className={`${className} w-2/3 mt-4 text-blue-700 source flex flex-row justify-around gap-3 bg-gray-300 rounded-md p-3`}>
        <label htmlFor="amount"> {label} </label>
        <br />

        <input type="number" name='amount' value={amount}
          className='outline-none w-full bg-transparent py-1.5'
          disabled={amountDisabled} 
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          />
        <div className='w-1/2 flex flex-wrap justify-end '>
          <label htmlFor="currencyType"> Currency type</label>

          <select onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} 
              name="currencyType" id="currencyType"
              className='bg-blue-300 text-slate-700'
              value={selectedCurreny} disabled={currencyDisabled}
          >
            { currenyOptions.map( cur => 
              <option value={cur}> 
                {cur} 
              </option> )}
          </select>
        </div> 
        
      </div>
  )
}

export default InputBox