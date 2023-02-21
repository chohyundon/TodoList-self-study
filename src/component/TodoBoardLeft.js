import React  from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){
  return(
    <div>
      <div className="sub"><h3>진행중~</h3></div>
      <div>
        {props.TodoList.map((item)=> <TodoItem item={item}/>)}
      </div>
    </div>
  );
};

export default TodoBoard;
