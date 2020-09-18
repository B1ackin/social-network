import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


export type PostsTypeArray = {
    posts: Array<PostsType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    updateNewPostText: (text:string)=> void
    addPost: ()=> void

}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}



function MyPosts(props: PostsTypeArray) {

    let postElements = props.posts.map ( p => <Post message={p.message} likesCount={p.likesCount} />)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = () => {
        props.addPost();

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = newPostElement.current ? newPostElement.current.value : "";
        props.updateNewPostText(text);

    }

    return (
        <div className={s.postBlock}>
            <div >
                <h3>My Posts</h3>
            </div>
            <div>
                <div><textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}/></div>
                <div><button onClick={onAddPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;