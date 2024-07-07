"use client"
import { signIn, useSession } from 'next-auth/react';
import {useRouter} from 'next/navigation';
import React from 'react';
import Link from 'next/link';

export default function Login() {
   const router=useRouter()
   const {data:session}=useSession()
   
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');
    console.log(username,password);
    
    const result = await signIn('credentials', {
      username,
      password,
      redirect: false
    },
  );
  router.push('/dashboard')
  };

  if(!session)return (
    <div className='w-screen h-screen bg-zinc-800 flex justify-center items-center'>
      <div className='p-16 bg-white rounded-xl flex flex-col'>
        <span className='font-bold text-3xl'>Welcome Back!</span>
        <form onSubmit={handleSubmit} className='mt-8 flex flex-col gap-4 relative left-0'>
          <label className='text-lg font-semibold'>Username</label>
          <input type='text' name='username' placeholder='Enter your username' className='border-2 rounded-lg p-3 focus:border-black outline-none' required />
          <label className='text-lg font-semibold'>Password</label>
          <input type='password' name='password' placeholder='Enter your password' className='border-2 rounded-lg p-3 focus:border-black outline-none' required />
          <input type='submit' value='Sign In' className='bg-black border-2 p-2 text-white rounded-lg cursor-pointer' />
        </form>
        <span className='mt-8 text-lg'>
          New user? <Link href='/signup' className='ml-4 text-blue-500 font-Roboto'>Join Now</Link>
        </span>
      </div>
    </div>
  )
  else {
    router.push('/dashboard')
  }
}
