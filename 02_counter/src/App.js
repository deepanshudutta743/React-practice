import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  let [counter,setCounter]=useState(15);

  const addValue=()=>{
    if(counter<20)
    setCounter(counter+1);

  }
  const removeValue=()=>{
    if(counter>0)
    setCounter(counter-1);
  };
  return (
    <>
        <h1>My react</h1>
        <h2>Counter value: {counter}</h2>

        <button onClick={addValue}>Add Value</button><br/>
        <button onClick={removeValue}>remove value</button>    
    </>

  );
}

export default App;
