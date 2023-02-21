import React,{useState} from "react";
import Template from "./component/Template";
import { AiOutlinePlusCircle} from 'react-icons/ai'
import TodoBoardLeft from "./component/TodoBoardLeft";
import './App.css'
import TodoBoardRight from './component/TodoBoardRight'

const App = () => {
  const [InputValue, setInputValue] = useState('');
  const [TodoList, setTodoList] = useState([]);

  const addItem = () => {
    setTodoList([...TodoList, InputValue])
  };

  return(
    <div>
      <Template></Template>
      <div className="name"><h2>Todo List</h2></div>
      <div className="container">
        <input type="text" value={InputValue} onChange={(event)=>setInputValue(event.target.value)} className="input-box"/>
        <button onClick={addItem} className="button">추가</button>
      </div>
      <article>
        <TodoBoardLeft TodoList={TodoList}/>
        <TodoBoardRight/>
      </article>  
    </div>
  );
};

export default App;