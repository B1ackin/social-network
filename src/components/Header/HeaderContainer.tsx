import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuthUserData, logout} from "../../redux/auth-reducer";


type OnwProps = {}
type PropsType =  OnwProps & MapStateType & MapDispatchType

class HeaderContainer extends React.Component<PropsType>{

    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
    return  <Header {...this.props}/>

}
}


type MapStateType = {
    isAuth: boolean
    login: string | null
}

type MapDispatchType = {
    getAuthUserData: () => void
    logout: () => void
}
const mapStateToProps = (state: AppStateType): MapStateType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});



export default connect<MapStateType, MapDispatchType, OnwProps, AppStateType>(mapStateToProps, {getAuthUserData, logout}) (HeaderContainer);