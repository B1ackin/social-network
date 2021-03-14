import React from 'react';
import './MyPosts.module.css';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StateType} from "../../../redux/store";
import {connect} from "react-redux";



const mapStateToProps = (state:StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {

        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;