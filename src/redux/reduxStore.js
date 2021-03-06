import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleware from 'redux-thunk';
import { AppReducer } from "./AppReducer";
import { AutoReducer } from "./AutoReducer";
import MessReducer from "./MessReducer";
import ProfileReducer from "./ProfileReducer";
import { UsersReducer } from "./UsersReducer";


const reducers = combineReducers({
    profile: ProfileReducer, 
    messages: MessReducer,
    users: UsersReducer,
    auth:  AutoReducer,
    app: AppReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store; 