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
    <div >
    <h1>{item}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque obcaecati reprehenderit quasi quod eligendi deleniti blanditiis, suscipit rem modi! Veniam accusamus earum neque nostrum. Voluptatem repellendus voluptatibus, voluptate atque commodi culpa, autem tempora ratione nulla omnis ipsam totam deserunt nemo.</p>
    <div>
      <input type="button" value="&#128077;" />
      <input type="button" value="&#128078;" />
    </div>
    </div>
  ))}
  </>
);
  
}


export default App;