// import { createContext } from "react";

import { useState } from "react"

function App(){
  return(
    <>
  <Counter/>
    </>
  )
}


function Counter(){
  const [count,setcount]=useState(0)
  return <>
  {count}
  <Increase setcount={setcount}/>
  <Decrease setcount={setcount}/>
  </>
}

function Increase({setcount}){

  function increment(){
    setcount(count=>count+1)
  }
  return <div>
    <button onClick={increment}>
      Increase
    </button>
  </div>
  }

function Decrease({setcount}){

  function decrement(){
    setcount(count=>count-1)
  }
return <div>
  <button onClick={decrement}>
  Decrease
  </button>
</div>
}

export default App;