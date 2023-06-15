function App(){
  return(
    <>
    <h1>Props Demo</h1>
    <ListDemo/>
    </>
  )
}

function ListDemo(){
let data = "hello Ravi";
let list =["delhi","pune","mumbai"];

console.log(list);
  return (
    <>
      <h1>{data}</h1>
      {list.forEach((item) => item)}
      {list.map((item) => item)}
    </>
  )
}

// function MessageDemo({username,email}){
// // console.log("I am inside messagedemo",props)

//   return (
//     <>
//      <h1>hello {username}{email}</h1>
//     </>
//   );
// }
export default App;