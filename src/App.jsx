import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Person from './Person'
import Button from './Button'
import Header from './Header'
import List from './List'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Person name='manish' age='20'/>
      <Button text='click me!' onClick={()=>console.log('Botton clicked!!!')}/>
      <Header title="Welcome to my website!"/>
      <List items={['apple', 'banana', 'orange']}/>
    </>
  )
}

export default App
