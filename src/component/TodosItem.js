import React from 'react';
// let x;
export default function TodosItem({todo, onDelete }) {
    //  x = function()
    // {
    // return onDelete(todo)
    // }
    
    return (
        <div className="card my-2 mx-2 width" >
            <div className="card-title d-flex my-2">
          
            <h3 className="mx-2">{todo.sno} {todo.title}</h3>
            </div>
            <hr />
            <div className="card-body">
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>

        </div>
    )


    
}
