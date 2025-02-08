import React from 'react';

const QuizCard = ({ question, options, handleAnswer }) => {
  return (
    <div className="flex flex-col px-4 mb-10">
      <h2 className='mb-4 text-2xl font-semibold leading-relaxed'>{question}</h2>
      <div className=' flex flex-col gap-y-3'>
        {options.map((option, index) => (
          <button className=' border text-lg font-medium text-start mx-2 pl-4 py-2 rounded-2xl hover:bg-gray-100 hover:shadow-xl hover:cursor-pointer' key={index} onClick={() => handleAnswer(option.description)}>
            {option.description}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuizCard;