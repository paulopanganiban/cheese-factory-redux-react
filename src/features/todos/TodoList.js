import React from 'react'
import { useSelector } from 'react-redux'

const TodoList = ({todos}) => {
    return (
        <div>
            {todos ?? todos.map((todo) => {
                return (
                <div className="section" key={todo.list.id}>
                    <h1 className="title">{todo.list.title}</h1>
                    <p>{todo.list.body}</p>
                </div>
                )
            })}
        </div>
    )
}

export default TodoList
