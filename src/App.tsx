import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import store, {StateType, StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";


export type PostsType = {
    store: StoreType
    dispatch: (action: any) => void
}


function App(props: PostsType) {

    return (
        <BrowserRouter>
            <div className="app-all-wrapper">

                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                        <Route path="/dialogs"
                               render={() => <DialogsContainer store={props.store} />}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
