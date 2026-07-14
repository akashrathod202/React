import { useEffect, useState } from "react";

function App() {
  const [counterVisible, setCounterVisible] = useState(true);

  useEffect(() => {
    const id = setInterval(() => {
      setCounterVisible((prev) => !prev);
    }, 5000);

    return () => {
      clearInterval(id);
      console.log("App interval cleared");
    };
  }, []);

  return (
    <div>
      {counterVisible && <Shoing />}
    </div>
  );
}

function Shoing() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(id);
      console.log("Counter interval cleared");
    };
  }, []);

  return <h1>{count}</h1>;
}

export default App;



 