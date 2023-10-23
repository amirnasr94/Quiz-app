import Image from 'next/image'
import React from 'react'
import loading from "@/public/assets/images/loading.gif";

const Loading = () => {
  return (
    <div className='w-full min-h-screen m-auto flex'>
        <div className='w-1/3 m-auto text-center'>
            <Image src={loading} className='m-auto' width={200} height={200} alt=''/>
            <p>Loading...</p>
        </div>
    </div>
  )
}

export default Loading