import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { AutoReducer } from "./AutoReducer";
import MessReducer from "./MessReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";
import { UsersReducer } from "./UsersReducer";


const reducers = combineReducers({
    profile: ProfileReducer, 
    messages: MessReducer,
    sidebar: SidebarReducer,
    users: UsersReducer,
    auth:  AutoReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store; 