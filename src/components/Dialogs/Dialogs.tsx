import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/State";

type PropsType = {
    dialogsPage: DialogsPageType
}

function Dialogs(props:PropsType) {



    let dialogElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messageElements = props.dialogsPage.messageData.map(m => <Message message={m.message}/>);

    let NewMessageElement = React.createRef<HTMLTextAreaElement>();

    let addNewMessage = () => {
        alert(NewMessageElement.current?.value)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                {dialogElements}

            </div>

            <div className={s.messages}>

                {messageElements}
                <textarea ref={NewMessageElement}></textarea>
                <button onClick={addNewMessage}>Отправить</button>
            </div>

        </div>
    );

}

export default Dialogs;