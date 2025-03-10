import React from 'react'

function Card({author='dummyname', idList}) {
  return (
    <div className='w-1/2 p-2 bg-slate-500 mx-auto flex flex-row items-center rounded'>
        <img className='mx-auto w-1/2' src="https://images.pexels.com/photos/31075100/pexels-photo-31075100/free-photo-of-charming-venetian-canal-with-historic-bridge.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        
        <div className='flex flex-col'>
            <h3 className=' text-red-300 p-3 rounded text-xl'>
                Author : {author}
            </h3>
            <p>
               {idList} Lorem ipsum dolor sit amet consectetur adipisicing elit. quo impedit voluptas, totam, provident eius magnam molestias quisquam.
            </p>
        </div>
    </div>
  )
}

export default Card