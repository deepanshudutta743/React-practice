import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';

function App() {
  const [count, setCount] = useState(0)
 let myObj={
  name:"Deepanshu",
  age:23

  }

  return (
    <>
     <Card userName="Deepanshu" btntext="click me"/> 
     <Card userName="Rahul" btntext="visit me"/> 
     <Card/> 
    </>
  )
}

export default App
