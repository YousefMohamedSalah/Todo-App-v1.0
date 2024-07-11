import React from "react";

import TodoInput from "./components/TodoInput";

import TodoBtn from "./components/TodoBtn";

import TodoItem from "./components/TodoItem";

import UpdateTodoItem from "./components/UpdateTodoItem";

import { useState, useEffect } from "react";

import './assests/css/todoList.css'

import './assests/css/todoBtn.css'

function Todo() {

    const [Todos, setTodos] = useState([]);
    const [Completed, setCompleted] = useState([]);
    const [isCompleteScreen, setisCompleteScreen] = useState(false);
    const [CurrentEdit, setCurrentEdit] = useState("");
    const [CurrentEditedItem, setCurrentEditedItem] = useState("");

    useEffect(() => {
        let savedTodo = JSON.parse(localStorage.getItem('todolist'))
        if (savedTodo) {
            setTodos(savedTodo)
        }
        let savedCompleteTodo = JSON.parse(localStorage.getItem('completedtodolist'))
        if (savedCompleteTodo) {
            setCompleted(savedCompleteTodo)
        }
    }, [])

    return (
        <>
            <h1>Todo App</h1>
            <div className="todo-container">
                <TodoInput Todos={Todos} setTodos={setTodos} />

                <div className="todo-wraper">
                    <TodoBtn isCompleteScreen={isCompleteScreen} setisCompleteScreen={setisCompleteScreen} />

                    {
                        (!isCompleteScreen) ? Todos.map((todo, index) => {
                            if (CurrentEdit === index) {
                                return (
                                <UpdateTodoItem 
                                    CurrentItem={[...Todos][CurrentEdit]}  
                                    Todos={Todos} 
                                    setTodos={setTodos} 
                                    CurrentEditedItem={CurrentEditedItem}
                                    setCurrentEditedItem={setCurrentEditedItem}
                                    setCurrentEdit={setCurrentEdit}
                                    index={CurrentEdit}
                                    />
                                )
                            } else {
                                return (
                                    <>
                                        <TodoItem
                                            Todos={Todos}
                                            setTodos={setTodos}

                                            index={index}
                                            title={todo.title}
                                            description={todo.description}

                                            Completed={Completed}
                                            setCompleted={setCompleted}

                                            isCompleteScreen={isCompleteScreen}

                                            CurrentEdit={CurrentEdit}

                                            setCurrentEdit={setCurrentEdit}

                                            setCurrentEditedItem={setCurrentEditedItem}
                                        />

                                        <hr style={
                                            {
                                                Color: "var(--bs-teal)",
                                                Opacity: ".5"
                                            }
                                        } />
                                    </>
                                );
                            }
                        }) : Completed.map((ctodo, index) => {
                            return (
                                <>
                                    <TodoItem
                                        Todos={Todos}
                                        setTodos={setTodos}

                                        index={index}
                                        title={ctodo.title}
                                        description={ctodo.description}
                                        CompletedOn={ctodo.CompletedOn}
                                        order={ctodo.order}

                                        Completed={Completed}
                                        setCompleted={setCompleted}

                                        isCompleteScreen={isCompleteScreen}
                                    />

                                    <hr style={
                                        {
                                            Color: "var(--bs-teal)",
                                            Opacity: ".5"
                                        }
                                    } />
                                </>
                            )
                        })
                    }

                    {/* {
                (isCompleteScreen) && Completed.map((ctodo,index) => {
                    return (
                        <>
                             <TodoItem 
                                Todos={Todos} 
                                setTodos={setTodos} 
                                
                                index={index} 
                                title={ctodo.title} 
                                description={ctodo.description} 
                                date={ctodo.CompletedOn}
                                
                                Completed={Completed} 
                                setCompleted={setCompleted}

                                isCompleteScreen={isCompleteScreen}
                            />
                            
                            <hr style={
                                {Color:"var(--bs-teal)",
                                Opacity:".5"}
                                }/>
                        </>
                    )
                })
                } */}

                </div>
            </div>
        </>
    )

}

export default Todo;