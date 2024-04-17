"use client"
import Link from 'next/link';
import React, { useState } from 'react'

function page() {
  return (
    <>
      <div className="h-screen w-full bg-indigo-950 text-white px-4 py-2 flex items-center flex-col gap-y-3 text-3xl">
        <h1 className="text-8xl font-bold mb-10">PAGES</h1>
        <Link href="/Page1">page 1</Link>
        <Link href="/Page2">page 2</Link>
        <Link href="/Page3">page 3</Link>
        {/* <Link href="/Routing1">Routing1 page</Link> */}
      </div>
    </>
  );
}

export default page
