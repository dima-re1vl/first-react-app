import React from 'react'
import s from './Post.module.css'

const colors = ['red', 'green', 'blue', 'purple', 'white', 'black']

const Post = (props) => {

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    return (
        <div className={`${s.post} ${s[randomColor]}`}>
            <img className={s.post_img} src={props.img || 'https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/3-cute-cat-sampad-art.jpg'} alt="imgPerson" />
            <div className={s.post_message}>{props.message || 'Hi'}</div>
        </div>
    );
}

export default Post;