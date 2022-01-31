const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';
const SET_OFFSET = 'SET_OFFSET';
const SET_LOAD = 'SET_LOAD';
const SET_DISABLED = 'SET_DISABLED';

let initState = {
    users: [],
    followed: false,
    offset: 210,
    load: false,
    disabled: false
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
        return {
            ...state,
            users: [...state.users, ...action.users]
        }

        case SET_OFFSET: 
        return {
            ...state,
           offset: state.offset + action.offset
        }

        case SET_LOAD: 
        return {
            ...state,
           load: action.load
        }

        case SET_DISABLED: 
        return {
            ...state,
           disabled: action.disabled
        }

       default: 
       return state;
   }
}

export const followActionCreater = userId => {
    return {
      type: FOLLOW_TOGGLE,
      userId
    };
};

export const setUsersActionCreater = users => {
    return {
        type: SET_USERS,
        users
    }
};

export const setOffsetActionCreater = offset => {
    return {
        type: SET_OFFSET,
        offset
    }
};

export const setLoadActionCreater = bool => {
    return {
        type: SET_LOAD,
        load: bool
    }
};

export const setDisabledActionCreater = bool => {
    return {
        type: SET_DISABLED,
        disabled: bool
    }
};
