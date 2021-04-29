import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logout} from "../../redux/auth-reducer";


export type OnwProps = {}
export type PropsType =  OnwProps & MapStateType & MapDispatchType

class HeaderContainer extends React.Component<PropsType>{

    render() {
    return  <Header {...this.props}/>

}
}


export type MapStateType = {
    isAuth: boolean
    login: string | null
}

export  type MapDispatchType = {
    getAuthUserData?: () => void
    logout: () => void
}
const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});



export default connect<MapStateType, MapDispatchType, OnwProps, AppStateType>(mapStateToProps, {logout}) (HeaderContainer);