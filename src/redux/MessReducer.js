const ADD_MESS = "ADD-MESS";
const CHANGE_NEW_MESS = "CHANGE-NEW-MESS";
const SET_USER_MESS = "SET_USER_MESS";

let i = 1; 
const initionState = {
  data: [
    { id: 1, name: "Eddard Stark" }
  ],

  dataMess: [
    { id: 1, mess: "Hello. How are you?" }
   ],

  newMessage: "",
  userMess: ''
};

export const MessReducer = (state = initionState, action) => {
    switch (action.type) {
    case ADD_MESS: 
        let newMess = {
          id: ++i,
          mess: state.newMessage,
        };
        
        return {
          ...state,
          dataMess: [...state.dataMess, newMess],
          newMessage: ''
        };

      

      case CHANGE_NEW_MESS: 
      debugger;
        return {
          ...state, 
          newMessage: action.changeMess
        }

      case SET_USER_MESS: 
        return {
          ...state, 
          userMess: action.userMess
        }

    default: 
        return state;
  }
}

export const addMess = () => {
    return {
      type: ADD_MESS,
    };
};
  
export const changeMess = (text) => {
    return {
      type: CHANGE_NEW_MESS,
      changeMess: text,
    };
};

export const setUserMess = (id) => {
    return {
      type: SET_USER_MESS,
      userMess: id
    };
};

export default MessReducer;