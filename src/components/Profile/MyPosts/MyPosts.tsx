import React, {ChangeEvent} from 'react';
import './MyPosts.module.css';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/Validators/Validators";
import {Textarea} from "../../common/FormControls/FormControls";


export type PostsTypeArray = {
    posts: Array<PostsType>
    newPostText: string
    // dispatch: (action: ActionsTypes) => void
    // updateNewPostText: (text: string) => void
    addPost: (newMessageBody: string) => void

}
export type PostsType = {
    id: number
    message: string
    likesCount: number
}


function MyPosts(props: PostsTypeArray) {

    let postElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>();

    let onAddPost = (values: any) => { // как типизировать?
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

const MaxLength = maxLengthCreator(10)


const AddNewPost = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"newPostText"} placeholder="Post message" component={Textarea} validate={[required, MaxLength]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPost)

export default MyPosts;