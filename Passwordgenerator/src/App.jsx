import { useState, useCallback, useEffect } from "react"


function App() {
 
 const [length, setLength]=useState(8)
 const [numberallowed, setNumberAllowed]=useState(false)
 const [charallowed, setCharAllowed]=useState(false)
 const[password, setPassword]=useState("")

 const passwordGenerator=useCallback(() => {
  let pass=""
  let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
  if(numberallowed) str+="0123456789"
  if(charallowed) str+="!@#$%^&"
  for (let index = 1; index <=length; index++) {
    let char=Math.floor(Math.random()*str.length + 1)
    pass+=str.charAt(char)
  }
  setPassword(pass)
 }, [length, numberallowed, charallowed])

 useEffect(()=>{
  passwordGenerator();
 }, [length, numberallowed, charallowed, passwordGenerator])

  return (
    <>
      <div className="w-full text-center max-w-md mx-auto rounded-lg my-6 px-1 py-1 text-violet-400 bg-violet-800">
        <h1 className="text-white text-xl mb-5">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden mb-1 ">
          <input 
          type="text"
          value={password}
          className="w-full py-1 px-2"
          placeholder="password"
          readOnly />
          <button className="bg-blue-600 text-white outline-none shrink-0">Copy</button>
        </div>
        <div className=" flex gap-x-2">
          <div className="item-center flex gap-x-3">
            <input type="range"
            value={length}
            min={8}
            max={50}
            className="cursor-pointer"
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className="text-white" >Length {length}</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox"
            defaultChecked={numberallowed}
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label className="text-white"> Number</label>
          </div>
          <div className="flex items-center gap-2">
            <input type="checkbox"
            defaultChecked={charallowed}
            onChange={()=>{
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label className="text-white"> Character</label>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default App
