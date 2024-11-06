import React from "react";
import {useDispatch} from "react-redux";
import {removeTodo, toggleTodo} from "../../redux/actions";
import './css/todoItem.css';

const TodoItem = ({id, text, completed}) => {
    const dispatch = useDispatch();

    return (
        <li className="todo-item">
            <span
                className={`todo-text ${completed ? 'completed' : ''}`}
                onClick={() => dispatch(toggleTodo(id))}
            >
                {text}
            </span>
            <button onClick={() => dispatch(removeTodo(id))} className="delete-button">Delete</button>
        </li>
    );
}

export default TodoItem;
