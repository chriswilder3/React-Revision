import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("")
  const [passwordLength, setPasswordLength] = useState(5)
  const [isNumbersAllowed, setIsNumbersAllowed] = useState(false)
  const [isSpecialCharsAllowed, setIsSpecialCharsAllowed] = useState(0)

  const passwordInputRef = useRef(null)

  const generatePassword = useCallback( () =>{
    let passwordChars = "abcdefghojklmnopqrstuvwyz"
    const numberPart = isNumbersAllowed?"1234567890":""
    const specialCharPart = isSpecialCharsAllowed?"!@#$%^&*?()<>,.[]{}_+-=|;:":""
    passwordChars = passwordChars+numberPart+specialCharPart

    let passwordTemp = ""
    for(let i=1; i<= Number(passwordLength); i++){
        const charIndex = Math.floor( Math.random()* passwordChars.length )
        passwordTemp += passwordChars[charIndex]
    }
    setPassword(passwordTemp)
    }, [isNumbersAllowed,isSpecialCharsAllowed, passwordLength]
  )
  
  useEffect( () =>{
     
     generatePassword()
  },[isNumbersAllowed,isSpecialCharsAllowed, passwordLength])

  const copyPassword = async () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.select();  // Select the text
      passwordInputRef.current.setSelectionRange(0, password.length); // Ensure selection
  
      try {
        await navigator.clipboard.writeText(password);
        console.log("Content copied to clipboard");
      } catch (error) {
        console.error("Failed to copy: ", error);
      }
    }
  };
  
  return (
    <div className='bg-gray-800 min-h-screen text-gray-200 flex flex-col justify-center gap-4 px-5 mx-auto'>
      <h1 className='text-2xl text-blue-400 font-medium'>
        Password Generator
      </h1>

      <label htmlFor="password">Generated Password</label>
      <input type="text" ref={passwordInputRef} className='bg-gray-100 text-slate-800' name='password' id='password' value={password} readOnly/>

      <button type='button' onClick={copyPassword}>
        Copy
      </button>
      
      <label htmlFor="numbers">Is Numbers Allowed</label>
      <input type="checkbox" name="numbers" id="numbers" 
         onChange={() => setIsNumbersAllowed(!isNumbersAllowed)} />

      <label htmlFor="specialchars">Is Specialchars Allowed</label>
      <input type="checkbox" name="specialchars" id="specialchars" 
        onChange={() => setIsSpecialCharsAllowed(!isSpecialCharsAllowed)}/>

      <label htmlFor="passlength">Password Length ({passwordLength})</label>
      <input type="range" name="passlength" id="passlength" min={5} max={15}
          onChange={(e)=>setPasswordLength(Number(e.target.value))} />

    </div>
  )
}

export default App
