import React from 'react';
import { useNavigate } from 'react-router-dom';
import quiz from '../assets/quiz.jpg'

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{backgroundImage: `url(${quiz})`}} className="text-center bg-cover bg-center h-screen w-full flex flex-col justify-center items-center">
            <div>
                <h1 className=' text-6xl text-amber-50 drop-shadow-2xl font-extrabold mb-5'>Welcome to the Quiz App</h1>
                <button className=' text-amber-50 px-5 py-3 rounded-md shadow-2xl hover:shadow-black cursor-pointer font-medium bg-[#661eae]' onClick={() => navigate('/quiz')}>
                    Start Quiz
                </button>
            </div>
        </div>
    );
};

export default Home;