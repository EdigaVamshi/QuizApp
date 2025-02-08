import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import QuizCard from '../components/QuizCard';
import ProgressBar from '../components/ProgressBar';
import bg from '../assets/bg.jpg'

const Quiz = () => {
    const [quizData, setQuizData] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:5000/api/quiz")
            .then((res) => setQuizData(res.data.questions))
            .catch((err) => setError(err));
    }, []);


    const handleAnswer = (answer) => {
        const correctAnswer = quizData[currentQuestion].options.find(opt => {
            if (opt.is_correct === true) {
                return opt
            }
        })

        const isCorrect = answer === correctAnswer.description;

        setSelectedAnswers([...selectedAnswers, { question: quizData[currentQuestion].description, answer, correctAnswer, isCorrect }]);
        if (isCorrect) setScore(score + 1);

        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            navigate('/results', { state: { score, total: quizData.length, selectedAnswers } });
        }
    };

    if (!quizData.length) return <div style={{ backgroundImage: `url(${bg})`}} className=" bg-cover bg-center h-screen w-full flex items-center">
        <p className='ml-32 text-6xl text-amber-50 drop-shadow-2xl font-extrabold'>Loading...</p>
    </div>;

    return (
        <div style={{ backgroundImage: `url(${bg})`}} className=" bg-cover bg-center h-screen w-full flex items-center">
            <div className='border w-[50%] bg-white ml-5 rounded-xl'>
                <ProgressBar current={currentQuestion + 1} total={quizData.length} />
                <QuizCard
                    question={quizData[currentQuestion].description}
                    options={quizData[currentQuestion].options}
                    handleAnswer={handleAnswer}
                />
            </div>
        </div>
    );
};

export default Quiz;