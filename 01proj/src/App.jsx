import { useState } from "react"


function App() {
  const[color, setcolor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-flex-start top-10 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-4 bg-white px-1 py-3 rounded">
      <button onClick={()=>setcolor("red")} className="outline-none px-4 py-2 rounded text-white" style={{background:"red"}}
      >red</button>
      <button onClick={()=>setcolor("green")} className="outline-none px-4 py-2 rounded text-white" style={{background:"green"}}
      >Green</button>
      <button onClick={()=>setcolor("yellow")} className="outline-none px-4 py-2 rounded text-black" style={{background:"yellow"}}
      >Yellow</button>
      <button onClick={()=>setcolor("violet")} className="outline-none px-4 py-2 rounded text-white" style={{background:"Violet"}}
      >Pink</button>
      <button onClick={()=>setcolor("blue")} className="outline-none px-4 py-2 rounded text-white" style={{background:"blue"}}
      >Blue</button>
      </div>
      </div>
    </div>
  )
}

export default App
