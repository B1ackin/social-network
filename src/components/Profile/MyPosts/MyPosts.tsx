import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import  {reduxForm,Field} from "redux-form";


export type PostsTypeArray = {
    posts: Array<PostsType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    updateNewPostText: (text: string) => void
    addPost: () => void

}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}


function MyPosts(props: PostsTypeArray) {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values) => {
        props.addPost(values.newPostText);

    }


    return (
        <div className={s.postBlock}>
            <div>
                <h3>My Posts</h3>
            </div>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    );
}


const AddNewPost = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} component="textarea"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPost)

export default MyPosts;