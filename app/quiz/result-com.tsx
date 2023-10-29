import React from 'react'
import type {IResult} from "./page";

const Result = ({result}:{result:IResult}) => {
  return (
    <div>
        <h3 className='text-xl font-semibold py-4'>Result:</h3>
        <p>Correct Answer: {result.trueAnswers}</p>
        <p>Wrong Answer: {result.wrongAnswers}</p>
        <p>Score: {result.score}</p>
        <button className='w-full p-3 bg-cyan-700 rounded-md text-white border border-gray-500 hover:bg-cyan-600' onClick={() => window.location.reload()}>Start Again</button>
    </div>
  )
}

export default Result