const ADD_MESS = "ADD-MESS";
const CHANGE_NEW_MESS = "CHANGE-NEW-MESS";

let i = 9; 
const initionState = {
  data: [
    { id: 1, name: "Eddard Stark" },
    { id: 2, name: "Arya Stark" },
    { id: 3, name: "Samuel Tarly" },
    { id: 4, name: "Bran Stark" },
    { id: 5, name: "Jeor Mormont" },
  ],

  dataMess: [
    { id: 1, mess: "Hi" },
    { id: 2, mess: "Hello. How are you?" },
    { id: 3, mess: "Fine. You?" },
    { id: 4, mess: "Too" },
    { id: 5, mess: "Cool" },
    { id: 6, mess: "Yes" },
    { id: 7, mess: "Too" },
    { id: 8, mess: "Cool" },
    { id: 9, mess: "Yes" },
  ],

  newMessage: "",
};

export const MessReducer = (state = initionState, action) => {
    switch (action.type) {
    case "ADD-MESS":
        let newMess = {
          id: i++,
          mess: state.newMessage,
        };

        state.dataMess.push(newMess);
        state.newMessage = "";
        return state;

      case "CHANGE-NEW-MESS":
        state.newMessage = action.changeMess;
        return state;
    default: 
        return state;
  }
}

export const addMessActionCreater = () => {
    return {
      type: ADD_MESS,
    };
  };
  
  export const changeMessActionCreater = (text) => {
    return {
      type: CHANGE_NEW_MESS,
      changeMess: text,
    };
  };

export default MessReducer;