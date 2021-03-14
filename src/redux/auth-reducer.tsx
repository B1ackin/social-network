import {PostPropsType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";

export type FollowPostType = {
    type: typeof SET_USER_DATA
    payload: {
        userId: number
        email: string,
        login: string,
        isAuth: boolean
    }

}


export type UsersType = {
    id: number
    followed: boolean
    name: string
    status: string
    location: LocationType
    photos: PhotosType
}

export type PhotosType = {
    small: string
    large: string
}
//
export type LocationType = {
    city: string
    country: string
}

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const SET_USER_DATA = 'SET_USER_DATA';



export const authReducer = (state = initialState, action:any):typeof initialState => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }

}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean): FollowPostType => ({
    type: SET_USER_DATA,
    payload: {userId , email, login, isAuth}
})

export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login, true))
        }
    })
}
export const login = (email: string, password: string, remeberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, remeberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
        }
    })
}
export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}

export default authReducer;