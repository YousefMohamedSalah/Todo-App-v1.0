import React from 'react';

import TodoItem from './TodoItem';

import '../assests/css/todoList.css'

import { useEffect } from 'react';

function TodoList({Todos, setTodos }) {
    return (
        <>

            {
                Todos.map((todo,index) => {
                    return (
                        <>
                            <TodoItem setTodos={setTodos} Todos={Todos} index={index} title={todo.title} description={todo.description} />
                            <hr style={
                                {Color:"var(--bs-teal)",
                                Opacity:".5"}
                                }/>
                        </>
                    )
                })
            }

        </>
    )

}

export default TodoList