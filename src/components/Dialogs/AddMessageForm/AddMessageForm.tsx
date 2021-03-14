import {maxLengthCreator, required} from "../../../utils/Validators/Validators";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import React from "react";
import {Textarea} from "../../common/FormControls/FormControls";

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props: InjectedFormProps) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                       validate={[required, maxLength50]}
                       name="newMessageBody"
                       placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)