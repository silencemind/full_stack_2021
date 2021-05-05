import React from 'react'
import Header from './Header.js'
import Content from './Content'
const Hello = (props) => {
  return <h1>Hello From {props.name}</h1>
}

const Header = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
}



const App = () => {

  return (
    <div>
      <Header course={Content} />
    </div>
  )
}

export default App;
