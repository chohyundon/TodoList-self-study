import React  from "react";
import TodoItem from "./TodoItem";

function TodoBoard(props){
  return(
    <div>
      <div className="sub1"><h3>완려!~</h3></div>
      <TodoItem></TodoItem>
    </div>
  );
};

export default TodoBoard;
