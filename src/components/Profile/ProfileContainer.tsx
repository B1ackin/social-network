import React from 'react';
import './Profile.module.css';
import Profile, {ProfileType} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
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
    // isAuth: boolean
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
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );
   
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    profile: state.profilePage.profile
});

export default compose(
    connect<MapStateToPropsType, MapDispathPropsType, {}, AppStateType> (mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)

//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
//


// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);
//
// export default connect<MapStateToPropsType, MapDispathPropsType, {}, AppStateType> (mapStateToProps, {getUserProfile}) (withUrlDataContainerComponent);