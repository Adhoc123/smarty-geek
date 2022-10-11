import React from 'react';
import './Question.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from "react-hot-toast";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';

const Question = ({question,options,correctAnswer}) => {
    
    let cleanQuestion = question.replace( /(<([^>&]+)>)/ig, '');
    cleanQuestion = cleanQuestion.replace(/&nbsp;/g,'')
    const handle = (option) =>{
       if(option===correctAnswer){
        toast.info('hello');
       }

    }
    const showToastMessage = () => {
        toast.info('Correct Answer: '+correctAnswer, {
            position: toast.POSITION.TOP_CENTER
        });
    };
    return (
        <div className='question'>
            <fieldset> 
            <div className='quiz-header'>
                <legend>{cleanQuestion}</legend>
                    <FontAwesomeIcon onClick={showToastMessage} id='icon' icon={faEye} />
                    <ToastContainer/>
            </div>
            {
                options.map(option=>
                    <div>
                      <input onClick={handle(option)}   type="radio" id="huey" name="drone" value="huey"
                             checked/>   
                      {/* {handle(option)===correctAnswer?<ToastContainer/>:'heloo'} */}
                      <label for="huey">{option}</label>                      
                    </div> 
                )
            }
            </fieldset>
        </div>
    );
};

export default Question;