import { Link } from "react-router-dom";
import users from "../data/users";

function User() {
  return (
    <div  className='max-w-6xl mx-auto px-6 py-10'>
      <h1 className='text-4xl font-bold text-center mb-10'>Users List</h1>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
      {users.map((user) => (
        <div key={user.id} className='bg-white shadow-lg rounded-xl p-6 text-center hover:shadow-2xl transition duration-300'>
          <h2 className='text-2xl font-semibold mb-3'>{user.name}</h2>
          <p  className='text-gray-600 mb-5'>{user.email}</p>
          

          <Link to={`/users/${user.id}`}>
            <button className='bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition'>
               View Details
            </button>
          </Link>
        </div>
      ))}
    </div>
    </div>
  );
}

export default User;