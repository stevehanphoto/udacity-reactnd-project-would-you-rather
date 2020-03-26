import { saveQuestion, saveQuestionAnswer } from "../utils/api"
//import { showLoading, hideLoading } from "react-redux-loading";
import { showLoading, hideLoading } from "react-redux-loading-bar"

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const SAVE_QUESTION = "SAVE_QUESTION"
export const SAVE_ANSWER = "SAVE_ANSWER"

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  };
}

export function createNewQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question
  };
}

export function saveAnswer({authedUser, qid, answer}) {
  return {
    type: SAVE_ANSWER,
    authedUser,
    qid,
    answer
  };
}

export function handleSaveAnswer(info) {
  return (dispatch) => {
    return saveQuestionAnswer(info)
      .then(() => {
        dispatch(saveAnswer(info))
      })
      .catch((err) => {
        console.warn('Error in handleSaveAnswer: ', err)
        alert('There was an error in saving your answer.  Please trying again.')
      })
  }
}

export function handleCreateNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({ optionOneText, optionTwoText, author: authedUser})
      .then((question) => {
        dispatch(createNewQuestion((question)))
      })
      .then(() =>
        dispatch(hideLoading()))
      .catch((err) => {
        console.warn('Error in handleCreateNewQuestion: ', err)
        alert('There was an error in saving your question.  Please trying again.')
      })
  }
}

