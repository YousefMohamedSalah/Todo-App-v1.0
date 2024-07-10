import { AiOutlineDelete } from "react-icons/ai";

import { BsCheckLg } from "react-icons/bs";

import { LiaClipboardListSolid } from "react-icons/lia";

function TodoItem({Todos, setTodos,  index,title,description, Completed, setCompleted, isCompleteScreen, CompletedOn, order}) {

    let  todoList = [...Todos]

    let completeTodoList = [...Completed]

    let handleDeleteItem = () =>{
        
        if (!isCompleteScreen){
        todoList.splice(index,1)
        setTodos(todoList)
        localStorage.setItem('todolist', JSON.stringify(todoList))
        }else{
        completeTodoList.splice(index,1)
        setCompleted(completeTodoList)
        localStorage.setItem('completedtodolist',JSON.stringify(completeTodoList))
        }
    }

    let handleCompleteItem = () => {
        let now = new Date()
        let [dd, mm, yyyy, h, m, s] = [now.getDay(), now.getMonth(), now.getFullYear(), now.getHours(), now.getMinutes(), now.getSeconds()]
        
        let CompleteDate = `Completed ${dd}-${mm}-${yyyy} at ${h}:${m}:${s}`

        let filteredItem = {
            ...Todos[index],
            CompletedOn:CompleteDate,
            order:index
        }

        completeTodoList.push(filteredItem)
        
        todoList.splice(index,1)
        setTodos(todoList)
        localStorage.setItem('todolist', JSON.stringify(todoList))

        setCompleted(completeTodoList)
        localStorage.setItem('completedtodolist',JSON.stringify(completeTodoList))
    }

    let handleUnCompleteItem = () =>{
        let UncompleteItem = completeTodoList.at(index)
        completeTodoList.splice(index,1)
        setCompleted(completeTodoList)
        localStorage.setItem('completedtodolist',JSON.stringify(completeTodoList))

        todoList.splice(order,0,UncompleteItem)
        setTodos(todoList)
        localStorage.setItem('todolist',JSON.stringify(todoList))
    }

    return (
        <>
            <div className="todo-item" key={index}>
                <div>
                    <h3>{title}</h3>
                    <p>{isCompleteScreen ? <del>{description}</del> : description}</p>
                    {isCompleteScreen && <p><i>{CompletedOn}</i></p>}
                </div>
                <div>
                    <AiOutlineDelete onClick={() => handleDeleteItem()} className="icon" />
                    {(!isCompleteScreen) && <BsCheckLg onClick={() => handleCompleteItem()} className="check-icon" /> }
                    {(isCompleteScreen) && <LiaClipboardListSolid onClick={() => handleUnCompleteItem()} className="check-icon"/>}

                    
                </div>
            </div>
        </>
    )

}

export default TodoItem;