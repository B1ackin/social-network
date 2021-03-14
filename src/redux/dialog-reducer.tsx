import {DialogsDataPropsType, MessageDataPropsType} from "./store";

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


}


let initialState: DialogsPageType1 = {
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

}


export const dialogReducer = (state: DialogsPageType1 = initialState, action: DialogsActionType): DialogsPageType1 => {

    switch (action.type) {

        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messageData: [...state.messageData, {id: 6, message: body}]
            };
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody: string): SendMessageType => ({
    type: SEND_MESSAGE,
    newMessageBody
})


// export type UpdateNewMessageBody = {
//     body: string
//     newMessageBody: string
// }

export type SendMessageType = {
    type: typeof SEND_MESSAGE
    newMessageBody: string
}

type DialogsActionType = SendMessageType


export default dialogReducer;