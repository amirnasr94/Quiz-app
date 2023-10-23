"use client"
import React,{useState} from 'react'
import { questions } from '@/constants/data';

type Result = {
    score:number,
    trueAnswers:number,
    wrongAnswers:number
}
const Page = () => {
    const [activeQuestion,setActiveQuestion] = useState<number>(0);
    const [selectedAnswer,setSelectedAnswer] = useState<boolean>(false);
    const [selectedAnswerIndex,setSelectedAnswerIndex] = useState<number | null>(null)
    const [checked,setChecked] = useState<boolean>(false);
    const [showResult,setShowResult] = useState<boolean>(false);
    const [result,setResult] = useState<Result>({
        score:0,
        trueAnswers:0,
        wrongAnswers:0
    })

    const {title,answer,correctAnswer} = questions[activeQuestion];

    const handleSelectAnswer = (ans:string,index:number):void => {
        setChecked(true);
        setSelectedAnswerIndex(index);
        if (ans === correctAnswer ) {
            setSelectedAnswer(true)
        }else{
            setSelectedAnswer(false)
        }
    }

    const handleNextQuestion = () => {
        setSelectedAnswerIndex(null);
        setResult((prev) => selectedAnswer ? ({...prev,score: prev.score + 5,trueAnswers: prev.trueAnswers + 1}) : ({...prev,wrongAnswers: prev.wrongAnswers + 1}));
        if (activeQuestion !== questions.length - 1) {
            setActiveQuestion(prev => prev + 1);
        }else{
            setActiveQuestion(0);
            setShowResult(true);
        }
        setChecked(false);
    }


  return (
    <section className='container min-h-screen m-auto flex'>
        <div className='w-1/2 m-auto rounded-md border p-2'>
                {!showResult ? (
                    <div className='grid grid-cols-2 gap-3'>
                        <h3 className='text-xl col-span-full font-semibold py-4'>{title}</h3>
                        {answer.map((ans,index) => (
                            <li key={index} className={`list-none border rounded-md p-3 text-white  ${selectedAnswerIndex === index ? "bg-green-900" : "bg-slate-700  hover:bg-slate-600"} `} role='button' onClick={() => handleSelectAnswer(ans,index)}>{ans}</li>
                        ))}
                    </div>
                ) : (
                    <div>
                        <h3 className='text-xl font-semibold py-4'>Result:</h3>
                        <p>Correct Answer: {result.trueAnswers}</p>
                        <p>Wrong Answer: {result.wrongAnswers}</p>
                        <p>Score: {result.score}</p>
                        <button className='w-full p-3 bg-cyan-700 rounded-md text-white border border-gray-500 hover:bg-cyan-600' onClick={() => window.location.reload()}>Start Again</button>
                    </div>

                )}
            <div className='w-full text-center mt-10'>
                {
                    checked ? (
                        <button className='w-20 p-3 bg-cyan-700 rounded-md text-white border border-gray-500 hover:bg-cyan-600' onClick={handleNextQuestion}>{activeQuestion === questions.length - 1 ? "End" : "Next"}</button>
                    ) : (
                        <button className='w-20 p-3 bg-cyan-700 rounded-md text-white border border-gray-500 hover:bg-cyan-600 disabled:bg-gray-400' disabled onClick={handleNextQuestion}>{activeQuestion === questions.length - 1 ? "End" : "Next"}</button>
                    )
                }
            </div>
        </div>
    </section>
  )
}

export default Page;