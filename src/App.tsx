import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";



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
                               render={() => <UsersContainer /> }/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
