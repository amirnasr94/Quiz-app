"use client"
import React,{useState} from 'react'
import { questions } from '@/constants/data';
import Result from './result-com';
import Question from './question-com';
import NextButton from './button-com';
import { useRouter } from 'next/navigation'

export type IResult = {
    score:number,
    trueAnswers:number,
    wrongAnswers:number
}
const Quiz = () => {
    const [activeQuestion,setActiveQuestion] = useState<number>(0);
    const [selectedAnswer,setSelectedAnswer] = useState<boolean>(false);
    const [selectedAnswerIndex,setSelectedAnswerIndex] = useState<number | null>(null)
    const [checked,setChecked] = useState<boolean>(false);
    const [showResult,setShowResult] = useState<boolean>(false);
    // const [status,setStatus] = useState()
    const [result,setResult] = useState<IResult>({
        score:0,
        trueAnswers:0,
        wrongAnswers:0
    })

    const {title,answer,correctAnswer} = questions[activeQuestion];
    const router = useRouter()
    

    // TODO:
    const handleSelectAnswer = (ans:string,index:number):void => {
        setChecked(true);
        setSelectedAnswerIndex(index);
        if (ans === correctAnswer ) {
            setSelectedAnswer(true);
            router.push("/status?status=true&textStatus=Correct Answer")
        }else{
            setSelectedAnswer(false)
            router.push("/status?status=false&textStatus=Wrong Answer")
        }
    }



    // TODO:
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
                    <Question title={title} answer={answer} handleSelectAnswer={handleSelectAnswer} selectedAnswerIndex={selectedAnswerIndex}/>
                ) : (
                    <Result result={result}/>
                )}
                <NextButton checked={checked} handleNextQuestion={handleNextQuestion} activeQuestion={activeQuestion} questions={questions}/>
            </div>
        </section>
    )
}

export default Quiz;