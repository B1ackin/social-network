import {PostPropsType} from "./store";
import {ProfileType} from "../components/Profile/Profile";

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
        newPostText: 'IT-KAMASUTRA.COM',
        profile: null as ProfileType | null
}

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = "SET_USER_PROFILE"

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
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
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

export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE, profile
})

export default profileReducer;