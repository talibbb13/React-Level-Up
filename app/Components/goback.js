import Link from 'next/link'
import React from 'react'

function goback() {
  return (
      <>
      <Link href="/" className='bg-red-800 px-4 py-1 rounded-lg text-white flex justify-center items-center absolute right-3 top-3 opacity-50'>Go Back</Link>
      </>
  )
}

export default goback
