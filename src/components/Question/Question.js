import React from 'react';

const Question = ({question}) => {
    
    let cleanQuestion = question.replace( /(<([^>&]+)>)/ig, '');
    cleanQuestion = cleanQuestion.replace(/&nbsp;/g,'')
    return (
        <div>
            <h5>{cleanQuestion}</h5>
        </div>
    );
};

export default Question;