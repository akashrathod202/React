import { useState, useEffect } from "react";

function App() {
  const [currentTab, setTab] = useState("feed");
  const [tabData,setTabdata]=useState({})
  const [loding,setloading]=useState(true)
  useEffect(() => {
    setloading(true)
    setTimeout(()=>{
      fetch("https://jsonplaceholder.typicode.com/todos/"+currentTab)
    .then(async res =>{
      const json =await res.json();
      setTabdata(json)
      setloading(false)
    }).catch(()=>{
      setloading(false)
    })
       
    },4000)
  }, [currentTab]);

  return (
    <div>
      <button
        onClick={() => setTab(1)}
        style={{ color: currentTab ===  1 ? "red" : "black" }}
      >
        Todo1
      </button>

      <button
        onClick={() => setTab(2)}
        style={{ color: currentTab ===  2 ? "red" : "black" }}
      >
       Todo2
      </button>

      <button
        onClick={() => setTab(3)}
        style={{ color: currentTab === 3 ? "red" : "black" }}
      >
        Todo3
      </button>

      <button
        onClick={() => setTab(4)}
        style={{ color: currentTab ===  4? "red" : "black" }}
      >
      Todo4
      </button>

      {loding ? "loding.............." : tabData.title}
    </div>
  );
}

export default App;