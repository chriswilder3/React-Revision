import React from 'react'
import { Link, NavLink } from 'react-router-dom';


function Home() {
    return (
        <div className="">
           
                <h1 className='text- text-center text-3xl font-medium text-blue-400'> Welcome to React Router Demo </h1> 

            <div className="grid  place-items-center sm:mt-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
            </div>

            <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">Lorem Ipsum Yojo</h1>
        </div>
    );
}

export default Home