"use client";
import { data } from "autoprefixer";
import axios, { Axios } from "axios";
import React, { useEffect, useState } from "react";

function dynamicRouting({ params }) {
  const id  = params.routingid;

  const [user, setUser] = useState([]);
  const getData = async () => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
    setUser(data)
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="h-screen w-full bg-blue-950 text-white px-4 py-2">
        <h1>{JSON.stringify(user)}</h1>
      </div>
    </>
  );
}

export default dynamicRouting;
