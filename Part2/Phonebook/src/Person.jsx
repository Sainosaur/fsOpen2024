import Server from './Services/backend'

const Person = ({person}) => {
    return (
        <>
       <p>{person.name}  {person.number}  <button onClick={() => {
        window.confirm(`Delete ${person.name}?`) ?
        Server.deleteData(person) : console.log('User aborted request')
    }}>Delete</button></p>
        </>
    )
}

export default Person