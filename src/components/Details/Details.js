import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';

const Details = () => {
    const quizDetails = useLoaderData();
    const {id, name, logo, questions} = quizDetails.data;
    return (
        <div>
            <h6>{name}</h6>
            <img src={logo}></img>
            <p>{questions.length}</p>
            {
                questions.map(question=><Question
                    question={question.question}
                ></Question>)
            }
        </div>
    );
};

export default Details;