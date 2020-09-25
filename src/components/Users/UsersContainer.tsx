import React from 'react';
import Users from "./Users";
import {connect} from "react-redux";
import {StateType} from "../../redux/store";
import {followAC, setUsersAC} from "../../redux/users-reducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: string) => {
            dispatch(setUsersAC(users));
        }
    }
}


export default connect (mapStateToProps, mapDispatchToProps) (Users);