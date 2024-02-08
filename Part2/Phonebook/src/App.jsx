import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const updateName = (event) => {
    setNewName(event.target.value)
  }

  const newPerson = (event) => {
    event.preventDefault()
    let duplicate = false
    let person = {
      name: newName
    }
    persons.forEach(human => {
      if (human.name == person.name) {
        alert(`${person.name} has already been added to the phonebook`)
        duplicate = true
      }
    })
    if (!duplicate) {
      setPersons(persons.concat(person))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={newPerson}>
        <div>
          name: <input value={newName} onChange={updateName}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person => <p key={person.name}>{person.name}</p>)}
      </div>
    </div>
  )
}

export default App