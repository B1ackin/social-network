import {PostPropsType} from "./store";

export type FollowPostType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowPropsType = {
    type: typeof UNFOLLOW
    userId: number
}
export type setUsersPropsType = {
    type: typeof SET_USERS
    users: string
}
// export type StateUsersPropsType = {
//     users: Array<UserPropsType>
// }
//
// type UserPropsType = {
//     id: number
//     followed: boolean
//     fullName: string
//     status: string
//     location: LocationPropsType
// }
//
// type LocationPropsType = {
//     city: string
//     country: string
// }

let initialState = {
    users: []
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

export const usersReducer = (state = initialState, action:any) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
            ...state,
            users: [...state.users, ...action.users]
        }
        default:
            return state;
    }

}

export const followAC = (userId: number): FollowPostType => ({
    type: FOLLOW,
    userId
})
export const unFollowAC = (userId:number): UnfollowPropsType => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = (users:string): setUsersPropsType => ({
    type: SET_USERS,
    users
})

export default usersReducer;