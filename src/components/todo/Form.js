import React, { useState } from "react";


function Form({ inputText, setInputText, todos, setTodos, setStatus, todo }) {
    const [alertWarning, setAlertWarning] = useState(true);
    const [alertSuccess, setAlertSuccess] = useState(true);



    const inputTextHandler = (e) => {
        setInputText(e.target.value)
    }

    const clearHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
       
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        const isEmpty = str => !str.trim().length;
        if (isEmpty(inputText)) {
            setAlertWarning(true);
            setTimeout(() => {
                setAlertWarning(false);
            }, 1000);
        } else {
            setAlertSuccess(true);
            setTimeout(() => {
                setAlertSuccess(false);
            }, 1000);
            setTodos([
                ...todos,
                { text: inputText, completed: false, id: Math.random() }
            ]);
        }

        setInputText("")
    }

     const statusHandler = (e) => {
         setStatus(e.target.value)
     }

    return (
        <form className="container">
            <div className="search">
                <input value={inputText} type="text" className="todo-input" placeholder="Add..." onChange={inputTextHandler} />
                <button className="todo-button" type="submit" onClick={submitTodoHandler}>
                    <i className="fas fa-plus-circle"></i>
                </button>
                
                
                {<select name="todos" className="select" onChange={statusHandler}>
                    <option value=" ">Categories</option>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select> }
           

                 <div>   
                 <button className="btn" type="delete" onClick={clearHandler}>
                 <p>Clear All!</p>

                </button>
                </div>
             
            </div>
       
     
            <div className="alert-wrapper">
                {alertWarning ? <div className="alert-warning">
                    <div>Input alanı boş geçilemez!</div>
                </div> : ""}
                {alertSuccess ? <div className="alert-success">
                    <div>Ekleme Başarılı.</div>
                </div> : ""}
            </div>

     
        </form>
    )
}

export default Form