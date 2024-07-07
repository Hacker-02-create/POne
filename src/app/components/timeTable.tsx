"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import DownArrow from '@/lib/down-arrow.png';
import UpArrow from '@/lib/up-arrow.png';
import SCard from './sCard';
const TimeTable = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`flex flex-col bg-white w-full mt-4 p-4 rounded-md overflow-scroll  transition-all duration-1000 ${isExpanded ? 'max-h-screen' : 'max-h-16'}`}>
      <div className='bg-white flex justify-between'>
        <span className='text-zinc-900 font-bold'>{"Today's Time Table"}</span>
        <Image
          src={isExpanded ? UpArrow : DownArrow}
          alt='arrow'
          className='h-8 w-8 cursor-pointer'
          onClick={toggleExpansion}
        />
      </div>
      <div className={`transition-opacity duration-1000 ${isExpanded ? 'opacity-100' : 'opacity-0'}`}>
   <SCard />
   <SCard />
   <SCard />
   <SCard />
   <SCard />
   <SCard />
      
      </div>
    </div>
  );
};

export default TimeTable;
