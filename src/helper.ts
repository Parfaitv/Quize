import { AnswerQuestionsState } from "./types";

function decodeHTMLEntities(text: string) {
    var entities = [
        ['amp', '&'],
        ['apos', '\''],
        ['#x27', '\''],
        ['#x2F', '/'],
        ['#039', '\''],
        ['#047', '/'],
        ['lt', '<'],
        ['gt', '>'],
        ['nbsp', ' '],
        ['quot', '"']
    ];

    for (var i = 0, max = entities.length; i < max; ++i)
        text = text.replace(new RegExp('&' + entities[i][0] + ';', 'g'), entities[i][1]);

    return text;
}

export const decodedResponse = (questions: AnswerQuestionsState) => {
    const {
        category,
        correct_answer,
        difficulty,
        incorrect_answers,
        question,
        type
    } = questions;

    const DIncorrect = incorrect_answers?.map((el) => decodeHTMLEntities(el ?? ''))

    return {
        category: decodeHTMLEntities(category ?? ''),
        correct_answer: decodeHTMLEntities(correct_answer ?? ''),
        difficulty: decodeHTMLEntities(difficulty ?? ''),
        incorrect_answers: DIncorrect,
        question: decodeHTMLEntities(question ?? ''),
        type: decodeHTMLEntities(type ?? '')
    }
}