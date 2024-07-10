import React from "react";

import { useState} from "react";

import '../assests/css/todoInput.css'

function TodoInput({Todos , setTodos}) {

    const [Title, setTitle] = useState("");

    const [description, setdescription] = useState("");


    let handleInput = () => {
        let TodoItem = {
            title: Title,
            description: description
        }
        let TodoArr = [...Todos]
        TodoArr.push(TodoItem)
        setTodos(TodoArr)
        localStorage.setItem('todolist',JSON.stringify(TodoArr))
    }   

    return (    
        <>
        <div className="todo-input">
            <div className="input-item">
                <label>Todo</label>
                <input type="text" className="input" placeholder="What you have in mind" onChange={e => setTitle(e.target.value)}/>
            </div>
            <div className="input-item">
                <label>Description</label>
                <textarea          className="input" placeholder="Description for it"    onChange={e => setdescription(e.target.value)}/>
            </div>
            <div className="input-item">
                <button onClick={() => handleInput()} type="button" className="add-todo">Add</button>
            </div>
        </div>
        </>
    )
}

export default TodoInput;