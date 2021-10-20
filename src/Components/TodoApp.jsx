import React from 'react'
import AddTodo from './TodoNeeds/AddTodo'
import Header from './TodoNeeds/Header'
import TodoList from './TodoNeeds/TodoList'

function TodoApp() {
    return (
        <div className="todoapp">
            <Header />
            <AddTodo />
            <TodoList />
            {/* <span className=" lgbtn">Login</span> */}

        </div>
    )
}

export default TodoApp
