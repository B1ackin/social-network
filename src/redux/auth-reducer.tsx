import {PostPropsType} from "./store";
import {authAPI} from "../api/api";

export type FollowPostType = {
    type: typeof SET_USER_DATA
    data: {
        userId: number
        email: string,
        login: string
    }

}

// export type StateUsersPropsType = {
//     users: Array<UserPropsType>
// }
//
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
                ...action.data,
                isAuth: true
            }

        default:
            return state;
    }

}

export const setAuthUserData = (userId: number, email: string, login: string): FollowPostType => ({
    type: SET_USER_DATA,
    data: {userId , email, login}
})

export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setAuthUserData(id, email, login))
        }
    })
}



export default authReducer;