import React from 'react';
import './Profile.module.css';
import Profile, {ProfileType} from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Redirect, withRouter} from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type PathParamsType = {
    userId: string
}

type MapStateToPropsType = {
    profile: ProfileType | null
    status: string


}
type MapDispathPropsType = {
    getUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void


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
        this.props.getStatus(userId);


    }

    render () {
        return (
                <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        );
   
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect<MapStateToPropsType, MapDispathPropsType, {}, AppStateType> (mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer) as React.ComponentType

//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//


// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect<MapStateToPropsType, MapDispathPropsType, {}, AppStateType> (mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);