import React, { FC } from 'react'
import type {Question} from "@/constants/modal";

interface IProps {
    checked:boolean,
    handleNextQuestion: () => void,
    activeQuestion:number,
    questions:Question[]
}
const NextButton:FC<IProps> = ({checked,handleNextQuestion,activeQuestion,questions}) => {
  return (
    <div className='w-full text-center mt-10'>
        {
            checked ? (
                <button className='w-20 p-3 bg-cyan-700 rounded-md text-white border border-gray-500 hover:bg-cyan-600' onClick={handleNextQuestion}>{activeQuestion === questions.length - 1 ? "End" : "Next"}</button>
            ) : (
                <button className='w-20 p-3 bg-cyan-700 rounded-md text-white border border-gray-500 hover:bg-cyan-600 disabled:bg-gray-400' disabled onClick={handleNextQuestion}>{activeQuestion === questions.length - 1 ? "End" : "Next"}</button>
            )
        }
    </div>
  )
}

export default NextButton