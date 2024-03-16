import React from 'react'

function Navbar() {
  return (
   <nav className='flex justify-between items-center py-4 px-6 bg-gray-600'>
    <div className='text-2xl text-white'>
<h1>MyWeb</h1>
    </div>
    <ul className='flex flex-row gap-8'>
        <li className='text-white hover:text-gray-400 hover: cursor-pointer duration-500'>Home</li>
        <li className='text-white hover:text-gray-400 hover: cursor-pointer duration-500'>Login</li>
        <li className='text-white hover:text-gray-400 hover: cursor-pointer duration-500'>Signup</li>
    </ul>
   </nav>
  )
}

export default Navbar
