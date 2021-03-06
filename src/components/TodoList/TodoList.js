import React from 'react';
import style from './TodoList.css';
import Todo from '../Todo/Todo.js';

const TodoList = props => {
    return (
        <ul className={style.TodoList}>
            {props.todos.map(todo => <Todo key={todo.id} text={todo.text} remove={() => props.remove(todo.id)}/>)}
        </ul>
    )
}

export default TodoList;