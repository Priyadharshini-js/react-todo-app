import React, { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import { Filters } from '../config/filterConfig'
import FilterButton from './FilterButton'

const Footer = () => {

    const { todos, clearCompleted } = useContext(TodoContext);
    const itemsLeft = todos.filter(todo => !todo.completed).length;
    const completedCount = todos.filter(todo => todo.completed).length;

    // Don't render the footer if there are no todos
    if (todos.length === 0) return null

    return (
        <>
            <footer className="todo-footer">
                <div className="footer-div">
                    <span className="todo-count">{itemsLeft} items left
                    </span>
                    <ul className="filters">
                        {Filters.map((filter, index) => (
                            <FilterButton key={index} {...filter} />
                        ))}
                    </ul>
                    <button
                        className="clear-completed"
                        type="button"
                        onClick={clearCompleted}
                        style={{ visibility: completedCount > 0 ? 'visible' : 'visibile' }}
                    >Clear completed</button>
                </div>
            </footer>
        </>
    )
}
export default Footer