import { useEffect, useState } from 'react'
import Form from './Form'
import Search from './Search'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const hook = () => {
    axios.get("http://localhost:3001/persons").then(ref =>{
      console.log("Data Accquired")
      setPersons(ref.data)
      console.log(`Persons data set to list of ${ref.data.length}`)
    })
  }
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Form persons= {persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Search persons={persons}/>
    </div>
  )
}

export default App