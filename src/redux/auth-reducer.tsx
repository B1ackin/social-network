import {PostPropsType} from "./store";
import {authAPI} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

export type FollowPostType = {
    type: typeof SET_USER_DATA
    payload: InitStateType

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
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false
}



const SET_USER_DATA = 'SET_USER_DATA';

type InitStateType  =typeof initialState

export const authReducer = (state = initialState, action:any):InitStateType => {
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

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): FollowPostType => ({
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
export const login = (email: string, password: string, remeberMe: boolean) => (dispatch: Dispatch<any>) => {

    authAPI.login(email, password, remeberMe)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(getAuthUserData())
        } else {
                let message = response.data.messages.lenght > 0 ? response.data.messages[0] : "Some error";
                dispatch(stopSubmit("login" , {_error: "Common error"}))
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