import React, {useEffect} from 'react';

const EachToDo = ({setTodo, toDo, text, SingletoDo}) => {


    const toDelete = () =>{
        setTodo(toDo.filter((el)=>( el.id !== SingletoDo.id)))
    }

    const onComplete =() =>{
        setTodo(toDo.map((el)=>{
            if(el.id === SingletoDo.id){
                return {...el, completed: !el.completed}
            }
            return el
        }))
    }

    return(
        <div className="todo">
            <li className={`todo-item ${SingletoDo.completed ? "completed" : ""}`}>{text}</li>
            <button className="complete-btn" onClick={onComplete}>
                <i className="fas fa-check"></i>
            </button>
            <button className="trash-btn" onClick={toDelete}>
                <i className="fas fa-trash"></i>
            </button>
        </div>
    )
}

export default EachToDo
