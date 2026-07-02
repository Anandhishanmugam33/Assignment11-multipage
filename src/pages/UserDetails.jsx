import { useParams, useNavigate } from "react-router-dom";
import users from "../data/users";

function UserDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const user = users.find((item) => item.id === Number(id));

  return (
    <div className='flex justify-center items-center min-h-[92vh] bg-gray-200 p-2 mb-2'>
    <div className='border border-gray-300 rounded-xl shadow-xl p-2 w-[800px] min-h-[80vh] bg-white '>
   
      <h1 className='bg-blue-600 text-white text-center text-2xl font-bold p-4 rounded-md mb-6'>User Details</h1>

       <div className="space-y-2 text-lg">

      <h1 className='text-2xl font-semibold mb-4'>{user.name}</h1>
    
      <p><span className="font-bold">Email :</span> {user.email}</p>
      <p><span className="font-bold w-32">Age :</span> <span>{user.age}</span></p>
      <p><span className="font-bold">Phone :</span> {user.phone}</p>
      <p><span className="font-bold">Occupation :</span> {user.occupation}</p>
      <p><span className="font-bold">Skills :</span> {user.skills}</p>
      <p><span className="font-bold">Address :</span> {user.address}</p>
      <p><span className="font-bold">Description :</span> {user.descriptions}</p>
      
      
      </div>
      <div className="flex justify-center mt-12">
      <button onClick={() => navigate("/Users")}  className='bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300'>
        Back to users</button>
      </div>
    </div>
    </div>
  );
}

export default UserDetail;