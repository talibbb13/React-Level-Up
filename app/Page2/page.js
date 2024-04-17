"use client";
import axios, { Axios } from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function page2() {
  const [users, setUsers] = useState([]);
  const getData = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(data);
  };
  
  useEffect(() => {
    getData()
  }, [])
  
  return (
    <>
      <div className="h-screen w-full bg-cyan-950 text-white px-4 py-2">
        <button
          onClick={getData}
          className="bg-[#2652bf] px-3 py-2 rounded-lg text-white font-semibold text-sm mb-10 select-none"
        >
          Get Images
        </button>

        <div className="w-full glass p-1 text-black font-semibold text-md">
          <ul>
            {users.map((user) => {
              return (
                <li className="flex justify-between">
                  {user.name}
                  <Link href={`/${user.id}`}>{"➡"}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default page2;
