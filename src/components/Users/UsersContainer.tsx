import React from 'react';
import styles from './users.module.css';
import {UsersType} from "../../redux/users-reducer";
import axios from 'axios';
import userPhoto from '../../assets/images/img-min.jpg'
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCountAC,
    setUsersAC,
    unfollowAC,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Users from "./Users";

export type MSTPType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
export type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    setUsers: (users: Array<UsersType>) => void
    setCurrentPage: (pageNumber: number) => void
    setTotalUsersCount: (totalCount: number) => void
}

type OwnProps = {

}

type PropsType = MSTPType & MDTPType & OwnProps

class UsersContainer extends React.Component<PropsType> {

    componentDidMount()  {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
            this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {


        return <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
        />
    }
}



let mapStateToProps = (state:AppStateType): MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch): MDTPType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID));
        },
        unfollow: (userID: number) => {
            dispatch(unfollowAC(userID));
        },
        setUsers: (users: Array<UsersType>) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber: number) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount: number) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}


export default connect<MSTPType, MDTPType, OwnProps, AppStateType> (mapStateToProps, mapDispatchToProps)(UsersContainer);