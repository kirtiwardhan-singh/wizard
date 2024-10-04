import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [color, setColor] = useState("Red")

  return (
    
    <div className="w-full h-screen " style={{backgroundColor:color}}>
      <div className="">
     <button type="button" className="btn btn-primary" onClick={()=>setColor("blue")}>Blue</button>
<button type="button" className="btn btn-secondary" onClick={()=>setColor("grey")}>grey</button>
<button type="button" className="btn btn-success" onClick={()=>setColor("green")}>green</button>
<button type="button" className="btn btn-danger" onClick={()=>setColor("Red")}>Red</button>
<button type="button" className="btn btn-warning" onClick={()=>setColor("yellow")}>Yellow</button>
<button type="button" className="btn btn-light" onClick={()=>setColor("white")}>White</button>
<button type="button" className="btn btn-dark" onClick={()=>setColor("black")}>Black</button></div>
</div>
  )
}

export default App
