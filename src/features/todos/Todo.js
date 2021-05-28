import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
// 1st import useSelector, useDispatch, useState
import { getPostsAsync } from './todoSlice'
const Todo = () => {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPostsAsync())
    }, [dispatch])
    return (
        <>
          <TodoForm/>
          {/* <TodoList todos={todos}/> */}
        </>
    )
}

export default Todo