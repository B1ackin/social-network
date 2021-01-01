import React from 'react';
import s from './ProfileInfo.module.css';
import ava from './obl.jpg';
import {Preloader} from "../../common/preloader/preloader";
import {ProfileType} from "../Profile";
import ProfileStatus from "./ProfileStatus"

type PropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}


function ProfileInfo(props:PropsType) {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div >
            {/*<img*/}
            {/*    src={ava}/>*/}
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || undefined}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>

        </div>
    );
}

export default ProfileInfo;