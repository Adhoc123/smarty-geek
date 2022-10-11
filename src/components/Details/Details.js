import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Details.css';

const Details = () => {
    const quizDetails = useLoaderData();
    const {id, name, logo, questions, total} = quizDetails.data;
    console.log(questions)
    return (
        <div className='details'>
            <img src={logo}></img>
            <h2 >This quiz is prepared for {name}</h2>
            {
                questions.map(question=><Question
                    question={question.question}
                    options={question.options}
                    correctAnswer={question.correctAnswer}
                ></Question>)
            }
           
        </div>
    );
};

export default Details;