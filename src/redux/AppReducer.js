import { setAuth } from "./AutoReducer";

const SET_INITIALIZED = "SET_INITIALIZED";

const initState = {
  initialized: false,
};

export const AppReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const setInitialized = () => {
  return {
    type: SET_INITIALIZED,
  };
};

export const initializeApp = () => {
  return (dispatch) => {
    let result = dispatch(setAuth());
    Promise.all([result]).then(() => {
      dispatch(setInitialized());
    });
  };
};
