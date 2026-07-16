import { useState } from "react"

 

function App() {
   

  return (
    <>
   
<h1>
  <Lightbuilb/>
</h1>
      
    </>
  )
}


function  Lightbuilb(){
  const[Bulbon,setBulbon]=useState(true)
  return(
    <div>
   
      <BuibState Bulbon={Bulbon}/>
      <ToggleBulbState setBulbon={setBulbon}/>
    </div>
  )
}

function BuibState( {Bulbon}){
 
  return(
    <>
     <div>
      { Bulbon ? "Builb on" : "Builboff"}
     </div>
    </>
  )
}


function ToggleBulbState({setBulbon}){
  function Toogle(){
    setBulbon(Bulbon=>!Bulbon)
  }
  return (
    <>
  <button onClick={Toogle}>Toggle the builb</button>
    </>
  )
}
export default App
