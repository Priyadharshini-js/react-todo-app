import React from 'react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import Footer from '../components/Footer'


const TodoApp = () => {
    return (
        <>
            <section className='todo-app'>
                <h1 className="title">todos</h1>
                <div className="todo-container">
                    <Header />
                    <TodoList />
                    <Footer />
                </div>
            </section>
        </>
    )
}
export default TodoApp
