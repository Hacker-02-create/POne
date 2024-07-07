"use client"
import React from 'react';
import Link from 'next/link'
export default function Login() {
  return (
    <div className=' p-8 bg-zinc-800 flex justify-center items-center'>
    <div className=' p-16 bg-white rounded-xl  flex flex-col '>
       <span className='font-bold text-4xl mb-2'>Welcome To PortalOne</span>
       <span className='font-medium text-sm relative left-16'>
Empowering Minds, Shaping Futures.</span>
    <form className=' mt-10 flex flex-col gap-4 relative left-0' action={"/login"}>
<label className='text-lg font-semibold'>Your Name </label>
<input type='text' placeholder='Enter your name' className='border-2 rounded-lg p-3 focus:border-black outline-none ' required></input>
<label className='text-lg font-semibold '>Father Name</label>
<input type='text' className='border-2 rounded-lg p-3  focus:border-black outline-none ' placeholder="Enter your father's name" required></input>
<label className='text-lg font-semibold'>Mother Name</label>
<input type='text' className='border-2 rounded-lg p-3  focus:border-black outline-none' placeholder="Enter your mother's name" required></input>
<label className='text-lg font-semibold'>Phone</label>
<input type='tel' placeholder='Enter your phone number' className='border-2 rounded-lg p-3  focus:border-black outline-none' required></input>
<label className='text-lg font-semibold'>Email</label>
<input type='email' placeholder='Enter your email' className='border-2 rounded-lg p-3  focus:border-black outline-none' required></input>

<label className='text-lg font-semibold'>Password</label>
<input type='password' placeholder='Enter your password' className='border-2 rounded-lg p-3  focus:border-black outline-none' required></input>
<label className='text-lg font-semibold'>Course</label>
<select className='border -2 rounded-lg p-3 bg-white  focus:border-black outline-none' required>
  <option>-- Select Course --</option>
  <option>B.Tech</option>
</select>

<label className='text-lg font-semibold'>Date Of Birth</label>
<input type='date' className='border-2 rounded-lg   focus:border-black outline-none p-3' required></input>


<div className='flex justify-between'>
  <input type='radio' id='student' name='role' checked/>
  <label htmlFor='student'>Student</label>
  <input type='radio' id='faculty' name='role' />
  <label htmlFor='faculty'>Faculty</label>
</div>


<input type='submit' value={"Register"} className='bg-black border-2 p-2 mt-4 text-white rounded-lg'></input>
</form>
<span className='mt-8 text-lg relative left-16'>Already A Member?
    <Link href={"/signin"} className='ml-4 text-blue-500 font-Roboto'>Login Here</Link>
</span>
    </div>
    
    
    
    
    </div>
  )
}