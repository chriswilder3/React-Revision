import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
  const {id} = useParams()
  return (
    <div className='bg-orange-200 text-slate-700 font-medium '>
        User : {id}
    </div>
  )
}

export default User