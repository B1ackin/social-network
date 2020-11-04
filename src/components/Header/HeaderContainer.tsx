import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../Profile/Profile";
import {RouteComponentProps} from "react-router";



class HeaderContainer extends React.Component<any, any>{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then(response => {
                if(response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            })
    }

    render() {
    return  <Header {...this.props} />

}
}
const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});



export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer);