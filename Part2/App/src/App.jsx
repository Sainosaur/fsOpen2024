import { Component, useState } from 'react'

const Course = ({course, id}) => {
  const partsList = course.parts
  console.log(partsList)
  return (
    <>
    <h1>{course.name}</h1>
    <div>
      <ul>
        {partsList.map(part => <li key={part.id}>
          {part.name} {part.exercises}
        </li>)}
      </ul>
    </div>
    </>
  )
}

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        }
      ]
    }
  
    return <Course course={course} id= {1} />
  }
  
  export default App

