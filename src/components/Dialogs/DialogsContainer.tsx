import React from 'react';
import Dialogs from "./Dialogs";
import {sendMessageCreator} from '../../redux/dialog-reducer';
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state: AppStateType) => {
    return {
        dialogsPage: state.dialogsPage,

    }
}
let mapDispatchToProps = (dispatch: (action: any) => void) => {
    return {

        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageCreator(newMessageBody))
        }
    }
}

// compose(
//     connect(mapStateToProps,mapDispatchToProps),
//     connect(mapStateToProps,mapDispatchToProps),
//     withAuthRedirect
// )(Dialogs)
//
// let AuthRedirectComponent = withAuthRedirect(Dialogs)
//
//
// const SuperDialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps,mapDispatchToProps),
    withAuthRedirect
)(Dialogs) as React.ComponentType