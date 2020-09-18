import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/store";

type PropsType = {
    // dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (body:string)=> void
    sendMessage: ()=>void
    dialogsPage: DialogsPageType
}

function Dialogs(props:PropsType) {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = state.messageData.map(m => <Message message={m.message}/>);
    let newMessageBody = state.newMessageBody;

    // let NewMessageElement = React.createRef<HTMLTextAreaElement>();

    let onSendMessageClick = () => {
        props.sendMessage();
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>

            <div className={s.messages}>

                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'} ></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>


            </div>

        </div>
    );

}

export default Dialogs;