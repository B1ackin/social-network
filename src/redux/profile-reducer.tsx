import {PostPropsType} from "./store";

export type AddPostType = {
    type: typeof ADD_POST

}
export type UpdateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string

}

let initialState = {
    posts: [
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'Its my first post', likesCount: 11},
        {id:2, message: 'Its my first post', likesCount: 11},
        {id:2, message: 'Its my first post', likesCount: 11}

    ],
        newPostText: 'IT-KAMASUTRA.COM'
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

export const profileReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostPropsType ={
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText: ""
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (): AddPostType => ({
    type: ADD_POST
})
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export default profileReducer;