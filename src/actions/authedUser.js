export const SET_AUTHED_USER = "SET_AUTHED_USER";

let authedUser

export function setAuthedUser(id) {
  return {
    type: SET_AUTHED_USER,
    id
  };
}

export function handleSetAuthedUser(id) {
  return (dispatch) => {
    authedUser = id
    dispatch(setAuthedUser(id))
    return authedUser
  }
}

