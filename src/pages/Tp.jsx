import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Tp() {
    const [quizData, setQuizData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/api/quiz")
            .then((res) => setQuizData(res.data))
            .catch((err) => setError(err));
    }, []);

    console.log(quizData.questions)

    return (
        <h1>Hi</h1>
    )
}

export default Tp