import { combineReducers, createStore } from "redux";
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

let store = createStore(reducers);

export default store; 