import { createAsyncThunk } from "@reduxjs/toolkit"
import { AnswerQuestionsState } from "./types"
import axios from "axios";

export const fetchQuestions = createAsyncThunk<AnswerQuestionsState[]>('fetch/api', async (thunkApi) => {
    const response = await axios.get('https://opentdb.com/api.php?amount=10')
    const data = response.data
    return await data.results
})
