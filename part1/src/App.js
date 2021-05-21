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
      <h2>{props.part[0]['name']} : {props.part[0]['exercises']}</h2>
      <h2>{props.part[1]['name']} : {props.part[1]['exercises']}</h2>
      <h2>{props.part[2]['name']}: {props.part[2]['exercises']}</h2>

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

  return (  
    <div>
      <Header course={course} />

      <Content part={parts}></Content>
    </div>
  )
}

export default App;


