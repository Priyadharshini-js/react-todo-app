import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';
import { filterFunction } from '../config/filterConfig';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos, toggleTodo, deleteTodo } = useContext(TodoContext);
    const location = useLocation();

    const query = new URLSearchParams(location.search);
    const filter = query.get('filter') || 'all';
    const filteredTodos = todos.filter(filterFunction[filter] || filterFunction.all);

    return (
        <main>
            <ul className="todo-list">
                {filteredTodos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={deleteTodo}
                    />
                ))}
            </ul>
        </main>
    );
};

export default TodoList;
