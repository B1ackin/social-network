import React from 'react';
import './MyPosts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {StateType, StoreType} from "../../../redux/store";
import {connect} from "react-redux";


// export type PostsTypeArray = {
    // posts: Array<PostsType>
    // newPostText: string
    // dispatch: (action: ActionsTypes) => void
//     store: StoreType
// }

// export type PostsType = {
//     id: number
//     message: string
//     likesCount: number
// }


const mapStateToProps = (state:StateType) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}



const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;