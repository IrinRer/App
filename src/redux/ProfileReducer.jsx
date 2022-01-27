import { compose } from "redux";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";

let i = 4;
let initionState = { 
  dataPost: [
    { id: 1, post: "how are you?", like: 12 },
    { id: 2, post: "im fine", like: 13 },
    { id: 3, post: "its my first post", like: 11 },
  ],
  newPost: "",
};

const ProfileReducer = (state = initionState, action) => {
        switch (action.type) {
          case "ADD-POST": 
            let newPost = {
              id: ++i,
              post: state.newPost,
              like: Math.floor(Math.random() * 50),
            };

            return {
            ...state,
            dataPost: [...state.dataPost, newPost],
            newPost: ''
           };
          
          
    
          case "CHANGE-NEW-POST": 
            return {...state,
            newPost: action.changePost}
          
            
          default: 
            return state;
    }

}

export const addPostActionCreater = () => {
    return {
      type: ADD_POST,
    };
  };
  
  export const changePostActionCreater = (text) => {
    return {
      type: CHANGE_NEW_POST,
      changePost: text,
    };
  };

export default ProfileReducer;