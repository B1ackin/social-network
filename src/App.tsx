import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import store, {ActionsTypes, StateType, StoreType} from "./redux/State";


export type PostsType = {
    store: StoreType
    state: StateType
    dispatch: (action: ActionsTypes) => void
}


function App(props: PostsType) {


    return (
        <BrowserRouter>
            <div className="app-all-wrapper">

                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path="/profile" render={() => <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>}/>
                        <Route path="/dialogs"
                               render={() => <Dialogs store={props.store}  dispatch={props.dispatch}/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
