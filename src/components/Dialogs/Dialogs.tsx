import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType, StoreType} from "../../redux/store";
import {Redirect} from 'react-router-dom';
import {Field, InjectedFormProps} from "redux-form";
import {reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/Validators/Validators";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


type PropsType = {
    // dispatch: (action: ActionsTypes) => void
    updateNewMessageBody: (body: string) => void
    sendMessage: (newMessageBody: string) => void
    dialogsPage: DialogsPageType
    isAuth: boolean
}

function Dialogs(props: PropsType) {

    let state = props.dialogsPage;

    let dialogElements = state.dialogsData.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = state.messageData.map(m => <Message message={m.message} key={m.id}/>);
    let newMessageBody = state.newMessageBody;


    let addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElements}
            </div>
            <div className={s.messages}>
                <div>{messageElements}</div>
            </div>
            <AddMessageForm onSubmit={addNewMessage}/>
        </div>
    );

}




export default Dialogs;



