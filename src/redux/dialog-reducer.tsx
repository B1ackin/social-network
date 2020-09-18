import {DialogsDataPropsType, MessageDataPropsType} from "./store";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type DialogsDataPropsType1 = {
    id: number
    name: string
}

export type MessageDataPropsType1 = {
    id: number
    message: string
}

export type DialogsPageType1 = {
    dialogsData: Array<DialogsDataPropsType1>
    messageData: Array<MessageDataPropsType1>
    newMessageBody: string

}


let initialState:DialogsPageType1 = {
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


export const dialogReducer = (state:DialogsPageType1 = initialState, action: DialogsActionType):DialogsPageType1 => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = (): SendMessageType => ({
    type: SEND_MESSAGE
})

export const updateNewMessageBodyCreator = (body: string): UpdateNewMessageBody => ({
    type: UPDATE_NEW_MESSAGE_BODY, body
})

export type UpdateNewMessageBody = {
    type: typeof UPDATE_NEW_MESSAGE_BODY
    body: string
}

export type SendMessageType = {
    type: typeof SEND_MESSAGE

}

type DialogsActionType = UpdateNewMessageBody|SendMessageType


export default dialogReducer;