import React from 'react';
import {useSelector} from "react-redux";

function Header() {
    const todo = useSelector((state) => state.TodoApp)
    // console.log(state)
    return (
        <div className="header">
            <h1 className="heading">{todo.value}</h1>
            <span className="btn">Login</span>
        </div>
    )
}

export default Header;
