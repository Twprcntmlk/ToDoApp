import React, {useState, useEffect} from 'react';

import './App.css';
import Form from "./components/Form"
import ToDolist from './components/Todolist'

function App() {
  const [inputText, setInputText] = useState("")
  const [toDo, setTodo] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredtoDo, setFilteredtoDo] = useState(toDo)
  console.log(status)
  console.log(filteredtoDo)
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredtoDo(toDo.filter((el)=>(el.completed === true)))
        break;
      case 'uncompleted':
        setFilteredtoDo(toDo.filter((el)=>(el.completed === false)))
        break;
      default:
        setFilteredtoDo(toDo)
        break;
    }
  }

    useEffect(() =>{
      filterHandler();
    },[toDo,status])

  return (
    <div className="App">
      <header>
        <h1>Stephen's Amazing Just Do It List</h1>
      </header>
      <div>
        <Form setInputText={setInputText} setTodo={setTodo} toDo={toDo} inputText={inputText} setStatus={setStatus}/>
      </div>
      <div>
        <ToDolist setInputText={setInputText} setTodo={setTodo} toDo={toDo} inputText={inputText} filteredtoDo={filteredtoDo}/>
      </div>
    </div>
  );
}

export default App;
