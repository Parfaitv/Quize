import React, { useEffect, useState } from 'react';
import { AnswerQuestionsState } from './types';
import { decodedResponse } from './helper.ts';
import { StyledContainer } from './styled/style.ts';

interface QuestionProps {
    questions: AnswerQuestionsState;
    onNextQuestion: () => void;
    onSubmitAnswers: (answers: AnswerQuestionsState) => void;
}

const Question: React.FC<QuestionProps> = ({
    questions,
    onNextQuestion,
    onSubmitAnswers
}) => {
    const {
        category,
        correct_answer,
        difficulty,
        incorrect_answers,
        question,
        type
    } = decodedResponse(questions)

    const [allAnswers, setAllAnswers] = useState<string[]>([])
    const [answer, setAnswer] = useState<string[]>([]);

    useEffect(() => {
        const date = [correct_answer, ...incorrect_answers ?? ''].sort(() => Math.random() - 0.5);
        setAllAnswers(date)
    }, [question])

    const [checkedState, setCheckedState] = useState(
        new Array([correct_answer, ...incorrect_answers ?? ''].length).fill(false)
    );

    const handleAnswerChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
        if (answer.includes(event.target.value)) {
            const newAnswer = answer.filter((el) => el !== event.target.value)
            const updatedCheckedState = checkedState.map((item, i) => i === index ? !item : item);
            setAnswer(newAnswer)
            setCheckedState(updatedCheckedState)
        } else {
            const newAnswer = [...answer, event.target.value]
            const updatedCheckedState = checkedState.map((item, i) => i === index ? !item : item);
            setAnswer(newAnswer);
            setCheckedState(updatedCheckedState)
        }
    };

    const changeAnswer = (): AnswerQuestionsState => {
        const answersString = answer.join(' ')
        return {
            type,
            difficulty,
            category,
            question,
            correct_answer,
            incorrect_answers: allAnswers,
            userAnswer: answersString
        }
    }

    const handleNextQuestion = () => {
        const userAnswer = changeAnswer();
        onSubmitAnswers(userAnswer);
        onNextQuestion();
        const resetCheckedState = checkedState.map((item) => item ? !item : item);
        setCheckedState(resetCheckedState)
        setAnswer([]);
    };

    return (
        <StyledContainer style={{ margin: '1rem' }}>
            <legend style={{ margin: '0.5rem', padding: '0.2rem' }}>
                {`${question} *${difficulty}`}
            </legend>
            {allAnswers.map((el, i) => (
                <div key={i}>
                    <input
                        checked={checkedState[i]}
                        onChange={(e) => handleAnswerChange(e, i)}
                        type={type === 'multiple' ? 'checkbox' : 'radio'}
                        value={el}
                    />
                    <label>{el}</label>
                </div>
            ))}
            <button onClick={handleNextQuestion}>Next</button>
        </StyledContainer>
    );
};

export default Question;