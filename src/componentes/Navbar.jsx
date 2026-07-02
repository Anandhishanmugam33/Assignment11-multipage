import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
    <nav className= 'bg-black text-white px-3 py-3 shadow-md'>
    <div className='max-w-7xl mx-auto flex justify-between items-center'>
        <h1 className='text-xl font-bold  '>User Management App</h1>
        <div className='flex gap-6 text-semibold'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Users'>Users</Link>
    </div>
    </div>
    </nav>
  )
}

export default Navbar
