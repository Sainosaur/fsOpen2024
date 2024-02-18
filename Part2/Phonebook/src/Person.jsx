import Server from './Services/backend'

const Person = ({person, persons, setPersons, setMessage}) => {
    return (
        <>
       <p>{person.name}  {person.number}  <button onClick={() => {
        if (window.confirm(`Delete ${person.name}?`)) {
            Server.deleteData(person).then(() => {
                setPersons(persons.filter(contact => String(contact._id) != String(person._id)))
                setMessage([`${person.name} removed sucessfully`, 'green'])
                setTimeout(() => setMessage(["Hello"]), 3000)
            }).catch(() => {
                setMessage([`Server Error: ${person.name} has not been found`, 'red'])
            })
        } else {
            console.log("User cancelled request!")
        }
    }}>Delete</button></p>
        </>
    )
}

export default Person