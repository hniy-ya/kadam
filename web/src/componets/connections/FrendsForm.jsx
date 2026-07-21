
"use client";

import { useState } from "react";
import useFriendStore from '../../store/friendStore.js';
import { X, Search, UserPlus } from "lucide-react";

export default function AddFriendModal({
  open,
  onClose,
}) {

  const [username, setUsername] = useState("");

  const {
    search,
    searchResults,
    sendRequest,
    loading,
  } = useFriendStore();

  const handleSearch = async () => {

    if (!username.trim()) return;

    await search(username);

  };

  const handleAdd = async (id) => {

    const data=await sendRequest(id);

    console.log(data);
    

    onClose();

  };

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">

      <div className="bg-white rounded-2xl w-[92%] max-w-md p-5">

        <div className="flex justify-between items-center">

          <h2 className="font-bold text-xl">
            Add Connection
          </h2>

          <button onClick={onClose}>
            <X />
          </button>

        </div>

        <div className="mt-5 flex items-center border rounded-xl px-3">

          <Search
            size={18}
            className="text-gray-500"
          />

          <input
            type="text"
            placeholder="Search username..."
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            className="flex-1 p-3 outline-none"
          />

        </div>

        <button
          onClick={handleSearch}
          className="w-full mt-4 bg-[#255736] text-white py-3 rounded-xl"
        >

          Search

        </button>

        <div className="mt-5 space-y-3">

          {

            loading ?

            <p>Searching...</p>

            :

            searchResults.map((user)=>(

              <div
                key={user._id}
                className="border rounded-xl p-3 flex justify-between items-center"
              >

                <div className="flex items-center gap-3">

                  <div className="w-12 h-12 rounded-full bg-slate-200"></div>

                  <div>

                    <h3 className="font-semibold">
                      {user.username}
                    </h3>

                    <p className="text-sm text-gray-500">
                      {user.email}
                    </p>

                  </div>

                </div>

                <button
                  onClick={()=>handleAdd(user._id)}
                  className="bg-[#255736] text-white px-3 py-2 rounded-lg"
                >

                  <UserPlus size={18}/>

                </button>

              </div>

            ))

          }

        </div>

      </div>

    </div>

  );

}