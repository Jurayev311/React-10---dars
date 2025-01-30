import { useStateValue } from '@/context';
import React from 'react';

const View = () => {
  const { userData, setUserData } = useStateValue();

  return (
    <div className="mt-10 px-6">
      <h2 className="text-2xl font-semibold mb-6 text-center">Users List</h2>
      <div className="grid grid-cols-2 gap-4">
  {userData?.map(user => (
    <div
      key={user.id}
      className="bg-white shadow-lg rounded-xl p-4 border border-gray-200 text-center max-w-sm mx-auto"
    >
      <h3 className="text-lg font-medium text-gray-900">{user.fname} {user.lname}</h3>
      <p className="text-gray-600">{user.profession}</p>
      <p className="text-gray-500">Born: {user.birthdate}</p>
      <p className="text-gray-500">Gender: {user.gender}</p>
      <p className="italic text-gray-500">"{user.bio}"</p>
      <button
        onClick={() => setUserData(prev => prev.filter(item => item.id !== user.id))}
        className="mt-2 bg-red-500 text-white px-4 py-1 rounded-lg hover:bg-red-600 transition duration-200"
      >
        Remove
      </button>
    </div>
  ))}
</div>

    </div>
  );
};

export default View;
