import React, { FC, Suspense } from 'react'
import LoadingQuiz from './LoadingQuiz';

interface IProps {
    title:string,
    answer:string[],
    handleSelectAnswer:(ans:string,index:number) => void,
}

const Question:FC<IProps> = ({title,answer,handleSelectAnswer}) => {
  return (
    <div className='grid grid-cols-2 gap-3'>
        <h3 className='text-xl col-span-full font-semibold py-4'>{title}</h3>
        {answer.map((ans,index) => (
            <li key={index} className="list-none border rounded-md p-3 text-white  bg-slate-700  hover:bg-slate-600" role='button' onClick={() => handleSelectAnswer(ans,index)}>
                <Suspense fallback={<LoadingQuiz/>}>
                    {ans}
                </Suspense>
            </li>
        ))}
    </div>
  )
}

export default Question