import { useState } from 'react'


function App() {
  const [count, setCount] = useState(10)

  const addval= ()=>{
    if(count<20){
      setCount(count+1)
   console.log(setCount(count+1))
    }
   
  }

  const removeval= ()=>{
    if(count>0){
    setCount(count-1)
    console.log(setCount(count-1))
    }
   }
  return (
    <>
    <h1>hello
    </h1>
    <button onClick={addval}>Add {count}</button>
    <br />
    <button onClick={removeval}>Remove {count}</button>

    </>
  );
}

export default App
