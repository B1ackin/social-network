import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
// import {PostsTypeArray} from "./components/Profile/MyPosts/MyPosts";
import {DialogsPageType, StateType, updateNewPostText} from "./redux/State";


export type PostsType = {
   state: StateType
   addPost: (message: string ) => void
   updateNewPostText: (newText: string ) => void
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
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}/>}/>
                        <Route path="/dialogs"
                               render={() => <Dialogs dialogsPage={props.state.dialogsPage}/>}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
