import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/State";


export type PostsTypeArray = {
    posts: Array<PostsType>
    addPost: (message: string ) => void
    newPostText: string
    updateNewPostText: (newText: string) => void


}
export type PostsType = {
    id: number
    message: string
    likesCount: number

}



function MyPosts(props: PostsTypeArray) {

    let postElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
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
                <div><textarea onChange={onPostChange} value={props.newPostText}/></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;