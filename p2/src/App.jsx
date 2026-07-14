// import { BrowserRouter, Routes, Route, Link ,useNavigate} from "react-router-dom";

// function Home() {
//   return <h1>🏠 Home Page</h1>;
// }

// function About() {
//   return <h1>ℹ️ About Page</h1>;
// }

// function Contact() {
//   const navigate = useNavigate();

//   function redirectUser(){
//     navigate("/")
//   }
//    return <>
//    <h1>📞 Contact Page</h1>;
//    <button onClick={redirectUser}>go back to landing page</button>
//   </>
// }

// function ErrorPage(){
//   return <>
//   <h1>
//     Sorry page not found
//   </h1>
//   </>
// }

// function App() {
//   return (
//     <BrowserRouter>
//     <Link to='/'>Home</Link>
//     <Link to='/about'>about</Link>
//     <Link to="/contact">Contact</Link>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact/>} />
//         <Route path="*" element={<ErrorPage/>}/>
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

 import { useRef } from "react";

 
function App() {
  return (
    <input id="name" type="text"></input>
    
  )
}

export default App;

 