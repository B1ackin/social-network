import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {followAC, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

let mapStateToProps = (state:AppStateType) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users);