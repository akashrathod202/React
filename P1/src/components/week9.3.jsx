function Card({ children }) {
    return (
      <div
        style={{
          border: "2px solid black",
          padding: "20px",
          margin: "10px",
        }}
      >
        {children}
      </div>
    );
  }
  
  function App() {
    return (
      <>
        <Card>
          <h1>Profile</h1>
        </Card>
  
        <Card>
          <button>Login</button>
        </Card>
  
        <Card>
          <img
            src="https://picsum.photos/200"
            alt="Random"
          />
        </Card>
      </>
    );
  }
 

 
export default App;
