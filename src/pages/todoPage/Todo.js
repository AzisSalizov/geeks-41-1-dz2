import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, setFilter } from "../../redux/actions";
import TodoList from "./TodoList";
import './css/todo.css';

const Todo = () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleAddTodo = () => {
        dispatch(addTodo(text));
        setText('');
    };

    const handleFilter = newFilter => {
        dispatch(setFilter(newFilter));
    };

    return (
        <div className="todo-container">
            <h1 className="todo-title">Todo List</h1>
            <input
                type="text"
                placeholder="Enter a new task"
                onChange={(e) => setText(e.target.value)}
                value={text}
                className="todo-input"
            />
            <button onClick={handleAddTodo} className="todo-button">Add task</button>
            <div className="todo-filter-buttons">
                <button onClick={() => handleFilter('ALL')} className="filter-button">ALL</button>
                <button onClick={() => handleFilter('ACTIVE')} className="filter-button">Active</button>
                <button onClick={() => handleFilter('COMPLETED')} className="filter-button">Completed</button>
                <button onClick={() => handleFilter('RESET_FILTER')} className="filter-button">Reset Filter</button>
            </div>
            <TodoList />
        </div>
    );
}

export default Todo;
