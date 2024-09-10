"use client"
import { signIn, useSession } from 'next-auth/react'
import React from 'react'


const page = () => {
    const session = useSession();
    console.log(session);
  return (
    <div className='text-white'>
        <button onClick={()=>signIn("google")}>
            Login with Google
        </button>
    </div>
  )
}

export default page