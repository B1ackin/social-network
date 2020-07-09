import React from 'react';
import s from './ProfileInfo.module.css';
import ava from './obl.jpg';

function ProfileInfo() {
    return (
        <div >
            <img
                src={ava}/>
            <div className={s.descriptionBlock}>
                avatar + description
            </div>

        </div>
    );
}

export default ProfileInfo;