import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const {userData} = useContext(UserContext)
    if(!userData){
        return(
            <div>
                Loading...
            </div>
        )
    }
  return (
    <div> 
        Profile : <br />
        Username : {userData.username} <br />
        Password : {userData.password}
    </div>
  )
}

export default Profile