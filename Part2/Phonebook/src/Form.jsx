import {useState} from 'react'
import server from './Services/backend'


const Form = ({persons, setPersons}) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const updateName = (event) => {
        setNewName(event.target.value)
      }
    const updateNumber = (event) => {
        setNewNumber(event.target.value)
      }
    const newPerson = (event) => {
        event.preventDefault()
        let duplicate = false
        let person = {
          name: newName,
          number : newNumber
        }
        persons.forEach(human => {
          if (human.name == person.name) {
            alert(`${person.name} has already been added to the phonebook`)
            duplicate = true
          }
        })
        if (!duplicate) {
          setPersons(persons.concat(person))
          server.AppendServer(person)
        }
      }
    return (
        <form onSubmit={newPerson}>
        <h2>Add a new contact:</h2>
        <div>
          name: <input value={newName} onChange={updateName}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={updateNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default Form