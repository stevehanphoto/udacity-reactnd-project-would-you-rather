import { RECEIVE_USERS } from "../actions/users";
import { SAVE_QUESTION, SAVE_ANSWER } from "../actions/questions";

export default function user(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      };
    case SAVE_QUESTION:
      const { question } = action

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
      case SAVE_ANSWER:
        const { authedUser, qid, answer } = action

        return {
          ...state,
          [authedUser]: {
            ...state[authedUser],
            answers: {
              ...state[authedUser].answers,
              [qid]: answer
            }
          }
        }
    default:
      return state;
  }
}
