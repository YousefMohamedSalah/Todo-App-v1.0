import React from "react";

import '../assests/css/todoBtn.css'

function TodoBtn({isCompleteScreen, setisCompleteScreen}) {

    return (
        <>
            <div className="btn-area">
                <button onClick={() => setisCompleteScreen(false)} className={`todo-btn ${(!isCompleteScreen) && `active`}`}>Todo</button>
                <button onClick={() => setisCompleteScreen(true)} className={`todo-btn ${isCompleteScreen && `active`}`}>Complete</button>
            </div>
        </>
    )
}

export default TodoBtn;