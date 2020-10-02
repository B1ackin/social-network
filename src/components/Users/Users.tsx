import React from 'react';
import styles from './users.module.css';
import {UsersType} from "../../redux/users-reducer";

type UsersPropsType ={
    users: Array<UsersType>
    setUsers: (users:Array<UsersType>) => void
    follow: (id: number) => void
    unfollow: (id: number) => void
}


let Users = (props: UsersPropsType) => {
    if(props.users.length === 0) {
    props.setUsers([
        {id:1, photoUrl: 'https://pbs.twimg.com/profile_images/753121652251193344/FrnVVqCw_400x400.jpg', followed: false, fullName: 'Dmitry', status: "I am a boss", location: {city: "Minsk", country: "Belarus"}},
        {id:2, photoUrl: 'https://pbs.twimg.com/profile_images/753121652251193344/FrnVVqCw_400x400.jpg', followed: true, fullName: 'Matvey', status: "I am a boss too", location: {city: "Moskov", country: "Russia"}},
        {id:3, photoUrl: 'https://pbs.twimg.com/profile_images/753121652251193344/FrnVVqCw_400x400.jpg', followed: false, fullName: 'Kirill', status: "I am a boss too", location: {city: "Kiev", country: "Ukraine"}},

    ])
    }
    return <div>
        {
            props.users.map( u => <div key={u.id} >
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        { u.followed
                            ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                            : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;