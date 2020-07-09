import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts, {PostsTypeArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {addPost, ProfilePagePropsType} from "../../redux/State";



type PropsType = {
    profilePage: ProfilePagePropsType
    addPost: (message: string ) => void
}


function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;