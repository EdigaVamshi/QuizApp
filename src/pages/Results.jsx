import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import quiz from '../assets/quiz.jpg';
import { TiTick } from 'react-icons/ti';

const Results = () => {
    const location = useLocation();
    const { score, total, selectedAnswers } = location.state;
    const navigate = useNavigate();

    return (
        <div style={{ backgroundImage: `url(${quiz})` }} className="bg-cover h-full w-full flex justify-center items-center">
            <div className='flex flex-wrap flex-col items-center border bg-amber-50 mx-24 px-96 py-5 my-28'>
                <div className='flex items-center flex-col mb-14'>
                    <h1 className='text-6xl font-bold mb-8'>Quiz Results</h1>
                    <TiTick className='border h-28 w-28 bg-green-800 text-white rounded-full mb-6' />
                    <h2 className='text-4xl font-semibold'>You Scored: {score}/{total}</h2>
                </div>
                <div className='mb-4'>
                    {selectedAnswers.map((item, index) => (
                        <div className='border my-3 pl-3 py-3 rounded-lg' key={index} style={{ color: item.isCorrect ? 'green' : 'red' }}>
                            <p className='mb-2'><strong className='text-lg'>{index+1}.Question:</strong> {item.question}</p>
                            <p><strong className='text-lg'>You Answered:</strong> {item.answer}</p>
                            <p><strong className='text-lg'>Correct Answer:</strong> {item.correctAnswer.description}</p>
                        </div>
                    ))}
                </div>
                <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                    Retry Quiz
                </Button>
            </div>
        </div>
    );
};

export default Results;