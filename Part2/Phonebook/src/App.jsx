import { useEffect, useState } from 'react'
import Form from './Form'
import Search from './Search'
import Server from './Services/backend'

const url = 'http://localhost:3001/persons'

const Notification = ({message, color}) => {
  const style = {
    color,
    borderStyle: 'Solid',
    borderColor: color,
    borderRadius: 5,
    fontStyle: 'italic',
    padding: 10,
    fontSize: 30
  }
  if (message != 'Hello') {
    return (
        <div>
        <h1 style={style}>{message}</h1>
      </div>)
  }
}

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [message, setMessage] = useState(['Hello', 'color'])

  const hook = () => {
    const data = Server.retrieveData(url).then(response => {
      setPersons(response)
    })
  }
  useEffect(hook, [])

  return (
    <div>
      <Notification message = {message[0]} color={message[1]}/>
      <h2>Phonebook</h2>
      <Form persons= {persons} setPersons={setPersons} setMessage={setMessage}/>
      <h2>Numbers</h2>
      <Search persons={persons} setPersons={setPersons} setMessage={setMessage}/>
    </div>
  )
}

export default App