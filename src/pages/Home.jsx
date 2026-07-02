import React from 'react'
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='h-[80vh] flex justify-center items-center'>
     <div className='border p-10  shadow-lg rounded-xl shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl'>
        <h1 className='text-blue-700 font-bold text-4xl text-center p-2'>Welcome to the User Management Application </h1>
        <p className='text-center text-xl p-4  max-w-xl mx-auto' >This application allows you to explore a list of users and view detailed information about each user.</p>
<div className="flex justify-center gap-6 mt-6">
  <Link
    to="/about" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
     About
  </Link>

  <Link
    to="/users" className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
    Users
  </Link>
</div>
     </div>
    </div>

  )
}

export default Home
