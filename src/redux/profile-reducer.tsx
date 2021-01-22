import {PostPropsType} from "./store";
import {ProfileType} from "../components/Profile/Profile";
import {profileAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type AddPostType = {
    type: typeof ADD_POST
    newPostText: string

}

let initialState = {
    posts: [
        {id:1, message: 'Hi, how are you?', likesCount: 12},
        {id:2, message: 'Its my first post', likesCount: 11},
        {id:2, message: 'Its my first post', likesCount: 11},
        {id:2, message: 'Its my first post', likesCount: 11}

    ],
        profile: null as ProfileType | null,
        status: ""

}

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS"

export const profileReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost: PostPropsType ={
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts:[...state.posts, newPost],
                newPostText: ""
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPostText:string): AddPostType => ({
    type: ADD_POST,
    newPostText
})
export const setUserProfile = (profile: ProfileType) => ({
    type: SET_USER_PROFILE, profile
})
export const setStatus = (status: string) => ({
    type: SET_STATUS, status
})
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}
export const getStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data))
    })
}

export const updateStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    })
}

export default profileReducer;