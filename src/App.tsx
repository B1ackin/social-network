import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import {StoreType} from "./redux/store";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {PostsType} from "./components/Profile/MyPosts/MyPosts";
import Users from "./components/Users/Users";


// export type PostsType = {
//     store: StoreType
//     dispatch: (action: any) => void
// }


function App() {

    return (
        <BrowserRouter>
            <div className="app-all-wrapper">

                <div className="app-wrapper">
                    <Header/>
                    <Navbar/>
                    <div className='app-wrapper-content'>
                        <Route path="/profile" render={() => <Profile />}/>

                        <Route path="/dialogs"
                               render={() => <DialogsContainer/>}/>

                        <Route path="/users"
                               render={() => <Users/> }/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
