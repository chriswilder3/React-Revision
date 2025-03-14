import React from 'react'

function InputBox({currency, amount}) {
  return (
    <div className='mt-4 text-blue-700 source flex flex-row justify-around gap-3 bg-gray-300 rounded-md p-3'>
        <label htmlFor="amount"> Enter amount in {currency} </label>
        <br />
        <input type="number" name='amount' value={amount}/>
        <select onChange={(e) => setSourceCurrency(e.target.value)} name="currency" id="">
          <option value="usd">
            USD
          </option>
          <option value="inr">
            INR
          </option>
        </select>
      </div>
  )
}

export default InputBox