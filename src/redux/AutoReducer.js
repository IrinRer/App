import { AuthApi } from "../api/Api";

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
        ...action.payload
    };

    default:
      return state;
  }
};

export const setUserData = (id, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    payload: {id, email, login, isAuth}
  };
};

export const setAuth = () => {
  return (dispatch) => {
    AuthApi.auth() 
    .then((data) => {
        if(data.resultCode === 0) {
            let {id, login, email} = data.data;
            dispatch(setUserData(id, email, login, true));
        }

    }); 
  }
};

export const setLogin = (email, password, rememberMe, setStatus) => {
  return (dispatch) => {
    AuthApi.login(email, password, rememberMe) 
    .then((response) => {
        if(response.data.resultCode === 0) {
            dispatch(setAuth(true))
        } else {
          setStatus({error: response.data.messages});
        }
    }); 
  }
};

export const deleteLogin = () => {
  return (dispatch) => {
    AuthApi.logout() 
    .then((response) => {
        if(response.data.resultCode === 0) {
          dispatch(setUserData(null, null, null, false));
        }
    }); 
  }
};





