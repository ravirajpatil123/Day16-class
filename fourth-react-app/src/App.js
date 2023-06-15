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
  let [todo, setTodo] = useState({ task: "", description: "" });
  let handleChangeTaskAction = (e) => {
    //console.log(e.target);

    let newTodo = { ...todo, task: e.target.value };
    setTodo(newTodo);
  };
  let handleChangeDescriptionAction=(e) => {
    let newTodo = { ...todo, description: e.target.value };
    setTodo(newTodo);
  }

  let addTodoAction = () => {
   // alert(todo.task + todo.description);
   console.log(todo)
  };

  return (
    <>
      <input
        clasaName="form-control"
        type="text"
        placeholder="Enter task"
        value={todo.task}
        onChange={handleChangeTaskAction}
      />

      <textarea
        className="form-control"
       
        cols="30"
        rows="3"
        placeholder="enter desciption"
        value={todo.description}
        onChange={handleChangeDescriptionAction}
      ></textarea>

      <input type="button" value="Add Todo" onClick={addTodoAction} />
    </>
  );
}
export default App;
