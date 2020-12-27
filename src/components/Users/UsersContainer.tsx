import React from 'react';
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
    toggleIsFetching,
    unfollow,
    UsersType
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";
import Users from "./Users";
import {Preloader} from "../common/preloader/preloader";
import {usersAPI} from "../../api/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

export type MSTPType = {
    users: Array<UsersType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}
export type MDTPType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    getUsersThunkCreator: (currentPage: number, pageSize: number) => void
    setCurrentPage: (pageNumber: number) => void
    // setTotalUsersCount: (totalCount: number) => void
    // toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching:boolean, userId:number) => void
}

type OwnProps = {

}

type PropsType = MSTPType & MDTPType & OwnProps

class UsersContainer extends React.Component<PropsType> {

    componentDidMount()  {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {

        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber);

    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
            totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
            followingInProgress={this.props.followingInProgress}
        />
    </>
    }
}



let mapStateToProps = (state:AppStateType): MSTPType => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose(
    withAuthRedirect,
connect<MSTPType, MDTPType, {}, AppStateType> (mapStateToProps, {
follow, unfollow, getUsersThunkCreator, setCurrentPage, toggleFollowingProgress})
)(UsersContainer)

// export default withAuthRedirect(connect<MSTPType, MDTPType, {}, AppStateType> (mapStateToProps, {
//     follow, unfollow, getUsersThunkCreator, setCurrentPage, toggleFollowingProgress})(UsersContainer));



