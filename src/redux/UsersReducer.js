const FOLLOW_TOGGLE = 'FOLLOW_TOGGLE';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_COUNT = 'SET_COUNT';
const LOAD_TOGGLE = 'LOAD_TOGGLE';

let initState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currenPage: 1,
    isLoad: false
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
            users: action.users
        }

        case SET_CURRENT_PAGE: 
        return {
            ...state,
            currenPage: action.currenPage
        }

        case SET_COUNT: 
        return {
            ...state,
            totalUsersCount: action.totalUsersCount
        }

        case LOAD_TOGGLE: 
        return {
            ...state,
            isLoad: action.isLoad
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

export const setCurrentActionCreater = currenPage => {
    return {
        type: SET_CURRENT_PAGE,
        currenPage
    }
};

export const setUserCountActionCreater = totalUsersCount => {
    return {
        type: SET_COUNT,
        totalUsersCount
    }
};

export const loadToggleActionCreater = (load) => {
    return {
        type: LOAD_TOGGLE,
        isLoad: load
    }
};