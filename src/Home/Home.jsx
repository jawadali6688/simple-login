import React from 'react'
import Navbar from '../Common/Navbar'

function Home() {
  return (
    <>
    <Navbar/>
    <div 
    className='flex flex-col justify-center items-center gap-5 bg-gray-200 mx-auto mt-14 py-20 rounded-2xl shadow-lg shadow-gray-800 w-[95%] md:w-[95%] lg:w-[90%] duration-700 mb-14'>
    <h1 
    className='text-3xl text-pink-500 font-bold '>
    Login Page
    </h1>
    <input type="text" 
    className='w-[95%] py-3 rounded-md px-2 border border-pink-700  focus:border  focus:outline-none focus:border-pink-800 duration-500 active:outline-none '
    />
        <input type="password" 
    className='w-[95%] py-3 rounded-md px-2 border border-pink-700  focus:border  focus:outline-none focus:border-pink-800  duration-500 active:outline-none'
    />
    <button
    className=' w-[95%] border-none bg-green-700 py-2 px-14 text-white font-bold rounded-md hover:bg-green-800 hover:cursor-pointer duration-300 active:bg-green-900 '>
        Login
    </button>
    </div>
    </>
  )
}

export default Home
