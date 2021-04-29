import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer, {MapStateType, OnwProps, PropsType} from "./components/Header/HeaderContainer";
import LoginPage from "./components/Login/Login";
import {connect} from "react-redux";
import {AppStateType} from "./redux/redux-store";
import {getAuthUserData} from "./redux/auth-reducer";
import {compose} from "redux";
import {withRouter} from 'react-router-dom';
import {initializeApp} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/preloader";


export  type MapDispatchType = {
    initializeApp: () => void
}

class App extends React.Component<MapDispatchType> {
    componentDidMount() {
        this.props.initializeApp();
    }
    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }


        return (
            <BrowserRouter>
                <div className="app-all-wrapper">

                    <div className="app-wrapper">
                        <HeaderContainer/>
                        <Navbar/>
                        <div className='app-wrapper-content'>
                            <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>

                            <Route path="/dialogs"
                                   render={() => <DialogsContainer/>}/>

                            <Route path="/users"
                                   render={() => <UsersContainer/>}/>

                            <Route path="/login"
                                   render={() => <LoginPage/>}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => {
    initialized: state.app.initialized
}

export default compose(
    withRouter,
    connect<MapStateType, MapDispatchType, OnwProps, AppStateType>(mapStateToProps, {initializeApp})) (App);
