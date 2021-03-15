import React from 'react';
import './Profile.module.css';
import s from './Profile.module.css';
import MyPosts, {PostsTypeArray} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import state, {ProfilePagePropsType, StoreType} from "../../redux/store";
import MyPostsCountainer from "./MyPosts/MyPostsContainer";


type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void

}
export type PostDataArray = {
    id: string
    message: string
    like: number
}
export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type ProfileType = {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string
    aboutMe: string
    fullName: string
    contacts: ContactsType
    photos: PhotosType

}


function Profile(props:PropsType) {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsCountainer />
        </div>
    );
}

export default Profile;