import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';
import './Details.css';

const Details = () => {
    const quizDetails = useLoaderData();
    const {id, name, logo, questions} = quizDetails.data;
    return (
        <div className='details'>
            <img src={logo}></img>
            <h2>{name}</h2>
            {
                questions.map(question=><Question
                    question={question.question}
                    options={question.options}
                ></Question>)
            }
           
        </div>
    );
};

export default Details;