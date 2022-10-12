import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Final from '../Final/Final';

const Quiz = () => {
    const quizes = useLoaderData();
    // const {id} = quizes.data;
   // console.log(quizes.data)
    return (
        <div>
            {
                quizes.data.map(ok=><Final
                ok={ok}
                ></Final>)
            }
        </div>
    );
};

export default Quiz;