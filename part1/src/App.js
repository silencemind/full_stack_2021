import React from 'react'



const Header = (props) => {
  console.log(props);
  return (
        <div>
          <h1>{props.course}</h1>
        </div>
  )

}


const Content = (props) =>     {
console.log(props)
  return (
    <div>
      {/* <h2>{props.part1}: {props.exercises1}</h2>
      <h2>{props.part2}: {props.exercises2}</h2>
      <h2>{props.part3}: {props.exercises3}</h2> */}
    </div>
  )
 
}


const Total = (props) => 
{
  return (
    <div>
      <h3>
        {/* Total Exercises: {props.total} */}
      </h3>
      </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  // const part1 = {
  //   name: 'Fundamentals of React',
  //   exercises: 10
  // }
  // const part2 = {
  //   name: 'Using props to pass data',
  //   exercises: 7
  // }
  // const part3 = {
  //   name: 'State of a component',
  //   exercises: 14
  // }
  return (  
    <div>
      <Header course={course} />
      
  

  

      {/* <Content part1={part1['name']} exercises1={part1['exercises']} part2={part2['name']} exercises2={part2['exercises']} part3={part3['name']} exercises3={part3['exercises']} /> */}
      {/* <Total total= {part1['exercises']+part2['exercises']+part3['exercises']}> */}
        
        {/* </Total> */}
    </div>
  )
}

export default App;

// asd