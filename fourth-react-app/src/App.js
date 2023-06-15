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
  let [successBox, setSuccessBox] =useState(false)
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

  let addTodoAction = async () => {
   // alert(todo.task + todo.description);
   console.log(todo)
   let url= 'http://localhost:4000/addtodo?task=$(todo.task)&description = ${todo.description})';
  await fetch(url);

  let newTodo= { tsak:"",description:""};
  setTodo(newTodo);

  setSuccessBox(true);
  setTimeout(() => {
    setSuccessBox(false)
  },5000);
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
   {successBox &&(
      <div className="alert alert-success">Operation Success</div>
   )}
    </>
  );
}
export default App;
