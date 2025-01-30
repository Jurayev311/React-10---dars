import { useStateValue } from '@/context';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import View from '../view/View';

const initialState = {
  fname: "",
  lname: "",
  profession: "",
  birthdate: "",
  gender: "male", // default qiymat
  bio: "",
};

const Create = () => {
  const [user, setUser] = useState(initialState);
  const { setUserData } = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserData((prev) => [...prev, { ...user, id: uuidv4() }]);
    setUser(initialState);
  };

  return (
    <div className="flex h-screen gap-9">
      <div className="w-1/4 bg-gray-100 p-4 shadow-lg">
        <p className="text-lg font-semibold mb-4">Create User</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            required
            value={user.fname}
            onChange={(event) => setUser({ ...user, fname: event.target.value })}
            className="border p-2 rounded"
            type="text"
            placeholder="First Name"
          />
          <input
            required
            value={user.lname}
            onChange={(event) => setUser({ ...user, lname: event.target.value })}
            className="border p-2 rounded"
            type="text"
            placeholder="Last Name"
          />
          <input
            required
            value={user.profession}
            onChange={(event) => setUser({ ...user, profession: event.target.value })}
            className="border p-2 rounded"
            type="text"
            placeholder="Profession"
          />
          <input
            required
            value={user.birthdate}
            onChange={(event) => setUser({ ...user, birthdate: event.target.value })}
            className="border p-2 rounded"
            type="number"
            placeholder="Birthdate"
          />
          <div className="flex gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="male"
                checked={user.gender === "male"}
                onChange={(event) => setUser({ ...user, gender: event.target.value })}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="female"
                checked={user.gender === "female"}
                onChange={(event) => setUser({ ...user, gender: event.target.value })}
              />
              Female
            </label>
          </div>
          <textarea
            value={user.bio}
            onChange={(event) => setUser({ ...user, bio: event.target.value })}
            className="border p-2 rounded"
            placeholder="Short Bio"
            rows="3"
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Create
          </button>
        </form>
      </div>
      <div>
        <View />
      </div>
    </div>
  );
};

export default Create;
