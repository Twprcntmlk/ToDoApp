import React, {useState} from 'react';

const Form = ({setInputText,setTodo,toDo,inputText,setStatus}) => {

    const onInputText = (e) => {
        e.preventDefault();
        setInputText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let newId=toDo.length+1
        setTodo([...toDo, {text:inputText, completed:false, id:newId}])
        setInputText("")
    }

    const onStatus = (e) => {
        e.preventDefault();
        setStatus(e.target.value)
    }
    return(
        <form>
            <input type="text" className="todo-input" onChange={onInputText} value={inputText}/>
            <button className="todo-button" type="submit" onClick={onSubmit}>
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select name="todos" className="filter-todo" onChange={onStatus}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form
