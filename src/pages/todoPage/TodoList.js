import React from "react";
import {useSelector} from "react-redux";
import TodoItem from "./TodoItem";
import './css/todoList.css'

const TodoList = () => {

    const todos = useSelector(state => state.todoReducer.todos);
    const filter = useSelector(state => state.todoReducer.filter);

    const filteredTodos = todos.filter(todo => {
        if (filter === 'ALL') {
            return true
        } else if (filter === 'ACTIVE') {
            return !todo.completed
        } else if (filter === 'COMPLETED') {
            return todo.completed
        } else if (filter === 'RESET_FILTER') {
            return false
        } else {
            return true
        }
    });


    return (
        <ul className="todo-list">
            {filteredTodos.map((todo) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    )
}

export default TodoList;