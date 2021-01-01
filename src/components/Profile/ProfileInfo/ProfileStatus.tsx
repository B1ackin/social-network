import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css';
import ava from './obl.jpg';

import ProfileStatus from "./ProfileStatus"

type PropsType = {
    status: string
}


class ProfileInfo extends React.Component<any, any>{


    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate (prevProps:any, prevState: any) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }


    render() {
    return (
        <div>
            {!this.state.editMode &&
        <div >
            <span onDoubleClick={this.activateEditMode}>{this.props.status || "No status" }</span>
        </div>
            }
            {this.state.editMode &&
            <div>
                <input onChange={this.onStatusChange}
                    autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}/>
            </div>
            }
        </div>
    )
 }
}

export default ProfileInfo;