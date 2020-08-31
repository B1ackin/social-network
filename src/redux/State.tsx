const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

export const addPostActionCreator = () => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})


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
}

export type StateType = {

    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPageType
}


export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: AddPostActionType ) => void
    _callSubscriber: () => void
    subscribe: (observer: any) => void

}

export type AddPostActionType = {
    type: string
    newPostText?: string
    newText?: string

}

// export type ActionsTypes = AddPostActionType | ChangeNewTextActionType


let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id:1, message: 'Hi, how are you?', likesCount: 12},
                {id:2, message: 'Its my first post', likesCount: 11},
                {id:2, message: 'Its my first post', likesCount: 11},
                {id:2, message: 'Its my first post', likesCount: 11}

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
            ]
        }
    },
    _callSubscriber () {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer: any) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost: PostPropsType ={
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0

            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber();

        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            if(action.newText) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber();
            }
        }
    }



}


export default store;