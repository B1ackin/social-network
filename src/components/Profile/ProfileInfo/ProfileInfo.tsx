import React from 'react';
import s from './ProfileInfo.module.css';
import ava from './obl.jpg';
import {Preloader} from "../../common/preloader/preloader";

type PropsType = {
    profile: any
}


function ProfileInfo(props:PropsType) {
    if (!props.profile) {
        return <Preloader/>
    }


    return (
        <div >
            <img
                src={ava}/>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                avatar + description
            </div>

        </div>
    );
}

export default ProfileInfo;