import React, {InputHTMLAttributes} from "react"
import styles from "./FormControls.module.css"
import {WrappedFieldProps} from "redux-form";


export const FormControl = ({input, meta,  child,...props}: any) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "") }>
            <div>
                {props.children}
            </div>
            { hasError && <span>{meta.error}</span> }

        </div>
    )
}



export const Textarea = (props:any) => {
    const {input, meta, child, ...restProps} = props;
    return  <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>

}

export const Input = (props: any) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...input} {...restProps}/> </FormControl>
}