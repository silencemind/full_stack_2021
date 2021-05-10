import React from 'react'



const Header = (props) => {
  console.log(props);
  return (
        <div>
          
        </div>
  )

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
