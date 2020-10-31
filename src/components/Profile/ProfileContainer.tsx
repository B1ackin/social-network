import React from 'react';
import './Profile.module.css';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component<any, any>{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/userId?`)
            .then(response => {
                this.props.setUsersProfile(response.data)
            })
    }

    render () {
        return (
                <Profile {...this.props} profile={this.props.profile}/>
        );
   
    }
}
let mapStateToProps = (state: AppStateType) => ({
    profile: state.profilePage.profile
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect (mapStateToProps, {setUserProfile}) (withUrlDataContainerComponent);