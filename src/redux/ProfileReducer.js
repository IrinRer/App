import { UserApi } from "../api/Api";

const ADD_POST = "ADD-POST";
const CHANGE_NEW_POST = "CHANGE-NEW-POST";
const SET_PROFILE = 'SET_PROFILE';

let i = 4;
let initionState = { 
  dataPost: [
    { id: 1, post: "how are you?", like: 12 },
    { id: 2, post: "im fine", like: 13 },
    { id: 3, post: "its my first post", like: 11 },
  ],
  newPost: "",
  profile: null
};

const ProfileReducer = (state = initionState, action) => {
        switch (action.type) {
          case ADD_POST: 
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
          
          
    
          case CHANGE_NEW_POST: 
            return {...state,
            newPost: action.changePost}

          case SET_PROFILE: 
            return {...state,
            profile: action.profile}
          
            
          default: 
            return state;
    }

}

export const addPostActionCreater = () => {
    return {
      type: ADD_POST,
    };
};
  
export const changePostActionCreater = text => {
    return {
      type: CHANGE_NEW_POST,
      changePost: text,
    };
};

export const setProfile = (profile) => {
    return {
      type: SET_PROFILE,
      profile,
    };
};

export const getProfileId = (id) => {
  return (dispatch) => {
    UserApi.profileId(id).then((data) => {
      dispatch(setProfile(data));
    });
  };
}; 

export default ProfileReducer;