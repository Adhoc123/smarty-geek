import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Single from '../Single/Single';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Demography.css';

const Demography = () => {
    const mainData = useLoaderData();
    const feature = mainData.data;
    console.log(feature)
    return (
        <div className='chart'>
            <LineChart className='chart' width={700} height={600} data={feature}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey='total' stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default Demography;