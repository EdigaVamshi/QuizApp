import React from 'react';

const ProgressBar = ({ current, total }) => {
  const progress = (current / total) * 100;

  return (
    <div>
      <div className='ml-1 mb-3 h-2 bg-amber-400 rounded-2xl' style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default ProgressBar;