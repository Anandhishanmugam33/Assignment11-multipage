import React from 'react'
import { Link } from "react-router-dom";
function About() {
  return (
<div className="min-h-[92vh] flex justify-center items-center bg-gray-100 p-2 " >
<div className="max-w-4xl w-full border-2 border-gray-300 rounded-xl shadow-xl bg-white p-2 rounded-xl shadow-lg transition duration-500 hover:scale-105 hover:shadow-2xl">
    <h1 className=" text-blue-600 text-3xl font-bold text-center mb-6">
      About This Application
    </h1>

    <p className="text-center text-gray-700 text-lg leading-9 max-w-3xl mx-auto mb-12">
      The User Management App is a simple React application built to
      demonstrate React Router, navigation, and dynamic routing.
      It provides a responsive user interface where users can browse
      a list of users and view detailed information about each profile.
    </p>
    <h2 className="text-blue-600 text-3xl font-bold text-center mb-4">Features </h2>
    <ul className="text-centerspace-y-4 text-lg max-w-md mx-auto list-disc p-2">
      <li>React Functional Components</li>
      <li>React Router DOM</li>
      <li>Dynamic User Detail Pages</li>
      <li>Responsive Layout</li>
      <li>Tailwind CSS Styling</li>
    </ul>
     <div  className='flex justify-center mt-6'>
     <button  className="bg-green-600 justify-center text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"><Link to="/">
  Back to Home</Link></button>
</div>
  </div>
</div>
  )

}

export default About
