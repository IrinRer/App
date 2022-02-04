import { UserApi } from "../api/Api";

const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";
const SET_OFFSET = "SET_OFFSET";
const SET_LOAD = "SET_LOAD";
const SET_DISABLED = "SET_DISABLED";
const SET_NEWUSER = "SET_NEWUSER";

let initState = {
  users: [],
  offset: 1,
  load: false,
  disabled: false
};

export const UsersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW_TOGGLE:
      return {
        ...state,
        users: state.users.map((item) => {
          if (item.id === action.userId) {
            return { ...item, followed: !item.followed };
          }

          return item;
        }),
      };

    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };

    case SET_OFFSET:
      return {
        ...state,
        offset: action.offset,
      };

    case SET_NEWUSER:
      return {
        ...state,
        users: [...state.users, ...action.newUser],
      };

    case SET_LOAD:
      return {
        ...state,
        load: action.load,
      };

    case SET_DISABLED:
      return {
        ...state,
        disabled: action.disabled,
      };

    default:
      return state;
  }
};

export const followed = (userId) => {
  return {
    type: FOLLOW_TOGGLE,
    userId,
  };
};

export const setUser = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setOffset = (offset) => {
  return {
    type: SET_OFFSET,
    offset,
  };
};

export const setLoad = (bool) => {
  return {
    type: SET_LOAD,
    load: bool,
  };
};

export const setDisabled = (bool) => {
  return {
    type: SET_DISABLED,
    disabled: bool,
  };
};

export const setNewUser = (newUser) => {
  return {
    type: SET_NEWUSER,
    newUser,
  };
};

export const getUsers = (offset) => {
  return (dispatch) => {
  dispatch(setLoad(true));
  dispatch(setDisabled(true));

  UserApi.getUser(offset).then((data) => {
    dispatch(setLoad(false));
    dispatch(setDisabled(false));
    dispatch(setUser(data.items));
    dispatch(setOffset(offset + 1));
    });
  }
}

export const getUsersButton = (offset) => {
  return (dispatch) => {
    dispatch(setDisabled(true));
    UserApi.getUser(offset).then((data) => {
      dispatch(setLoad(false));
      dispatch(setDisabled(false));
      dispatch(setNewUser(data.items));
      dispatch(setOffset(offset + 1));
  });
 }
}


export const followThunk = (id) => {
  return (dispatch) => {
    UserApi.follow(id).then((response) => {
      dispatch(followed(id));
    });
  };
};