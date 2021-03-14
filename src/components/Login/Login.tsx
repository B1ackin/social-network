import React from "react";
import {reduxForm, Field, InjectedFormProps} from "redux-form";
import {Input} from "../common/FormControls/FormControls";
import {required} from "../../utils/Validators/Validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

export type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

export type LoginType = {
    login: (email: string, password: string, rememberMe: boolean) => void // правильно ли?
    isAuth: boolean
}


const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return <div>
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={"Email"} name={"email"}
                   validate={[required]}
                   component={Input}/>
        </div>
        <div>
            <Field placeholder={"Password"} name={"password"} type={"password"}
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

const Login = (props: LoginType) => {
    const onSubmit = (formData:FormDataType) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state:AppStateType) => {
    isAuth: state.auth.isAuth
}
export default connect(mapStateToProps, {login})(Login);