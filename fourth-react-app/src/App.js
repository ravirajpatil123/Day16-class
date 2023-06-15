import { useState } from "react";
function App() {
  return (
    <>
      <h1>My ToDo</h1>
      <MyTodo />
    </>
  );
}

function MyTodo() {
  let [todo, setTodo] = useState({ task: "", desc: "" });
  let handleChangeTaskAction = (e) =>{
      //console.log(e.target);

      let newTodo ={...todo,task: e.target.value};
      setTodo(newTodo);

  }


  let addTodoAction=() =>{
    alert(todo.task);
  }

  return (
    <>
      <input
        clasaName="form-control"
        type="text"
        placeholder="Enter task"
        value={todo.task}
        onChange={handleChangeTaskAction}
      />

      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}
export default App;
