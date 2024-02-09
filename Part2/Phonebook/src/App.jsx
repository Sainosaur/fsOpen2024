import { useState } from 'react'
import Form from './Form'
import Search from './Search'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 

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