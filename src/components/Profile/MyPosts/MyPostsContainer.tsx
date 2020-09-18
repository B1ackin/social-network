import React from 'react';
import './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StoreType} from "../../../redux/store";


export type PostsTypeArray = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
    store: StoreType
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}



const MyPostsCountainer = (props: PostsTypeArray) => {

    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());

    }

    let onPostChange = (text: string) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch( action );
    }

    return (
        <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={state.profilePage.posts} newPostText={state.profilePage.newPostText}/>
    );
}

export default MyPostsCountainer;