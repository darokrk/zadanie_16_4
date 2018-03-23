import React from 'react';
import style from './Title.css';

function Title(props) {
    return (
        <div className={style.Title}>
            <h1>{props.title}</h1>
            <h2>{props.taskLength} task</h2>
        </div>
    )
}

export default Title;