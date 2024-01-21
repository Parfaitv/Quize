export interface AnswerQuestionsState {
    type?: string,
    difficulty?: string,
    category?: string,
    question?: string,
    correct_answer?: string,
    incorrect_answers?: string[]
    userAnswer?: string
}
