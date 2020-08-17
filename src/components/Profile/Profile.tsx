import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts, {PostsTypeArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {addPost, ProfilePagePropsType, updateNewPostText} from "../../redux/State";



type PropsType = {
    profilePage: ProfilePagePropsType
    addPost: () => void
    updateNewPostText: (newText: string) => void
}


function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.profilePage.posts}
                     addPost={props.addPost}
                     newPostText={props.profilePage.newPostText}
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;