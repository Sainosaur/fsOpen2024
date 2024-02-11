import {useState} from 'react'
import server from './Services/backend'


const Form = ({persons, setPersons, setMessage}) => {
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
        let oldContact = null
        let person = {
          name: newName,
          number : newNumber,
        }
        persons.forEach(human => {
          if (human.name == person.name) {
            oldContact = human
            duplicate = true
          }
        })
        if (!duplicate) {
          setPersons(persons.concat(person))
          server.AppendServer(person)
          setMessage([`${person.name} Added to the phonebook!`, 'green'])
          setTimeout(() => setMessage(["Hello", 'color']), 3000)
        } else {
          const replaceContact = window.confirm(`${person.name} is already added to the phonebook, update their number?`)
           if (replaceContact) {
            const newList = persons.filter(contact => contact !== oldContact)
            server.updateNumber(oldContact,person).then(res => person.id = res.id)
            setPersons(newList.concat(person))
            setMessage([`${person.name}'s number changed to ${person.number}!`, "green"])
            setTimeout(() => setMessage(["Hello"]), 3000)
           }
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