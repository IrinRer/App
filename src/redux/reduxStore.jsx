import { combineReducers, createStore } from "redux";
import MessReducer from "./MessReducer";
import ProfileReducer from "./ProfileReducer";
import SidebarReducer from "./SidebarReducer";


const reducers = combineReducers({
    profile: ProfileReducer, 
    messages: MessReducer,
    sidebar: SidebarReducer });
    
let store = createStore(reducers);

export default store; 