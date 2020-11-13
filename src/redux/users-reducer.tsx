import {usersAPI} from "../api/api";

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

export type FollowType = {}

let initialState = {
    users: [] as Array<UsersType>,
    pageSize: 50,
    totalUsersCount: 10,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [] as Array<any>
}

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export const usersReducer = (state = initialState, action: any): typeof initialState => {
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
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;
    }

}

export const followSuccess = (userId: number): FollowPostType => ({
    type: FOLLOW,
    userId
})
export const unfollowSuccess = (userId: number): UnfollowPropsType => ({
    type: UNFOLLOW,
    userId
})

export const setUsers = (users: Array<UsersType>): setUsersPropsType => ({
    type: SET_USERS,
    users
})

export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE,
    currentPage

})

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USER_COUNT,
    count: totalUsersCount
})
export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
})

export const getUsersThunkCreator = (currentPage: number, pageSize: number) => {

    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
        })
    }
}

export const follow = (userId) => {

    return (dispatch) => {
        (toggleFollowingProgress(true, userId))
        usersAPI.follow(userId)

            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export const unfollow = (userId) => {

    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            });
    }
}

export default usersReducer;