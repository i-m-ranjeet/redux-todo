import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import { Logout, changeTheme } from '../../Reducers/Reducers';
function Header() {
        const todo = useSelector((state) => state.TodoApp)
        const dispatch = useDispatch();
        const logout = ()=>{
            dispatch(Logout())
        }
    return (
        <div className="header">
            <h1 className="heading">{todo.heading}</h1>
            <span className="btn userdata">
                <span style={{textTransform:"capitalize"}}>Name: {todo.fname} {todo.lname}</span>
                <span>Email: {todo.email}</span>
            </span>
            <div>
            <span className="btn" onClick={logout}>Logout</span>
            <span className="theme" onClick={()=>dispatch(changeTheme())}>Switch Theme</span>
            </div>
           
        </div>
    )
}

export default Header;
