function App(){
  return(
    <>
    <h1>Props Demo</h1>
    <MessageDemo username="Ravi"/>
    <MessageDemo username="Sanket"/>
    <MessageDemo username="Raj"/>
    </>
  )
}

function MessageDemo(props){
// console.log("I am inside messagedemo",props)

  return (
    <>
     <h1>hello {props.username}</h1>
    </>
  );
}
export default App;