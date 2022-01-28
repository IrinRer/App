let initionState = { 
        friends: [
          { id: 1, name: "Eddard Stark" },
          { id: 2, name: "Arya Stark" },
          { id: 3, name: "Samuel Tarly" },
          { id: 4, name: "Bran Stark" },
          { id: 5, name: "Jeor Mormont" },
        ],
  };

const SidebarReducer = (state = initionState, action) => {
    return state;
}

export default SidebarReducer;