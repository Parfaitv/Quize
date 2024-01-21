import React, { FC } from 'react';
import { useAppSelector } from './hooks.ts';
import { RootState } from './store';


const Result: FC = () => {
    const answers = useAppSelector((state: RootState) => state.answers)

    return (
        <div>
            {answers.map((answer, index) => (
                <div key={index}>
                    <div>
                        <h1>{answer.question}</h1>
                        <div>
                            <div>
                                {answer.incorrect_answers?.map((incorrectAnswer, index) => (
                                    <div key={index}>
                                        {incorrectAnswer}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div> Your answers - {answer.userAnswer}</div>
                    <div> Your answers - {answer.correct_answer}</div>
                </div>
            ))}
        </div>
    );
};

export default Result;