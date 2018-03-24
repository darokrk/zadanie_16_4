import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
    return (
        <div>
            <ul className={style.TodoList}>
                <li>{props.todos}</li>
            </ul>
        </div>
    )
}

export default TodoList;