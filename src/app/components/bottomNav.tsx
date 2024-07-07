"use client"
import React from 'react';
import Image from 'next/image';
// Import your SVG icon (adjust the path accordingly)
import LibraryIcon from '@/lib/library.png'; 
import HierarchyIcon from '@/lib/hierarchy.png'
import checkIcon from '@/lib/check.png'
import SyllabusIcon from '@/lib/syllabus.png'
import { useRouter } from 'next/navigation';
export default function BottomNavBar() {
    const router=useRouter()
    return (
        <div className="bg-transparent w-screen h-12 flex justify-around items-center">
            
           <div className='flex flex-col gap-2 text-white font-extralight '>
           <div className="text-black bg-white rounded-full h-10 w-10 flex justify-center items-center">
                <Image src={LibraryIcon} alt="Library Icon" className="h-6 w-6 cursor-pointer" onClick={()=>router.push("/library")}/>
            </div>
            Library
          
           </div>
               
           <div className='flex flex-col gap-1 text-white font-extralight'>
           <div className="text-black bg-white rounded-full h-10 w-10 flex justify-center items-center">
                <Image src={HierarchyIcon} alt="Library Icon" className="h-6 w-6 cursor-pointer" onClick={()=>router.push("/hierarchy")}/>
            </div>
            Hierarchy
          
           </div>
               
           <div className='flex flex-col gap-2 text-white font-extralight'>
           <div className="text-black bg-white rounded-full h-10 w-10 flex justify-center items-center">
                <Image src={checkIcon} alt="Library Icon" className="h-6 w-6 cursor-pointer" onClick={()=>router.push("/attendance")}/>
            </div>
            Attendance
          
           </div>
               
           <div className='flex flex-col gap-2 text-white font-extralight'>
           <div className="text-black bg-white rounded-full h-10 w-10 flex justify-center items-center">
                <Image src={SyllabusIcon} alt="Library Icon" className="h-6 w-6 cursor-pointer" onClick={()=>router.push("/syllabus")}/>
            </div>
            Syllabus
          
           </div>
        </div>
    );
}
