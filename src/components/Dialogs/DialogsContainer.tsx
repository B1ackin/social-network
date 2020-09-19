import React from 'react';
import {StoreType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialog-reducer';

type PropsType = {
    // store: StoreType
    // dispatch: (action: ActionsTypes) => void
}

function DialogsContainer(props: PropsType) {



    return <StoreContext.Consumer>
        {
        (store) => {

            // let state = store.getState().dialogsPage;

            let onSendMessageClick = () => {
                store.dispatch(sendMessageCreator())
            }
            let onNewMessageChange = (body: string) => {
                store.dispatch(updateNewMessageBodyCreator(body))
            }

            return <Dialogs updateNewMessageBody={onNewMessageChange}
                            sendMessage={onSendMessageClick}
                            dialogsPage={store.getState().dialogsPage}/>
        }
    }
    </StoreContext.Consumer>


}

export default DialogsContainer;