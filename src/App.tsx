import React, { useState, useEffect } from 'react';
import Question from './Question.tsx';
import { RootState } from './store';
import { useAppDispatch, useAppSelector } from './hooks.ts';
import { addAnswer } from './reducers.ts';
import { fetchQuestions } from './fetch.ts';
import Result from './Result.tsx';
import { AnswerQuestionsState } from './types.js';

export const App: React.FC = () => {
    const dispatch = useAppDispatch();
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const questions = useAppSelector((state: RootState) => state.questions);

    useEffect(() => {
        setTimeout(() => dispatch(fetchQuestions()), 2000);
    }, []);

    const handleNextQuestion = () => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    };

    const handleSubmitAnswers = (answers: AnswerQuestionsState) => {
        dispatch(addAnswer(answers));
    };

    if (questions.length === 0) {
        return <div>Loading...</div>; // Отображение загрузки пока данные вопросов не загружены
    }

    if (currentQuestionIndex === questions.length) {
        return <Result />; // Отображение результатов после последнего вопроса
    }

    return (
        <div>
            <Question
                questions={questions[currentQuestionIndex]}
                onNextQuestion={handleNextQuestion}
                onSubmitAnswers={handleSubmitAnswers}
            />
        </div>
    );
};
