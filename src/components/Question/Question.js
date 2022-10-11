import React from 'react';
import './Question.css';

const Question = ({question,options,correctAnswer}) => {
    
    let cleanQuestion = question.replace( /(<([^>&]+)>)/ig, '');
    cleanQuestion = cleanQuestion.replace(/&nbsp;/g,'')
    const handle = (option) =>{
       if(option===correctAnswer){
         alert('right')
       }
       else{
        alert('wrong')
       }
    }
    return (
        <div className='question'>
            <fieldset>  
            <legend>{cleanQuestion}</legend>
            {
                options.map(option=>
                    <div>
                      <input onClick={()=>handle(option)} type="radio" id="huey" name="drone" value="huey"
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