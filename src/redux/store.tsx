import {profileReducer} from "./profile-reducer";
import dialogReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";


let rerenderEntireTree = () => {
    console.log('state changed');
}

export type PostPropsType = {
    id: number
    message: string
    likesCount: number

}

export type DialogsDataPropsType = {
    id: number
    name: string
}

export type MessageDataPropsType = {
    id: number
    message: string
}

export type ProfilePagePropsType = {

    newPostText: string
    posts: Array<PostPropsType>
}

export type DialogsPageType = {
    dialogsData: Array<DialogsDataPropsType>
    messageData: Array<MessageDataPropsType>
    newMessageBody: string

}

export type StateType = {
    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPageType
    sidebar: any


}


export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: any) => void
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: any) => void
}


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 11},
                {id: 2, message: 'Its my first post', likesCount: 11},
                {id: 2, message: 'Its my first post', likesCount: 11}

            ],
            newPostText: 'IT-KAMASUTRA.COM'

        },

        dialogsPage: {
            dialogsData: [
                {id: 1, name: 'Игорь'},
                {id: 2, name: 'Василий'},
                {id: 3, name: 'Петр'},
                {id: 4, name: 'Михаил'},
                {id: 5, name: 'Евгений'}
            ],
            messageData: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is you it-kamasutra'},
                {id: 3, message: 'Oh, my dear friend'}
            ],
            newMessageBody: ""
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    }


}


export default store;