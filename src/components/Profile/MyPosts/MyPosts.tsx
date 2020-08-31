import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {
    addPostActionCreator,
    AddPostActionType,
    updateNewPostTextActionCreator
} from "../../../redux/State";


export type PostsTypeArray = {
    posts: Array<PostsType>
    newPostText: string
    dispatch: (action: AddPostActionType) => void


}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}



function MyPosts(props: PostsTypeArray) {

    let postElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        debugger
        let text = newPostElement.current ? newPostElement.current.value : "";
       // let textEvent = e.currentTarget.value
        debugger
        // let action = {type: "UPDATE-NEW-POST-TEXT", newText: text};
        let action = updateNewPostTextActionCreator(text);
        props.dispatch( action );
    }

    return (
        <div className={s.postBlock}>
            <div >
                <h3>My Posts</h3>
            </div>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;