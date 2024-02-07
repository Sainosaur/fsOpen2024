const Course = ({course}) => {
    const partsList = course.parts
    const excCount = course.parts.reduce((s,p) => s + p.exercises, 0)
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
      <h3>Total of {excCount} exercises</h3>
      </>
    )
  }
  export default Course