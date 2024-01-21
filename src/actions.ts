// import { Dispatch } from 'react';
// import { getQuestions } from './fetch';
// import { Action } from './reducers';

// export const fetchQuestions = () => {
//     return async (dispatch: Dispatch<Action>) => {
//         const questions = await getQuestions();
//         console.log(questions);

//         dispatch({ type: 'FETCH_QUESTIONS', payload: questions });
//     };
// };

// export const submitAnswers = (answers: string[]) => {
//     return (dispatch: Dispatch<Action>) => {
//         // Ваша логика для отправки ответов, например отправка запроса к API
//         // После отправки ответов, выполните dispatch с типом действия SUBMIT_ANSWERS и данными ответов
//         dispatch({ type: 'SUBMIT_ANSWERS', payload: answers });
//     };
// };