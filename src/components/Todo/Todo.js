import React from 'react';
import style from './Todo.css';

const Todo = props => {
    return (
        <li>
            <button className={style.btn} onClick={() => props.remove(props.id)}>
                X
            </button>
            {props.text}
        </li>
    )
}

export default Todo;