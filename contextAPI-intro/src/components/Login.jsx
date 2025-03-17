import React, { useState } from 'react'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

    }
  return (
    
    <div>
        Login Page : 

    <form style={{margin:"20px 3px 20px",backgroundColor:'skyblue', padding:'24px', display: "flex",flexDirection:"column", borderRadius:'10px', justifyItems:"center"}}>

            <label htmlFor="uname"> Username : </label>
           
            <input type="text" name="uname" id="uname" 
                value={username} style={{height:"1.1em",fontSize:"0.8em", padding:"5px",borderRadius:'4px'}}
                onChange={(e)=> setUsername(e.target.value)} 
            />

            <label htmlFor="pass"> Password : </label>
            <input type="text" name="pass" id="pass" 
                value={password} style={{height:"1.1em",fontSize:"0.8em", padding:"5px",borderRadius:'4px'}}
                onChange={(e)=> setPassword(e.target.value)} 
            />

            <br />
            <button onClick={handleSubmit}>
                Submit
            </button>
        </form>
    </div>
  )
}

export default Login