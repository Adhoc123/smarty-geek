import React from 'react';
import './Question.css';

const Question = ({question,options}) => {
    
    let cleanQuestion = question.replace( /(<([^>&]+)>)/ig, '');
    cleanQuestion = cleanQuestion.replace(/&nbsp;/g,'')
    // let cleanOption = option.replace( /(<([^>&]+)>)/ig, '');
    return (
        <div className='question'>
            <fieldset>  
                    <legend>{cleanQuestion}</legend>
            {
                options.map(option=>
                    <div>
                      <input type="radio" id="huey" name="drone" value="huey"
                             checked/>
                      <label for="huey">{option}</label>
                    </div> 
                )
            }
            </fieldset>
        </div>
    );
};

export default Question;