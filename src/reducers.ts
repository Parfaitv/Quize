import { createSlice } from '@reduxjs/toolkit';
import { AnswerQuestionsState, } from './types';
import { fetchQuestions } from './fetch.ts';

const initialState: AnswerQuestionsState[] = []

export const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        addQuestions: (state: AnswerQuestionsState[], action) => {
            state.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchQuestions.fulfilled, (state, action) => {
            state.push(...action.payload)
        })
    }
})

export const answerSlice = createSlice({
    name: 'answers',
    initialState,
    reducers: {
        addAnswer: (state: AnswerQuestionsState[], action) => {
            state.push(action.payload)
        }
    }
})

export const questionReduser = questionSlice.reducer
export const { addQuestions } = questionSlice.actions

export const answerReduser = answerSlice.reducer
export const { addAnswer } = answerSlice.actions
// export const questionSlice = createApi({
//     reducerPath: '/',
//     baseQuery: fetchBaseQuery({
//         baseUrl: 'https://opentdb.com/api.php?amount=10'
//     }),
//     tagTypes: ['get'],
//     endpoints(build) {
//         return {
//             fetchQuestions: build.query<{}, void>({
//                 query: () => 'get',
//                 transformResponse: (response) => response.data,
//             })
//         }
//     },

// })