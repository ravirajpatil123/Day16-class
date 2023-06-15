function App(){
  return(
    <>
    <h1>Props Demo</h1>
    <MessageDemo username="Ravi" email="ravi@gmail.com"/>
    <MessageDemo username="Sanket" email="sanket@gmail.com"/>
    <MessageDemo username="Raj" email="raj@gmail.com"/>
    </>
  )
}

function MessageDemo({username,email}){
// console.log("I am inside messagedemo",props)

  return (
    <>
     <h1>hello {username}{email}</h1>
    </>
  );
}
export default App;