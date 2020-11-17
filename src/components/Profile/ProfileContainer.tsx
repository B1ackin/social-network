import React from 'react';
import './Profile.module.css';
import Profile, {ProfileType} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, withRouter} from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import {usersAPI} from "../../api/api";

type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    isAuth: boolean
}
type MapDispathPropsType = {
    getUserProfile: (userId: number) => void
}

type OwnPropsType = MapStateToPropsType & MapDispathPropsType
type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

class ProfileContainer extends React.Component<PropsType, any>{

    componentDidMount() {
        let userId = +this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }

        this.props.getUserProfile(userId);
    }

    render () {
        if (!this.props.isAuth) return <Redirect to={"/login"}/>
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );
   
    }
}
let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});


// state {
//     prP: {
//
//     },
//     diP: [
//         {},
//         {},
//         {},
//         {},
//     ]
// }


let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect<MapStateToPropsType, MapDispathPropsType, {}, AppStateType> (mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);