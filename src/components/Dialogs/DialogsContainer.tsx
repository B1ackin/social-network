import React from 'react';
import {StateType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialog-reducer';
import {connect} from "react-redux";

type PropsType = {
    // store: StoreType
    // dispatch: (action: ActionsTypes) => void
}


let mapStateToProps = (state: StateType) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {
        updateNewMessageBody: (body:string) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(sendMessageCreator())
        }
    }
}


const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs);

export default SuperDialogsContainer;