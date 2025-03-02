import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let [counter,setCounter] = useState(15)
  // let counter = 15
const addValue =()=>{
  // counter=counter+1 
  if(counter<20){
   setCounter(counter+1)
}
else{
  counter=20
}}
const removeValue=()=>{
  if(counter>0){
  setCounter(counter-1)
  }else{
    counter=0
  }
}

  return (
    <>
      <h1>chai aur react</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value:{counter}</button>
      <br />
      <button onClick
      ={removeValue}>Decrease Value:{counter}</button>
      <footer>foot:{counter}</footer>
    </>
  )
}

export default App
