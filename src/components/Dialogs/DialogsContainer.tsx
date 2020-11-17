import React from 'react';
import {DialogsPageType, ProfilePagePropsType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialog-reducer';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";



let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
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