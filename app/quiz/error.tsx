"use client"

import React, { useEffect } from 'react'

const Error = ({error}:{error: Error & { digest?: string }}) => {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className='w-full min-h-screen m-auto flex'>
            <div className='w-1/3 m-auto text-center border rounded-md'>
                <h2 className='p-4 text-2xl font-bold'>Something went wrong!</h2>
            </div>
        </div>
    )
}

export default Error;