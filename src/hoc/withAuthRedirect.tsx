import React from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../redux/redux-store";
import {connect} from "react-redux";

let mapStateToPropsRedirect = (state: AppStateType)=> ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component:any) => {

    function RedirectComponent(props: any) {
        if (!props.isAuth) return <Redirect to={"/login"}/>
        return <Component {...props}/>
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;

}