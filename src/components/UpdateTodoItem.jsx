import '../assests/css/todoUpdate.css'



function UpdateTodoItem({Todos, setTodos, CurrentEditedItem, setCurrentEditedItem, setCurrentEdit, index}) {


    let handleUpdateTitle = (title) => {
        setCurrentEditedItem((prev) => {
            return {...prev,title:title}
        })
    }

    let handleUpdateDescription = (description) => {
        setCurrentEditedItem((prev) => {
            return {...prev,description:description}
        })
    }

    let handleEdit = () =>{
        let TodoArr = [...Todos]
        TodoArr[index] = CurrentEditedItem
        setTodos(TodoArr)
        setCurrentEdit("")
        localStorage.setItem('todolist',JSON.stringify(TodoArr))
    }

    return (
        <div className="edit-wraper">
            <input
                className="input-update input-update-title"
                type="text"
                placeholder="Update Title"
                onChange={(e) => handleUpdateTitle(e.target.vlalue)}
                value={CurrentEditedItem.title} />

            <textarea
                className="input-update input-update-description"
                placeholder="Update Description"
                onChange={(e) => handleUpdateDescription(e.target.value)}
                value={CurrentEditedItem.description}>

            </textarea>
            <button onClick={() => {handleEdit()}} className="btn-update">Edit</button>
        </div>
    )

}

export default UpdateTodoItem;