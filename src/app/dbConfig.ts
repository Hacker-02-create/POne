import mongoose from 'mongoose'
async function dbConnect(){
    try{
        const conn=await mongoose.connect("mongodb://localhost:27017/PortalOne")
        console.log("connected to the database",conn)
    }
    catch(err){
        console.log("some error occured",err)
    }
}
export default dbConnect



/*
"use client"
import React from 'react';
import Link from 'next/link'
import { useSession } from 'next-auth/react';
export default function Login() {
  const {data:session}=useSession();
  // console.log(session,2);
  
  return (
    <div className='w-screen h-screen bg-zinc-800 flex justify-center items-center'>
    <div className=' p-16 bg-white rounded-xl  flex flex-col'>
       <span className='font-bold text-3xl'>Welcome Back !</span>
    <form className=' mt-8 flex flex-col gap-4 relative left-0' action={"/dashboard"}>
<label className='text-lg font-semibold'>Name</label>
<input type='text' placeholder='Enter your name' className='border-2 rounded-lg p-3  focus:border-black outline-none' required></input>
<label className='text-lg font-semibold'>Password</label>
<input type='password' placeholder='Enter your password' className='border-2 rounded-lg p-3  focus:border-black outline-none' required></input>
<input type='submit' value={"Sign In"} className='bg-black border-2 p-2 text-white rounded-lg'></input>
</form>
<span className='mt-8 text-lg'>Wanna Join?
    <Link href={"/signup"} className='ml-4 text-blue-500 font-Roboto'>Join Now</Link>
</span>
    </div>
    
    
    
    
    </div>
  )
}


*/