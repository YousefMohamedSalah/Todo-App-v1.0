import { AiOutlineDelete } from "react-icons/ai";

import { BsCheckLg } from "react-icons/bs";

import { LiaClipboardListSolid } from "react-icons/lia";

import { AiOutlineEdit } from 'react-icons/ai'

function TodoItem(props) {

    let  todoList = [...props.Todos]

    let completeTodoList = [...props.Completed]

    let handleDeleteItem = () =>{
        
        if (!props.isCompleteScreen){
        todoList.splice(props.index,1)
        props.setTodos(todoList)
        localStorage.setItem('todolist', JSON.stringify(todoList))
        }else{
        completeTodoList.splice(props.index,1)
        props.setCompleted(completeTodoList)
        localStorage.setItem('completedtodolist',JSON.stringify(completeTodoList))
        }
    }

    let handleCompleteItem = () => {
        let now = new Date()
        let [dd, mm, yyyy, h, m, s] = [now.getDay(), now.getMonth(), now.getFullYear(), now.getHours(), now.getMinutes(), now.getSeconds()]
        
        let CompleteDate = `Completed ${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`

        let filteredItem = {
            ...props.Todos[props.index],
            CompletedOn:CompleteDate,
            order:props.index
        }

        completeTodoList.push(filteredItem)
        
        todoList.splice(props.index,1)
        props.setTodos(todoList)
        localStorage.setItem('todolist', JSON.stringify(todoList))

        props.setCompleted(completeTodoList)
        localStorage.setItem('completedtodolist',JSON.stringify(completeTodoList))
    }

    let handleEditItem = () => {
        props.setCurrentEdit(props.index)
        props.setCurrentEditedItem([...props.Todos][props.index])
    }


    let handleUnCompleteItem = () =>{
        let UncompleteItem = completeTodoList.at(props.index)
        completeTodoList.splice(props.index,1)
        props.setCompleted(completeTodoList)
        localStorage.setItem('completedtodolist',JSON.stringify(completeTodoList))

        todoList.splice(props.order,0,UncompleteItem)
        props.setTodos(todoList)
        localStorage.setItem('todolist',JSON.stringify(todoList))
    }

    return (
        <>
            <div className="todo-item" key={props.index}>
                <div>
                    <h3>{props.title}</h3>
                    <p>{props.isCompleteScreen ? <del>{props.description}</del> : props.description}</p>
                    {props.isCompleteScreen && <p><i>{props.CompletedOn}</i></p>}
                </div>
                <div>
                    <AiOutlineDelete onClick={() => handleDeleteItem()} className="icon" />
                    {(!props.isCompleteScreen) && <BsCheckLg onClick={() => handleCompleteItem()} className="check-icon" /> }
                    {(!props.isCompleteScreen) && <AiOutlineEdit onClick={() => handleEditItem()} className="check-icon"/>}
                    {(props.isCompleteScreen) && <LiaClipboardListSolid onClick={() => handleUnCompleteItem()} className="check-icon"/>}
                    
                </div>
            </div>
        </>
    )

}

export default TodoItem;