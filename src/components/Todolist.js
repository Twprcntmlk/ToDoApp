import React, {useEffect} from 'react';
import EachToDo from './EachTodo';



const ToDolist = ({setTodo,toDo,filteredtoDo}) => {



    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filteredtoDo?.map((el, idx)=>(
                    <div key={idx}>
                        <EachToDo setTodo={setTodo} toDo={toDo} SingletoDo={el} text={el.text}/>
                    </div>

                ))}
            </ul>
        </div>
    )
}

export default ToDolist
