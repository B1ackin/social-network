import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/Validators/Validators";

export type FormDataType = {
    login: string
    password: string
    rememberMe: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <div>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Login"} name={"login"}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field component={Input}
                   type={"checkbox"} name={"rememberMe"}  /> remember me
        </div>
        <div>
            <button>Login</button>
        </div>
    </form>
    </div>
}

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)

const Login = () => {
    const onSubmit = (formData:FormDataType) => {

    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;