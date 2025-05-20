import React, { useContext, useEffect, useRef } from 'react'
import expandArrow from '../images/expand-arrow.png'
import { TodoContext } from '../context/TodoContext'

const Header = () => {

    const { input, setInput, addTodo, todos } = useContext(TodoContext)
    const inputRef = useRef(null)

    // Focus the input when the component mounts
    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <>
            <header>
                <div className="input-wrapper">
                    {todos.length > 0 &&
                        <img src={expandArrow} alt="expand-arrow" width="40px" />
                    }
                    <input
                        ref={inputRef}
                        type="text"
                        value={input}
                        name="todo"
                        placeholder="Add todo!"
                        onKeyDown={addTodo}
                        onChange={(e) => setInput(e.target.value)}
                    />
                </div>
            </header>
        </>
    )
}
export default Header