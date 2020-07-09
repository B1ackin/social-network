import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {PostsTypeArray} from "./components/Profile/MyPosts/MyPosts";
import {DialogsPageType, StateType} from "./redux/State";


export type PostsType = {
   state: StateType
   addPost: (message: string ) => void
}


function App(props: PostsType) {


    return (
        <BrowserRouter>
            <div className="app-all-wrapper">

                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <h1>тест коммит</h1>Ты в ветке dev
                    <div className='app-wrapper-content'>
                        <Route path="/profile" render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost}/>}/>
                        <Route path="/dialogs"
                               render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                        <h1>тест коммит</h1>
                        <h1>тест коммит</h1>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
