const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';

let i = 3;

let initState = {
    users: [
        // {id: 1, name: 'Catelyn Stark', status: 'A woman can rule as wisely as a man.', 
        // country: 'Seven Kingdoms', city:'Riverrun', followed: true, thumbnail: null},
        // {id: 2, name: 'Daenerys Targaryen', status: 'If I look back I am lost.',
        // country: 'Essos', city:'Meereen', followed: false, thumbnail: null},
        // {id: 3, name: 'Tyrion Lannister', status: `All dwarfs are bastards in their father's eyes`,
        // country: 'Seven Kingdoms', city:`King's Landing`, followed: false, thumbnail: null}
    ]
}

export const UsersReducer = (state = initState, action) => {
   switch(action.type) {
       case FOLLOW_TOGGLE: 
         return {
           ...state,
           users: state.users.map(item => {
               if(item.id === action.userId) {
                return {...item, followed: !item.followed};
               }

               return item;
           }), 

       }

        case SET_USERS: 
        debugger;
        return {
            ...state,
            users: [...state.users, ...action.users]
        }
       default: 
       return state;
   }
}

export const followActionCreater = (userId) => {
    return {
      type: FOLLOW_TOGGLE,
      userId
    };
};

export const setUsersActionCreater = (users) => {
    return {
        type: SET_USERS,
        users
    }
}
