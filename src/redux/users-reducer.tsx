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
    users: Array<UsersType>
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
    users: [] as Array<UsersType>,
    pageSize: 50,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true

}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

export const usersReducer = (state = initialState, action:any):typeof initialState => {
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
            users: action.users
        }
        case SET_CURRENT_PAGE:
            return {
            ...state,
            currentPage: action.currentPage
        }
        case SET_TOTAL_USER_COUNT:
            return {
            ...state,
            totalUsersCount: action.count
        }
        case TOGGLE_IS_FETCHING:
            return {
            ...state,
            isFetching: action.isFetching
        }

        default:
            return state;
    }

}

export const followAC = (userId: number): FollowPostType => ({
    type: FOLLOW,
    userId
})
export const unfollowAC = (userId:number): UnfollowPropsType => ({
    type: UNFOLLOW,
    userId
})

export const setUsersAC = (users:Array<UsersType>): setUsersPropsType => ({
    type: SET_USERS,
    users
})

export const setCurrentPageAC = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage

})

    export const setTotalUsersCountAC = (totalUsersCount:number) => ({
    type: SET_TOTAL_USER_COUNT,
    count: totalUsersCount
})
export const toggleIsFetchingAC = (isFetching:boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})


export default usersReducer;