import Server from './Services/backend'

const Person = ({person, persons, setPersons, setMessage}) => {
    return (
        <>
       <p>{person.name}  {person.number}  <button onClick={() => {
        if (window.confirm(`Delete ${person.name}?`)) {
            Server.deleteData(person)
            setPersons(persons.filter(contact => contact.id !== person.id))
            setMessage([`${person.name} removed sucessfully`, 'red'])
            setTimeout(() => setMessage(["Hello"]), 3000)
        } else {
            console.log("User cancelled request!")
        }
    }}>Delete</button></p>
        </>
    )
}

export default Person