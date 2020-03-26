import { RECEIVE_QUESTIONS, SAVE_ANSWER, SAVE_QUESTION } from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      };
    case SAVE_QUESTION:
      const {question} = action
      console.log(question)
      return {
        ...state,
        [question.id]: {
          ...question,
/*          optionOne: {
            votes: [],
            text: question.text
          },
          optionTwo: {
            votes: [],
            text: question.text
          }*/
        }
      }
    case SAVE_ANSWER:
      let questionWithNewVote = {}
/*      console.group("saveAnswer")
        console.log("state:", state)
        console.log("state.questions:", state.questions)
        console.log("questions: SAVE_ANSWER", action, action.answer)
        state ?
          console.log("question:",state[action.qid]) :
          console.log("state is undefined")
      console.groupEnd()
*/
/*
      questionWithNewVote = {
        ...state[action.qid],
        [action.answer]: {
          ...state[action.qid].[action.answer],
          votes:
            state[action.qid].[action.answer].votes.concat([action.authedUser])
        }
      }
*/

      if (action.answer === "optionOne") {
        questionWithNewVote = {
          ...state[action.qid],
          optionOne: {
            ...state[action.qid].optionOne,
            votes:
              state[action.qid].optionOne.votes.concat([action.authedUser])
          }
        }
      }
      else if (action.answer === "optionTwo") {
        questionWithNewVote = {
          ...state[action.qid],
          optionTwo: {
            ...state[action.qid].optionTwo,
            votes:
              state[action.qid].optionTwo.votes.concat([action.authedUser])
          }
        }
      }
      else {
        console.log("Error in saving answer.  Answer doesn't exist")
      }

      console.log("questionWithNewVote after:",questionWithNewVote)

      return {
        ...state,
        [action.qid]: questionWithNewVote
/*        [action.question.id]: action.question,
          [action.answer].votes.concat([action.authedUser.id])*/
            //[action.option]: state[action.id].[action.answer].votes.concat([action.authedUser.id])
      }
    default:
      return state;
  }
}
