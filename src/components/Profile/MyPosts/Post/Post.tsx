import React from 'react';
import './Post.module.css';
import s from './Post.module.css';

type MessageTypeProps = {
    message: string
    likesCount: number

}

function Post(props: MessageTypeProps) {
    return (
            <div className={s.item}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnwyJfE07eNN3BV-nBAVSQaGKodNh-UyxjFbDEFwpNR-efHwjy&usqp=CAU" />
                {props.message}
                <div>
                    <span>like</span> {props.likesCount}
                </div>
            </div>

    );
}

export default Post;