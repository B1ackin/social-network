const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';


export const addPostActionCreator = (): AddPostType => ({
    type: ADD_POST
})

export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextType => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
})

export const sendMessageCreator = (): SendMessageType => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBody => ({
    type: UPDATE_NEW_MESSAGE_BODY, body
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
    newMessageBody: string

}

export type StateType = {

    profilePage: ProfilePagePropsType
    dialogsPage: DialogsPageType
}


export type StoreType = {
    _state: StateType
    getState: () => StateType
    dispatch: (action: ActionsTypes ) => void
    _callSubscriber: (_state: StateType) => void
    subscribe: (observer: any) => void


}

// export type AddPostActionType = {
//     type: string
//     newPostText: string
// }

export type UpdateNewMessageBody = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type AddPostType = {
    type: typeof ADD_POST

}
export type UpdateNewPostTextType = {
    type: typeof UPDATE_NEW_POST_TEXT
    newText: string

}
export type SendMessageType = {
    type: typeof SEND_MESSAGE

}

export type ActionsTypes = AddPostType | UpdateNewMessageBody | UpdateNewPostTextType | SendMessageType


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
            ],
            newMessageBody: ""
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
        if(action.type === ADD_POST) {
            let newPost: PostPropsType ={
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0

            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            if(action.newText) {
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state);
            }
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messageData.push({id: 6, message: body});
            this._callSubscriber(this._state);
        }
    }



}


export default store;