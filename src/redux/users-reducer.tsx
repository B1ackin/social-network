import {PostPropsType} from "./store";

export type FollowPostType = {
    type: typeof FOLLOW
    userId: number
}
export type UnfollowPropsType = {
    type: typeof UNFOLLOW
    userId: number
}

let initialState = {
    users: [
        {id:1, followed: false, fullName: 'Dmitry', status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
        {id:2, followed: true, fullName: 'Matvey', status: "I am a boss too", location: {city: "Moskov", country: "Russia"}},
        {id:3, followed: false, fullName: 'Kirill', status: "I am a boss too", location: {city: "Kiev", country: "Ukraine"}},

    ]
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

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

export default usersReducer;