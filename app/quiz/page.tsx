"use client"
import React,{useEffect, useState} from 'react'
import { question } from '@/constants/data';
import { Question } from '@/constants/modal';

const Page = () => {
    const [currentQuestions,setCurrentQuestions] = useState<Question>();
    const [nextQuestion,setNextQuestion] = useState<number>(1);


    const goToNextQuestion = () => {
        setNextQuestion(prevState => prevState <= 5 ? prevState++ : 0);
    }

    const clickToCheckAnswer = (ans:string) => {
        if (currentQuestions?.correctAnswer === ans) {
            alert("Correct Answer")
            goToNextQuestion();
        }else{
            alert("Wrong Answer")

        }
    }

    useEffect(() => {
        setCurrentQuestions(question.find(item => item.id === nextQuestion));
    },[nextQuestion]);

  return (
    <section className='container min-h-screen m-auto'>
        <div className='w-1/2 m-auto rounded-md border p-2'>
            <h3 className='text-xl font-semibold py-4'>{currentQuestions?.title}</h3>
            <div className='grid grid-cols-2 gap-3'>
                {
                    currentQuestions?.answer.map((item,index) => {
                        return (
                            <button key={index} className='p-3 bg-slate-700 rounded-md text-white border border-gray-500 hover:bg-slate-600' onClick={() => clickToCheckAnswer(item)}>{item}</button>
                        )
                    })
                }
            </div>
        </div>
        {/* <div className='w-full text-center mt-10'>
            <button className='w-20 p-3 bg-cyan-700 rounded-md text-white border border-gray-500 hover:bg-cyan-600'>Next</button>
        </div> */}
    </section>
  )
}

export default Page;