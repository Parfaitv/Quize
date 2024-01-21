import { questionReduser, answerReduser } from "./reducers.ts";
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        questions: questionReduser,
        answers: answerReduser,
    }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
