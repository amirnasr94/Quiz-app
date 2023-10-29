"use client"

import Image from 'next/image'
import React from 'react'
import trueCheck from "@/public/assets/images/trueCheck.png";
import falseCheck from "@/public/assets/images/falseCheck.png";
import { useSearchParams } from 'next/navigation'

const Status = () => {
  const searchParams = useSearchParams();
  const status = searchParams.get("status");
  const textStatus = searchParams.get("textStatus");

  return (
    <div className="w-1/2 mx-auto border bg-slate-200 rounded-md p-3 text-center">
        <div className='w-full'>
            <Image src={status === 'true' ? trueCheck : falseCheck} className='mx-auto my-6' width={100} height={100} alt=''/>
            <h2 className='p-6 text-text-2xl font-bold'>{textStatus}</h2>
        </div>
    </div>
  )
}

export default Status;