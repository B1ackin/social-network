import React from 'react';
import {DialogsPageType, ProfilePagePropsType} from "../../redux/store";
import Dialogs from "./Dialogs";
import {sendMessageCreator, updateNewMessageBodyCreator} from '../../redux/dialog-reducer';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Redirect} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,

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

let AuthRedirectComponent = withAuthRedirect(Dialogs)


const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default SuperDialogsContainer;