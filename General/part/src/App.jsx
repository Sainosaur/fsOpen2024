import { useState } from 'react'
import './App.css'

// Rule: to avoid confusion to me and the browser, always start react components with a capital letter, App is acceptable app is not. This is NOT convetion React will NOT WORK unless this rule is followed.
function Content(props) {
  // use props to pass data into the component do not just use multiple parameter it will NOT work!!
  // to ease the usgae of props, they can be destructure in the function declaration itself allowing for easier reference within the function itself
  // e.g Content({x,y}) will automatically take props and extract x and y for efficient referncing within the react component
  // called a component helper function, function within a component used for repeatable computation.
  const x = (y,z) => {
    return y + z
  }
  return (
      <>
        <p>Hello x is {props.x} and y is {props.y}</p>
        <p> x + y = {props.x+props.y}</p>
      </>
  )
}

function Science() {
  let Scientists = [
    {name: "Einstein", discovery: "Relativity"},
    {name: "Newton", discovery: "Gravity"}
  ]
  // React cannot render objects, the values passed along to it must be exact values like numbers, strings etc
  return (
    <>
      <p>Scientist {Scientists[0].name} discovered {Scientists[0].discovery}</p>
      <p>Scientist {Scientists[1].name} discovered {Scientists[1].discovery}</p>
    </>
  )
}

function App() {
  const [count, setCount] = useState(0)
  console.log("Hello there!")
  let Name = "Sai"
  return (
    // <> can be used to create a string template by the looks of it as variables can be inputted
    // if a value within a return statement needs to be worked out by JS always include it within {} i.e values, variables etc. Strings do not need to placed in {} for example
    // React components can be called using self-closing HTML tags i.e <Component />
    <>
      <div>
        <p> Hello {Name}</p>
        <Content x= {5} y = {7}/>
        <Science />
      </div>
    </>
  )
}

// Essential line react needs App to be extracted to convert it's content in to HTML
export default App
