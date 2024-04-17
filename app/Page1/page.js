"use client";
import React, { useState } from "react";

function page1() {
  const [input, setInput] = useState("");

  return (
    <>
      <form className="h-screen  w-full bg-zinc-400 px-3">
        <h1 className="font-semibold text-3xl py-3">Enter your details</h1>
        <input
          type="text"
          className="px-2 py-1 text-xl font-medium rounded-lg border border-black"
          value={input}
          onChange={(det) => {
            setInput(det.target.value);
          }}
          placeholder="Type something..."
        />
      </form>
    </>
  );
}

export default page1;
