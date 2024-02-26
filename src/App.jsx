import { useState } from 'react'



function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-500"
    style={{backgroundColor : color}}>

<div

className='flex justify-center items-center h-screen'>
  <div className='px-4 py-4 rounded-3xl'
  style={{backgroundColor : "pink"}}>
    <button
    onClick={()=> setcolor("olive")}
    >default color</button>
  </div>
</div>


      <div className="fixed flex flex-wrap 
      justify-center bottom-4  inset-x-0 ">

        <div className='flex flex-wrap justify-center
        gap-7 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button
          onClick={()=> setcolor("Red")}
           className='px-4 py-1 rounded-3xl'
          style={{backgroundColor : "red"}}>
            Red
          </button>

          <button 
          onClick={()=> setcolor("Yellow")}
          className='px-4 py-1 rounded-3xl'
          style={{backgroundColor : "Yellow"}}>
            Yellow
          </button>

          <button
          onClick={()=> setcolor("Green")}
          className='px-4 py-1 rounded-3xl'
          style={{backgroundColor : "Green"}}>
            Green
          </button>

          <button
          onClick={()=> setcolor("Blue")}
          className='px-4 py-1 rounded-3xl'
          style={{backgroundColor : "Blue"}}>
            Blue
          </button>

          <button
          onClick={()=> setcolor("Pink")}
          className='px-4 py-1 rounded-3xl'
          style={{backgroundColor : "Pink"}}>
            Pink
          </button>

          
        </div>
      </div>
    </div>
  )
}

export default App
