const SET_USER_DATA = 'SET_USER_DATA';

let initState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
};

export const AutoReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
    };

    default:
      return state;
  }
};

export const setUserData = (id, email, login) => {
  return {
    type: SET_USER_DATA,
    data: {id, email, login}
  };
};

