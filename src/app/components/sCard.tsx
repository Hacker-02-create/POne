import React from 'react'

function SCard() {
  return (
    <div className='bg-white rounded-xl text-black'>
        <div className='mt-2 flex flex-col p-4 border-2 rounded-xl'>
        <div className='flex justify-between'>
        <span>Lecture : 99 </span>
        <span className='mr-2'>BCAC 0813</span>
        </div>
        <span>Lab/AB - X/ Room -336</span>
        <span>Faculty :Doctor</span>
<span>Subject: Discrete Mathematics</span>
<div className=' flex justify-end '>
    <span className='bg-yellow-400 rounded-md p-1 text-black'>N/A</span>
</div>
        </div>
    </div>
  )
}

export default SCard