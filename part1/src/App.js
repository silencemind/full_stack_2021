import React from 'react'



const Header = (props) => {

  const course =<h1> ASDASDSASD {props.course}</h1>

}


const Content = (props) =>     {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
}


const Total = (props) => 
{
  const total = ''
}
const App = () => {

  return (
    <div>
      <Header course={Content} />
    </div>
  )
}

export default App;
