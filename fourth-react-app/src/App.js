import {useRef,useState} from "react";
function App(){
  return(
    <>
    <h1>Stateful List</h1>
    <ListDemo/>
    </>
  )
}

function ListDemo(){
  let inputElement=useRef();
  let [list,setList]= useState(["Delhi"]);

  let addItemAction = () => {

    // let inputElement=document.querySelector("#id1");
    let inputValue=inputElement.current.value
    let newList = [inputValue,...list];
    setList(newList);

    inputElement.value="";
  };
return(
  <>
  <input type="text" ref={inputElement} id="id1" placeholder="Enter user input" />
  <input type="button" value="Add New item" onClick={addItemAction} />
  {list.map((item)=>(
    <h1>{item}</h1>
  ))}
  </>
);
  
}


export default App;