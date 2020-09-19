import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts, {PostsTypeArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ProfilePagePropsType, StoreType} from "../../redux/store";
import MyPostsCountainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    // profilePage: ProfilePagePropsType
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}


function Profile(props: PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsCountainer />
        </div>
    );
}

export default Profile;