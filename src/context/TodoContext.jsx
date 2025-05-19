import React, { createContext, useState } from "react"

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {

    const [input, setInput] = useState('');
    const [todos, setTodos] = useState([]);


    //add todo
    const addTodo = (e) => {
        if (e.key === 'Enter' && input.trim() !== '') {
            const newTodo = {
                id: Date.now(),
                text: input.trim(),
                completed: false
            };
            // console.log('New Todo ID:', newTodo.text); 
            setTodos([...todos, newTodo]);
            setInput('');
        }
    }

    //toggle todo
    const toggleTodo = (id) => {
        const updated = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updated);
    };

    //single todo delete
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    //clear completed
    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    return (
        <TodoContext.Provider value={{
            input, setInput, addTodo, todos, setTodos, toggleTodo, deleteTodo,
            clearCompleted
        }}>
            {children}
        </TodoContext.Provider>
    )
}
