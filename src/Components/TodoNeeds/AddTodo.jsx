import React from 'react'

function AddTodo() {
    return (
        <div className="addtodo-holder">
            <div className="container addtodo">
                <input type="text" name="" id="" placeholder="Add Todo Here..." />
                <span className="add btn">&#10011;</span>
             </div>
             <div className="container searchtodo">
             <input type="text" name="" id="" placeholder="Search Todo Here..." />
                <span className="search btn"><p className="ico">&#9906;</p></span>
             </div>
        </div>
    )
}

export default AddTodo
