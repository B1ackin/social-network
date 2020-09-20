import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer
});

let store:any = createStore(reducers);

window.store = store;

export type AppStateType = ReturnType<typeof reducers>

export default store;