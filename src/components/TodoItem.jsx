import React from 'react';

const TodoItem = ({ todo, onToggle, onDelete }) => (
    <li>
        <div className="view">
            <div className="label-wrapper">
                <input
                    className="toggle"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => onToggle(todo.id)}
                />
                <label>{todo.text}</label>
            </div>
            <div>
                <button
                    className="close-btn"
                    type="button"
                    onClick={() => onDelete(todo.id)}
                ></button>
            </div>
        </div>
    </li>
);

export default TodoItem;
