import { useEffect, useState } from 'react'
import Form from './Form'
import Search from './Search'
import Server from './Services/backend'

const url = 'http://localhost:3001/persons'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const hook = () => {
    const data = Server.retrieveData(url).then(response => {
      setPersons(response)
    })
  }
  useEffect(hook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Form persons= {persons} setPersons={setPersons} />
      <h2>Numbers</h2>
      <Search persons={persons} setPersons={setPersons}/>
    </div>
  )
}

export default App