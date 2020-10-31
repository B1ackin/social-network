import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts, {PostsTypeArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ProfilePagePropsType, StoreType} from "../../redux/store";
import MyPostsCountainer from "./MyPosts/MyPostsContainer";


type PropsType = {

    profile: any
}


function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsCountainer />
        </div>
    );
}

export default Profile;