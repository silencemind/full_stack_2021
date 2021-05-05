import './App.css';
import React from 'react'

const Hello = (props) => {
  return <h1>Hello From {props.name}</h1>
}

const App = () => {


  return (
  <div>
 
    <Hello name='Abid' />
    <Hello name='Khan' />
  </div>
  )
}

export default App;
