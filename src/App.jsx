
import logo from "./logo.svg"
import './App.css'
import React,{useState} from "react";

import Query from "../src/services/queries/index.jsx"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Query/>
    </div>
  )
}

export default App
