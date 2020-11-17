import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer
});

// reducer {
//     prP: {
//
//     },
//     diP: [
//         {},
//         {},
//         {},
//         {},
//     ]
// }

let store:any = createStore(reducers, applyMiddleware(thunkMiddleware));

// window.store = store;

export type AppStateType = ReturnType<typeof reducers>

export default store;