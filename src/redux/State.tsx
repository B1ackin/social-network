let store = {
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

    // addPost () {
    //
    //     let newPost: PostPropsType ={
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         likesCount: 0
    //
    //     }
    //
    //     this._state.profilePage.posts.push(newPost)
    //     this._state.profilePage.newPostText = "";
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText (newText: string) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },


    dispatch(action) {
        if(action.type === 'ADD-POST') {
            let newPost: PostPropsType ={
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0

            }

            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);

        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }



}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST'
    }
}
export const updateNewPostTextActionCreator = (text: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT", newText: text
    }
}


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





// let state: StateType = {
//     profilePage: {
//         posts: [
//             {id:1, message: 'Hi, how are you?', likesCount: 12},
//             {id:2, message: 'Its my first post', likesCount: 11},
//             {id:2, message: 'Its my first post', likesCount: 11},
//             {id:2, message: 'Its my first post', likesCount: 11}
//
//         ],
//         newPostText: 'IT-KAMASUTRA.COM'
//
//     },
//
//     dialogsPage: {
//         dialogsData: [
//             {id: 1, name: 'Игорь'},
//             {id: 2, name: 'Василий'},
//             {id: 3, name: 'Петр'},
//             {id: 4, name: 'Михаил'},
//             {id: 5, name: 'Евгений'}
//         ],
//         messageData: [
//             {id: 1, message: 'Hi'},
//             {id: 2, message: 'How is you it-kamasutra'},
//             {id: 3, message: 'Oh, my dear friend'}
//         ]
//     }
//
// }
//
//
//  export let addPost = () => {
//
//     let newPost: PostPropsType ={
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0
//
//     }
//
//     state.profilePage.posts.push(newPost)
//      state.profilePage.newPostText = "";
//      rerenderEntireTree(state);
//  }
//
// export const updateNewPostText = (newText: string) => {
//     state.profilePage.newPostText = newText;
//     rerenderEntireTree(state);
// }
//
// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }

export default store;