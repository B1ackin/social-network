import {rerenderEntireTree} from "../render";

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





let state: StateType = {
    profilePage: {
        posts: [
            {id:1, message: 'Hi, how are you?', likesCount: 12},
            {id:2, message: 'Its my first post', likesCount: 11},
            {id:2, message: 'Its my first post', likesCount: 11},
            {id:2, message: 'Its my first post', likesCount: 11}

        ]

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

}


 export let addPost = (postMessage: string) => {

    let newPost: PostPropsType ={
        id: 5,
        message: postMessage,
        likesCount: 0

    }

    state.profilePage.posts.push(newPost)
     rerenderEntireTree(state);
 }

export default state;