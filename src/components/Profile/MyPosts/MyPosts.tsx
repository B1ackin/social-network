import React from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";


export type PostsTypeArray = {
    posts: Array<PostsType>
    addPost: (message: string ) => void

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
          if (newPostElement.current) {
              props.addPost(newPostElement.current.value);
              newPostElement.current.value = "";
          }



    }

    return (
        <div className={s.postBlock}>
            <div >
                <h3>My Posts</h3>
            </div>
            <div>
                <div><textarea ref={newPostElement} /></div>
                <div><button onClick={addPost}>Add post</button></div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}

export default MyPosts;