import Server from './Services/backend'

const Person = ({person, persons, setPersons}) => {
    return (
        <>
       <p>{person.name}  {person.number}  <button onClick={() => {
        if (window.confirm(`Delete ${person.name}?`)) {
            Server.deleteData(person)
            setPersons(persons.filter(contact => contact.id !== person.id))
        } else {
            console.log("User cancelled request!")
        }
    }}>Delete</button></p>
        </>
    )
}

export default Person