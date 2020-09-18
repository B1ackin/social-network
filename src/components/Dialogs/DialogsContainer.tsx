import React from 'react';
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialog-reducer';

type PropsType = {
    store: StoreType
    // dispatch: (action: ActionsTypes) => void
}

function DialogsContainer(props: PropsType) {

    let state = props.store.getState().dialogsPage;

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    );

}

export default DialogsContainer;