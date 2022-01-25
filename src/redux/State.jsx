import ProfileReducer from './ProfileReducer';
import MessReducer from './MessReducer';
import SidebarReducer from './SidebarReducer';

const store = {
  _state: {
    profile: {
      dataPost: [
        { id: 1, post: "how are you?", like: 12 },
        { id: 2, post: "im fine", like: 13 },
        { id: 3, post: "its my first post", like: 11 },
      ],
      newPost: "",
    },
    messages: {
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
    },
    sidebar: {
      friends: [
        { id: 1, name: "Eddard Stark" },
        { id: 2, name: "Arya Stark" },
        { id: 3, name: "Samuel Tarly" },
        { id: 4, name: "Bran Stark" },
        { id: 5, name: "Jeor Mormont" },
      ],
    },
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  i: 4,

  _callSubscriber() {
    console.log("state изменился");
  },

  dispatch(action) {
    this._state.profile = ProfileReducer(this._state.profile, action);
    this._state.messages = MessReducer(this._state.messages, action);
    this._state.sidebar = SidebarReducer(this._state.sidebar, action);
  
    this._callSubscriber(this._state);
  }
}

export default store;
