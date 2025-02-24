import { useState } from "react"


function App() {
  const [color , setColor] = useState("orange")

  return (
   // <h1 className='bg-green-400 text-black p-4 rounded-xl pb-4'>Tailwind test</h1>
  <div className="w-full h-screen duration-200"
  style={{backgroundColor : color}}
  >
    <div className ="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className ="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={() => setColor("red")}
         className="outline-none px-4"
        style={{backgroundColor:"red"}}>Red</button>
        
      </div>
      <div className ="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
        onClick={() => setColor("Blue")}
        className="outline-none px-4"
        style={{backgroundColor:"Blue"}}>Blue</button>
        
      </div>
      <div className ="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
         onClick={() => setColor("Green")}
          className="outline-none px-4"
        style={{backgroundColor:"Green"}}>Green</button>
        
      </div>
      <div className ="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button
         onClick={() => setColor("Yellow")}
          className="outline-none px-4"
        style={{backgroundColor:"Yellow"}}>Yellow</button>
        
      </div>
    </div>
  </div>
  )
}

export default App
